import { LinkButton } from "../components/LinkButton/LinkButton";
import { TOTAL_CHALLENGES } from "../constants/app.constants";

function ChallengesPage() {
  return (
    <div className="flex gap-6 flex-wrap">
      {[...Array(TOTAL_CHALLENGES).fill(0)].map((_, i) => (
        <LinkButton key={i} href={`/challenges/${i + 1}`}>
          Challenge {i + 1}
        </LinkButton>
      ))}
    </div>
  );
}

export default ChallengesPage;
