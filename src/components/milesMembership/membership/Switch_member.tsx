import * as React from 'react';
import Switch from '@mui/material/Switch';

import styles from './switch_member.module.css';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Switch_member = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <div className={styles["main-switch"]}>
                <div className=' row d-flex'>
                    <div className={`${styles["switch-title"]} col-md-8`} >
                        <strong style={{ fontWeight: 600, fontSize: "20px" }} >2 Free SOS with Membership</strong>
                        <p>Extra ₹ 399 for Free Road Side Assistance</p>

                    </div>
                    <div >
                        <Switch {...label}
                            className={styles["switch-button"]}
                            checked={checked}
                            inputProps={{ 'aria-label': 'controlled' }}
                            onChange={handleChange}
                            color='success' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Switch_member;




