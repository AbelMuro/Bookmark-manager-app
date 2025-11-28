import React from 'react';
import * as styles from './styles.module.css';

function Search() {
    return(
        <form className={styles.container}>
            <img className={styles.search_icon}/>
            <input 
                type='text' 
                className={styles.search}
                placeholder={'Search by title...'}
                />
        </form>

    )
}

export default Search;