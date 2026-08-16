import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-mono text-sm font-medium tracking-wider text-text-primary"
        >
          DAVID LAM
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-wider transition-colors ${isActive
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="../public/resume/davidlam_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            RESUME ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-mono text-sm text-text-primary md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-border px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className="font-mono text-sm uppercase tracking-wider text-text-secondary hover:text-accent"
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="/resume/resume.pdf"
              onClick={closeMenu}
              className="font-mono text-sm uppercase tracking-wider text-text-secondary hover:text-accent"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;