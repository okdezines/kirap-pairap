export type PracticeSession = {
  id: number;
  date: string;
  location: string;
  title: string;
  summary: string;
  workedOn: string[];
  learned: string;
  images: string[];
  video?: string;
};

export const practiceSessions: PracticeSession[] = [
  {
    id: 1,
    date: "September 2026",
    location: "Wellington, New Zealand",
    title: "Finding Our Sound",
    summary:
      "A chapter in the Kirap Pairap journey as we develop our sound, strengthen our connection as a group and bring our musical ideas together.",
    workedOn: [
      "Song arrangements",
      "Vocal harmonies",
      "Guitar and keyboard",
      "Panpipe integration",
    ],
    learned:
      "Every practice helps us understand how our individual sounds can come together as one Kirap Pairap sound.",
    images: [],
  },
];