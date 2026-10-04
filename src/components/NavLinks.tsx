import Link from 'next/link';

type Category = {
  id?: string;
  slug?: string;
  title: string;
  scrapable?: boolean;
};

const linkClass =
  'border-b-2 border-transparent pb-1 text-base font-medium text-gray-800 transition hover:border-red-700 hover:text-red-700';

const NavLinks = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/categories');
  const data = await res.json();
  const navs: Category[] = data.data;
  const filterNavs = navs.filter(n => n.scrapable);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <ul className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-3 whitespace-nowrap md:justify-center md:gap-8">
        <li>
          <Link href="/" className={linkClass}>
            হোম
          </Link>
        </li>

        {filterNavs.map(item => (
          <li key={item.title}>
            <Link href={`/category/${item.title}`} className={linkClass}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
