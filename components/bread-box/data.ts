//PersonasType
import YOTE from "@/public/images/bread-box/Rectangle 6.png";
import THU from "@/public/images/bread-box/Rectangle 22.png";

//flow diagram
import GROUP from "@/public/images/bread-box/Group 16-2.png";

//wireframe
import WIREFRAME_1 from "@/public/images/bread-box/wireframe_1.png";
import WIREFRAME_2 from "@/public/images/bread-box/wireframe_2.png";
import WIREFRAME_3 from "@/public/images/bread-box/wireframe_3.png";
import WIREFRAME_4 from "@/public/images/bread-box/wireframe_4.png";
import WIREFRAME_5 from "@/public/images/bread-box/wireframe_5.png";
import WIREFRAME_6 from "@/public/images/bread-box/wireframe_6.png";
import WIREFRAME_7 from "@/public/images/bread-box/wireframe_7.png";

//user story
import USERSTORYONE from "@/public/images/bread-box/user_story_2.png";
import USERSTORYTWO from "@/public/images/bread-box/user_story_3.png";
import USERSTORYTHREE from "@/public/images/bread-box/user_story_4.png";
import USERSTORYFOUR from "@/public/images/bread-box/user_story_5.png";
import USERSTORYFIVE from "@/public/images/bread-box/user_story_6.png";
import USERSTORYSIX from "@/public/images/bread-box/user_story_1.png";

//project summary
import BREADBOX from "@/public/images/bread-box/bread_box.png";

//High
import HIGHPROTOTYPE from "@/public/images/bread-box/Frame 34578.png";

//Ui design
import UIDESIGN from "@/public/images/bread-box/Frame 34579.png";

export const PROJECTCATEGORYDATA = [
  {
    id: 1,
    title: "Where",
    data: "Yangon, Myanmar",
  },
  {
    id: 2,
    title: "What",
    data: "iOS Mobile App",
  },
  {
    id: 3,
    title: "Why",
    data: "Portfolio Project",
  },
  {
    id: 4,
    title: "Role",
    data: "UX/UI Designer",
  },
  {
    id: 5,
    title: "Category",
    data: "Food Shop",
  },
  {
    id: 6,
    title: "When",
    data: "Nov 2023 - Feb 2024 ",
  },
];

export const PROBLEMSTATEDATA = [
  {
    title: "Problem Statement",
    data: [
      "With the rising demand at food shops, certain menu items may be unavailable during periods of high sales.",
      "Consequently, customers who travel from a distance may find themselves unable to order their desired menu if those items are no longer available upon their arrival.",
      "Lack of information support can leave people unaware of the remaining products in the shop.','Additionally, long queues for pickup can result in wasted time if the desired menu is unavailable when it's their turn.",
    ],
  },
];

export const POSSIBLESOLUTIONDATA = [
  {
    title: "Possible Solution",
    data: [
      "I am creating this application to reduce the time waste of queuing or waiting at the cafes for their order.",
      "By using my application, we can reduce time wasting and no need to wait in long queues for our order which can make the ordering process really smooth and quick.",
      "Customers have the option to order from their homes and pick up their items with minimal time spent.",
    ],
  },
];

export const COMPETITIVEANALYSIS = [
  {
    title: "Competitive Analysis",
    data: [
      "I dived into the popular food delivery apps, Food Panda and Grab, which are market competitors in Myanmar.",
      "I compared their good and bad points and then focused on how easy it is to order using each app as a new user and a returning user.",
      "CI found some negative comments from users who shared their real-time experiences with these apps.",
    ],
  },
];

export const GOODPOINTDATA = [
  {
    title: "Good Points",
    data: [
      "Food Panda mostly partners with a wide variety of restaurants and provides users with their best effort in services.",
      "Discounts and Promotion Codes are usually offered and users can track the status of their order with a road map.",
      "User friendly Interface leads users to the easy application for ordering their desired menu.",
    ],
  },
];

export const PAINPOINTDATA = [
  {
    title: "Pain Points",
    data: [
      "Service fees and delivery fees are calculated according to routing distance which can increase overall cost.",
      "Users outside the specific range can’t order because of their routing policy.",
      "Some menu items are not provided according to their privacy and policy",
      "Information of featured menu items are not consistently updated each time.",
    ],
  },
];

export const GRABGOODPOINT = [
  {
    title: "Good Points",
    data: [
      "Grab is known as a multi-service platform and Grab Food is one of its services.",
      "It also features wide restaurant selection, convenient ordering, live order tracking with considerable delivery services.",
    ],
  },
];

export const GRABPAINPOINT = [
  {
    title: "Pain Points",
    data: [
      "It also includes service fees and delivery costs which can affect overall costs.",
      " Variable delivery time must be considered this time since unstable information is reported to the users.",
      "Only cash on delivery systems are the best remaining choice for the users for their payment options.",
      "Number of registered food restaurants and shops is lower than that of Food Panda.",
      "Insufficient communication support between the application and restaurants is a critical issue.",
    ],
  },
];

export const USERSURVEYDATA = [
  {
    title: "User Survey",
    data: "I discussed with a quick conversation about these food delivery apps for their needs and pain points for this case study.",
    progress: [
      {
        id: 1,
        title: "Price",
        percent: 70,
      },
      {
        id: 2,
        title: "Duration",
        percent: 50,
      },
      {
        id: 3,
        title: "Payment Method",
        percent: 40,
      },
      {
        id: 4,
        title: "Menu Items",
        percent: 30,
      },
      {
        id: 5,
        title: "Information between Restaurant and Users",
        percent: 20,
      },
    ],
  },
];

export const RESEARCHRESULTDATA = [
  {
    title: "Notable Initial Research Results",
    data: [
      "After some research, there are some neglectable issues and important issues that should be fixed for better experience for the users. ",
      "There are also notable comments like wishing to know that the exact information about the delivery duration, sending order cancel message from the application after the user submitted the order.",
    ],
  },
];

export const USERSTORYBOARD = [
  {
    title: "User Storyboard",
    data: "I used Procreate to create pictures that show how one person might use my app. This helps me understand and see their experience better.",
    img: THU,
    userInfo: [
      {
        title: "Persona",
        data: "Thu Thu Htet Aung",
      },
      {
        title: "User Story",
        data: "Utilize the bakery app for convenient and efficient menu ordering.",
      },
    ],
    cards: [
      {
        id: 1,
        image: USERSTORYONE,
        data: "Thu Thu has to purchase coffee and bread for her preschool students during the short gap between lunch break and nap time.",
      },
      {
        id: 2,
        image: USERSTORYTWO,
        data: "Upon reaching the bakery shop, she finds a crowd of people waiting to place orders, and some items are unavailable. This situation disappoints her.",
      },
      {
        id: 3,
        image: USERSTORYTHREE,
        data: "At that moment, she notices that their shop's official app is now available, and she realizes she can also place orders through it.",
      },
      {
        id: 4,
        image: USERSTORYFOUR,
        data: "She signs up on the application and notices that the processes are extremely user-friendly.",
      },
      {
        id: 5,
        image: USERSTORYFIVE,
        data: "She orders her items from the menu and specifies the pick-up time to collect her order.",
      },
      {
        id: 6,
        image: USERSTORYSIX,
        data: "She easily sees the exact items on the app, no long wait. Gets her order quickly to share with her students.",
      },
    ],
  },
];

export const PERSONASDATA = [
  {
    id: 1,
    image: YOTE,
    name: "Yoe Sitt",
    age: 25,
    occupation: "Student",
    location: "Ahlone, Myanmar",
    listData: [
      "He is a busy student living alone in Ahlone, Myanmar. ",
      "He spends most of his time going to class and studying at his tables including weekends.",
      "Cooking is not a great option for him due to his busy schedule and the unreliable electricity.",
      "With daytime studying and nighttime assignments, he is always in a hurry with very little free time.",
      "Like many students, he enjoys drinking coffee and is one of those who make it himself.",
      "It's a quick process for him, but sometimes he likes to order from his favorite coffee shop.",
      "That's why he keeps a list of all the coffee and bakery shops. He's truly a coffee enthusiast.",
    ],
  },
  {
    id: 2,
    image: THU,
    name: "Thu Thu Htet",
    age: 28,
    occupation: "Teacher",
    location: "Hlaedan, Myanmar",
    listData: [
      "She is working as a headmaster of a preschool who has a variety of responsibilities.",
      "Her working hours are 8-4pm and she also teaches kids as an outside tutor after her working hours.",
      "Cooking is not a great option for him due to his busy schedule and the unreliable electricity.",
      "She not only has a sweet tooth, but also feeds her students with snacks in the afternoon.",
      "Therefore, she always keeps in touch with bakery and coffee shops which can deliver her order right in time.",
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

export const WIREFRAMEDATA = [
  {
    title: "Wireframes",
    data: "I created wireframes to start the initial design phase. For drawing these wireframes, I used a Mockup application from the App Store, which is user-friendly and easy to use with some key frames shown in below this paragraph.",
    images: [
      WIREFRAME_1,
      WIREFRAME_2,
      WIREFRAME_3,
      WIREFRAME_4,
      WIREFRAME_7,
      WIREFRAME_6,
    ],
  },
];

export const USERJOURNEYMAP = [
  {
    title: "User Journey Map",
    data: "I created a user journey map to highlight the moments of feedback and pain points that customers might experience while using the other food delivery application.",
  },
  {
    image: THU,
    name: "Thu Thu Htet",
    data: "Thu Thu consistently prepares bread and coffee for tea time, not just for herself but also for her preschool students. Although she occasionally attempts to use delivery applications like Food Panda and Grab Food, she sometimes abandons the idea due to errors in menu reporting. This hsi her who is trying to purchase bread and coffee for tea time.",
  },
];

export const HIGHTFIDE = [
  {
    title: "High-Fidelity Prototype",
    data: "Connecting hi-fi screens with in-build animations for smooth experience for the users which  can leads to friendly UI design for every users keeping with user central design.",
    images: "",
  },
];

export const PROTOTYPEEXPERIENCE = [
  {
    title: "Prototype Experience confirmation",
    data: "I finished making the prototype for the screens, and then I tested it with more than 6 users to make sure it provides a good user experience. If there were any problems with using the application, I redesigned it and fixed the issues to improve the overall experience. I mainly focused on the ordering process and checked if viewing the menu items was smooth or not.",
  },
];

export const HIGHUIDESIGN = [
  {
    title: "High-Fidelity UI Design",
    data: "",
    images: [UIDESIGN],
  },
];

export const HIGHPROTOTYPEDATA = [
  {
    title: "High-Fidelity Prototype",
    data: "Connecting hi-fi screens with in-build animations for smooth experience for the users which  can leads to friendly UI design for every users keeping with user central design.",
    images: [HIGHPROTOTYPE],
  },
];

export const PROJECTSUMMARY = [
  {
    title: "Project Summary",
    data: "During the project, I looked at market research, did a user survey, made simple and detailed designs, and connected everything into a prototype for a smooth and easy-to-use application. It took a lot of time and effort to study this application, but I didn't give up. I found many ways to make it better and realized there's still a lot more to learn in the future.",
    images: [BREADBOX],
  },
];

export const TASKLISTDATA = [
  {
    title: "Tasklist",
    data: [
      "Wants bread and coffee after lunch Goes to the bakery shop but a long queue is waiting for their order",
      "Checks the menu and select the desired items",
      "Her turn arrives finally and orders coffee and bread ",
      "Confirms her order and pay for it",
      "Picks up her order and goes back to preschool",
    ],
  },
  {
    title: "Feelings",
    data: [
      "Crowed people in front of the shop makes her uncomfortable",
      "Desired menu items are out of stalk",
      "Has to give the menu instructions more than once to inform the sales person",
      "Has to wait longer when some issue occurs in an unexpected way",
      "Gets some of  her students’ favorite orders, allowing her to share with them",
    ],
  },
  {
    title: "Painpoints",
    data: [
      "No alternative options nearby to go shopping. Must finish her purchases during the students’ nap time",
      "Has to wait in lone lines and some items are unavailable . Gets tired as she has to think other menu options to replace the ones she can’t get",
      "Sellers are busier than usual. Leads to longer waiting time. Delays in getting orders ",
      "Takes long for payment issue because of busy sellers. Waiting time extends",
      "Owner might be able to manage that situation. Causes fatigue during the return journey to preschool",
    ],
  },
  {
    title: "Improvement Opportunities",
    data: [
      "No alternative options nearby to go shopping. Must finish her purchases during the students’ nap time",
      "Has to wait in lone lines and some items are unavailable. Gets tired as she has to think other menu options to replace the ones she can’t get",
      "Sellers are busier than usual. Leads to longer waiting time. Delays in getting orders",
      "Takes long for payment issue because of busy sellers. Waiting time extends",
      "Owner might be able to manage that situation. Causes fatigue during the return journey to preschool",
    ],
  },
];
