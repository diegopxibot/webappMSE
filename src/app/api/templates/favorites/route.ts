import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }

    const { templateId, action } = await request.json();
    if (!templateId || !action) {
      return NextResponse.json(
        { error: 'Dados inválidos' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const userFavorites = db.collection('userFavorites');

    if (action === 'add') {
      await userFavorites.updateOne(
        { userId: session.user.id },
        { $addToSet: { templateIds: templateId } },
        { upsert: true }
      );
    } else if (action === 'remove') {
      await userFavorites.updateOne(
        { userId: session.user.id },
        { $pull: { templateIds: templateId } }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao gerenciar favoritos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }

    const { db } = await connectToDatabase();
    const userFavorites = await db.collection('userFavorites')
      .findOne({ userId: session.user.id });

    return NextResponse.json({
      favorites: userFavorites?.templateIds || []
    });
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 