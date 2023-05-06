import axios from "axios";

// url ='https://bayut.p.rapidapi.com/properties/list'

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
              headers: {
    'X-RapidAPI-Key': '0858950bafmsh98d7a434de9a74fp11bb15jsn33e3eb7e59cd',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })
    return data;
}