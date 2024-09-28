import axios from "axios"

interface FetchHeroesParams {
    offset?: number;
    name?: string,
    nameStartsWith?: string; 
}

export const fetchHeroes = async ({offset = 0, name = ''}: FetchHeroesParams) => {


    const params: {
        apikey: string;
        ts: number;
        hash: string;
        limit: number;
        offset: number;
        nameStartsWith?: string;
      } = {
        apikey:  import.meta.env.VITE_API_KEY,
        ts: 1000,
        hash: import.meta.env.VITE_HASH,
        limit: 6,
        offset,
      };
    
    if(name){
        params['nameStartsWith'] = name;    
    }

    try {
        
        const response = await axios.get(import.meta.env.VITE_URL,{params})
        
        return response.data.data.results
        
    } catch (error) {
        console.log("Error: ", error)
        return []
        
    }
}