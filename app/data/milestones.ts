export type Milestone = {
  id: number;
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "future";
};

export const milestones: Milestone[] = [
  {
    id: 1,
    date: "The Beginning",
    title: "The Idea",
    description:
      "Six members came together with a shared vision to create a Papua New Guinean music group in Wellington and help keep our cultural heritage alive through music.",
    status: "completed",
  },
  {
    id: 2,
    date: "Our First Step",
    title: "Fundraising Begins",
    description:
      "Our journey to build the band begins. With the support of our community, we have raised our first $1,000 toward instruments and equipment.",
    status: "current",
  },
  {
    id: 3,
    date: "Next Milestone",
    title: "Build the Band",
    description:
      "Our fundraising will help us purchase a keyboard, bass guitar, amplifier, mixer, drum set and microphones.",
    status: "future",
  },
  {
    id: 4,
    date: "Coming Soon",
    title: "Rehearsals",
    description:
      "With our equipment in place, Kirap Pairap will continue developing our sound through regular rehearsals, collaboration and practice.",
    status: "future",
  },
  {
    id: 5,
    date: "Our Goal",
    title: "Perform",
    description:
      "Take Kirap Pairap from the rehearsal room to the stage and share Papua New Guinean music, culture and community with a wider audience.",
    status: "future",
  },
];