import React from "react";
import styles from "./AskQustion.module.css";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

export function AskQustion() {
  const AppData = useSelector((state: any) => state.data[0]);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="container">
      <div className={styles["quetion-main"]} id="frequently-ask-que">
        <h3 className="mt-3 mb-5">Frequently Asked Questions</h3>

        {AppData &&
          AppData[0].AskQustion?.map((data: any, i: any) => (
            <div className="mt-2 mb-0">
              <Accordion
                expanded={expanded === data.id}
                onChange={handleChange(data.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{ background: "#eaeaea", fontWeight: "bold" }}
                >
                  <Typography className={styles["quetions"]}>
                    {data.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ background: "#f6f6f6" }}>
                  <Typography>{data.answer}</Typography>
                  {/* <div>
                    {AppData.&&
                      AppData[0].AskQustion?.AskData.map((item: any, i: any) =>(
                        <span> {item.title}</span>
                     ) )}
                  </div> */}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}

      
      </div>
    </div>
  );
}
