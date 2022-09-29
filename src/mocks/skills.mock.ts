import type { Skill, SkillList } from "../models/skill.model";

export const programmingLanguages: Skill[] = [
    {
        Name: 'Javascript',
        Icon: "/assets/img/icons/js.webp",
        delay: 250
    },
    {
        Name: 'Typescript',
        Icon: "/assets/img/icons/ts.webp",
        delay: 500
    },
    {
        Name: 'Python',
        Icon: "/assets/img/icons/py.webp",
        delay: 750
    },
    {
        Name: 'Java',
        Icon: "/assets/img/icons/java.webp",
        delay: 1000
    },
    {
        Name: 'Go',
        Icon: "/assets/img/icons/go.webp",
        delay: 1250
    },
    {
        Name: 'PHP',
        Icon: "/assets/img/icons/php.webp",
        delay: 1500
    },

]

export const frameworks: Skill[] = [
    {
        Name: "Nextjs",
        Icon: "/assets/img/icons/nextjs.webp",
        delay: 2000
    },
    {
        Name: "Web3js",
        Icon: "/assets/img/icons/web3js.webp",
        delay: 2000
    },
    {
        Name: "React",
        Icon: "/assets/img/icons/react.webp",
        delay: 2000
    },
    {
        Name: "Astro",
        Icon: "/assets/img/icons/astro.webp",
        delay: 2000
    },
    {
        Name: "VueJs",
        Icon: "/assets/img/icons/vuejs.webp",
        delay: 2000
    },
    {
        Name: "Angular",
        Icon: "/assets/img/icons/angular.webp",
        delay: 2250
    },
    {
        Name: "Docker",
        Icon: "/assets/img/icons/docker.webp",
        delay: 1750
    },
    {
        Name: "Django",
        Icon: "/assets/img/icons/django.webp",
        delay: 2500
    },
    {
        Name: "Laravel",
        Icon: "/assets/img/icons/laravel.webp",
        delay: 2750
    },
    {
        Name: "TailwindCss",
        Icon: "/assets/img/icons/tailwindcss.webp",
        delay: 3000
    },
    {
        Name: "Bootstrap",
        Icon: "/assets/img/icons/bootstrap.webp",
        delay: 3250
    },
    {
        Name: "Git",
        Icon: "/assets/img/icons/git.webp",
        delay: 3500
    },
]

export const programs: Skill[] = [
    {
        Name: "Visual Studio",
        Icon: "/assets/img/icons/vs.webp",
        delay: 3750
    },
    {
        Name: "Jetbrains IDEs",
        Icon: "/assets/img/icons/jetbrains.webp",
        delay: 4000
    },
    {
        Name: "Postman",
        Icon: "/assets/img/icons/postman.webp",
        delay: 4250
    },
    /* {
        Name: "Wordpress",
        Icon: "/assets/img/icons/wordpress.webp",
        delay: 4500
    },
    {
        Name: "Elementor",
        Icon: "/assets/img/icons/elementor.webp",
        delay: 4750
    },
    {
        Name: "AdobeXd",
        Icon: "/assets/img/icons/adobexd.webp",
        delay: 5000
    },
    {
        Name: "Figma",
        Icon: "/assets/img/icons/figma.webp",
        delay: 5000
    } */
]

export const dbs: Skill[] = [
    {
        Name: "Mongodb",
        Icon: "/assets/img/icons/mongodb.webp",
        delay: 5250
    },
    {
        Name: "Postgre",
        Icon: "/assets/img/icons/postgre.webp",
        delay: 5500
    },
    {
        Name: "MySQL",
        Icon: "/assets/img/icons/sql.webp",
        delay: 5750
    },
    {
        Name: "GraphQl",
        Icon: "/assets/img/icons/graphql.webp",
        delay: 5750
    },
]

export const mockedSkillList: SkillList[] = [
    {
        Title: 'skills.languages',
        skills: programmingLanguages
    },
    {
        Title: 'skills.frameworks',
        skills: frameworks
    },
    {
        Title: 'skills.programs',
        skills: programs
    },
    {
        Title: 'skills.dbs',
        skills: dbs
    },
]

export const allSkills = [...frameworks, ...programmingLanguages, ...programs, ...dbs];