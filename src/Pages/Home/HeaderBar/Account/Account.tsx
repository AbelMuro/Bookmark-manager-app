import React, {useState, useRef, useEffect} from 'react';
import DisplayAccount from './DisplayAccount';
import {AnimatePresence} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function Acccount() {
    const [open, setOpen] = useState<boolean>(false);
    const accountPopupRef = useRef<HTMLElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if(!open) return;
        if(!accountPopupRef.current) return;

        const handleClose = (e: PointerEvent) => {
            const target = e.target as Node;

            if(!accountPopupRef.current.contains(target) && !buttonRef.current.contains(target))
                setOpen(false);
        }

        document.addEventListener('click', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
        }
    }, [open])


    return(
        <>
            <button ref={buttonRef} className={styles.account} onClick={handleOpen}>
                <img className={styles.account_image} src={icons['placeholder']}/>                 
            </button>         
            <AnimatePresence>
                {open && <DisplayAccount ref={accountPopupRef}/>}     
            </AnimatePresence> 
        </>
             
    )
}

export default Acccount;
