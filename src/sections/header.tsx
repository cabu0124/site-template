import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <nav className="flex justify-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;