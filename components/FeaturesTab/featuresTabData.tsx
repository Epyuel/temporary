import { FeatureTab } from "@/types/featureTab";
import { StarBorder } from "@mui/icons-material";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Attendance Management",
    desc1: `No more manual tracking! Monitor your team's attendance data effortlessly. Manage overtime, account for holidays, 
    and even integrate with biometric systems. Our built-in approval process ensures everything runs like clockwork.`,
    lists:[
      ["Quick Attendance Logging", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />]
    ],
    desc2: `Efficiently record your attendance with oneHR. Just a tap to log your arrival times, making time-tracking a piece of cake. 
    Experience the ease of managing your work hours with precision.`,
    image: "/images/features/attendance-light.jpg",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[562/366]'
  },
  {
    id: "tabTwo",
    title: "Explore Your Dashboard!",
    desc1: `Dive into a vibrant display of employee attendance data where:`,
    lists:[
      ["Green signals a full day's presence", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Yellow denotes a half-day", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Red marks an absence", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
    ],
    desc2: `Effortlessly navigate through the color-coded interface to find the insights you need with just a glance!`,
    image: "/images/features/dashboard-light.png",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[562/366]'
  },
  {
    id: "tabThree",
    title: "Effortless Leave Management",
    desc1: `Leave management is now a walk in the park. Track and approve leave requests with ease, and access leave information directly. 
    What's more? The leave data is integrated into the attendance module for a holistic view.`,
    lists:[
      ["Total Leave Balance: Know how many days off you're entitled to.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Leaves Taken: Keep track of the days you've enjoyed away from work.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Remaining Leaves: Instantly view your leftover leave days for future planning.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />]
    ],
    desc2: `Unlock the power of simplicity with our intuitive leave tracker:`,
    image: "/images/features/leave-light.jpg",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[562/366]'
  },
  {
    id: "tabFour",
    title: "Payroll Management",
    desc1: `Say goodbye to payroll headaches. Generate employee payroll automatically and disburse payments in just a couple of clicks. 
    We've also got you covered with employee benefits management, including loans.`,
    lists:[
      ["Simplify Finances!", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Generate payslip.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
    ],
    desc2: ``,
    image: "/images/features/payroll-light.jpg",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[822/366]'
  },
  {
    id: "tabFive",
    title: "Performance Management",
    desc1: `Unlock your team's potential. Assess employee competency, set objectives using our unique framework that combines top-down and bottom-up approaches. 
    Keep track of performance scores and manage promotions`,
    lists:[
      ["Direct Access: Discover job postings with ease.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["User-Friendly Interface: A streamlined experience at your fingertips.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Organizational Insight: Stay updated on internal opportunities.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />]
    ],
    desc2: `With oneHR, you're always one step closer to your next professional milestone!`,
    image: "/images/features/performance-light.jpg",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[862/366]'
  },
  {
    id: "tabSix",
    title: "Job Opening Tracker",
    desc1: `simplify your hiring process. Manage hiring needs with our approval process, announce job vacancies, screen applicants with AI-powered verification & qualification, 
    and conduct interviews. Plus, we offer integration capabilities with Job Board platforms.`,
    lists:[
      ["Direct Access: Discover job postings with ease.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["User-Friendly Interface: A streamlined experience at your fingertips.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />],
      ["Organizational Insight: Stay updated on internal opportunities.", <StarBorder className="w-6 h-6 mr-2" style={{ color: "#fdcb4e" }} />]
    ],
    desc2: `With oneHR, you're always one step closer to your next professional milestone!`,
    image: "/images/features/talent-acquisition-light.jpg",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[562/666]'
  },
  {
    id: "tabSeven",
    title: "Training Engagement",
    desc1: `Manage training materials and target specific employee audiences. Our platform also offers quiz management and generates certifications.`,
    lists:[],
    desc2: ``,
    image: "/images/features/training-engagement-light.jpg",
    imageDark: "/images/features/features-dark-01.svg",
    aspect:'aspect-[562/366]'
  },
];

export default featuresTabData;
