import { adjectives, nouns, verbs } from "../data/data";

export const shake = () => {
  const insult = [
    "thou",
    verbs[Math.floor(Math.random() * verbs.length)],
    adjectives[Math.floor(Math.random() * verbs.length)],
    nouns[Math.floor(Math.random() * verbs.length)],
  ].join(" ");

  return insult;
};
