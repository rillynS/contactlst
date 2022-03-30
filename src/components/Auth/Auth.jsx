import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import cls from './Auth.module.css'
import { useSelector, useDispatch } from "react-redux";

export default function Auth({ setIsAuth }) {
    const data = useSelector(state => state).user
    const contacts = useSelector(state=>state).contacts
    const newStateContact = useDispatch()
    const [dataInput, setDataInput] = useState({
        username: '',
        password: ''
    })

    const authUser = useDispatch()
    function setAuth() {
        const users = Object.keys(data)
        for (let i in users) {
            if(data[users[i]].name === dataInput.username&&data[users[i]].password === parseInt(dataInput.password)){
                authUser({ type: 'AUTH', payload: data[users[i]].name })
                newStateContact({ type: 'ADD_CONTACT_LIST', payload: contacts[i] })
                setIsAuth(true)
            }
        }
    }

    return (
        <div className={cls.Auth}>
            <form onSubmit={e => e.preventDefault()}>
                <Input value={dataInput.username} onChange={(e) => setDataInput({ ...dataInput, username: e.target.value })} placeholder='Введите логин...' type='text' />
                <Input value={dataInput.password} onChange={(e) => setDataInput({ ...dataInput, password: e.target.value })} placeholder='Введите пароль...' type='password' />
                <Button onClick={setAuth}>Войти</Button>
            </form>
        </div>
    )
}