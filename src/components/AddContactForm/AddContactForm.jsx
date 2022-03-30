import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

export default function AddContactForm() {
    const [newUser, setNewUser] = useState({
        id: Date.now(),
        userName: '',
        phoneNumber: '',
        location: ''
    })
    const onAdd = useDispatch()
    function addNewContact (value) {
        onAdd({type:'ADD_NEW_CONTACT',payload:value})
        setNewUser({
                    id: Date.now(),
                    userName: '',
                    phoneNumber: '',
                    location: ''
                })
    }
    
    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Input value={newUser.userName} type='text' onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })} placeholder='Введите имя...' />
            <Input value={newUser.phoneNumber} type='text' onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })} placeholder='Введите номер...' />
            <Input value={newUser.location} type='text' onChange={(e) => setNewUser({ ...newUser, location: e.target.value })} placeholder='Введите местоположение...'/>
            <Button onClick={()=>addNewContact(newUser)}>Добавить контакт</Button>
        </form>
    )
}