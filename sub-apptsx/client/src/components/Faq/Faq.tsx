import {
  Divider,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqBar = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Divider color="common.white" sx={{ marginTop: 5 }} />
      <Grid item xs={12}>
        <Typography
          fontWeight="fontWeightBold"
          sx={{ marginTop: 10, marginBottom: 5 }}
          color="common.white"
          variant="h4"
        >
          Frequently asked questions
        </Typography>
        {/* GENERAL */}
        <Typography
          fontWeight="fontWeightBold"
          variant="h6"
          sx={{ marginBottom: 2 }}
          color="common.white"
        >
          General
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              What is MusterClass?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              MusterClass is a platform that makes it possible for anyone to
              read lessons taught by the world's best. Whether it be in cooking,
              sports or music, MusterClass delivers a world class online
              learning experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              Where can I read?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              With MusterClass, you can learn and be inspired anytime, anywhere,
              including your smartphone, personal computer and even your samsung
              fridge(if it allows for browser usage)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              Which classes are right for me?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              MusterClass offers 17+ classes across a variety of categories,
              including sports, cooking and music. Every class has been designed
              to be accessible for people with little to no experience and
              advanced students alike. With new classes launching regularly, you
              can learn practical skills, ignite new passions, and get everyday
              wisdom. Check out our {<Link href="/articles">catalogue</Link>}{" "}
              here!
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* PRICING AND PAYMENTS */}
        <Typography
          fontWeight="fontWeightBold"
          variant="h6"
          sx={{ marginBottom: 2, marginTop: 3 }}
          color="common.white"
        >
          Pricing & Payment
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              How much does MusterClass cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              We have 3 different monthly subscription tiers starting with the
              Basic at $10/month, Standard at $15/month and Premium at
              $20/month.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              Will I be charged taxes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              No.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              How does the 30-day guarantee work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              There is none.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: "#424242" }}
          >
            <Typography color="common.white" fontWeight="fontWeightBold">
              How do I cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#424242" }}>
            <Typography
              color="common.white"
              sx={{ minWidth: "250px", maxWidth: "600px" }}
            >
              Please don't. But if you insist, please email us at
              "MusterClass@email.com"
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Typography color="common.white">
          All article pictures were obtained from www.masterclass.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FaqBar;
