const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/95 border-b border-slate-800 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="text-lg font-semibold text-white">Navbar</div>
            </nav>
            <h1 className="text-white font-bold text-xl">
            Akash.dev
        </h1>
        <ul className="flex gap-8 text-slate-300">
            <li><a href="#about" className="hover:text-white">Home</a></li>
            <li><a href="#skills" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
        
        </ul>
        </header>
        
    );
};
export default Navbar;
    