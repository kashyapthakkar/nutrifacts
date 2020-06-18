import React from 'react';
import styles from "./DishInfo.module.css";
import {Grid, Button, List, ListSubheader, ListItem, ListItemText} from '@material-ui/core';
import {TaggedContentCard} from "react-ui-cards";



const  DishInfo = (dish) =>{
 
   

    return(
        <div className={styles.container}>
            <div className={styles.intro}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <TaggedContentCard
                            thumbnail= {dish.dish.image}
                            title={dish.dish.label}
                            description={Math.round(dish.dish.calories) + " CALORIES | " + dish.dish.ingredients.length + " INGREDIENTS"}
                            tags={[]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={styles.root}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" className={styles.subheader2}>
                            Health Labels
                            </ListSubheader>
                        }
                       
                        >
                        {dish.dish.healthLabels.map((item, i) =>
                            <ListItem button key={i}  className={styles.lists}>
                                <ListItemText primary={item} />
                            </ListItem>    
                        )}
                        
                            
                    </List>
                   
                </Grid>
                </Grid>    
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={5} className={styles.root}>
                    
                    
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" className={styles.subheader}>
                            Ingredients
                            </ListSubheader>
                        }
                        
                        >
                        {dish.dish.ingredients.map((item, i) =>
                            <ListItem button key={i} className={styles.lists}>
                                <ListItemText primary={item.text} />
                            </ListItem>    
                        )}
                        
                        
                    </List>
                </Grid>
                
                <Grid item xs={12}  md={5} className={styles.root}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" className={styles.subheader3}>
                            Nutrition
                            </ListSubheader>
                        }
                        
                        >
                        {dish.dish.digest.map((item, i) =>
                            <ListItem button key={i} className={styles.lists}>
                                <ListItemText primary={item.label}/>
                                <ListItemText primary={Math.round(item.total) + item.unit} />
                            </ListItem>    
                        )}
                        
                            
                    </List>
                    
                </Grid>
            </Grid>
            <a href={dish.dish.url} target="blank"><Button  variant="contained" color="secondary" className={styles.button}>Learn How to Make this dish and more</Button></a>
        </div>
    )
}

export default DishInfo;