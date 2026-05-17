import { Link } from 'react-router-dom';

export const Logo = ({ className = "" }: { className?: string }) => (
    <Link to="/" className={`flex items-center gap-2 font-bold text-xl tracking-tighter ${className}`}>
        <div className="relative flex items-center justify-center w-10 h-10 bg-troperfly-graphite rounded-lg overflow-hidden group">
            <img
                src="/logo.png"
                alt="troperfly logo"
                className="w-full h-full object-cover z-10 transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
            />
        </div>
        <span className="font-display lowercase text-troperfly-graphite">
      troperfly<span className="text-troperfly-blue">.ai</span>
    </span>
    </Link>
);