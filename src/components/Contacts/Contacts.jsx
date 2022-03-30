import React from "react";
import AddContactForm from "../AddContactForm/AddContactForm";
import ContactList from "./ContactList/ContactList";
import cls from './Contacts.module.css'

export default function Contacts () {
    return(
        <div className={cls.Contacts}>
            <AddContactForm/>
            <hr />
            <ContactList />
        </div>
    )
}