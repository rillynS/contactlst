import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

export const ChangeForm=({id,changeUser})=>{
    const getUser = useSelector(store=>store).currentUser
    const [change,setChange] = useState(getUser[id])
    // console.log(getUser[id-1]);
    return(
        <form onSubmit={e=>e.preventDefault()}>
            <Input value={change.userName} onChange={(e)=>setChange({...change,userName:e.target.value})} placeholder='Введите имя...'/>
            <Input value={change.phoneNumber} onChange={(e)=>setChange({...change,phoneNumber:e.target.value})} placeholder='Введите номер...'/>
            <Input value={change.location} onChange={(e)=>setChange({...change,location:e.target.value})} placeholder='Введите местоположение...'/>
            <Button onClick={()=>changeUser(change)}> <img src="https://img.icons8.com/metro/208/checkmark.png" alt="" /></Button>
        </form>
    )
}