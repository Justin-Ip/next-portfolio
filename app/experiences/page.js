import { Container, Grid, Typography } from "@mui/material";
import ExperienceTimeline from "../components/ExperienceTimeline";

export const metadata = {
  title: "Experiences",
};

export default function Experiences() {
  return (
    <main>
      <Grid container className="min-h-fit mb-10">
        <Container>
          <Grid container direction="column" gap={5}>
            <div className="text-center mt-20 my-5">
              <Typography variant="h2">Experiences</Typography>
              <ExperienceTimeline/>
            </div>
          </Grid>
        </Container>
      </Grid>
    </main>
  );
}
