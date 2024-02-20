import { Metadata } from "next";
import { challenges } from "../challenges";

type Props = {
  params: {
    day: number;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Day ${params.day} of 100`,
    description: `My solution for ${
      challenges[params.day - 1].title
    } challenge`,
  };
}

export default function Challenge({ params }: Props) {
  const Solution = challenges[params.day - 1].solution;
  return <Solution />;
}
