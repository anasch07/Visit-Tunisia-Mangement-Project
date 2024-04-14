import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex top-2 flex-row items-center justify-center text-[20px] gap-x-8 w-full pb-2 pt-8">
      <Link className="font-bold text-xl" href="/">
        Home
      </Link>
      <Link className="font-bold text-xl" href="/tours">
        Tours
      </Link>
      <Link className="font-bold text-xl" href="#">
        Our Team
      </Link>
    </nav>
  );
}
