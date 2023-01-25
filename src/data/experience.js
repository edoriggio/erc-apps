const _jobs = [
    {
        "company": "Università della Svizzera Italiana",
        "icon": "assets/companies/usi.svg",
        "jobs": [
            {
                "title": "Teaching Assistant",
                "type": "Part-Time",
                "period": "Feb 2023 - May 2023 · 4 months",
                "description": "Worked as a teaching assistant for the \"Engineering Project\" course (Bachelor in Informatics - 2nd year) taught by Dr. Andrea Mocci. During the semester I worked with and helped teach the basic elements of software engineering, such as CI/CD, Docker, Vue.JS, SpringBoot, and GitLab."
            },
            {
                "title": "Teaching Assistant",
                "type": "Part-Time",
                "period": "Sept 2022 - Dec 2022 · 4 months",
                "description": "Worked as a teaching assistant for the \"Web Atelier\" course (Bachelor in Informatics - 2nd year) taught by Prof. Dr. Cesare Pautasso. During the semester I worked with and helped teach the basic elements of web development, such as HTML, CSS, JavaScript, Node.JS, and Socket.IO."
            }
        ]
    },
    {
        "company": "Agic Technology",
        "icon": "assets/companies/agic.png",
        "title": "Frontend Developer Intern",
        "type": "Internship",
        "period": "Jul 2021 - Sept 2021 · 3 months",
        "description": "Worked as a frontend developer for the creation and release of an internal web application for IBL S.p.A. The technologies used during the internship were mainly Vue.JS and GitLab."
    },
    {
        "company": "Marina Militare",
        "icon": "assets/companies/marina.svg",
        "title": "C4 and Security Department Intern",
        "type": "Internship",
        "period": "Apr 2018 · 1 month",
        "description": "Worked in the Data Centre and Networking Department at the Marina Militare headquarters in Rome. The topic covered during the internship were the architecture of a Data Centre, the network services of a Data Centre, the security systems of a Data Centre, service deployment and creation of Virtual Machines, Operating Systems and Cyber Security."
    },
    {
        "company": "Toscano S.p.A.",
        "icon": "assets/companies/toscano.png",
        "title": "TSoftware Intern",
        "type": "Internship",
        "period": "Apr 2018 · 1 month"
    }
]

const _education = [
    {
        "company": "Università della Svizzera Italiana",
        "icon": "assets/companies/usi.svg",
        "jobs": [
            {
                "title": "MSc in Software and Data Engineering",
                "period": "Sept 2022 - Jun 2024",
            },
            {
                "title": "BSc in Computer Science",
                "period": "Sept 2019 - Jun 2022",
            }
        ]
    },
    {
        "company": "High School Affiliated to Shanghai Jiao Tong University",
        "icon": "assets/companies/jiaoda.png",
        "title": "Secondary School · Six-Months Mobility Programme",
        "type": "school",
        "period": "Sept 2017 - Feb 2018"
    },
    {
        "company": "Convitto Nazionale \"Vittorio Emanuele II\" - Roma",
        "icon": "assets/companies/convitto.png",
        "title": "Secondary School · International Scientific Lyceum - Chinese option",
        "type": "school",
        "period": "Sept 2014 - Jun 2019"
    },
    {
        "company": "Istituto Marymount Roma",
        "icon": "assets/companies/marymount.png",
        "title": "Preschool, Primary, and Middle School · Bilingual Italian-English",
        "type": "school",
        "period": "Sept 2003 - Jun 2014"
    }
]

export default {
    getJobs(cb) {
        cb(_jobs)
    },
    getEducation(cb) {
        cb(_education)
    }
}
