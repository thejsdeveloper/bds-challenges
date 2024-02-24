import { Avatar, Sizes } from "../Avatar/Avatar";

type AvatarGroupProps = {
  size: Sizes;
  images: {
    src: string;
    alt: string;
  }[];
};

export const AvatarGroup = ({ size, images }: AvatarGroupProps) => {
  const LEFT = 20;
  const actionLeft = LEFT * images.length;

  return (
    <div className="flex relative h-8">
      {images.map((avatar, i) => {
        const left = LEFT * i;
        return (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${left}px`,
            }}
          >
            <Avatar size={size} {...avatar} />
          </div>
        );
      })}

      <button
        className="w-8 h-8 -z-10 rounded-full border-dotted border-gray-500 text-black border-2 absolute top-0"
        style={{
          left: `${actionLeft}px`,
        }}
      >
        +
      </button>
    </div>
  );
};
