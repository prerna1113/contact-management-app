
import reduxstore from "./Store";


const nameaction=(name)=>{
   reduxstore.dispatch({
    type:"NAME",
    payload:name,
   })


}
export default nameaction;