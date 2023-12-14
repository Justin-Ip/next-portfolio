import { Grid } from "@mui/material";
import SkillCard from "../components/SkillCard";

export default function ProjectCards() {
    return (<Grid
        container
        direction="row"
        alignItems="stretch"
        justifyContent="center"
        gap={5}
    >
        <SkillCard
            name="SolidWorks"
            id="solidworks"
            description={
                "I am proficient in SolidWorks, excelling in 3D modeling, parametric design, and creating detailed engineering drawings.  With a keen eye for precision, I am adept at leveraging SolidWorks to bring innovative design concepts to life and ensure accuracy throughout the product development process."
            }
            sx={{ height: 200, backgroundSize: "contain", backgroundOrigin: 'content-box', padding: '1em', pt: '2rem' }}
            image="SolidWorks.png"
            projects={[
                {
                    name: "Project",
                    url: "/projects/solidworks",
                },
            ]}
        />
        <SkillCard
            name="Additive Manufacturing"
            id="additive-manufacturing"
            description={
                "With a robust background in additive manufacturing and expertise in FDM, SLA, and PolyJet 3D printers, I excel in refining 3D printing processes through slicer adjustments and printer modifications. This extends to repairs and upgrades, making me a valuable advisor for advanced 3D printing techniques, enhancing project success and operational efficiency. Whether overseeing small-scale factories or engaging in R&D prototyping, my consistent proficiency in additive manufacturing showcases a versatile skill set."
            }
            sx={{
                height: 200,
                backgroundSize: "contain",
                backgroundOrigin: 'content-box', padding: '1em', pt: '2rem'
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
            id='jewlery-design'
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
    </Grid>)
}