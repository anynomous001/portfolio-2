import playtm from "../public/playtm.png";
import quizproject from "../public/Quizproject.jpg";
import readium from "../public/readium.jpg";
import {
    SiTypescript, SiNextdotjs, SiReact, SiPostgresql, SiMongodb, SiExpress,
    SiAmazon, SiDocker, SiNginx, SiTailwindcss, SiRecoil, SiRedux,
    SiReactrouter, SiOpenai, SiVercel, SiRedis, SiNodedotjs, SiEslint,
    SiCss3, SiTurborepo, SiZapier, SiGooglesheets, SiSlack, SiGmail, SiApachekafka, SiPrisma, SiJsonwebtokens
} from 'react-icons/si';
export interface Project {
    title: string;
    description: string;
    src: any;
    demoLink: string;
    sourceLink: string;
}

export const projects: Project[] = [
    {
        title: "READIUM",
        description: "Readium is a full-stack Medium-like blogging platform built with Typescript, Node.js, and Prisma using PostgreSQL as the database. It features user authentication, CRUD operations for posts. Optimized API routes ensure efficient data fetching, while Redis manages state.",
        src: { readium },
        demoLink: "https://readium.techtovium.com/",
        sourceLink: "https://github.com/anynomous001/Medium_Full-Stack"
    },
    {
        title: "PLAY TM",
        description: "PlayTM is a full-stack PayTM-like wallet app built with Next.js, Node.js, and Prisma using PostgreSQL as the database. It features user authentication with wallet transactions, and balance tracking. Optimized API routes ensure efficient data fetching, while Redis manages state.",
        src: { playtm },
        demoLink: "https://playtm-demo.vercel.app",
        sourceLink: "https://github.com/yourusername/playtm"
    },
    {
        title: "QUIZZICLE",
        description: "QuizApp is a React and Vite based quiz platform that fetches questions from the Open Trivia Database API. It allows users to select a domain, choose difficulty levels, and test their knowledge. Optimized performance, if required, time scoring and interactive feedback.",
        src: { quizproject },
        demoLink: "https://quizzicle-demo.vercel.app",
        sourceLink: "https://github.com/yourusername/quizzicle"
    }
];
