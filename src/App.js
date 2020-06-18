import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Recipes from './components/Recipes/Recipes';
import DishInfo from './components/DishInfo/DishInfo';
import Loading from './components/Loading/Loading';
import Intro from './components/Intro/Intro';
import { fetchData } from './api';
import styles from "./App.module.css";
import Image from './images/logo.png';
class App extends React.Component{
    state = {
        data: {},
        dish: {},
        toggleRecipes: true,
        toggleDishInfo: false,
        loading: false
    }
   
    handleFoodChange = async (food) => {
        
        var data = await fetchData(food);
        if(data === 0){
            this.setState({loading: true});
            setTimeout(async function(){
                window.location.reload();
            }, 100000);
        }else{
            this.setState({data: data, dish: {}, toggleDishInfo: false, toggleRecipes: true, loading: false});
        }
        
    }
    showDishInfo = (dishData) => {
        this.setState({dish: dishData, toggleDishInfo: true, toggleRecipes: false});
        
    }
    render(){
        return(
            <div className={styles.container}>
               <img src={Image} className={styles.image} alt="logo"/>
               {this.state.loading? "": <SearchBar handleFoodChange={this.handleFoodChange}/>}
               {this.state.data.length?"":<Intro />}
               {this.state.loading? "": 
                <div>
                    {this.state.toggleRecipes? <Recipes showDishInfo={this.showDishInfo} searchedData={this.state.data}/>: ""}
                    {this.state.toggleDishInfo? <DishInfo dish={this.state.dish}/>: ""}
                </div>
               }
               {this.state.loading? <Loading />: ""}
               
               
            </div>
        )
    }
}

export default App;