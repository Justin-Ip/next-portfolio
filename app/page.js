import { Container, Fade, Grid, Typography } from "@mui/material";
import Typewriter from "./components/FrontPageTypewriter";
import Image from "next/image";
import SkillCard from "./components/SkillCard";

import profilePic from "../static/profile.jpeg";
import React from "react";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <Grid container className="min-h-screen mb-10">
        <Container>
          <Grid container direction="column" gap={5}>
            <Grid></Grid>
            <Grid container direction="column">
              <Typewriter />
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={5}
            >
              <Grid container item xs={12} md={6} justifyContent="center">
                <Image
                  className="rounded-3xl"
                  src={profilePic}
                  alt=""
                  priority={true}
                ></Image>
              </Grid>
              <Grid item xs>
                <Typography variant="h4" marginBottom={1} component="h2">
                  About Me
                </Typography>
                <Typography variant="p" paragraph={true}>
                  Hello, I&apos;m Justin Ip, an engineering and additive manufacturing professional with a strong background in prototyping and product design. I&apos;m proficient in 3D modeling using CAD software like SolidWorks, Creo ProE, Blender, and Rhino.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="stretch"
              justifyContent="center"
              gap={5}
            >
              <SkillCard
                name="SolidWorks"
                description={
                  "I am proficient in SolidWorks, excelling in 3D modeling, parametric design, and creating detailed engineering drawings.  With a keen eye for precision, I am adept at leveraging SolidWorks to bring innovative design concepts to life and ensure accuracy throughout the product development process."
                }
                sx={{ height: 200, backgroundSize: "contain", backgroundOrigin: 'content-box', padding: '1em' , pt: '2rem'}}
                image="SolidWorks.png"
                projects={[
                  {
                    name: "Project",
                    url: "#",
                  },
                ]}
              />
              <SkillCard
                name="Additive Manufacturing"
                description={
                  "With a robust background in additive manufacturing and expertise in FDM, SLA, and PolyJet 3D printers, I excel in refining 3D printing processes through slicer adjustments and printer modifications. This extends to repairs and upgrades, making me a valuable advisor for advanced 3D printing techniques, enhancing project success and operational efficiency. Whether overseeing small-scale factories or engaging in R&D prototyping, my consistent proficiency in additive manufacturing showcases a versatile skill set."
                }
                sx={{
                  height: 200,
                  backgroundSize: "contain",
                  backgroundOrigin: 'content-box', padding: '1em' , pt: '2rem'
                }}
                image="3dprinting.png"
                projects={[
                  {
                    name: "Project",
                    url: "#",
                  },
                ]}
              />
              <SkillCard
                name="Jewlery Design"
                description={
                  "As a Design and Manufacturing Engineer, I excel in jewelry design, incorporating additive manufacturing. Proficient in SolidWorks and Rhino, my expertise goes beyond traditional engineering, blending technical and artistic aspects. I seamlessly integrate organic aesthetics with structural integrity, showcasing techniques like filigree and milgrain. Furthermore, I work closely with casters and setters to accentuate the radiant brilliance of the gemstones."
                }
                sx={{
                  height: 200,
                  backgroundSize: "contain",
                  backgroundOrigin: 'content-box', /*padding: '1em' , pt: '2rem'*/
                }}
                image="jewelry.png"
                projects={[
                  {
                    name: "Project",
                    url: "#",
                  },
                ]}
              />
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="baseline"
              justifyContent="center"
            >
              <Typography variant="p">
                This section is still work-in-progress.
              </Typography>
            </Grid>
            <ContactForm />
          </Grid>
        </Container>
      </Grid>
    </main>
  );
}
