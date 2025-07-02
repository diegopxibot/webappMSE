import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET() {
  const db = await connectToDatabase()
  const categories = await db.collection('categories').find().toArray()
  return NextResponse.json(categories)
} 