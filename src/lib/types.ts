export type ExperiencePosition = {
  title: string;
  year: string;
  description: string;
  skills: string[];
  partTime?: boolean;
};

export type Experience = {
  company: string;
  positions: ExperiencePosition[];
};

export type Education = {
  title: string;
  year: string;
  location: string;
};
