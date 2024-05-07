import { doc, setDoc } from "firebase/firestore";
import { RequestDemo } from "../models/requestDemo";
import { requestDemoCollection } from "./firebase";


const addRequestDemo=async (data:RequestDemo)=>{
    let result:boolean = false;

    const docRef = doc(requestDemoCollection);

    result = await setDoc(docRef,{id:docRef.id,...data})
    .then(()=>true)
    .catch((err)=>{
        console.log(err)
        return false;
    });

    return result;
}

export default addRequestDemo;