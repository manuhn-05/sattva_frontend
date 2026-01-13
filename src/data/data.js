import blog1 from '../assets/images/blog/1.jpg'
import blog2 from '../assets/images/blog/2.jpg'
import blog3 from '../assets/images/blog/3.jpg'

import awards1 from "../assets/images/about/awards/sustainableNXT.png";
import awards2 from "../assets/images/about/awards/greadtindianESG.png";
import awards3 from "../assets/images/about/awards/techforgood.png";


import avatar1 from "../assets/images/client/shivkumar_jvs.jpg";
import avatar2 from "../assets/images/client/tony_hurricane.jpeg";
import avatar3 from "../assets/images/client/baiju_jerash.jpg";
import avatar4 from "../assets/images/client/sanal_kumar.webp";

import Capegemini from "../assets/images/about/capegemini.svg";
import AmazonImage from '../assets/images/client/amazon.svg';
import GoogleImage from '../assets/images/client/google.svg';
import LenovoImage from '../assets/images/client/lenovo.svg';
import PaypalImage from '../assets/images/client/paypal.svg';
import ShopifyImage from '../assets/images/client/shopify.svg';

import UserImage from "../assets/images/about/Jeremie_Joos.webp"
import UserImage2 from "../assets/images/about/user1.webp";

import Client1 from "../assets/images/client/01.jpg";
import Client2 from "../assets/images/client/02.jpg";
import Client3 from "../assets/images/client/03.jpg";
import Client4 from "../assets/images/client/04.jpg";


import ProductSustainable from "../assets/images/product/sustainable.jpg";
import ProductEhs from "../assets/images/product/ehs.png";
import ProductHealthSafety from "../assets/images/product/health_safety.png";
import ProductAccident from "../assets/images/product/accident.png";
import ProductChemical from "../assets/images/product/chemical.png";
import ProductDocument from "../assets/images/product/document.png";

const DummyUser = 'https://imgs.search.brave.com/HHv4G66L_oIc59sq5PJHB191jYrN0Wh0OR9z0neEfec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/ODQ3NTE5Ni92ZWN0/b3IvdXNlci1pY29u/LXJlcHJlc2VudGlu/Zy1wcm9maWxlLWFj/Y291bnQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUpFOS1t/UEZiamRPMWR1aEZO/SE1TakZnZWtvQVdD/Q05WRnRCQW1LSDdS/TTg9'




export const blogData = [
    {
      id: 1,
      title: "Building Your Corporate Identity from Upwind",
      description:"The phrasal sequence of the is now so that many campaign and benefit",
      image: blog1,
    },
    {
      id: 2,
      title: "The Right Hand of Business IT World",
      description:"The phrasal sequence of the is now so that many campaign and benefit.",
      image: blog2,
    },
    {
      id: 3,
      title: "Building Your Corporate Identity from Upwind",
      description:"The phrasal sequence of the is now so that many campaign and benefit",
      image: blog3,
    },
  ];


  export const  SATTVA_TRUSTED_COMPANIES =[
    {
      "id": 1,
      "title": "A single source of truth for ESG data",
      "quote": "SATTVA has become our single source of truth for ESG data.",
      "description": "With SATTVA, all our social, sustainability, health, and safety data is structured, transparent, and easy to understand. We no longer face confusion around versions or accuracy, enabling confident reporting to stakeholders and partners in just a few clicks.",
      "person": {
        "name": "Name Surname",
        "designation": "Head of Sustainability",
        "image": "/images/testimonials/person-1.jpg"
      },
      "company": {
        "name": "Company Name",
        "logo": "/images/logos/company-1.svg"
      }
    },
    {
      "id": 2,
      "title": "Decentralized data with centralized oversight",
      "quote": "SATTVA gives us complete oversight without manual effort.",
      "description": "Each region independently manages its ESG data through SATTVA, while we maintain clear visibility at the corporate level. This allows our teams to focus on governance and quality control instead of collecting data and managing spreadsheets.",
      "person": {
        "name": "Name Surname",
        "designation": "ESG Program Manager",
        "image": "/images/testimonials/person-2.jpg"
      },
      "company": {
        "name": "Company Name",
        "logo": "/images/logos/company-2.svg"
      }
    },
    {
      "id": 3,
      "title": "Turning ESG insights into action",
      "quote": "SATTVA helps us move from ESG reporting to real impact.",
      "description": "With SATTVA, we evaluate sustainability initiatives, prioritize high-impact actions, and build an evidence-based roadmap toward our ESG goals. Real-time data helps us continuously refine our strategy as conditions evolve.",
      "person": {
        "name": "Name Surname",
        "designation": "Operations & Compliance Lead",
        "image": "/images/testimonials/person-3.jpg"
      },
      "company": {
        "name": "Company Name",
        "logo": "/images/logos/company-3.svg"
      }
    }
  ]


  export const PARTNERS_NETWORK = [
    {
      id: 'capegemini-1',
      src: Capegemini,
      description:
        '“Partnering with Sattva enables consulting-led organizations to deliver structured, data-driven ESG insights with confidence and consistency.”',
      person: {
        image: UserImage,
        name: 'Jérémie Joos',
        designation: 'Co-Head of ESG Center of Excellence',
      },
    },
    {
      id: 'amazon-2',
      src: AmazonImage,
      description:
        '“Sattva helps large-scale, cloud-first enterprises manage ESG data efficiently while supporting scalability and operational excellence.”',
      person: {
        image: Client1,
        name: 'Jérémie Joos',
        designation: 'Co-Head of ESG Center of Excellence',
      },
    },
    {
      id: 'google-3',
      src: GoogleImage,
      description:
        '“With Sattva, organizations can turn complex sustainability data into meaningful insights that support transparency and innovation.”',
      person: {
        image: UserImage2,
        name: 'Jérémie Joos',
        designation: 'Co-Head of ESG Center of Excellence',
      },
    },
    {
      id: 'lenovo-4',
      src: LenovoImage,
      description:
        '“Sattva enables global enterprises to align ESG reporting with business operations across regions and supply chains.”',
      person: {
        image: Client2,
        name: 'Jérémie Joos',
        designation: 'Co-Head of ESG Center of Excellence',
      },
    },
    {
      id: 'paypal-5',
      src: PaypalImage,
      description:
        '“By working with Sattva, organizations can strengthen ESG governance while maintaining trust, accountability, and compliance.”',
      person: {
        image: Client3,
        name: 'Jérémie Joos',
        designation: 'Co-Head of ESG Center of Excellence',
      },
    },
    {
      id: 'shopify-6',
      src: ShopifyImage,
      description:
        '“Sattva supports fast-growing digital businesses in building ESG practices that scale alongside innovation and growth.”',
      person: {
        image: Client4,
        name: 'Jérémie Joos',
        designation: 'Co-Head of ESG Center of Excellence',
      },
    },
  ];
  

  export const BOOK_A_DEMO_REQUESTS_TYPE = [
    {
      id : "1",
      label : "A solution for my own company",
      value : "A solution for my own company",
    },
    {
      id : "2",
      label : "A solution on behalf of my client/prospect",
      value : "A solution on behalf of my client",
    },
  ]

  export const COUNTRY_MOBILE_CODES=[
    { "code": "+91", "name": "India", "short": "IN" },
    { "code": "+1", "name": "United States", "short": "US" },
    { "code": "+44", "name": "United Kingdom", "short": "GB" },
    { "code": "+61", "name": "Australia", "short": "AU" },
    { "code": "+81", "name": "Japan", "short": "JP" },
    { "code": "+86", "name": "China", "short": "CN" },
    { "code": "+49", "name": "Germany", "short": "DE" },
    { "code": "+33", "name": "France", "short": "FR" },
    { "code": "+39", "name": "Italy", "short": "IT" },
    { "code": "+34", "name": "Spain", "short": "ES" },
  
    { "code": "+7", "name": "Russia", "short": "RU" },
    { "code": "+55", "name": "Brazil", "short": "BR" },
    { "code": "+27", "name": "South Africa", "short": "ZA" },
    { "code": "+82", "name": "South Korea", "short": "KR" },
    { "code": "+62", "name": "Indonesia", "short": "ID" },
    { "code": "+60", "name": "Malaysia", "short": "MY" },
    { "code": "+65", "name": "Singapore", "short": "SG" },
    { "code": "+66", "name": "Thailand", "short": "TH" },
    { "code": "+84", "name": "Vietnam", "short": "VN" },
    { "code": "+63", "name": "Philippines", "short": "PH" },
  
    { "code": "+92", "name": "Pakistan", "short": "PK" },
    { "code": "+880", "name": "Bangladesh", "short": "BD" },
    { "code": "+94", "name": "Sri Lanka", "short": "LK" },
    { "code": "+977", "name": "Nepal", "short": "NP" },
    { "code": "+971", "name": "United Arab Emirates", "short": "AE" },
    { "code": "+966", "name": "Saudi Arabia", "short": "SA" },
    { "code": "+974", "name": "Qatar", "short": "QA" },
    { "code": "+968", "name": "Oman", "short": "OM" },
    { "code": "+973", "name": "Bahrain", "short": "BH" },
    { "code": "+965", "name": "Kuwait", "short": "KW" },
  
    { "code": "+20", "name": "Egypt", "short": "EG" },
    { "code": "+234", "name": "Nigeria", "short": "NG" },
    { "code": "+254", "name": "Kenya", "short": "KE" },
    { "code": "+212", "name": "Morocco", "short": "MA" },
    { "code": "+351", "name": "Portugal", "short": "PT" },
    { "code": "+31", "name": "Netherlands", "short": "NL" },
    { "code": "+46", "name": "Sweden", "short": "SE" },
    { "code": "+47", "name": "Norway", "short": "NO" },
    { "code": "+41", "name": "Switzerland", "short": "CH" },
    { "code": "+48", "name": "Poland", "short": "PL" },
  
    { "code": "+90", "name": "Turkey", "short": "TR" },
    { "code": "+98", "name": "Iran", "short": "IR" },
    { "code": "+52", "name": "Mexico", "short": "MX" },
    { "code": "+54", "name": "Argentina", "short": "AR" },
    { "code": "+56", "name": "Chile", "short": "CL" }
  ]
  

  export const NUMBER_OF_EMPLOYEES = [
    { "id": "1", "label": "1-10", "value": "1-10" },
    { "id": "2", "label": "11-50", "value": "11-50" },
    { "id": "3", "label": "51-200", "value": "51-200" },
    { "id": "4", "label": "201-500", "value": "201-500" },
    { "id": "5", "label": "501-1000", "value": "501-1000" },
    { "id": "6", "label": "1001-5000", "value": "1001-5000" },
    { "id": "7", "label": "5001-10,000", "value": "5001-10000" },
    { "id": "8", "label": "10,001+", "value": "10001+" },
  ];

  export const INDUSTRY_LIST = [
    { "id" : "5", "label" : "Apparel Retail", "value" : "Apparel Retail" },
    { "id" : "6", "label" : "Banks", "value" : "Banks" },
    { "id" : "7", "label" : "Chemicals", "value" : "Chemicals" },
    { "id" : "4", "label" : "Distributors", "value" : "Distributors" },
    { "id" : "3", "label" : "Education", "value" : "Education" },
    { "id" : "2", "label" : "Finance", "value" : "Finance" },
    { "id" : "8", "label" : "Government Administration", "value" : "Government Administration" },
    { "id": "1", "label": "Healthcare", "value": "Healthcare" },
    { "id" : "9", "label" : "IT Services", "value" : "IT Services" },
    { "id" : "10", "label" : "Media", "value" : "Media" },


  ]

  export const OUR_TEAM = {
    leadership: [
      {
        id: 1,
        role: "BOD",
        name: "Ravi Kumar",
        designation: "Board of Directors",
        image: DummyUser,
        linkedin: "https://linkedin.com/in/ravikumar"
      },
      {
        id: 2,
        role: "CTO",
        name: "Ananya Sharma",
        designation: "Chief Technology Officer",
        image: DummyUser,
        linkedin: "https://linkedin.com/in/ananyasharma"
      },
      {
        id: 3,
        role: "Program Manager",
        name: "Suresh Patil",
        designation: "Program Manager",
        image: DummyUser,
        linkedin: "https://linkedin.com/in/sureshpatil"
      },
      {
        id: 4,
        role: "Senior ESG Associate",
        name: "Neha Verma",
        designation: "Senior ESG Associate",
        image:DummyUser,
        linkedin: "https://linkedin.com/in/nehaverma"
      }
    ],
  
    teamMembers: [
      {
        id: 5,
        name: "Amit Rao",
        role: "ESG Analyst",
        image: DummyUser,
      },
      {
        id: 6,
        name: "Priya Nair",
        role: "Sustainability Consultant",
        image: DummyUser,
      },
      {
        id: 7,
        name: "Karthik R",
        role: "Data Analyst",
        image: DummyUser,
      },
      {
        id: 8,
        name: "Sneha Iyer",
        role: "ESG Research Associate",
        image: DummyUser,
      },
      {
        id: 9,
        name: "Rahul Mehta",
        role: "Operations Executive",
        image: DummyUser,
      },
      {
        id: 10,
        name: "Divya Kulkarni",
        role: "Project Coordinator",
        image: DummyUser,
      }
    ]
  };
  

  export const AWARDS_AND_RECOGNITION = [
    {
      "id": 1,
      imageSrc : awards1,
      "heading": `The SustainableNXT Award Winner`,
      "description": `The SustainableNXT Award, judges by an independent expert panel, 
      recognize and showcase leading sustainability innovations and innovators across the supply chain`,
   
    },
    {
      "id": 2,
      imageSrc : awards2,

      "heading": "Great Indian ESG SaaS Platform",
      "description": `We're honored to be named the Great Indian ESG SaaS Platform of the Year at the ESG & Cleantech Summit & Awards 2025! . Thank you for supporting our mission to make ESG accessible and impactful.`,

    },
    {
      "id": 3,
      imageSrc : awards3,

      "heading": "Tech for Good Champion of the year",
      "description": `We have been honored with the “Tech for Good Champion of the Year” award at SustainableNXT 2025, presented by Apparel Resources.`,
   
    }
  ]
  

  export const CLIENT_REVIEW= [
    {
        id: "1",
        profile: avatar1,
        name: "Mr.VS Shivkumar",
        title: "Much more easier now",
        designation: "Manager - Systems & Certifications at JVS, India",
        description:
            "Being the Management Representative of my Company, I have to frequently face audits in all our Factories. We have been using SATTVA™️, the ESG tool from REDEFINE for the last 18 months and I find that so much of our audit preparation work is taken care of by this tool. Also documentation and followup on corrective action is much more easier now.",
    },
    {
        id: "2",
        profile: avatar2,
        name: "Mr. Tony",
        title:
            "Experiencing better levels of safety and compliance in our factories it!",
        designation:
            "Managing Director at Bengal Hurricane Group, Bangladesh",
        description:
            "From the time that we have subscribed to SATTVA™ software of REDEFINE, we are experiencing better levels of safety and compliance in our factories. Earlier on we had to depend on many books, registers and xl sheets to capture data on EHS, but now with SATTVA™ all the paperwork has been eliminated and it is also easier for us to face audits as data is readily available. Due to this, the Safety, Environment and Compliance officers in our Factories can spend more time inside the factory and less time with documentation. SATTVA™ also generates automated reports and mails to key people in my Factory, thus keeping us all updated at all times.",
    },
    {
        id: "3",
        profile: avatar3,
        name: "Mr.Baiju Chellemma",
        title: "Adding value to work",
        designation:
            "General Manager at Jerash Garments and Fashion Manufacturing Co. Ltd, Jordan",
        description:
            "We have installed SATTVA™ the ESG software developed by REDEFINE. My Compliance Team and Safety Officers confirm that SATTVA™ software is adding value to their work by helping them capture relevant data pertaining to environment, safety and social aspects. SATTVA™ also automatically generates reports that I receive by mail, thus giving me constant updates on the performance of the EHS Team in my Factory and also the level of health and safety in my factory.",
    },
    {
        id: "41",
        profile: avatar4,
        name: "Mr. Sanal Kumar",
        title: "Really pleased with the work",
        designation:
            "Chairman &Managing Director Classic Fashion Apparel Industry Ltd Co, Jordan",
        description:
            `We are delighted to subscribe SATTVA at Classic Fashion Apparel Industry Ltd Co. as 
            part of our ongoing commitment to sustainability and responsible business practices. 
            REDEFINE's SATTVA- Safe and Sustainable digital platform will further strengthen our 
            compliance and sustainability initiatives, 
            driving greater efficiency and transparency across our operations.`,
    },
];


export const productCardData1= {
  title : "Sustainability",
  description : `This module of SATTVA has been specifically designed to respond organizations to different global reporting frameworks and initiatives 
  and easily align with the increased investors and stakeholder's interest. 
  It enables you to collect, track and manage your Sustainability Activities, Commitments, Certificates, Impacts, Reports, SDGs Governance, and ESG in one place.`,
  imgSrc : ProductSustainable,
  listItems : [
    { id : "1", title : "Identify opportunities"},
    { id : "2", title : "Centralize ESG Data"},
    { id : "3", title : "Maintain a secure data"},
    { id : "4", title : "Communicate"},
  ]
}

export const productCardData2= {
  title : "Environment Management",
  description : `This Module helps your organization to ensure compliance within EMS statutory regulations and reduce environmental impact. 
  It Enables with a digital platform that collect the data and sets targets to reduce, manage, monitor and track the performance of 
  various aspects like carbon footprint derivation, energy usage, waste, water, waste water management and air emission on a real 
  time basis with wide range of environmental matrix.`,
  imgSrc : ProductEhs,
  listItems : [
    { id : "1", title : "Ensure compliance"},
    { id : "2", title : "Help cut emissions"},
    { id : "3", title : "Reduce, Manage, Monitor"},
    { id : "4", title : "Accounting"},
    { id : "5", title : "Comprehensive performance"},
    { id : "6", title : "Identify opportunities"},


  ]
}

export const productCardData3= {
  title : "Hazard & Risk Management",
  description : `Hazard & Risk Management Module of SATTVA™ facilitates the identification, analysis, monitoring, 
  review, and treatment of both existing and potential hazards and risks throughout your organization.
   This user-friendly tool will give your organization a strategic advantage in managing, mitigating, and preventing Operational risk in your business.`,
  imgSrc : ProductHealthSafety,
  listItems : [
    { id : "1", title : "Hazard & Risk"},
    { id : "2", title : "Proactive Measures"},
    { id : "3", title : "Centralize and streamline"},
    { id : "4", title : "Review and treatment"},
    { id : "5", title : "Strategic advantages"},
    { id : "6", title : "Improves loss prevention"},
  ]
}

export const productCardData4= {
  title : "Accident & Incident",
  description : `Accident & Incident management module of SATTVA is a comprehensive and user-friendly tool for organizations to record, 
  track and report workplace environment, health and safety incidents. Easily log incidents, identify root causes, implement corrective 
  and preventive actions and maintain an auditable, real-time record of the detection and mitigation of every EHS incident organization-wide.`,
  imgSrc : ProductAccident,
  listItems : [
    { id : "1", title : "Reactive measure"},
    { id : "2", title : "Accident / incident managing"},
    { id : "3", title : "Financial advantageous"},
    { id : "4", title : "Monitoring Mechanism"},
    { id : "5", title : "Real time monitoring"},
    { id : "6", title : "Reduce risk"},
    { id : "7", title : "Comply"},

    { id : "8", title : "Root cause analysis"},
    { id : "9", title : "Manage or eliminate"},

  ]
}

export const productCardData5= {
  title : "Chemical Management",
  description : `The Chemical Management Module of SATTVA has been designed to ensure that activities involving the use of chemical materials be performed 
  in a way to protect employee of the organisation, general public from chemical hazards & health the importance to control and manage the risk associated with it, 
  Also, ensures activities are conducted in accordance with statutory regulations.`,
  imgSrc : ProductChemical,
  listItems : [
    { id : "1", title : "Chemical management"},
    { id : "2", title : "Information in one location"},
    { id : "3", title : "Inventory management"},
    { id : "4", title : "Safety data sheets in one place"},
    { id : "5", title : "Real time information"},
    { id : "6", title : "Provide easy access"},
    { id : "7", title : "Access relevant SDS"},

    { id : "8", title : "Approval process"},
    { id : "9", title : "Confirm your SDS"},

  ]
}

export const productCardData6= {
  title : "Document Management",
  description : `This module of SATTVA has been specifically designed to act as a central database of your organization's legal & Statutory documents, 
  policy and procedures. Schedule policy reviews, renew the legal documents, and maintain the ISO requirements all from within a centrally accessible tool. 
  Also, With this application you can easily maintain an accurate and accessible inventory of all of your safety,environment & Social documents.`,
  imgSrc : ProductDocument,
  listItems : [
    { id : "1", title : "Centralized Mechanism"},
    { id : "2", title : "Digitalize"},
    { id : "3", title : "Up-to-date documentation"},
    { id : "4", title : "Ensure compliance"},
    { id : "5", title : "Keep any organization fit"},


  ]
}