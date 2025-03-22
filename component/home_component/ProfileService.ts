import {SkillM} from "@/app/modal/SkillM";
import {Experience} from "@/app/modal/ExperienceM";
import gable from "@/public/image/gable.png";
import digile from "@/public/image/digile.png";
import ais from "@/public/image/ais.png";
import {ProfileInfoM} from "@/app/modal/ProfileM";
import axios from 'axios';
import {ResponseWrapper} from "@/app/modal/ResponseWrapper";
import {ExpertiesM} from "@/app/modal/ExpertiesM";

// let token = localStorage.getItem("token");
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJDUkVBVEVfREFURSI6MTczMzU3NzU3NTU2NCwiaXNzIjoiYmFja2VuZFNlcnZpY2UiLCJpZCI6IjEifQ.7L-YdGzw8Kef5-kspSFpYsXX4X3ZC7kS0-V0Lqiz-1o';

async function login() {
    // axios.
}

export function getListAreaOfExpV2(): string[] {

    return [
        "Backend developer",
        "Web developer",
        "Java developer",
        "Windows server administration",
        "Linux server administration"
    ];
}

export async function getListAreaOfExp(): Promise<ExpertiesM[]> {

    // const promise = await axios.post<ResponseWrapper<ExpertiesM[]>>("http://localhost:8081/api/v1/s/expertise", null, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // });
    // return promise.data.objectValue;

    const list: ExpertiesM[] = [];
    getListAreaOfExpV2().forEach((item) => {
        list.push({
            expertiseDisplay: item,
            expertiseValue: item,
        })
    })
    return list;

}


export function getLastUpdate(): string {
    // return "2024 June"
    return process.env.NEXT_PUBLIC_BUILD_DATE + "";
}


export function getLinkCV(): string {
    return "https://drive.google.com/file/d/1-II0j3jQ754d6ObrLKEk7XZGUMsUD489/view?usp=drivesdk";
}

export function getProfile(): ProfileInfoM {
    const currentYear = new Date().getFullYear();
    const born: number = 1997;
    const age = currentYear - born;
    return {
        email: "thitiwas.n@icloud.com", name: "Thitiwas Nupan", rolePosition: "Software Developer", telno: "094-251-8661",
        age: `${age} years old`
    }
}

function calculateDifference(startYear:number, startMonth:number) {
    const startDate = new Date(startYear, startMonth - 1); // Months are 0-based
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
}

// const result = calculateDifference(2023, 4);
// console.log(`${result.years} years, ${result.months} months`);


export function getExperience(): Experience[] {
    const worktime = calculateDifference(2023, 4);
    return [
        {
            date: `2023 APRIL - PRESENT (${worktime.years} years ${worktime.months} months)`,
            name: "Java Developer, Software Developer | Degile (On site AIS)",
            link: 'https://digile.com/',
            responsibilities: [
                "Receive requirements form user and convert to development task",
                "Estimate task to develop time",
                "Design Database structure",
                "Develop software (Backend, Frontend, Server Task)",
                "Deploy software to Development Server & Staging Server",
                "Diagnosis & fix if any defects or issues from Production",
                "Support staff & team",
                "Communicate between user & development team",
                "Support deployment software to production"
            ],
            image: [digile.src, ais.src],
            project: [
                "6 Internal Software for engineers",
                "SMS Software for AIS activities"
            ]
        },{
            date: "2020 APRIL - 2023 APRIL (3 years)",
            name: "Application Developer | G-ABLE",
            link: 'https://www.g-able.com/',
            responsibilities: [
                "Implement server and setting network architecture",
                "Deploy Application and install necessary tools",
                "Database design and implement",
                "Develop Backend restful API",
                "Develop Web Frontend, Web Admin",
                "Unit test",
                "Maintain the system to smoothly continue",
                "Learning new technology",
            ],
            image: [gable.src], project: [
                "Develop Backend, Design Database and Web admin for Coffee Mobile Ordering Application",
                "Develop Backend, Design Database and Web admin for University Application",
                "Maintain Company SMS backend",
                'Presales work involves studying the technological feasibility of projects that customers are interested in'
            ]
        },
    ]
}


export async function getSkillService() {
    // return axios.post<ResponseWrapper<SkillM[]>>("http://localhost:8081/api/v1/s/skill", null, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // });
    const temp: ResponseWrapper<SkillM[]> = {
        status: "",
        objectValue: getSkillServiceV2(),
        code: "200"
    }
    return temp;
}

export function getSkillServiceV2(): SkillM[] {
    return [
        {
            display: "Programming skills",
            value: "programmingSkill",
            details: [
                {
                    title: "Expert Java",
                    detail: "-",
                    framework: [
                        "Spring",
                        "Spring boot",
                        "Spring Reactive",
                        "Java EE"
                    ]
                },
                {
                    title: "Expert SQL",
                    detail: "-",
                    framework: ["-"]
                },
                {
                    title: "Expert JavaScript, TypeScript",
                    detail: "-",
                    framework: [
                        "React",
                        "Next.js",
                        "Angular",
                        "Jquery"
                    ]
                },
                {
                    title: "HTML, CSS",
                    detail: "-",
                    framework: [
                        "Bootstrap CSS framework",
                        "Prime NG"
                    ]
                },
                {
                    title: "Python",
                    detail: "-",
                    framework: ["-"]
                },
                {
                    title: "Machine Learning",
                    detail: "Basic Predictive Machine Learning",
                    framework: ["-"]
                },
                {
                    title: "PHP",
                    detail: "-",
                    framework: ["-"]
                }
            ]
        }, {
            display: "Database",
            value: "database",
            details: [
                {
                    title: "MySQL",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "PostgreSQL",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Oracle",
                    detail: "",
                    framework: ["-"]
                },
            ]
        }, {
            display: "OS",
            value: "os",
            details: [
                {
                    title: "Windows Server",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Linux Server",
                    detail: "",
                    framework: ["Ubuntu"]
                }
            ]
        },

        {
            display: "Tools",
            value: "tool",
            details: [
                {
                    title: "Docker",
                    detail: "",
                    framework: ["Docker Compose"]
                },
                {
                    title: "K8s",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "GCP",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Web Server",
                    detail: "",
                    framework: ["Nginx", "Apache"]
                },
                {
                    title: "CMS",
                    detail: "",
                    framework: ["Strapi"]
                },
                {
                    title: "Source Control",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Jetbrain",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "VMware sphere",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "ELK Stack",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "AWS",
                    detail: "",
                    framework: ["ECS", "EC2"]
                },
                {
                    title: "JBoss",
                    detail: "",
                    framework: ["EAP", "WildFly"]
                }
            ]
        },
        {
            details: [
                {
                    detail: "",
                    framework: [
                        "Very good communication",
                        "Can explain well",
                        "Easy to understand",
                        "Fast learning"
                    ],
                    title: "Communication"
                }, {
                    detail: "",
                    framework: [
                        "Task splitting",
                        "Estimate time task"
                    ],
                    title: "Management Skill"
                }
            ], display: "Soft Skill", value: "Soft Skill"
        }, {
            details: [
                {
                    detail: "",
                    framework: ["-"],
                    title: "Windows command and Linux command"
                },
                {
                    detail: "",
                    framework: ["-"],
                    title: "Knowledge in network architecture and server infrastructure"
                },
                {
                    detail: "",
                    framework: ["-"],
                    title: "Video Streaming Server"
                },
                {
                    detail: "",
                    framework: ["-"],
                    title: "VPN server"
                },
                {
                    detail: "", framework: [
                        "HTTP",
                        "REST Service",
                        "Web socket",
                        "Remote EJB",
                        "Video Steaming HLS"
                    ],
                    title: "Protocol"
                }
            ], display: "Other", value: "Other"
        }
    ]
}
