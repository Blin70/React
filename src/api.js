import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:"Client-ID l9TmP02As1O0_P3zpjrt15JFe_4Oae_JI0DmO2Bz7kc"
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;