

import BlackDash from "../../reusable/BlackDash/BlackDash";
import { F_Question } from "../../reusable/F_Question/F_Question";
import { miles_question } from "./data";
import React from "react";
import styles from "./miles_question.module.css";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";

export function Miles_Questions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className={styles["quetion-main"]} id="frequently-ask-que">
            {miles_question.map((data1: any, i: number) => (
                <>
                    <h3 className={`${styles["quetion-header"]} mt-5 mb-5`}>Frequently Asked Questions</h3>

                    <Grid
                        container
                        spacing={{ xs: 1, md: 3 }}
                        columnSpacing={{ md: 0 }}
                        rowSpacing={{ md: 3 }}
                        columns={{ xs: 4, sm: 4, md: 12 }}
                    >
                        <Dash_saperator />
                        {data1.content.map((data: any, i: number) => (
                            <div className={`${styles["div-color"]}mt-2 mb-0`}>
                                <Accordion
                                    expanded={expanded === data.id}
                                    onChange={handleChange(data.id)}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        style={{ background: "#36393b" }}
                                    >
                                        <Typography
                                            className={styles["quetions"]}
                                            sx={{ fontWeight: "bold", fontStretch: "normal", fontStyle: "normal" }}
                                        >
                                            {data.quetion}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        style={{ background: "#36393b", color: "#fff", fontStretch: "normal", fontStyle: "normal" }}>
                                        <Typography>{data.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        ))}
                    </Grid>
                </>
            ))}

        </div>
    );
}
