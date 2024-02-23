import { generateRange } from "@/app/utils/range";
import { IconBaseProps } from "react-icons";
import { MdOutlineStar, MdStarOutline } from "react-icons/md";

const FILL = "#FFBB65";

export const Rating = ({
  rating,
  totalRating = 5,
  ...iconProps
}: {
  rating: number;
  totalRating?: number;
} & IconBaseProps) => {
  const filledStars = generateRange(1, rating);
  const UnFilledStar = generateRange(rating + 1, totalRating);

  return (
    <>
      {filledStars.map((star) => (
        <MdOutlineStar key={`filled-${star}`} fill={FILL} {...iconProps} />
      ))}

      {UnFilledStar.map((star) => (
        <MdStarOutline key={`filled-${star}`} fill={FILL} {...iconProps} />
      ))}
    </>
  );
};
