export interface SkillM {
    display: string;
    value: string;
    details: Detail[]
}

export interface Detail {
    title: string
    detail: string
    framework: string[]
}