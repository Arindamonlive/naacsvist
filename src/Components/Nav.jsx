import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 ng-slate-900 transition">
      <ul className="text-center text-xl p-20 bg-blue-600">
        <Link spy={true} smooth={true} to="/" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">IQAC</li>
        </Link>
        <Link spy={true} smooth={true} to="Nc1" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">NAAC Cycle 1</li>
        </Link>
        <Link spy={true} smooth={true} to="Nc2" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">NAAC Cycle 2</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="bg-orange-600 h-12 flex justify-between items-center z-50 text-white lg:py-1 px-20">
        <div className="flex items-center">
          <span className="text-3xl font-bold">SVIST</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[14px]">
              <Link spy={true} smooth={true} to="/" onClick={closeMenu}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">IQAC</li>
              </Link>
              <Link spy={true} smooth={true} to="Nc1" onClick={closeMenu}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">NAAC Cycle 1</li>
              </Link>
              <Link spy={true} smooth={true} to="Nc2" onClick={closeMenu}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">NAAC Cycle 2</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
