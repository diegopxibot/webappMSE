import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ToolCard({
  title,
  description,
  icon
}: ToolCardProps) {
  return (
    <div className="group h-full bg-dark-light rounded-xl p-6 hover:bg-dark-light/80 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            {title}
          </h2>
          <p className="text-sm text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 