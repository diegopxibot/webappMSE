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
      <div className="group relative h-full cursor-pointer rounded-xl bg-white/5 border border-cyan-500/20 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        <div className="relative flex flex-col gap-4">
          {/* Icon with glowing effect */}
          <div className="relative">
            <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]">
              {icon}
            </span>
            <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
              {description}
            </p>
          </div>

          <div className="mt-auto pt-2">
            <span className="inline-flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              Acessar
              <svg 
                className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 