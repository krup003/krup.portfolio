import React from 'react'
import Experience from './ExperianceComponent'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col py-10 '>
            <Experience
                logo="logos/Benzatine.png"
                company="Benzatine Infotech"
                role="Full stack Developer"
                duration="Aug 2025 - Present"
                points={[
                    "Contributing to the development of enterprise-grade frontend systems powering modern AI Chat website.",
                ]}
                rounded='top'
                skills={['Next.js', 'TypeScript', 'Tailwind CSS', "Zustand" , "Node JS" , "Express" , "Postgres" , "MongoDB"]}
            />
            <Experience
                logo="logos/Invints.png"
                company="Invints Infotech"
                role="Jr.Frontend Developer"
                duration="April 2024 - July 2025"
                points={[
                    "Worked as a Frontend Developer, transforming Figma design into fully responsive, high-performance website",
                    "Implemented core SEO features: lazy loading, WebP images, clean URLs, meta tags, Open Graph, and accessibility.",
                ]}
                rounded='none'
                skills={["React", "Sanity", "Supabase", "Tailwind CSS", "SEO", "Redux"]}
            />
            <Experience
                logo="logos/EncodeWork.jpeg"
                company="EncodeWork LLP"
                role="React Developer Intern"
                duration="Jan 2024 - April 2024"
                points={[
                    "Worked as an intern and learned HTML, CSS, React, and Bootstrap.",
                ]}
                rounded='bottom'
                skills={["React", "HTML", "Firebase"]}
            />
        </div>
    )
}

export default ExperienceSection
