import { Container, Grid, Typography } from "@mui/material";
import ProjectCards from "../components/ProjectCards";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <main>
      <Grid container className="min-h-fit mb-10">
        <Container>
          <Grid container direction="column" gap={5}>
            <div className="text-center mt-20 my-5">
              <Typography variant="h2">Projects</Typography>
            </div>
          </Grid>
          <ProjectCards/>
        </Container>
      </Grid>
    </main>
  );
}
