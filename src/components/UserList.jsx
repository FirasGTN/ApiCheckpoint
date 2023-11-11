import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getData } from '../redux/action';
import '../components/userList.css'

function UserList() {
    const [listOfUser,SetlistOfUser] = useState()
    const dispatch = useDispatch()
    const objA = useSelector((store)=>store)
    useEffect(() => {
        dispatch(getData());
        SetlistOfUser(objA);
    }, [dispatch, objA]);    
    console.log(objA)
    if (!listOfUser) {
        return <div className='loding'>Loading...</div>;
    }
    return (
        <div className='card-container'>
        {listOfUser.map((elt)=>
        <div className='card'>
                <ul className='user-list test'>
                    <h1>User :</h1>
                    <li>Name : {elt.name}</li>
                    <li>Username : {elt.username}</li>
                    <li>Email : {elt.email}</li>
                </ul>
                <div className='divi light'></div>
                <ul className='address-list test'>
                    <h1>Address :</h1>
                    <li>Street : {elt.address.street}</li>
                    <li>Suit : {elt.address.suit}</li>
                    <li>City : {elt.address.city}</li>
                    <li>Zip Code : {elt.address.zipcode}</li>
                </ul>
                <div className='divi light'></div>
                <ul className='contact-list test'>
                    <h1>Contact Us :</h1>
                    <li>Phone : {elt.phone}</li>
                    <li>Website : {elt.website}</li>
                </ul>
                <div className='divi light'></div>
                <ul className='company-list test'>
                    <h1>Company :</h1>
                    <li>Name : {elt.company.name}</li>
                    <li>Catch Phrase : {elt.company.catchPhrase}</li>
                    <li>Bussnise : {elt.company.bs}</li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default UserList