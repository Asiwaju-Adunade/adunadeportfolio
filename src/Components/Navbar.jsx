import { useState } from "react";

function Navbar() {
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Skills", href: "/Skills" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact", href: "/Contact" },
  ];
  
    const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex gap-10 bg-gray-600 text-black my-5">
        {/* HAMBURGER MENU */}
        <button
          className="md:hidden text-3xl mx-5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
     </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-center gap-10 text-black mx-auto my-7 ">
            {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
                 className="px-4 py-2 rounded w-20 bg-pink-400 hover:bg-white cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>


        {/* MOBILE VIEW */}
        {open && (
          <div className="md:hidden flex flex-col text-black gap-4 mx-10 my-7">
            {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
                 className="px-4 py-2 rounded w-20 bg-pink-400 hover:bg-white cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          </div>
        )}
    </>
  );
}
export default Navbar;
