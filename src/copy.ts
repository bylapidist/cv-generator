const HEADER = {
    name: 'Brett Dorrans',
    contact: ['hello@lapidist.net', 'lapidist.net', 'github.com/bylapidist']
};

const SUMMARY = `With over 10 years of software development experience, I’ve led diverse teams in creating high-quality products with a focus on accessibility and inclusive design. I collaborate closely with stakeholders to decipher requirements, align strategies, and promote best practices, fostering a culture of excellence and delivering work to the highest standard.`;

const SKILLS = [
    {
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'PHP']
    },
    {
        title: 'Frameworks',
        skills: [
            'React',
            'Vue',
            'Next',
            'Gatsby',
            'Symfony',
            'Angular'
        ]
    },
    {
        title: 'Styling',
        skills: ['CSS', 'SCSS', 'CSS Modules', 'Styled Components', 'Tailwind']
    },
    {
        title: 'Testing',
        skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright']
    },
    {
        title: 'Tooling',
        skills: [
            'Webpack',
            'Babel',
            'Vite',
            'Parcel',
            'Rollup',
            'Redux',
            'React Query',
            'git',
            'docker',
            'Storybook'
        ]
    },
    {
        title: 'Back-End',
        skills: ['Node', 'Express', 'REST', 'GraphQL', 'MySQL', 'Doctrine']
    },
    {
        title: 'CI/CI',
        skills: ['Jenkins', 'GitHub Actions', 'CircleCI', 'Azure']
    }
];

const EXPERIENCES = [
    {
        title: 'Senior Software Engineer',
        company: 'LendInvest',
        location: 'London, United Kingdom (remote)',
        from: '2021',
        to: '2023',
        bullets: [
            'Led a high-performing team of talented engineers as the co-principal engineer of the design system team, developing processes and software for fintech within the specialist mortgage market.',
            'Orchestrated seamless migration of design system from Flow and JavaScript to TypeScript, ensuring enhanced safety and consistency without any downtime.',
            'Developed loan management software using a micro frontend architecture, ensuring efficient scalability.',
            'Promoted the widespread use of the design system, incorporating reusable components and design tokens across multiple products, leading to a 75% decrease in loan application cost and 30% less rewritten code.',
            'Collaborated closely with stakeholders to align digital strategies with business objectives, ensuring projects were delivered efficiently and to the highest standard.',
            'Championed inclusive team culture, prioritising accessibility and research-driven development, to ensure team cohesion.',
            'Engaged in talent acquisition, advocating for a people-centric approach valuing individuality, transparency and respect.',
            'Led the effort to implement WCAG accessibility conformance, aspiring to AA and in some cases AAA standard.'
        ]
    },
    {
        title: 'Software Developer',
        company: 'Golden Charter',
        location: 'Glasgow, United Kingdom (remote)',
        from: '2020',
        to: '2021',
        bullets: [
            'Built software for the funeral industry using Vue, JavaScript, and C#, ensuring tailored solutions that met industry and regulatory compliance needs.',
            'Transitioned products to a design system and component-based workflow, enhancing consistency and efficiency.',
            'Enhanced code quality through CI tooling (Azure), boosting developer productivity via automated release cycles and adoption of a robust versioning strategy.',
            'Modernised legacy C# applications, optimising performance and functionality for improved developer experience and future proofing.',
            'Advocated for accessibility and inclusive design principles, fostering a more user-friendly and inclusive user experience.',
            'Mentored junior team members on best practices, facilitating skill development and knowledge sharing.'
        ]
    },
    {
        title: 'Front End Team Lead',
        company: 'Markup',
        location: 'Glasgow, United Kingdom (hybrid)',
        from: '2018',
        to: '2019',
        bullets: [
            'Led a front-end engineering team for the GANT e-commerce site, ensuring successful project delivery and team cohesion.',
            'Developed enterprise e-commerce software for leading fashion brands using React, JavaScript and Symfony, geared towards their brand-specific needs.',
            'Mentored junior developers, fostering skill improvement and knowledge dissemination.',
            'Aligned with company goals, effectively communicating features and promoting client relations.',
            'Constructed sprints, set and followed through on goals, and chaired agile rituals to improve team efficiency and cohesion.',
            'Developed a component library in Storybook and React, improving tooling, processes, design methodology, development velocity, and consistency.',
            'Re-engineered the checkout flow, increasing conversion and reducing cart abandonment, leading to increased sales.'
        ]
    },
    {
        title: 'Developer',
        company: 'Everyone',
        location: 'Glasgow, United Kingdom',
        from: '2016',
        to: '2017',
        bullets: [
            'Assumed responsibility for managing intricate project needs and estimating timelines, resulting in the prompt and cost effective delivery of thorough, detail-oriented experiences.',
            'Created a cross-platform mobile app for the Go Industrial museum group, using Iconic and Angular, to guarantee seamless operation on all devices.',
            'Engineered a social media platform for Craft Scotland, integrating job boards, profiles, e-commerce storefronts, and backend CMS tooling, demonstrating adeptness in creating multifaceted digital solutions.'
        ]
    },
    {
        title: 'Senior Digital Designer',
        company: 'Ibiza Digital Media',
        location: 'Glasgow, United Kingdom',
        from: '2014',
        to: '2016',
        bullets: [
            'Led a multidisciplinary team to create custom websites, web apps, and graphics for print, online, and social media.',
            'Designed and developed a mobile-first e-commerce website for Eden Mill, boosting sales and improving online presence.',
            'Facilitated skill development and efficiency through training sessions on internal software, Photoshop and Illustrator.',
            'Developed an online magazine from concept to serving 85k users per month, amplifying brand visibility and engagement.',
            'Ensured project success by working together with stakeholders at all levels to assess client requirements, plan communication, and suggest best practices for putting commercial ideas into action.',
            'Managed full project lifecycle, including scoping project costings and timescales, ensuring timely and economical delivery.'
        ]
    }
];

export default {
    HEADER,
    SUMMARY,
    SKILLS,
    EXPERIENCES
};
