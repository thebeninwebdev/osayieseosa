import {IconTimeline,IconKeyframes,IconArticle,IconAddressBook,IconBrandGithub, IconBrandInstagram,IconBrandStackoverflow,IconBrandWhatsapp,IconPhone} from "@tabler/icons-react"

export const navItems = [
    { 
      name: "Projects", 
      link: "/projects",
      icon:(<IconTimeline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />) 
    },
    { 
      name: "Animations", 
      link: "/animations",
      icon:(<IconKeyframes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    { 
      name: "Blogs", 
      link: "/blogs",
      icon:(<IconArticle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    { 
      name: "Contact", 
      link: "/contact",
      icon:(<IconAddressBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      name: "Social media", 
      links: [
      {
        name: "Github", 
        link:"https://github.com/osayieseosa", 
        icon:(<IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      },
      {
        name:"Instagram", 
        link: "https://github.com/osayieseosa",
        icon:(<IconBrandInstagram className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      },
      {
        name:"Stack Overflow", 
        link:"https://stackoverflow.com/users/15001668/eseosa-osayi",
        icon:(<IconBrandStackoverflow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      },
      {
        name:"WhatsApp", 
        link:"https://wa.link/5my8vf",
        icon:(<IconBrandWhatsapp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      },
      {
        name:"Tel", 
        link:"tel:09155276978",
        icon:(<IconPhone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      }
    ]}
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I am skilled at analyzing problems and finding creative solutions.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I am available for work any where and at any time.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I am constantly evolving, and stay up-to-date with the latest technologies.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    }
  ];
  
  export const products = [
    {
      id: 1,
      title: "Jatinz - Ecomerce App",
      des: "Discover the vibrant essence of Nigeria at, your premier destination for authentic Nigerian-made products.",
      img: "/images/thumbnails/jatinz.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://jatinz.com",
    },
    {
      id: 2,
      title: "Norbile Foods - Online Restaurant",
      des: "Cheap and affordable food with deliveries all over benin.",
      img: "/images/thumbnails/norbilefoods.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://norbilefoods.vercel.app/",
    },
    {
      id: 3,
      title: "Lavic Medicals - Official Home Page",
      des: "Expert medical care in the comfort of your own home. Book appointments with experienced doctors, led by Dr. Olawande Victor Obayanju. Reliable, personalized, and compassionate care. Learn more",
      img: "/images/thumbnails/lavicmedicals.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://www.lavicmedicals.org/",
    },
    {
      id: 4,
      title: "Legit gemini exchange",
      des: "Discover a safer way to buy and sell cryptocurrency, backed by our robust security measures and transparent processes.",
      img: "/images/thumbnails/legitexchange.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://www.legitgeminiexchange.com/",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
