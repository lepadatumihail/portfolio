//Import Images
import athlete from "./img/work/about.png";
import goodtimes from "./img/work/skilly.png";
import theracer from "./img/work/traffic.gif";
import athlete2 from "./img/work/adv.png";
import goodtimes2 from "./img/work/skill1.png";
import theracer2 from "./img/work/simul.gif";
import urs from './img/work/urs.pdf';

export const MovieState = () => {
  return [
    {
      title: "Freelance for IMIEU - Den Haag",
      mainImg: athlete,
      secondaryImg: athlete2,
      extra: "Click to visit website.",
      extra1:"https://www.u-lta.eu",
      url: "/work/the-athlete",
      awards: [
        {
          title: "Design Challenge",
          description:
            "Create a website for an eco-friendly and sustainable project that pursues lighter than air techonlogy development. So the main theme had to be simplistic with a clear description and blue color palethe. ",
        },
        {
          title: "Time Pressure",
          description:
            "The whole project was done in my freetime as a freelance job, when I was not busy with my barista job and my school specialization.",
        },
        {
          title: "I'm a freelancer now",
          description:
            "The whole experience felt amazing as I had to register myself and Chamber of Commerce and send my first Invoice on my company's name. So I learned a lot not only in the Web Development way.",
        },
      ],
    },
    {
      title: "SkillBook Blog",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      extra: "GitLab Repository",
      extra1:"https://git.fhict.nl/I426926/web3-marcello-mihail.git",
      awards: [
        {
          title: "Design Challenge",
          description:
            "The goal of this website was to use Laravel's login functionalities to make a social media blog style website for gamers to find other gamers. ",
        },
        {
          title: "MVC and Crud",
          description:
            "Learned the Model View Controller programming model. Also hot to permorm CRUD activities with data from the database.",
        },
        {
          title: "HTML / CSS / PHP",
          description:
            "Every week of school we were learning a new programming language in a very agile manner. Hard but worth it.",
        },
      ],
    },
    {
      title: "Traffic Simulation Group Project",
      mainImg: theracer,
      url: "/work/the-racer",
      extra: "Click to see Documentation.",
      extra1:urs,
      secondaryImg: theracer2,
      
      awards: [
        {
          title: "Group Project",
          description:
            "It was a challenging half year project with a group of 6 students. It was during corona times which made it a little bit harder due to misscomunication and no physical gatherings.",
        },
        {
          title: "Statistics",
          description:
            "We were not told to only create a traffic simulation, but to realise why are we doing it. We had to think of different ways to gather some usefull statistics and the end of each simulation.",
        },
        {
          title: "Fun",
          description:
            "If was really fun creating new tweaks each iteration, me for example, implemented the traffic lights code, the heatmap, car positioning and much more.",
        },
      ],
    },
  ];
};
