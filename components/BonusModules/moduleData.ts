import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const moduleData: Testimonial[] = [
  {
    id: 1,
    name: "Employee Engagement",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Foster a vibrant workplace. Our platform empowers employees, giving them a platform to express themselves through suggestions, issue escalations, surveys, announcements, and more.",
  },
  {
    id: 2,
    name: "Career Development",
    designation: "Founter @democompany",
    image: image2,
    content:
      "Nurture your team's growth. Facilitate employee transfers, plan successions, and manage promotions with our career development tools.",
  },
  {
    id: 3,
    name: "Exit Management",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Ensure a smooth farewell. Our platform provides a clearance checklist and facilitates exit interviews for outgoing employees.",
  },
  {
    id: 4,
    name: "Self-Service Documents",
    designation: "Founter @democompany",
    image: image2,
    content:
      "Your personal HR document center. Access all employee documents, including pay slips, NDAs, contracts, and more, in one place.",
  },
];
