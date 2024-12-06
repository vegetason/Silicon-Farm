import  { useState } from 'react';
import { X, Menu } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-6 text-sm">
      {[
        { href: "#Home", label: "Home" },
        { href: "#Services", label: "Services" },
        { href: "#Products", label: "Products" },
        { href: "#Testimonies", label: "Testimonies" },
      ].map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-gray-700 transition hover:text-teal-600 hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a 
            href="#" 
            className="block text-teal-600 flex items-center gap-[20px]"
          >
            <span className="sr-only">Home</span>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 119 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 sm:w-[119px] h-auto"
            >
              <path
                d="M85.5 29.5C85.5 45.0387 73.5627 57.5 59 57.5C44.4373 57.5 32.5 45.0387 32.5 29.5C32.5 13.9613 44.4373 1.5 59 1.5C73.5627 1.5 85.5 13.9613 85.5 29.5Z"
                fill="white"
                stroke="#A6AE73"
                strokeWidth="3"
              />
              <path
                d="M72.376 16.12C72.824 16.0133 73.1547 16.0133 73.368 16.12C73.6453 16.248 73.688 16.5253 73.496 16.952C73.1333 17.8053 72.3333 18.5307 71.096 19.128C70.6907 19.32 70.296 19.4693 69.912 19.576C69.3573 19.704 68.28 19.7787 66.68 19.8H65.784H62.744L61.016 26.616L59.192 33.944C58.8293 35.2027 58.4133 36.3867 57.944 37.496C57.5173 38.5413 57.24 39.192 57.112 39.448C56.7067 40.088 56.0133 40.6 55.032 40.984C54.8827 41.0267 54.744 41.0693 54.616 41.112C54.1467 41.2187 53.816 41.2187 53.624 41.112C53.4533 41.0267 53.368 40.888 53.368 40.696C53.3893 40.632 53.5067 40.344 53.72 39.832C54.4667 38.168 55.0427 36.5573 55.448 35C55.5973 34.552 56.2267 32.0347 57.336 27.448C58.488 22.8613 59.1067 20.472 59.192 20.28C59.2133 20.1733 59.288 20.0667 59.416 19.96L59.544 19.8H56.376C54.2427 19.8213 53.1227 19.8427 53.016 19.864C52.7813 19.9493 52.5787 20.088 52.408 20.28C52.1093 20.7067 51.96 21.1653 51.96 21.656C51.96 21.784 51.9173 21.9333 51.832 22.104C51.7893 22.2107 51.6507 22.4027 51.416 22.68C50.904 23.1707 50.2853 23.544 49.56 23.8C49.3893 23.864 49.1547 23.9067 48.856 23.928C48.5787 23.928 48.408 23.9067 48.344 23.864C48.1307 23.7573 48.056 23.4373 48.12 22.904C48.3333 21.5173 49.2507 20.2373 50.872 19.064C51.3413 18.7227 51.8533 18.4133 52.408 18.136C53.368 17.6453 54.3387 17.336 55.32 17.208C55.5547 17.1653 58.1467 17.144 63.096 17.144H70.456L70.744 16.952C71.2133 16.5893 71.7573 16.312 72.376 16.12Z"
                fill="#5E6C24"
              />
              <line
                x1="83"
                y1="43.5"
                x2="111"
                y2="43.5"
                stroke="#A6AE73"
                strokeWidth="3"
              />
              <path d="M7 45H35" stroke="#A6AE73" strokeWidth="3" />
              <path d="M7 14H35" stroke="#A6AE73" strokeWidth="3" />
              <path d="M83 14H111" stroke="#A6AE73" strokeWidth="3" />
              <path d="M0 29H31" stroke="#5E6C24" strokeWidth="3" />
              <path
                d="M87 28.5586L118 27.5586"
                stroke="#5E6C24"
                strokeWidth="3"
              />
            </svg>
            <h1 className="text-sm sm:text-base">THETECKERS</h1>
          </a>

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#Contact"
              className="hidden sm:block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            >
              Contact
            </a>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="h-full flex flex-col pt-16">
              <div className="px-4 pt-4">
                <NavLinks />
                <div className="mt-6 space-y-4">
                  <a
                    href="#"
                    className="block w-full rounded-md bg-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-teal-700"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;