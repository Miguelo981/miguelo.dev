export interface SkillList {
    Title: string,
    skills: Skill[]
}

export interface Skill {
   Name: string,
   Icon: string,
    delay?: number,
}