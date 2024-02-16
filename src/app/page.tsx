import { LinkButton } from "./components/LinkButton/LinkButton";

export default function Home() {
  return (
    <main className="py-5 flex gap-4">
      {[...Array(5).fill(0)].map((_, i) => (
        <LinkButton key={i} href={`/challenges/${i + 1}`}>
          Challenge {i + 1}
        </LinkButton>
      ))}
    </main>
  );
}
