import appwrite from "../../assets/appwrite.png";
import supremeNomadsDetailing from "../../assets/supreme_nomads_detailing.png";
import postman from "../../assets/postman-icon.png";
import yesChef from "../../assets/yescheflogo.png";
import gridironStream from "../../assets/GIS.jpg";
import thatConference from "../../assets/thatConf.jpg";
import piecesForDevelopers from "../../assets/Pieces.jpg";
import fourPodcast from "../../assets/404Podcast.jpg";
import ryanFurrer from "../../assets/ryan.png";
import DSD from "../../assets/dsd.jpg";

export const Labels = {
    about: {
        heading2: "About Me",
        content: "Full-stack software engineer with experience building developer-facing tools and shipping features across distributed systems. Proven track record of delivering end-to-end functionality and improving reliability in production environments. Brings a background in English to translate complex system behavior into clear, user-focused workflows and documentation, strengthening developer experience.",
        education: {
            school: "TCNJ (The College of New Jersey)",
            degree: "Bachelor of Arts",
            year: "2018"
        }
    },
    blog: {
        heading2: "Technical Writing",
        description: "I've written articles for leading developer platforms, sharing insights on React, TypeScript, and web development best practices.",
        articles: [
            {
                title: "Appwrite Functions",
                excerpt: "Learn how to build serverless functions with Appwrite in this comprehensive guide.",
                link: "https://appwrite.io/docs/functions",
                platform: "Appwrite"
            },
            {
                title: "React Best Practices for 2024",
                excerpt: "A deep dive into modern React patterns and best practices for building scalable applications.",
                link: "https://blog.example.com/react-best-practices",
                platform: "Personal Blog"
            },
            {
                title: "TypeScript Tips for Beginners",
                excerpt: "Practical TypeScript tips that will help you write better, safer code.",
                link: "https://blog.example.com/typescript-tips",
                platform: "Personal Blog"
            }
        ]
    },
    contact:{
        heading2: "My Services",
        contactCardChat: {
            title: "Schedule a 1 on 1",
            content: "A chance for us to get to know each other better through an online 1 on 1 call!",
            button: "Schedule a Call",
            link: "https://cal.com/choir241"
        },
        contactCardProject: {
            title: "Build a Project",
            content: "Need a project to be built? Reach out so we can figure out all the details together!",
            button: "Start a Project",
            link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=richardchoi54@gmail.com"
        },
        contactForStream: {
            title: "Contact for a Stream",
            content: "Want me to join your stream? Let's figure out a time and day to go live together!",
            button: "Contact for a Stream",
            link: "https://x.com/choir241"
        }
    },
    features:{
        heading2: "Community Impact",
        stats: [
            { label: "Contributions", value: "3,778+" },
            { label: "Calls", value: "80+" },
            { label: "Tech Meetups Attended", value: "50+" },
            { label: "Conferences Attended", value: "7+" }
        ]
    },
    footer: {
        author: "Richard",
        description: "Full-stack Developer & Technical Writer",
        copyright: "Richard. All rights reserved.",
    },
    header: {
        heading1: "Hi, I'm Richard",
        heading2: "Full-stack Developer & Technical Writer",
        tagline: "I build accessible, user-focused web applications and help developers write better code through technical writing and mentoring.",
        cta: "View My Work",
        resumeLink: "/Richard_Choi_Resume.pdf"
    },
    skills: {
        heading2: "Tech I Work With",
        categories: [
            {
                name: "Frontend",
                skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Radix UI"]
            },
            {
                name: "Backend",
                skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Appwrite"]
            },
            {
                name: "Tools & Other",
                skills: ["Git", "Docker", "Technical Writing", "Figma", "CI/CD"]
            }
        ]
    },
    experience: {
        heading2: "Experience",
        jobs: [
            {
                company: "Supreme Nomads",
                role: "Full-Stack Engineer",
                period: "Nov 2025 - Apr 2026",
                description: "Architectured a full-stack application to enable end-to-end services selection, appointments reservation, and user info storage, creating a digital platform to expand business operations."
            },
            {
                company: "Postman",
                role: "Full-Stack Engineer (Intern)",
                period: "Jan 2026 - Apr 2026",
                description: "Shipped end-to-end file input support for Postman Flows across 5 codebases (desktop/web client, local and cloud execution backends, shared block library, and compiler), designing the client → backend metadata contract and updating the storage and hydration paths so uploaded files resolve correctly across cloud, local, deployed, scheduled, and module flow runs."
            },
            {
                company: "Dallas Software Developers",
                role: "Full Stack Developer",
                period: "2025",
                description: "Architected and built a full-stack booking platform (Node.js + React) enabling service selection, appointment scheduling, and user data persistence, replacing manual booking workflows and creating a scalable digital system for business operations."
            },
            {
                company: "Appwrite",
                role: "Technical Writer (Intern)",
                period: "Jan 2024 - Sept 2024",
                description: "Identified missing gaps in the Appwrite CLI documentation by uncovering missing deployment guidance for functions, sites, teams, topics, and buckets. Designed and wrote cross-language code examples (ie. Go, React, and Python) to reduce onboarding friction and enable developers to adopt CLI workflows across different stacks."
            }
        ]
    },
    projectCarousel: {
        heading2: "Projects I've Worked On",
        project1: {
            name: "Postman",
            description: "API Development and Automation - Building custom integrations and API-first workflows for enterprise clients.",
            tech: ["TypeScript", "REST APIs", "Postman"],
            link: "https://postman.com",
            github: "https://github.com/postmanlabs",
            logo: postman
        },
        project2: {
            name: "Supreme Nomads Detailing",
            description: "Car Detailing Service",
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://supremenomads.com/",
            github: "https://github.com/choir241/snd-project",
            logo: supremeNomadsDetailing
        },
        project3: {
            name: "Appwrite",
            description: "Open-source backend company",
            tech: ["React", "TypeScript", "MDX"],
            link: "https://appwrite.io/docs",
            github: "https://github.com/appwrite/website",
            logo: appwrite
        },
        project4: {
            name: "Yes Chef",
            description: "Restaurant kitchen management system",
            tech: ["React", "Express", "MongoDB"],
            link: "https://yescheff.netlify.app/",
            github: "https://github.com/team-elder-and-nikki/yes-chef-app",
            logo: yesChef
        }
    },
    socialLinks: {
        github: {
            link: "https://github.com/choir241",
            label: "GitHub Profile"
                },
        twitter: {
            link: "https://x.com/choir241",
            label: "Twitter Profile"
        },
        linkedin: {
            link: "https://www.linkedin.com/in/richard-choir/",
            label: "LinkedIn Profile"
        },
        bluesky: {
            link: "https://bsky.app/profile/choir241.bsky.social",
            label: "Bluesky Profile"
        }
    },
    streamCarousel: {
        heading2: "Streams & Appearances",
        stream1: {
            title: "Development Technical Presentations: Gridiron Survivor Project",
            host: "Gridiron Survivor",
            link: "https://www.youtube.com/watch?v=JfLfIKMgnDQ&ab_channel=CodingwithShashi",
            image: gridironStream
        },
        stream2: {
            title: "Learning Pieces for Developers: Ellie Zubrowski & Richard Choi",
            host: "Pieces for Developers",
            link: "https://www.youtube.com/watch?v=4CEynrl8xaw&t=3s&ab_channel=PiecesforDevelopers",
            image: piecesForDevelopers
        },
        stream3: {
            title: "Leveling Up: Customer Service Rep to Appwrite Intern to ???",
            host: "Ryan Furrer",
            link: "https://www.youtube.com/watch?v=KiWx5bwNEyE&ab_channel=RyanFurrer",
            image: ryanFurrer
        },
        stream4: {
            title: "THAT Conference Online with Keynote by Mark Techson",
            host: "That Conference",
            link: "https://www.youtube.com/watch?v=wf56WT_rO_A&ab_channel=ThatConference",
            image: thatConference
        },
        stream5: {
            title: "404 Podcast - Episode 3 - Trials and Triumphs - Richard's Journey in Tech!",
            host: "404 Podcast",
            link: "https://www.youtube.com/watch?v=wcJVHQJQXzg&t=1s&ab_channel=BitHatch",
            image: fourPodcast
        },
        stream6: {
            title: "SOFTWARE DEVELOPERS 6 WEEK CHALLENGE RESULTS!",
            host: "Dallas Software Developers",
            link: "https://www.youtube.com/watch?v=d0kh7tikUJM&t=6339s&ab_channel=DThompsonDev",
            image: DSD
        }
    },
    testimonialCarousel: {
        heading2: "Testimonials",
        testimonial1: {
            text: "I had the pleasure of observing Richard during our 2025 6-week software development cohort at the Dallas Software Developers group. He quickly stood out for his technical skills in MongoDB, Express, React, and TypeScript, and the ability to apply them to real-world projects. Richard excelled at both individual work and teamwork, always contributing valuable ideas and collaborating effectively. He demonstrated impressive problem-solving skills, tackling challenges with a positive, growth-oriented mindset. By the end of the cohort, Richard successfully delivered a high-quality project, a smart restaurant kitchen management system where users can track orders from the POS to the kitchen. I’m confident that he will continue to thrive in software development and I highly recommend him for any future opportunities.",
            author: "Naomi Carrigan",
            role: "Naomi was senior to Richard but didn't manage Richard directly"
        },
        testimonial2: {
            text: "It is with great pleasure and without reservation that I recommend Richard Choi for their search for professional opportunities as a software developer. As a volunteer team leader during the Commit Your Code 2025 tech cohort event (CYC), I had the distinct honor of working closely with Richard and observing their remarkable talents, unwavering commitment, and significant growth. The CYC cohort was a demanding program, challenging over 120 participants across 14 teams to build fully functional applications within a six-week timeframe. In this dynamic and challenging environment, Richard consistently distinguished himself through his exceptional abilities in front-end development, documentation, and leadership. His proficiency in these areas was instrumental in enabling our team to meet every minimum viable product (MVP) requirement, deliver all work on time, and maintain a high level of team motivation. Richard's contributions to our team were pivotal to our success. Specifically, he played a key role in creating the initial coding practices document, guiding team members to adhere to these practices through thorough code reviews, and delivering several critical MVP components, including an order prediction tool for a smart kitchen application. To illustrate, Richard single-handedly developed a predictive/historical order patterns tool for our application, which proved to be one of the most complex and crucial tools required for the program's final presentation. Furthermore, Richard demonstrated initiative by consistently keeping the team informed of upcoming deadlines, and ensuring all documentation and pending code reviews were addressed promptly. This proactive approach not only enhanced our team's output but also fostered a highly collaborative and productive environment. For example, within just two weeks, the team successfully resolved over 50 code pull requests; Richard not only reviewed these submissions but also provided valuable feedback that improved the code quality and prevented future issues, enabling the team to complete more than 60% of the project deliverables in a very short span of time. Beyond their technical expertise, Richard possesses outstanding autonomy, team-building skills, and leadership qualities. Richard consistently demonstrated a strong work ethic, an eagerness to learn, and a positive, solution-oriented attitude. Their ability to effectively manage time to meet tight deadlines and to take a leadership role in guiding team discussions on complex problems was particularly impressive and significantly contributed to the team's cohesion and productivity. For example, recognizing the cohort program's limited timeline and our team's smaller size, Richard proactively fostered a positive and supportive environment. He consistently celebrated small victories, provided constructive and highly productive feedback on team members' work, and served as a valuable resource for navigating the technology stack. Richard's deep knowledge and willingness to assist empowered teammates to make informed decisions independently and to develop actionable plans that consistently met every deadline. I was consistently impressed by Richard's resilience in the face of challenges, creative problem-solving skills, and genuine desire to support others. This combination of qualities, coupled with their technical abilities, makes them an exceptional candidate. In summary, Richard is a highly skilled, motivated, and dedicated individual with a strong work ethic and a passion for technology. Their contributions to the Commit Your Code 2025 cohort were invaluable, and I am confident that they will excel in any future endeavor. I wholeheartedly and unreservedly recommend Richard Choi. Please do not hesitate to contact me if you require any further information or have any questions. I would be pleased to provide additional details regarding Richard's performance and potential.",
            author: "Elder",
            role: "Volunteer Team Leader"
        }
    }
};