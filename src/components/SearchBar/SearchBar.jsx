import React from 'react';
import styles from './SearchBar.module.css'
import {TextField , Button} from '@material-ui/core';

const  SearchBar = ({ handleFoodChange }) =>{
    return(
        <div className={styles.container}>
            <TextField  fullWidth={true} label="Search for Food..." variant="outlined" type="text" className={styles.input} id="searchFood" />
            <Button  variant="contained" color="secondary" className={styles.button} onClick={(e) => handleFoodChange(document.getElementById("searchFood").value)}>Search Food</Button>
            
        </div>
    )
}

export default SearchBar;