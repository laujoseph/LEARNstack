import {
  Typography,
  Container,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

const lessonPlan = [
  {
    id: 1,
    title: "Lesson One",
  },
  {
    id: 2,
    title: "Lesson Two",
  },
  {
    id: 3,
    title: "Lesson Three",
  },
  {
    id: 4,
    title: "Lesson Four",
  },
  {
    id: 5,
    title: "Lesson Five",
  },
  {
    id: 6,
    title: "Lesson Six",
  },
  {
    id: 7,
    title: "Lesson Seven",
  },
  {
    id: 8,
    title: "Lesson Eight",
  },
  {
    id: 9,
    title: "Lesson Nine",
  },
  {
    id: 10,
    title: "Lesson Ten",
  },
];
const AccordionComp = () => {
  return (
    <div>
      <Accordion
        sx={{
          borderRadius: "90%",
          backgroundColor: "#181818",
          marginBottom: 1.5,
        }}
      >
        <AccordionSummary
          sx={{ backgroundColor: "#181818" }}
          expandIcon={<ExpandMoreOutlined />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="common.white" fontWeight="bold">
            Meet your instructor
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#181818" }}>
          <Typography color="common.white">Greetings mortal!</Typography>
        </AccordionDetails>
      </Accordion>
      {lessonPlan.map((lesson) => {
        return (
          <Accordion sx={{ backgroundColor: "#181818", marginBottom: 1.5 }}>
            <AccordionSummary
              sx={{ backgroundColor: "#181818" }}
              expandIcon={<ExpandMoreOutlined />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography color="common.white" fontWeight="bold">
                {lesson.id}. {lesson.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#181818" }}>
              <Typography color="common.white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionComp;
