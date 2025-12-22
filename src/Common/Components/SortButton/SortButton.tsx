import React, {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { useTypedDispatch } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function SortButton(){
    const theme = useTypedSelector(state  => state.theme.theme);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('recently added');
    const dispatch = useTypedDispatch();

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleSelected = (option: string) => {
        setSelected(option)
    }

    useEffect(() => {
        dispatch({type: 'SORT_OPTION', payload: selected})
    }, [selected])

    useEffect(() => {
        const handleClose = (e: PointerEvent) => {
            const target = e.target as Node;
            if(!buttonRef.current) return;
            if(!dropdownRef.current) return;

            if(!buttonRef.current.contains(target) && !dropdownRef.current.contains(target))
                setOpen(false);
        }

        document.addEventListener('click', handleClose);

        return () => document.removeEventListener('click', handleClose);
    }, [])

    return(
        <button className={ChangeTheme(styles, 'sort', theme)} onClick={handleOpen}>
            <img />
            Sort By
            <AnimatePresence>
                {open && <motion.ul
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    exit={{scale: 0}}
                    className={ChangeTheme(styles, 'dropdown', theme)}
                    >
                        <li onClick={() => handleSelected('recently added')}>
                            Recently added 
                            {selected === 'recently added' && <img className={ChangeTheme(styles, 'checkmark', theme)}/>}
                        </li>
                        <li onClick={() => handleSelected('recently visited')}>
                            Recently visited
                            {selected === 'recently visited' && <img className={ChangeTheme(styles, 'checkmark', theme)}/>}
                        </li>
                        <li onClick={() => handleSelected('most visited')}>
                            Most visited
                            {selected === 'most visited' && <img className={ChangeTheme(styles, 'checkmark', theme)}/>}
                        </li>
                </motion.ul>}
            </AnimatePresence>
        </button>        
    )
}

export default SortButton;