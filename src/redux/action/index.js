import axios from "axios"

export const getData = (payload) => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        dispatch({
            type : "GET_DATA",
            payload : response.data,
        })
    }).catch((err)=>console.log(err))   
}
