/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Abdelaziz Faki",
  title: "Hi, I'm Abdelaziz",
  subTitle: emoji(
    "A passionate System Administrator & IT Support Specialist 💻"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Qev8yNhmf9RbCA6hikIpDzEqzXSGUhMU/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Azooz2014",
  //linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "fazouz2010@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SYSTEM ADMINISTRATION & IT RELATED SERVICES WITH A SPRINKLE OF SOME LIGHT PROGRAMMING ON THE SIDE",
  skills: [
    emoji(
      "⚡ Managing devices and accounts using directory services effectively"
    ),
    emoji("⚡ Setting up and deploying servers"),
    emoji(
      "⚡ Troubleshooting and fixing all IT related problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Servers",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-ethernet"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Programming",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Osmania University",
      logo: require("./assets/images/osmania-logo.jpg"),
      subHeader: "Bachelor's of Computer Application (BCA)",
      duration: "2013 - 2017",
      desc: "Majored in programming and information technology.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Troubleshooting", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Server & Computer management",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Administrator & IT Support Specialist",
      company: "Fenda Investment Company",
      companylogo: require("./assets/images/fenda-logo.png"),
      date: "2017 – Present",
      desc: "I worked in Fenda, a start-up company \
      consisting of 25 employees, and my role was \
      establishing the IT infrastructure and \
      managing employees’ devices and accounts \
      using Active Directory, setting up a server to \
      store files, sharing files and printers over the \
      network, setting up a DNS server and a DHCP \
      server, in addition to troubleshooting and \
      fixing all IT related problems for my \
      colleagues, and maintaining computer devices, \
      servers and printers and schedule backups of \
      the server and computer devices periodically.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google IT Support Professional",
      subtitle:
        "Certificate of completion of Google IT Support Professional from Google.",
      image: require("./assets/images/google-it-support-certificate.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_bTwWlmBehDHbFBC2qzoPsHJPC-d2IB4/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "System Administration and IT Infrastructure Services",
      subtitle:
        "Certificate of completion of System Administration and IT Infrastructure Services from Google.",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1eseNHdhbfdmB5ekALTp0gMWTFJruXBbd/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "IT Security: Defense against the digital dark arts",
      subtitle:
        "Certificate of completion of IT Security: Defense against the digital dark arts from Google.",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1dafxF9p7FRjr-CTsEm4sUwCINQpbxY8P/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "Operating Systems and You  Becoming a Power user",
      subtitle:
        "Certificate of completion of Operating Systems and You  Becoming a Power user from Google.",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1M2oiyFRbpQgo64ZvniiLI9BfE0mOku3B/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle:
        "Certificate of completion of The Bits and Bytes of Computer Networking Certificate from Google.",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ndP6LTGcpZhTQWEovHkYj_h5TvuD3nW2/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "Technical Support Fundamentals",
      subtitle:
        "Certificate of completion of Technical Support Fundamentals from Google.",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1uH6XiBYqDBJv9YZ_jrQWgkNMJfDz_idz/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "Fundamentals of CCNA Routing and Switching",
      subtitle:
        "Certificate of completion of Fundamentals of CCNA Routing and Switching from Firewall Institute, Hyderabad, India.",
      image: require("./assets/images/firewall-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CViATIuhAAcUvQ02yyPI333DtfJstUb7/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    {
      title: "Programming computer applications using JAVA (J2EE)",
      subtitle:
        "Certificate of completion of Programming computer applications using JAVA (J2EE) from Aptech Institute, Hyderabad, India.",
      image: require("./assets/images/aptech-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Kg7DFaSRRQHHnLeCg3NidJTGsR7-Uhuf/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-3243454077",
  email_address: "fazouz2010@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
