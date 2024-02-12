import avatarUrl from "#/assets/avatar.jpeg";
import Image from "next/image";
import { FaDribbble, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function ProfileCard() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="rounded-3xl bg-white max-w-sm overflow-hidden">
        <div className="flex justify-center p-4 pb-12 bg-wave bg-no-repeat">
          <Image
            src={avatarUrl}
            alt="profile image"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center p-4 text-center gap-6">
          <div>
            <h1 className="text-lg font-bold">Johnny Rogers</h1>
            <p className="text-sm text-slate-500">@johnnyrogers</p>
          </div>
          <div className="flex justify-center gap-5">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaLinkedin />
            </button>
            <button>
              <FaXTwitter />
            </button>
            <button>
              <RiInstagramFill />
            </button>
            <button>
              <FaDribbble />
            </button>
          </div>
          <p className="text-base text-center">
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and copturing portraits throgh
            photography
          </p>
        </div>
        <div className="flex flex-wrap justify-center p-4 gap-4">
          <button className="rounded-full px-12 py-2 bg-pink-500 text-white text-sm">
            Follow
          </button>
          <button className="rounded-full px-12 py-2 text-slate-500 border text-sm">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
