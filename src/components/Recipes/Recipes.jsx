import React from 'react';
import styles from "./Recipes.module.css";
import {Card, Grid} from '@material-ui/core';
import {NewsHeaderCard} from "react-ui-cards";

const  Recipes = ({ showDishInfo, searchedData }) =>{

    

   if(!searchedData[0]){
       return "";
   }
    return(
        <div className={styles.container}>
             <Grid container spacing={4} justify="center">
             {searchedData.map((item, i) => 
         
                <Grid item component={Card} xs={12} md={4} className={styles.card} key={i}>
                    <div onClick={(e) => showDishInfo(item.recipe)}>
                        <NewsHeaderCard
                            thumbnail={item.recipe.image}
                            title={item.recipe.label}
                            author={Math.round(item.recipe.calories) + " CALORIES | " + item.recipe.ingredients.length + " INGREDIENTS"}
                            tags={item.recipe.healthLabels.slice(0, 2)}
                        />
                    </div>
                    
                   
                </Grid>
            )}
                
             </Grid>
             
        </div>
    )
}

export default Recipes;