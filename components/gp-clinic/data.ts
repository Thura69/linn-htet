//flow diagram
import GROUP from "@/public/images/gp-clinic/Frame 34581.png";

//wireframe
import WIREFRAMEIPAD from '@/public/images/gp-clinic/iPad Pro 12 1.png';

//Height
import UIDESIGN from '@/public/images/gp-clinic/Frame 34582.png';

//projectsummary
import PROJECTSUMMARYIMG from '@/public/images/gp-clinic/4 63.png';

export const PROJECTCATEGORYDATA = [
  {
    id: 1,
    title: "Where",
    data: "Singapore",
  },
  {
    id: 2,
    title: "What",
    data: "iOS Mobile App",
  },
  {
    id: 3,
    title: "Why",
    data: "Employment Application Project",
  },
  {
    id: 4,
    title: "Role",
    data: "UX/UI Designer",
  },
  {
    id: 5,
    title: "Category",
    data: "small private General Practitioner (GP) clinics",
  },
  {
    id: 6,
    title: "When",
    data: "Apr 16 - Apr 22 [2024]",
  },
];

export const PROJECTBACKGROUND = [
  {
    title: "Project Background and Goal",
    data: [
      "The main screen of the tablet app, described in the appendix, helps clinic staff in small private GP clinics handle their tasks. It's different from the app for doctors. ",
      "Patients can walk in or join a virtual queue at these clinics. ",
      "If they queue online, they'll get real-time updates on their wait times but can't choose their appointment times.",
      "The Home screen's aim is to give clinic staff a single place to handle common tasks.",
      "It's divided into four sections: Doctors, Upcoming Queues, Missed Queues, and Checkout.",
    ],
  },
];

export const DOCTORPROJECTDATA = [
  {
    title: "Doctors",
    data: [
      "The Doctors section is designed to display the current on-duty doctors and facilitate efficient patient management for clinic staff.",
      "When a doctor is attending to a patient, staff members can mark the patient as absent, indicate the consultation as completed, or cancel the consultation in case of emergencies.",
      "If a doctor is not currently with a patient, clinic staff can initiate the next consultation for that doctor.",
      "However, if there are no patients in the queue for a particular doctor, staff members won't be able to take any action.",
    ],
  },
];

export const UPCOMINGQUEUE = [
  {
    title: "Upcoming Queue",
    data: [
      "The Upcoming Queues section displays the next 5 patients in line to see the doctors, aiding clinic staff in identifying patient records for preparation and calling patients for upcoming consultations.",
      'Since some patients may join the queue online and not be physically present at the clinic before their turn, queues are labeled as "Confirmed" when patients arrive.',
      "Clinic staff can cancel the queues of next-in-line patients at any time, removing them from the queue.",
    ],
  },
];

export const MISSEDQUEUE = [
  {
    title: "Missed Queue",
    data: [
      "The Missed Queues section displays all patients who were absent when called by the doctors, serving as a centralized platform for clinic staff to assist these patients in rejoining the queue.",
    ],
  },
];

export const CHECKOUT = [
  {
    title: "Checkout",
    data: [
      "The Checkout section provides a comprehensive view of patients who have concluded their consultations, including details on their prescribed medications, total bills, and payment status.",
      'Patients who have already paid in advance are marked with a "Paid" status. Clinic staff can adjust medication quantities and prices, as well as modify the amounts listed on bills.',
      "Additionally, they can print the bill and medical certificate as needed.",
    ],
  },
];

export const FLOWDIAGRAM = [
  {
    title: "Flow Diagram",
    data: "In order to understand the project, flow diagram has been created to visually articulate the process of application.",
    image: GROUP,
  },
];

export const WIREFRAME = [
  {
    title:"Wireframe",
    data:[
      "I've created wireframes to start the initial design phase. I utilized a user-friendly Mockup application from the App Store, incorporating key frames as illustrated below.",
      "Each layout is perfectly aligned with the project requirements and seamlessly integrated within a single screen."
    ],
    image:WIREFRAMEIPAD
  }
]

export const HIGHUIDESIGN = [
  {
    title: "High-Fidelity UI Design",
    data: "",
    images: [UIDESIGN],
  },
];


export const PROJECTSUMMARY = [
  {
    title:"Project Summary",
    data:"With a project duration of 6 days due to job commitments, certain tasks like the interview stage and comprehensive process analysis may not be detailed. However, focusing on primary requirements allows for new experiences in the medical field. User empathy and friendly UI design ensure that this application significantly enhances daily usage for staff members.",
    image:PROJECTSUMMARYIMG
  }
]