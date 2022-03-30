import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddContactForm from "../../AddContactForm/AddContactForm";
import { ChangeForm } from "../../ChangeForm/ChangeForm";
import Button from "../../UI/Button/Button";

export default function ListItem({ idx, id, userName, phoneNumber, location }) {
    const [isChange, setIsChange] = useState(false)
    const removeContact = useDispatch()
    const changeUser = useDispatch()
    const onRemove = (value) => {
        removeContact({ type: 'REMOVE_CONTACT', payload: value })
    } 
    const user = () => {
        return (
            <>
                <h3>Имя: {userName}</h3>
                <h3>Номер телефона: {phoneNumber}</h3>
                <h3>Местоположение: {location}</h3>
            </>
        )
    }
    function changedUser(value) {
        if(isChange){
            changeUser({type:'CHANGE_CONTACT',payload:[idx,value]})
            // console.log(idx);
            setIsChange(prev=>prev=!prev)
        }else{
            setIsChange(prev=>prev=!prev)
        }
    }


    
    return (
        <li>
            <div>
                {
                    isChange ?<ChangeForm changeUser={changedUser} id={idx}/> :user()
                }
            </div>
            <div>
                {
                    isChange ? null:<Button onClick={changedUser}> <img src="https://cdn-icons-png.flaticon.com/512/46/46549.png" alt="" /></Button>
                }
                <Button onClick={() => onRemove(id)}> <img src="https://cdn-icons-png.flaticon.com/128/6929/6929505.png" alt="" /> </Button>

            </div>

        </li>
    )
}