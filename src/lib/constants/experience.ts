import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "ViaTrucker | Belgrade, Serbia",
    positions: [
      {
        title: "IT Manager & Lead Developer",
        year: "September 2021 - Present",
        description: `
- ♦ Lead a small developer team and act as primary decision-maker on technical matters
- ♦ Plan and prioritize project development cycles based on management and client needs
- ♦ Develop and maintain a fleet management and analytics platform using Laravel and Vue.js
- ♦ Integrate external APIs including GPS tracking (Navixy, Wialon) and Google Maps
- ♦ Coordinate deployment, optimization, and performance improvements
        `,
        skills: [
          "Vue.js",
          "Laravel",
          "PHP",
          "MySQL",
          "Git",
          "CI/CD",
          "RESTful APIs",
        ],
      },
    ],
  },

  {
    company: "PinnBet | Belgrade, Serbia",
    positions: [
      {
        title: "Operator",
        year: "May 2020 - May 2021",
        description: ``,
        skills: [],
      },
    ],
  },

  {
    company: "Part-Time Jobs",
    positions: [
      {
        title: "Cinema Attendant at Tuckwood Cinema",
        year: "",
        description: ``,
        skills: [],
        partTime: true,
      },
      {
        title: "Warehouse Clerk at Mercis Dekor",
        year: "",
        description: ``,
        skills: [],
        partTime: true,
      },
      {
        title: 'Archive Assistant at "Carinska ispostava Beograd"',
        year: "",
        description: ``,
        skills: [],
        partTime: true,
      },
    ],
  },
];
