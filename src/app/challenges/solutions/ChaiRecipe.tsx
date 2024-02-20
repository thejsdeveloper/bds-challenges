"use client";
import chai from "#/assets/challenge/chai.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiStopwatch } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import {
  MdOutlineStar as FilledStar,
  MdStarOutline as UnFilledStar,
} from "react-icons/md";
import { pageVisitVariant } from "../animate";

const SECONDARY_COLOR = "#FFBB65";
export function ChaiRecipe() {
  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="bg-white grid grid-col-1 md:grid-cols-2 md:my-4 md:rounded-lg flex-1 overflow-y-scroll md:overflow-hidden"
    >
      {/**image */}
      <div className="relative">
        <h1 className="hidden md:block z-50 absolute bottom-10 left-0 | py-6 px-3 | text-white text-xl font-semibold bg-chai-dark/90 uppercase">
          Ginger Cardamom Chai (Tea)
        </h1>
        <Image
          src={chai}
          alt="India tea"
          objectFit="cover"
          className="md:hidden w-100"
        />
        <Image
          src={chai}
          alt="India tea"
          fill
          objectFit="cover"
          className="hidden md:block"
        />
      </div>
      {/** Recipe Section */}
      <div className="px-4 md:px-8 py-8 md:py-16 relative">
        {/** Recipe Title */}
        <div className="relative md:absolute md:-left-1/3 | bg-white | flex flex-col gap-4 p-0 md:p-8 ">
          <div className="flex items-center gap-2">
            <FilledStar fill={SECONDARY_COLOR} size={24} />
            <FilledStar fill={SECONDARY_COLOR} size={24} />
            <FilledStar fill={SECONDARY_COLOR} size={24} />
            <FilledStar fill={SECONDARY_COLOR} size={24} />
            <UnFilledStar size={24} color={SECONDARY_COLOR} />
            <p className="font-black/90 text-sm">(127)</p>
          </div>
          <h1 className="text-2xl md:text-5xl text-chai-dark font-bold">
            Ginger Cardamom Chai (Tea)
          </h1>
        </div>
        {/** Recipe Details */}
        <div className="mt-10 md:mt-56 lg:mt-44 ">
          {/** Recipe time */}
          <div className="flex gap-2 md:gap-4 | text-[12px] font-bold   text-black/70">
            <div className="flex items-center gap-2">
              <CiStopwatch className="text-3xl md:text-5xl" />
              <div>
                <p className="uppercase tracking-tighter">Total Time</p>
                <span className="text-chai">10 minutes</span>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <LiaAwardSolid className="text-3xl md:text-5xl" />
              <div>
                <p className="uppercase tracking-tighter">Levels</p>
                <span className="text-chai">10 minutes</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoWalletOutline className="text-3xl md:text-5xl" />
              <div>
                <p className="uppercase tracking-tighter">Budget</p>
                <span className="text-chai">Under ₹ 50 </span>
              </div>
            </div>
          </div>
          <p className="mt-4 | text-base text-black/90">
            Ginger Cardamom Chai is a comforting Indian tea flavored with ginger
            and green cardamom. It’s aromatic, soothing, and perfect for any
            time of the day.
          </p>
          {/** Ingredients */}
          <div className="mt-6 ">
            <h2 className="my-4 | text-lg  uppercase font-bold  text-chai-dark">
              Ingredients
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" className="chai-checkbox" />
                <label className="font-black/90">1 cup water</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="chai-checkbox" />
                <label className="font-black/90">1/3 cup milk</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="chai-checkbox" />
                <label className="font-black/90">
                  1 teaspoon black loose tea leaves
                </label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="chai-checkbox" />
                <label className="font-black/90">
                  1/4 inch ginger (grated)
                </label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="chai-checkbox" />
                <label className="font-black/90">
                  2 green cardamom pods (seeds extracted and crushed)
                </label>
              </div>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" className="chai-checkbox" />
              <label className="font-black/90">Sugar (to taste)</label>
            </div>
          </div>
          {/** Directions */}
          <div className="mt-6">
            <h2 className="my-4 | text-lg  uppercase font-bold  text-chai-dark">
              Ingredients
            </h2>
            <ol className="list-decimal flex flex-col gap-2 pl-5">
              <li className="font-black/90">
                Peel the cardamom pods and take out the seeds. Crush the seeds
                using a mortar and pestle. Set aside.
              </li>
              <li className="font-black/90">
                Heat water in a pan over medium flame.
              </li>
              <li className="font-black/90">
                Add the grated ginger and crushed cardamom seeds to the hot
                water.
              </li>
              <li className="font-black/90">Pour in the milk and add sugar.</li>
              <li className="font-black/90">
                Let the milk and spices come to a boil.
              </li>
              <li className="font-black/90">
                Add the black tea leaves and simmer for a minute or two. Simmer
                longer for a stronger chai.
              </li>
              <li className="font-black/90">
                Strain the chai into a cup using a strainer.
              </li>
              <li className="font-black/90">
                Serve hot with cookies or your favorite snack.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
