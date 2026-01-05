import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center overflow-hidden bg-slate-800/70 px-4 py-2 backdrop-blur-sm sm:h-16">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6">
        <Link to="/">
          <span className="block cursor-pointer text-3xl font-medium tracking-tight transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:text-4xl md:text-4xl">
            BloxFruitsCalc
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
