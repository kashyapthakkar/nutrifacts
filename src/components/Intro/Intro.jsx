import React from 'react';
import styles from './Intro.module.css'
import {List, ListItem, ListItemText} from '@material-ui/core';

const  Intro = () =>{
    return(
        <div>
             <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
               
                <ListItem button>
                    <ListItemText className={styles.lists} primary="Search over 2 million recipes by diets, calories and nutrient ranges" />
                </ListItem>

            
            </List>
        </div>
        
    )
}

export default Intro;