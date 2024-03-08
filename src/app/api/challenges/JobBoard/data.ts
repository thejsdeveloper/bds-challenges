import { IconType } from "react-icons";
import { BsAmazon } from "react-icons/bs";
import { FaApple, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiNetflixFill } from "react-icons/ri";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export type JobLocation = {
  id: number;
  country: string;
  city: string;
};

export type Job = {
  id: number;
  title: string;
  company: string;
  logo: IconType;
  skills: string[];
  salary: string;
  postingDate: Date;
  description: string;
  numOfApplicants: number;
  jobLocation: JobLocation;
};

let jobs: Job[] = [];
let id = 1;
let countries = ["India", "USA", "Canada", "Australia", "Germany", "Singapore"];
let cities: { [key: string]: string[] } = {
  India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
  Germany: ["Berlin", "Hamburg", "Munich"],
  Singapore: ["Singapore"],
};
let titles = ["Frontend Developer", "Backend Developer", "DevOps Engineer"];
let techStacks = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Angular"],
  "Backend Developer": ["Node.js", "Python", "Java", "C#", ".NET"],
  "DevOps Engineer": ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
};
let companies = [
  "Google",
  "Microsoft",
  "Netflix",
  "Amazon",
  "Facebook",
  "Apple",
];
let descriptions = {
  Google:
    "Google is looking for a talented and motivated individual to join our team. The ideal candidate will have a passion for technology and a desire to work in a fast-paced, innovative environment.",
  Microsoft:
    "Microsoft is seeking a highly skilled professional for our development team. We value teamwork, innovation, and dedication to quality.",
  Netflix:
    "Netflix offers a challenging and exciting work environment for tech professionals. We are committed to fostering a culture of creativity and innovation.",
  Amazon:
    "Amazon is expanding its tech team and is looking for experienced individuals. We offer competitive compensation and a dynamic work environment.",
  Facebook:
    "Facebook is seeking tech professionals who are passionate about creating impact. We believe in empowering our employees to make a difference.",
  Apple:
    "Apple offers a unique opportunity for tech professionals to work on innovative projects. We are dedicated to creating products that change the world.",
};

let logos: Record<string, IconType> = {
  Google: FcGoogle,
  Microsoft: TfiMicrosoftAlt,
  Netflix: RiNetflixFill,
  Amazon: BsAmazon,
  Facebook: FaFacebookF,
  Apple: FaApple,
};

for (let country of countries) {
  for (let title of titles) {
    for (let i = 0; i < companies.length; i++) {
      let city =
        cities[country][Math.floor(Math.random() * cities[country].length)];
      let job: Job = {
        id: id++,
        title: title,
        company: companies[i],
        logo: logos[companies[i]],
        // @ts-ignore
        skills: techStacks[title],
        salary: "$" + id * 1000 + "/month",
        postingDate: new Date(),
        description:
          // @ts-ignore
          descriptions[companies[i]] +
          ` We are currently hiring for the role of ${title}.`,
        numOfApplicants: Math.floor(Math.random() * 1000),
        jobLocation: {
          id: id,
          country: country,
          city: city,
        },
      };
      jobs.push(job);
    }
  }
}

export { jobs as JOBS };
