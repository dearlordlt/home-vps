import Link from 'next/link';

const TopNav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/" className="hover:text-gray-300">
            Erah
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          {/* Add more navigation links here */}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;