import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 font-bold text-xl tracking-tighter ${className}`}>
    <div className="relative flex items-center justify-center w-10 h-10 bg-troperfly-graphite rounded-lg overflow-hidden group">
      <div className="absolute inset-0 bg-troperfly-blue opacity-20 group-hover:opacity-30 transition-opacity" />
      <Truck size={22} className="text-troperfly-blue z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-troperfly-emerald rounded-bl-sm" />
    </div>
    <span className="font-display lowercase text-troperfly-graphite">troperfly<span className="text-troperfly-blue">.ai</span></span>
  </Link>
);
