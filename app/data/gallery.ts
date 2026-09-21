export type GalleryItem = {
  id: number;
  type: "image" | "video";
  title: string;
  date: string;
  description: string;
  src: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    title: "The Beginning",
    date: "2026",
    description:
      "The early days of Kirap Pairap and the beginning of our journey.",
    src: "/images/practice/session-01.jpg",
    featured: true,
  },
  {
    id: 2,
    type: "image",
    title: "Practice Session",
    date: "2026",
    description:
      "Coming together, learning and developing our sound.",
    src: "/images/practice/session-02.jpg",
  },
  {
    id: 3,
    type: "image",
    title: "Making Music",
    date: "2026",
    description:
      "Building confidence, collaboration and connection through music.",
    src: "/images/practice/session-03.jpg",
  },
];