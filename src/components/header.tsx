import { CircleArrowLeft } from 'lucide-react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="h-20 w-full flex items-center mb-8">
            <Link to='/' className="flex items-center gap-2">
                <CircleArrowLeft size={32} /> Voltar
            </Link>
        </header>
    );
};

export default Header;
