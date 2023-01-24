import * as React from "react";
import Grid from "@mui/material/Grid";
import styles from "./HowItWorks.module.css";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";
import { Box, Modal, Typography } from "@mui/material";


export const HowDone = ({ data }: any) => {
    const style = {
        position: "absolute" as "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "65%",
        bgcolor: "background.paper",

        outline: "none",

        zIndex: 1,
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 6, md: 12 }}

            >
                <div className={`${styles["main"]} row`} >
                    <div className="col-md-5" style={{}} >
                        <div >
                            <p className={styles["caption-p"]}>GoMechanic Service Warranty</p>
                            <hr className={styles["hr"]} />
                        </div>
                        <div className={styles["caption2-p"]}>1 Month Replacement Warranty On Oil, Filters & Brakes</div>
                    </div>
                    <div className="col-md-5" >

                    </div>
                    <div className="col-md-2">
                        <img

                            className={styles["model-img"]}
                            src={"/FeaturedImage/model.png"}
                            alt="img"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>

            </Grid>
            <div className={styles["knowMore"]} onClick={handleOpen}>know more</div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* {data.map((data1: any, i: number) => ( */}
                    <div className={styles["modal-header"]}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 700, marginBottom: "0.5em", marginLeft: "1em" }}>
                            GoMechanic Warranty
                        </Typography>
                        <div className={`${styles[""]}row d-flex `}
                            style={{ backgroundColor: " #5195e1", width: "100 %" }}>
                            <div className="col-md-5"  >
                                <div>
                                    < p className={styles["modal-cap"]} >GoMechanic Service Warranty</p>

                                </div>

                            </div>
                            <div className="col-md-5" style={{
                                backgroundColor: " #5195e1"
                            }} >

                            </div>
                            <div className="col-md-2">
                                <img

                                    className={styles["model-img"]}
                                    src={"/FeaturedImage/secondone.png"}
                                    alt="img"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        <>
                            <div >
                                {data.desc.map((data: any, i: number) => (
                                    <ul className={styles["ul-list"]}>
                                        <li className={styles["li-list"]}>{data.para1}</li>
                                        <div className={styles["div-list"]}>{data.para2}</div>
                                       
                                    </ul>
                                ))}
                            </div>

                            <div className={styles["dash"]} >

                            </div>
                            <div>
                                {data.terms.map((data: any, i: number) => (<>
                                    <p className={styles["list-caption"]}>{data.header}</p>
                                    <ul className={styles["ul-list2"]}>
                                        <li className={styles["li-list2"]}>{data.para1}</li>
                                        <li className={styles["li-list2"]}>{data.para2}</li>

                                    </ul></>
                                ))}
                            </div>
                        </>
                    </div>
                    {/* ))} */}
                </Box >
            </Modal >
            <Dash_saperator />
        </div >
    );
};
