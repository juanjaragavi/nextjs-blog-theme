import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="sticky top-0 flex pt-3 md:first:rounded-t-lg md:last:rounded-b-lg first:rounded-b-xl last:rounded-b-xl backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-10 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
      <div className="ml-10 w-12 h-12 rounded-full block mr-4 mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="mt-[0.3em] text-2xl dark:text-white">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
