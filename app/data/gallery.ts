export type GalleryItem = {
  id: number;
  type: "image" | "video";
  category: "Practice" | "Community" | "Performance" | "Behind The Scenes";
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
    category: "Practice",
    title: "Finding Our Sound",
    date: "September 2026",
    description:
      "The early rehearsal sessions as Kirap Pairap begins developing its sound.",
    src: "",
    featured: true,
  },
  {
    id: 2,
    type: "image",
    category: "Community",
    title: "Our Community",
    date: "2026",
    description:
      "The people, culture and community surrounding the Kirap Pairap journey.",
    src: "",
  },
  {
    id: 3,
    type: "image",
    category: "Behind The Scenes",
    title: "Building Kirap Pairap",
    date: "2026",
    description:
      "The moments behind the music as the group grows together.",
    src: "",
  },
];