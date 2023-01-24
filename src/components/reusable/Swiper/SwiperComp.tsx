import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Dash_saperator } from "../dash-saperator/Dash_saperator";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        tabs: {
            "& .MuiTabs-indicator": {
                backgroundColor: "white",
                height: 3,
            },
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            speed: 100,
            color: theme.palette.text.secondary,
        },
    }),
);

export const SwiperComp = ({ data }: any) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>
            {
                data.map((data1: any, i: number) => (
                    <>
                        <h3 className="mt-3 mb-5" style={{ fontStyle: "normal" }}>{data1.header}</h3>

                        <Grid
                            container

                            spacing={{ xs: 5, md: 3 }}
                            columnSpacing={{ md: 0 }}
                            rowSpacing={{ md: 3 }}

                            columns={{ xs: 4, sm: 4, md: 8 }}
                        >
                            <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                    className={classes.tabs}
                                    style={{ marginLeft: "-1em" }}
                                    sx={{
                                        [`& .${tabsClasses.scrollButtons}`]: {
                                            '&.Mui-disabled': { opacity: 0.3 },
                                        },
                                    }}
                                >   {data1.content.map((data: any, index: number) => (

                                    <Paper
                                        style={{ fontStyle: "normal", borderRadius: 1, textShadow: "2px gray" }}
                                        className={classes.paper}
                                        sx={{ marginLeft: "0.5em", padding: "0.5em", cursor: "pointer" }}
                                    >
                                        {data.item}</Paper>


                                ))}
                                </Tabs>
                            </Box>
                        </Grid>

                    </>
                ))
            }
            < Dash_saperator />
        </>
    );
};