import React from 'react';
import styles from './Loading.module.css'

const  Loading = () =>{
    return(
        <div>
             <h3>Retriving Data...(this could take a minute.)</h3>
            <div className={styles.container}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
                <div className={styles.bar4}></div>
                <div className={styles.bar5}></div>
                <div className={styles.bar6}></div>
                <div className={styles.bar7}></div>
                <div className={styles.bar8}></div>
                <div className={styles.bar9}></div>
                <div className={styles.bar10}></div>

                <div className={styles.progressContainer}>
                    <div className={styles.progress}></div>
                </div>

            </div>
        </div>
        
    )
}

export default Loading;