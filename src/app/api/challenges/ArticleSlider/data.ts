import { Articles, User } from "./tyes";
import Bob from "#/assets/challenge/minions/avatar/bob.png";
import Carl from "#/assets/challenge/minions/avatar/carl.png";
import Dave from "#/assets/challenge/minions/avatar/dave.png";
import Darwin from "#/assets/challenge/minions/avatar/darwin.png";

import BobArticle from "#/assets/challenge/minions/bob.png";
import CarlArticle from "#/assets/challenge/minions/carl.png";
import DaveArticle from "#/assets/challenge/minions/dave.png";
import DarwinArticle from "#/assets/challenge/minions/darwin.png";

const MINIONS: User[] = [
  {
    id: "banana123",
    name: "Bob the Minion",
    avatar: Bob,
  },
  {
    id: "banana123",
    name: "Dave the Minion",
    avatar: Dave,
  },
  {
    id: "banana456",
    name: "Carl the Minion",
    avatar: Carl,
  },
  {
    id: "banana789",
    name: "Darwin the Minion",
    avatar: Darwin,
  },
];

export const ARTICLES: Articles[] = [
  {
    id: "article456",
    title: "Banana Fusion Reactor Unleashed!",
    frontmatter:
      "Our lab-coated Minions have cracked the banana code. Behold the ripest breakthrough: a banana fusion reactor that powers our lab lights and emits a delightful banana aroma.",
    publishDate: new Date(),
    image: BobArticle,
    user: MINIONS[0],
  },
  {
    id: "article789",
    title: "Quantum Banana Split: A Flavor Odyssey",
    frontmatter:
      "In our quantum lab, Minion Dave has split bananas into flavor superposition. Taste all banana flavors at once! Warning: May induce banana-induced giggles.",
    publishDate: new Date(),
    image: DaveArticle,
    user: MINIONS[1],
  },
  {
    id: "article101",
    title: "Anti-Gravity Banana Peel: Up, Up, and Away!",
    frontmatter:
      "Our Minion scientists have transformed ordinary banana peels into anti-gravity propulsion devices. Place them on the ground, and watch objects defy gravity! Carl accidentally floated to the ceiling during testing.",
    publishDate: new Date(),
    image: CarlArticle,
    user: MINIONS[2],
  },
  {
    id: "article202",
    title: "Teleporting Banana Teleporter: A Slippery Adventure",
    frontmatter:
      "Our latest invention: the Banana Teleporter! Unfortunately, it doesn't teleport us, but it did send a banana to a parallel universe. Now we have 'banana-ported' fruit salad from alternate dimensions. Tastes like adventure!",
    publishDate: new Date(),
    image: DarwinArticle,
    user: MINIONS[3],
  },
];
