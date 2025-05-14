export interface DataProps {
  name: string;
  abbreviation: string;
  type: string;
  founded: string | null;
  website: string | null;
  address: string | null;
  email: string | null;
  social_media: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  } | null;
  phones: string[];
  image: string | null;
  latitude: number | null;
  longitude: number | null;
  ranking: number | null;
  address: string | null;
  description: string | null;
  abbreviation: string | null;
  awards: {
    title: string;
    year: number;
    organization: string;
  }[];
  management: {
    name: string;
    position: string;
    email: string;
  }[];
  createdAt: Date;
  updatedAt?: Date | null;
}
