import { LinkButton } from "./components/LinkButton/LinkButton";

export default function Home() {
  return (
    <main className="py-5 flex gap-4">
      <LinkButton href={"/challenges/1"}>Challenge 1</LinkButton>
      <LinkButton href={"/challenges/2"}>Challenge 2</LinkButton>
      <LinkButton href={"/challenges/3"}>Challenge 3</LinkButton>
      <LinkButton href={"/challenges/4"}>Challenge 4</LinkButton>
    </main>
  );
}
