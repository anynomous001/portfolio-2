import { StaticImageData } from "next/image";
import playTMOne from "../public/playTMOne.jpeg";
import quizOne from "../public/quizOne.jpeg";
import readiumOne from "../public/readiumOne.jpg";

export interface Project {
    title: string;
    description: string;
    src: { [key: string]: StaticImageData };
    demoLink: string;
    sourceLink: string;
}

export const projects: Project[] = [
    {
        title: "READIUM",
        description: "Readium is a full-stack Medium-like blogging platform built with Typescript, Node.js, and Prisma using PostgreSQL as the database. It features user authentication, CRUD operations for posts. Optimized API routes ensure efficient data fetching, while Redis manages state.",
        src: { readiumOne },
        demoLink: "https://readium.techtovium.com/",
        sourceLink: "https://github.com/anynomous001/Medium_Full-Stack"
    },
    {
        title: "PLAY TM",
        description: "PlayTM is a full-stack PayTM-like wallet app built with Next.js, Node.js, and Prisma using PostgreSQL as the database. It features user authentication with wallet transactions, and balance tracking. Optimized API routes ensure efficient data fetching, while Redis manages state.",
        src: { playTMOne },
        demoLink: "https://playtm-demo.vercel.app",
        sourceLink: "https://github.com/yourusername/playtm"
    },
    {
        title: "QUIZZICLE",
        description: "QuizApp is a React and Vite based quiz platform that fetches questions from the Open Trivia Database API. It allows users to select a domain, choose difficulty levels, and test their knowledge. Optimized performance, if required, time scoring and interactive feedback.",
        src: { quizOne },
        demoLink: "https://quizzicle-demo.vercel.app",
        sourceLink: "https://github.com/yourusername/quizzicle"
    }
];
