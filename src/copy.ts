const SKILLS = [
    {
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'PHP', 'HTML']
    },
    {
        title: 'Frameworks',
        skills: ['React', 'Vue', 'Next', 'Gatsby', 'Symfony', 'Angular']
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
            'Co-principal engineer of the design system team, engineering software for a mortgage fintech.',
            'Migrated codebase to TypeScript, ensuring enhanced safety and consistency without downtime.',
            'Developed scalable loan management software using a micro-frontend architecture.',
            'Promoted the use of the design system across multiple internal and external products.',
            'Adoption led to a 75% decrease in loan application cost and 30% less rewritten code.',
            'Championed inclusive team culture, prioritising accessibility and research-driven development.',
            'Engaged in recruitment, using an approach valuing individuality, transparency and respect.',
            'Led effort to implement WCAG accessibility, aspiring to AA and in some cases AAA standard.'
        ]
    },
    {
        title: 'Software Developer',
        company: 'Golden Charter',
        location: 'Glasgow, United Kingdom (remote)',
        from: '2020',
        to: '2021',
        bullets: [
            'Built software for the funeral industry, ensuring compliance with regulatory needs.',
            'Moved products to a design system and component based workflow, for consistency and efficiency.',
            'Enhanced code quality through CI E2E testing, boosting productivity and safety.',
            'Implemented automated release cycles and adoption of a robust versioning strategy.',
            'Modernised legacy C# applications, optimising performance and future proofing.',
            'Advocated for accessibility, fostering a more user-friendly and inclusive user experience.',
            'Mentored junior team members on best practices, skill development, and knowledge sharing.'
        ]
    },
    {
        title: 'Front End Team Lead',
        company: 'Markup',
        location: 'Glasgow, United Kingdom (hybrid)',
        from: '2018',
        to: '2019',
        bullets: [
            'Led the front-end team, ensuring successful project delivery and team cohesion.',
            'Developed e-commerce software for fashion brands geared towards their brand-specific needs.',
            'Mentored junior developers, fostering skill improvement and knowledge dissemination.',
            'Travelled internationally, communicating features and promoting client relations.',
            'Constructed sprints, set goals, and chaired agile rituals to improve team efficiency.',
            'Developed a component library, improving processes, development velocity, and consistency.',
            'Improved checkout flow, reducing cart abandonment, leading to increased sales.'
        ]
    },
    {
        title: 'Developer',
        company: 'Everyone',
        location: 'Glasgow, United Kingdom',
        from: '2016',
        to: '2017',
        bullets: [
            'Responsible for project needs and timelines, resulting in prompt and cost effective delivery.',
            'Created a cross-platform mobile app, to guarantee seamless operation on all devices.',
            'Engineered a social media platform, integrating job boards, profiles, e-commerce storefronts, and backend CMS tooling, demonstrating adeptness in creating multifaceted digital solutions.'
        ]
    },
    {
        title: 'Senior Digital Designer',
        company: 'Ibiza Digital Media',
        location: 'Glasgow, United Kingdom',
        from: '2014',
        to: '2016',
        bullets: [
            'Led a team to create websites, apps, and graphics for print, online, and social media.',
            'Designed and developed mobile-first e-commerce websites, boosting sales and online presence.',
            'Facilitated skill development and efficiency through training sessions on internal software.',
            'Developed an online magazine from concept to serving 85k users per month.',
            'Ensured project success by working with stakeholders at all levels to assess client requirements, plan communication, and suggest best practices for putting commercial ideas into action.',
            'Managed lifecycle including scoping, costing, and timescales, ensuring economical delivery.'
        ]
    }
];

export default {
    SKILLS,
    EXPERIENCES
};
