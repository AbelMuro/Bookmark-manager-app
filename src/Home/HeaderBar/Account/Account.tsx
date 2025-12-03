import React, {useState} from 'react';
import DisplayAccount from './DisplayAccount';
import {AnimatePresence} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function Acccount() {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }


    return(
        <>
            <button className={styles.account} onClick={handleOpen}>
                <img className={styles.account_image} src={icons['placeholder']}/>                 
            </button>         
            <AnimatePresence>
                {open && <DisplayAccount setOpen={setOpen}/>}     
            </AnimatePresence> 
        </>
             
    )
}

export default Acccount;
