import axios from 'axios';

const APP_ID = "d57c60e9";
const APP_KEY = "04723ebf8cb2099e90bcee4dfb397504";


export const fetchData = async(search_string) => {

    
    try {
        const response = await axios.get(`https://api.edamam.com/search?q=${search_string}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        return response.data.hits;
    } catch (error) {
        
        return 0;
    }
}
