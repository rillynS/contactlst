import React, { useState } from "react";
import { useSelector } from "react-redux";
import cls from './ContactList.module.css'
import ListItem from "./ListItem";

export default function ContactList() {
    const contacts = useSelector(state=>state).currentUser
    return (
        <ul className={cls.ContactList}>
            {
                contacts.map((item,idx)=>{
                    return <ListItem key={item.id} idx={idx} {...item}/>
                })
            }
        </ul>
    )
}