import React from 'react';
import { Menu, Plus } from 'lucide-react';

interface HeaderProps {
  balance: number;
  onOpenDeposit: () => void;
  onOpenMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ balance, onOpenDeposit, onOpenMenu }) => {
  return (
    <header className="bg-[#141518] p-4 flex items-center justify-between border-b border-white/5 shadow-lg z-50">
      <button onClick={onOpenMenu} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
        <Menu size={24} className="text-gray-400" />
      </button>

      <div className="flex items-center gap-3">
        <div className="bg-[#1b1d20] px-4 py-2 rounded-lg border border-white/10">
          <div className="text-[8px] text-gray-500 uppercase font-bold">Balans</div>
          <div className="text-white font-black text-sm">{balance.toLocaleString()} UZS</div>
        </div>

        <button
          onClick={onOpenDeposit}
          className="bg-green-600 hover:bg-green-500 p-3 rounded-lg transition-all transform active:scale-95 shadow-lg"
        >
          <Plus size={20} className="text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
