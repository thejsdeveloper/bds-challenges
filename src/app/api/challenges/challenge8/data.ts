import { EventInfo } from "./event";

export const EVENTS_DATA: Record<"events", EventInfo[]> = {
  events: [
    {
      id: 1,
      date: "Today",
      name: "Swiftogeddon - The Taylor Swift Club Night",
      time: "21:00",
      description: `Swiftogeddon is a night dedicated to worshipping at the altar of Taylor Swift: non-stop Swifty all night: deep cuts, extended mixes, fan favourites... Swiftogeddon is a night dedicated to worshipping at the altar of Taylor Swift: non-stop Swifty all night: deep cuts, extended mixes, fan favourites...`,
      ticketsSoldOut: false,
    },
    {
      id: 2,
      date: "17 December",
      name: "Lana Del Rave",
      time: "22:00",
      description:
        "Launching the first ever 'Lana Del Rave' at Heaven Nightclub. Join us for a night devoted to the Queen of Alternative as well as favorites from...",
      ticketsSoldOut: true,
    },
    {
      id: 3,
      date: "10 December",
      name: "MASSAOKE: XMAS LIVE at the Electric Ballroom",
      time: "18:30",
      description:
        "Featuring all your favorite festive hits from WHAM, SLADE, MARIAH, WIZZARD, THE POGUES and many more - as well as hairbrush anthems...",
      ticketsSoldOut: false,
    },
    {
      id: 4,
      date: "20 December",
      name: "Eleni Tsaligopoulou Full-band",
      time: "19:00",
      description:
        "Eleni Tsaligopoulou is one of the most popular and beloved Greek singers with a wide range of repertoire and timeless hits. During her 30 year...",
      ticketsSoldOut: false,
    },
  ],
};
