import Link from 'next/link';

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ToolCard({ icon, title, description, href }: ToolCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full cursor-pointer rounded-xl bg-[#0A0B2E]/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-[#0A0B2E]/70 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
        <div className="flex flex-col gap-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#00FFFF]">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          <div className="mt-auto">
            <span className="inline-flex items-center text-sm font-medium text-[#00FFFF] group-hover:underline">
              Acessar
              <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 