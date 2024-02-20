import { LinkButton } from "../components/LinkButton/LinkButton";
import { challenges } from "./challenges";

function ChallengesPage() {
  return (
    <div className="flex gap-6 flex-wrap">
      {challenges.map(({ day, title }) => (
        <LinkButton key={day} href={`/challenges/${day}`}>
          <span className="text-rose-500">#{day} </span>
          {title}
        </LinkButton>
      ))}
    </div>
  );
}

export default ChallengesPage;
