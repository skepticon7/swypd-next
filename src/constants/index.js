
const navItems = [
    {
        id : "values",
        title : "Values"
    },
    {
        id : "projects",
        title : "Projects"
    },
    {
        id : "how",
        title : "How it works"
    },
    {
        id : "pricing",
        title : "Pricing"
    },
    {
        id : "faq",
        title : "FAQ"
    }
]

const faqItems = [
    {
        question: 'How long does a project take?',
        answer: 'It depends on the scope. Small websites can take 2–4 weeks, while larger projects may take longer.'
    },
    {
        question: 'Do you offer ongoing support?',
        answer: 'Yes, we provide maintenance and support packages tailored to your needs.'
    },
    {
        question: 'Can you work with my budget?',
        answer: 'We aim to create solutions that align with your budget while maintaining quality.'
    },
    {
        question: 'What makes you different?',
        answer: 'We focus on combining creativity, performance, and tailored strategies for each client.'
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Absolutely! We collaborate with clients worldwide through remote communication.'
    }
];

const valuesItems = [
    {
        title : "Human-first design",
        description : "We think like your users, not just like designers.",
        icon : "/assets/users.svg"
    }
    ,
    {
        title : "Transparency",
        description: "Clear communication and no hidden surprises.",
        icon : "/assets/transparency.svg"
    },
    {
        title : "Partnership",
        description: "Long term relationship, we grow when you grow",
        icon : "/assets/partnership.svg"
    },
    {
        title : "Quality & speed",
        description: "Professional results delivered on time.",
        icon : "/assets/quality.svg"
    }
]


const pricing = {
    'ads': {
        title: "AD Strategy",
        oneTime: {
            title : 'Kickstart Ads Package',
            price: "1199",
            features: [
                "Ad account setup & platform configuration",
                "Competitor analysis & audience research",
                "Campaign strategy development",
                "3 custom ad creatives (graphics/videos)",
                "Ad copywriting (headlines, descriptions, CTAs)",
                "Campaign launch & initial optimization",
                "One-time performance report with recommendations"
            ]
        },
        partner: {
            title : 'Monthly Management Package',
            price: "999",
            features: [
                "Ongoing campaign management & optimization",
                "Monthly competitor & audience research updates",
                "Weekly performance monitoring & adjustments",
                "8 new ad creatives monthly (graphics/videos)",
                "Continuous A/B testing & copy refinement",
                "Detailed monthly performance analytics",
                "Strategic consultation & planning sessions"
            ]
        }
    },
    'branding': {
        title: "Branding",
        oneTime: {
            title : 'Complete Branding Package',
            price: "1399",
            features: [
                "Brand discovery session (mission, vision, audience)",
                "Logo suite (primary, secondary, submark)",
                "Custom color palette (primary + secondary colors)",
                "Typography system (headline + body fonts)",
                "5 social media template designs",
                "Brand guidelines PDF document",
                "Final files in all formats (JPG, PNG, SVG, PDF)"
            ]
        },
        partner: {
            title : 'Brand Growth Partner',
            price: "1199",
            features: [
                "Complete branding package included",
                "Monthly brand asset refreshes & updates",
                "Ongoing social media template creation",
                "Brand consistency audits & recommendations",
                "Marketing collateral design support",
                "Priority revision requests",
                "Quarterly brand strategy sessions"
            ]
        }
    },
    'video': {
        title: "Video Editing",
        oneTime: {
            title : 'Pro Video Editing Package',
            price: "999",
            features: [
                "Edit up to 8 videos (1-2 minutes max)",
                "Professional cuts, transitions & color correction",
                "Audio leveling & background music integration",
                "Titles, captions, and basic graphics",
                "1 round of revisions per video",
                "Export in multiple social media formats",
                "Stock footage integration (limited selection)"
            ]
        },
        partner: {
            price: "799",
            title : 'Video Growth Partner',
            features: [
                "Up to 12 short-form videos monthly",
                "Up to 4 long-form videos monthly",
                "Advanced motion graphics & animations",
                "Priority delivery & unlimited minor revisions",
                "Extensive stock footage & sound effects library",
                "Monthly creative strategy consultation",
                "Custom branding elements integration"
            ]
        }
    },
    'website' : {
        title : 'Website Development',
        oneTime : {
            title : 'Starter Website Package',
            price : '1499',
            features : [
                "Up to 5 pages (Home, About, Services, Contact, Blog)",
                "Mobile & desktop responsive design",
                "Contact forms & lead capture",
                "Basic SEO setup (titles, descriptions)",
                "1 month of technical support",
                "Fast 2-3 week delivery",
                "Deployment & hosting setup"
            ]
        },
        partner : {
            price : '1999',
            title : 'Advanced Website Package',
            features : [
                "Everything in Starter Package +",
                "Backend setup (user accounts, admin panel, database)",
                "API integrations (payment, email, analytics)",
                "Enhanced security (authentication, SSL)",
                "2 months of technical support",
                "Custom functionality development",
                "Database design & management"
            ]
        }
    }
}

export {navItems , valuesItems  , pricing , faqItems};