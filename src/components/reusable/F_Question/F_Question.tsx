import React from "react";
import styles from "./F_Question.module.css";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Dash_saperator } from "../dash-saperator/Dash_saperator";

export function F_Question({ data }: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles["quetion-main"]} id="frequently-ask-que">
      {/* {data.map((data1: any, i: number) => ( */}
      <>
        <h3 className="mt-3 mb-5">{data.header}</h3>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columnSpacing={{ md: 0 }}
          rowSpacing={{ md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          {data.content.map((data: any, i: number) => (
            <div className="mt-2 mb-0">
              <Accordion
                expanded={expanded === data.id}
                onChange={handleChange(data.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{ background: "#eaeaea" }}
                >
                  <Typography
                    className={styles["quetions"]}
                    sx={{ fontWeight: "bold" }}
                  >
                    {data.quetion}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ background: "#f6f6f6" }}>
                  <Typography>{data.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Grid>
      </>
      {/* ))} */}
      <Dash_saperator />
    </div>
  );
}
