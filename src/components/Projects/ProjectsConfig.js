import goodzoneLogo from '../../assets/img/goodzone-logo.svg'
import slotomaniaLogo from '../../assets/img/slotomania-logo.png'
import hofLogo from '../../assets/img/hof-logo.png'
import corelogicLogo from '../../assets/img/cl-logo.png'
import screwfixLogo from '../../assets/img/screwfix-logo.png'
import sumsungLogo from '../../assets/img/sumsung-logo.png'
import satchelLogo from '../../assets/img/satchel-logo.png'
import enelyticsLogo from '../../assets/img/enelytics-logo.png'

export const PROJECTS = [
    {
        title: 'Goodzone',
        role: 'Co-owner | Software Engineer | Architect',
        description: 'Goodzone is a tool that unites people for the sake of knowledge, incredible emotions, and good deeds that give security and protection to those who need it. Up to 95% of all collected funds will be transferred to good deeds.',
        imgUrl: goodzoneLogo,
        url: 'https://goodzone.io',
        technologies: 'Java, Spock Framework, Spring Boot, PostgreSQL, Docker, Stripe (Software), Gitlab, AWS Lambda, Amazon EC2, Amazon RDS, Amazon Route 53, S3, CloudFront, HTML, CSS, JS.',
    },
    {
        title: 'Playtika | Slotomania',
        role: 'Senior Software Engineer',
        description: 'Slotomania is a free casual mobile game. Implemented/supported cards (collectibles) functionality.',
        imgUrl: slotomaniaLogo,
        url: 'https://www.slotomania.com',
        technologies: 'Java, Spring Boot, Spring Cloud, Maria DB, Aerospike, Kafka, Grafana, ELK',
    },
    {
        title: 'Playtika | HoF',
        role: 'Senior Software Engineer',
        description: 'HoF is a free casual mobile game. Implemented/supported send offers functionality.',
        imgUrl: hofLogo,
        url: 'https://www.houseoffun.com/',
        technologies: 'Java, Spring Boot, Spring Cloud, Maria DB, Aerospike, Kafka, Grafana, ELK',
    },
    {
        title: 'CoreLogic',
        role: 'Full-Stack Software Engineer',
        description: 'Large project for customers from the USA, based on Spring framework.',
        imgUrl: corelogicLogo,
        url: 'https://www.corelogic.com/',
        technologies: 'Java, Spring Boot, Spring Cloud, Angular 2+',
    },
    {
        title: 'Screwfix',
        role: 'Full-Stack Software Engineer',
        description: 'Large project for customers from Europe, based on the ATG framework.',
        imgUrl: screwfixLogo,
        url: 'https://www.screwfix.com/',
        technologies: 'Java, ATG, Oracle DB, JSP',
    },
    {
        title: 'AVAS',
        role: 'Full-Stack Software Engineer',
        description: 'System for searching for vulnerabilities in libraries and software products. (internal application)',
        imgUrl: sumsungLogo,
        url: 'https://www.samsung.com/',
        technologies: 'Java, Spring, MyBatis, MySQL, Angular 6+',
    },
    {
        title: 'FinTech',
        role: 'Full-Stack Software Engineer',
        description: 'Implemented a system for payment acceptance, user registration, and user administration.',
        imgUrl: satchelLogo,
        url: 'https://satchel.eu/',
        technologies: 'Java, Spring, JPA, PostgreSQL, RabbitMQ, Angular 2/5+, Bootstrap',
    },
    {
        title: 'Energy invoice management and analytics',
        role: 'Full-Stack Software Engineer',
        description: 'Implemented a system for invoices and billing management, reporting, and analytics for large municipal organizations in the US.',
        imgUrl: enelyticsLogo,
        url: 'https://www.enelytics.com/',
        technologies: 'Java, Spring, JasperReports, JPA, MySQL, Apache POI, ReactJs, Redux, Redux-Forms, Bootstrap, AmCharts',
    },
]
