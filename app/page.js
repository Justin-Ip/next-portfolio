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
              <Grid item xs={12} md={6}>
                <Image
                  className="rounded-lg"
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
                name="Skill"
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nulla ut orci sollicitudin lobortis et nec augue. Sed at tellus tristique, lacinia libero ut, sodales lorem."
                }
                sx={{ height: 200, backgroundSize: "contain" }}
                image="next.svg"
                projects={[
                  {
                    name: "Project",
                    url: "#",
                  },
                ]}
              />
              <SkillCard
                name="Skill"
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nulla ut orci sollicitudin lobortis et nec augue. Sed at tellus tristique, lacinia libero ut, sodales lorem."
                }
                sx={{
                  height: 200,
                  backgroundSize: "contain",
                }}
                image="next.svg"
                projects={[
                  {
                    name: "Project",
                    url: "#",
                  },
                ]}
              />
              <SkillCard
                name="Skill"
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nulla ut orci sollicitudin lobortis et nec augue. Sed at tellus tristique, lacinia libero ut, sodales lorem."
                }
                sx={{
                  height: 200,
                  backgroundSize: "contain",
                }}
                image="next.svg"
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
