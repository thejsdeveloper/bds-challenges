import Map from "@/app/components/Map/Map";
import React, { ComponentProps, ElementType } from "react";

function Challenge4() {
  return (
    <div className="h-[80%] mt-10 w-full flex justify-center">
      <div className="py-32 px-20 | rounded-xl relative overflow-hidden | bg-gradient-to-t from-[#FF007A]/60 from-10%">
        <div>
          <div className="absolute left-0 bottom-0 w-2/3">
            <Map />
          </div>
          <div className="bg-gradient-to-b from-indigo-600  from-5%  absolute inset-0" />
        </div>
        <div className="flex gap-6 h-full isolate">
          <div>
            <h1 className="text-white text-3xl font-semibold ">Contact Us</h1>
            <p className="text-white  text-base mt-2 w-[40ch]">
              Get in touch with us! Whether you have questions, feedback, or
              just want to say hello, we are here for you
            </p>
          </div>
          <div className="flex justify-center">
            <form className="flex flex-col gap-4 | p-8 max-w-[80%]  | bg-white rounded-xl ">
              <p className="text-base text-black/80">Send us a Message</p>
              <TextInput type="text" placeholder="Name" name="name" />
              <TextInput type="email" placeholder="Email" name="email" />
              <TextInput type="phone" placeholder="Phone" name="phone" />
              <p className="text-sm text-black/80">
                Preferred contact method of communication
              </p>
              <div className="flex gap-4 text-sm text-black/80">
                <label
                  htmlFor="preference-email"
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    id="preference-email"
                    name="communication"
                    value="email"
                    checked
                  />
                  Email
                </label>
                <label
                  htmlFor="preference-phone"
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    id="preference-phone"
                    name="communication"
                    value="phone"
                  />
                  Phone
                </label>
              </div>
              <textarea
                placeholder="Message"
                name="message"
                rows={4}
                cols={50}
                className="border p-1 rounded-xl resize-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#FF007A] py-1 text-white mt-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge4;

export const TextInput = (props: ComponentProps<"input">) => {
  return <input {...props} className="border p-1 rounded-xl" />;
};
