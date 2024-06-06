import { useState,useEffect } from 'react';
import Header from './Component/Header/Header';
import axios from 'axios'
import './App.css'
function App() {
  const [Form,setform]=useState([])
  const [insertform,setInsertform]=useState(false)
  useEffect(()=>{
    getdetails();
  },[])
  const getdetails=async()=>{
    const res=await axios.get("https://jobformproject.onrender.com/")
    console.log(res.data.Form);
    setform(res.data.Form);
  }
  console.log(Form);
  
  const insertToDb=async(Form)=>{

    const res=await axios.post("https://jobformproject.onrender.com/reg",Form)
    console.log(res.data.msg);
    if(res.data.msg ==="Created")
      setInsertform(true)
    getdetails();
  }
  const deleteForm= async(id)=>{
    const res=await axios.delete(`https://jobformproject.onrender.com/reg/${id}`)
    console.log(res);
    getdetails();
    if(res.data.msg ==="Deleted"){
      alert("Form Deleted");
    } 
    
}

  return (
    <Header  det={Form} insertform={insertform} insertToDb={insertToDb} getFormID={deleteForm}></Header>
  );
}

export default App;
