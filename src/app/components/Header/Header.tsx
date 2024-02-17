import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between py-5 font-designer">
      <nav>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold text-black">
            1 0 0 days UI Challenge
          </h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
