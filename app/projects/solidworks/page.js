import { Container, Grid, Typography } from "@mui/material";

export const metadata = {
  title: "Solidworks",
};

export default function SolidWorks() {
  return (
    <main>
      <Grid container className="min-h-fit mb-10">
        <Container>
          <Grid container direction="column" gap={5}>
            <div className="text-center mt-20 my-5">
              <Typography variant="h2">Solidworks</Typography>
            </div>
          </Grid>
        </Container>
      </Grid>
    </main>
  );
}
