import Link, { LinkProps } from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

export default function Home() {
  return (
    <>
      <header className="sticky top-0  flex items-center px-16 py-4 border-b-gray-50 shadow-lg backdrop-blur-md">
        <h1 className="text-2xl font-bold text-white">
          BigDevSoon | Challenges
        </h1>
      </header>
      <main className="px-16 py-5 flex gap-4">
        <LinkButton href={"/challenges/1"}>Challenge 1</LinkButton>
        <LinkButton href={"/challenges/2"}>Challenge 2</LinkButton>
        <LinkButton href={"/challenges/3"}>Challenge 3</LinkButton>
      </main>
    </>
  );
}

type LinkButtonProps = PropsWithChildren & LinkProps;

const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="border p-3 rounded-md text-white text-md font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      {children}
    </Link>
  );
};
