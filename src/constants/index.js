import {
  
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,

  discordBlack,
  facebook,

  file02,
 
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,

  plusSquare,
  searchMd,
 
  telegram,
  twitter,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "3",
    title: "Connect Wallet",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const pricing = [
  {
    id: "0",
    title: "Free",
    description: "Limited Donations, personalized recommendations",
    price: "0",
    features: [
      "Every User can Donate to Charities",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Unlimited Donations, Priority support, Create charity Campaigns",
    price: "699",
    features: [
      "No Limit on Donations",
      "Ability to Create charity Campaigns",
      "Dashboard to Track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Create mass Campaigns, Advanced analytics, Dedicated account",
    price: null,
    features: [
      "No Limit on Donations and Campaigns",
      "Personalized Account and Dedicated Dashboard",
      "24x7 Support to solve issues",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Transparency",
    text: "Browse through the details of every charity. Get 100% Transparency of transactions of donators and their donations.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Security",
    text: "Every transaction is hashed and encrypted on the Blockchain which allows Secure transactions from your Wallet.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamlessness",
    text: "Connect Faster, Easier and Better without Username or Password. Web3 helps you connect just using your Wallet.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
