const BASE_URL = "/data/data.json";

export const getData = async () => {
    try {
      const response = await fetch(BASE_URL);
  
      return response.json();
    } catch (error) {
      return new Error("Problème de récupération de data");
    }
  };

  // récupération des icones
export const getIcones = async () => {
    const data = await getData();
    return data.logos;
  };


  