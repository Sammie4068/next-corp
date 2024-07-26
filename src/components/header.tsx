import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full absolute z-10 flex items-center justify-between px-10 py-5">
      <Link href="/" className="text-3xl">Logo</Link>
      
      <ul className="flex justify-center items-center gap-3">
        <li>
          <Link href={"/performance"}>Performanace</Link>
        </li>
        <li>
          <Link href={"/reliability"}>Reliability</Link>
        </li>
        <li>
          <Link href={"/scale"}>Scale</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
