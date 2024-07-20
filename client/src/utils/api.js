import axios from "axios";

const apiKey="3c7d2bb62bcc49987b0a9d770ae9f68f14b422307cc693c7e7c3eae05b62f326101cf38c9a8e01f4b42a13b602068d72e3f533f4f98f0ea5b4bf2b7f547287bbb57c99031a2716f1949bd0a1d063a84b6fbb59963229a221eff8d91ca6d2eababbecebadd945c260d8473fe95028a6ea807fd46fddf5d4a345ea19155b774a4a"

const params={
    headers: {
        'Authorization': `Bearer ${apiKey}`, // Include your API key in the Authorization header
        'Content-Type': 'application/json', // Adjust the content type as needed
      },

} 

export const fetchDataFromApi=async(url)=>{
    try{
        const {data} = await axios.get("http://localhost:1337"+url, params)
        return data;
        
    }catch(error){
        console.log(error);
        return error;
    }
}


export const postData = async (url, formData ) => {
    const { res } = await axios.post("http://localhost:1337" + url,formData , params)
    return res;
}

export const deleteData = async (url, id ) => {
    const { res } = await axios.delete(`http://localhost:1337${url}${id}`, params)
    return res;
}