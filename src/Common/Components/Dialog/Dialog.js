import React from 'react';
import * as styles from './styles.module.css'

function Dialog() {
    return (
        <div className={styles.overlay}>
            <dialog open={true} className={styles.dialog}>
                <header className={styles.dialog_header}>
                    <h2 className={styles.dialog_title}>
                        Archive bookmark
                    </h2>
                    <p className={styles.dialog_desc}>
                        Are you sure you want to archive this bookmark?
                    </p>
                </header>
                <div className={styles.dialog_buttons}>
                    <button className={styles.dialog_cancel}>
                        Cancel
                    </button>
                    <button className={styles.dialog_submit}>
                        Archive
                    </button>
                </div>
            </dialog>
        </div>
    )
}

export default Dialog;