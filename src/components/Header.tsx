import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="container mx-auto px-4">
      <div className="flex items-center justify-between h-[70px]">
        <Link
          to="/"
          className="text-brand-black font-interMedium hover:underline"
        >
          <p>ml</p>
        </Link>
        <nav>
          <ul className="list-none">
            <li className="inline-block text-brand-black font-interMedium ml-[10px] hover:underline">
              <Link to="/information">about me</Link>
            </li>
            <li className="inline-block text-brand-black font-interMedium ml-[10px] hover:underline">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
