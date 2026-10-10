export type BandMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const bandMembers: BandMember[] = [
  {
    id: 1,
    name: "Ompa",
    role: "Vocals / Lead Guitar",
    bio: "Brings vocals and lead guitar to Kirap Pairap, with a passion for music that connects PNG culture, community and the next generation.",
    image: "/kirap-pairap/images/band/ompa.jpg",
  },
  {
    id: 2,
    name: "Alvin",
    role: "Keyboard Master / Vocals",
    bio: "Maintains the ambience of the band with his keyboard skills.",
    image: "/kirap-pairap/images/band/alvin.jpg",
  },
  {
    id: 3,
    name: "Bom",
    role: "Bass Vocalist / Panpipes",
    bio: "With the panpipes, Bom adds a unique flavor to Kirap Pairap's sound.",
    image: "/kirap-pairap/images/band/bom.jpg",
  },
  {
    id: 4,
    name: "Jack",
    role: "Banjo / Guitar",
    bio: "Prominent integration of traditional and modern musical elements which is clear through the banjo and guitar work.",
    image: "/kirap-pairap/images/band/jack.jpg",
  },
  {
    id: 5,
    name: "Dziewanna",
    role: "Lead Singer",
    bio: "A young and talented singer, Dziewanna brings a fresh voice to the band, helping to connect with the next generation.",
    image: "/kirap-pairap/images/band/dziewanna.jpg",
  },
  {
    id: 6,
    name: "Lisa",
    role: "Backup Vocalist",
    bio: "A dedicated member of Kirap Pairap, Lisa provides harmonies and support vocals that enhance the band's sound.",
    image: "/kirap-pairap/images/band/lisa.jpg",
  },
];