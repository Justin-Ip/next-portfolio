import { Container, Fade, Grid, Typography } from "@mui/material";
import Typewriter from "./components/FrontPageTypewriter";
import Image from "next/image";

import profilePic from "../static/profile.jpeg";
import React from "react";
import ContactForm from "./components/ContactForm";
import HomePageImageList from "./components/HomePageImageList";
import ProjectCards from "./components/ProjectCards";

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
                  I&apos;m an engineering and additive manufacturing professional with a strong background in prototyping and product design. I&apos;m proficient in 3D modeling using CAD software like SolidWorks, Creo ProE, Blender, and Rhino.
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Typography variant="p" marginBottom={5}>
                This section is still work-in-progress.
              </Typography>
              <HomePageImageList />
            </Grid>
            <ContactForm />
          </Grid>
        </Container>
      </Grid>
    </main>
  );
}
