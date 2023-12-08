"use client"

import * as React from 'react';
import "./ExperienceTimeline.css"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css"

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { Typography } from '@mui/material';

export default function ExperienceTimeline() {
  const elements = [
    {
      id: 1,
      title: "Design Engineer",
      location: "Eva Diamond Coporation",
      description: "I specialize in jewelry design, utilizing SolidWorks and Rhino for 3D iterations, refining designs for optimal cohesion between gemstones and metals, and employing SLA technology with LD-002R LCD and Phrozen Sonic Mini 8K printers to bring creations to life .",
      buttonText: "View projects",
      date: "August 2022 - Present",
      icon: "work"
    },
    {
      id: 2,
      title: "3D Lab",
      location: "PROOF Lab",
      description: "Managing Printers",
      buttonText: "View projects",
      date: "August 2022 - Present",
      icon: "work"
    },
    {
      id: 3,
      title: "3D Print Engineer",
      location: "Makelab",
      description: "Designing Prototypes",
      buttonText: "View projects",
      date: "August 2022 - Present",
      icon: "work"
    },
    {
      id: 4,
      title: "R&D Engineer Intern",
      location: "Actasys",
      description: "Designing Prototypes",
      buttonText: "View projects",
      date: "August 2022 - Present",
      icon: "work"
    },
    {
      id: 5,
      title: "Engineering Aide",
      location: "Con Edison",
      description: "Designing Prototypes",
      buttonText: "View projects",
      date: "August 2022 - Present",
      icon: "work"
    },
    {
      id: 6,
      title: "Stevens Insititute of Technology",
      location: "Hoboken, New Jersey",
      description:
        "B.E Mechanical Engineering",
      description2: "237A-LLFO-JCPO JU",
      buttonText: "Credits",
      date: "2018 - 2023",
      buttonLink: "https://cediploma.stevens.edu/validation/",
      icon: "school",
    },    
    {
      id: 6,
      title: "Stevens Insititute of Technology",
      location: "Hoboken, New Jersey",
      description:
        "Minor in Entreprenuership",
      description2: "2378-G5LL-JTPP JU",
      buttonText: "Credits",
      date: "2018 - 2023",
      buttonLink: "https://cediploma.stevens.edu/validation/",
      icon: "school",
    },
  ]

  let workIconStyles = { background: "#008AD8"}
  let schoolIconStyles = { background: "#9D1535"}

  return (
    <div>
    <VerticalTimeline animate={false} lineColor='#71797E'
    iconStyle={{ background: 'rgb(237, 123, 53)', color: '#11287f' }}>
      {
        elements.map(element => {
          let isWorkIcon = element.icon === "work";
          let showButton = 
            element.buttonText !== undefined && 
            element.buttonText !== null && 
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >

              <h3 className='vertical-timeline-element-title'>{element.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}  
              </h5>
              <p id="description">
                {element.description}
              </p> 
              <p id="description">
                {element.description2}
              </p> 
              {showButton && (
                <a 
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`} 
                  href={element.buttonLink !== undefined ? element.buttonLink : "#" }>{element.buttonText}
              </a>)}
            
            </VerticalTimelineElement>
          );
        })
      }
    </VerticalTimeline>
    </div>
  );
}