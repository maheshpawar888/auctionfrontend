import React,{useState,useEffect} from 'react';
import './show.css';
import axios from 'axios';
import {useParams} from 'react-router';
import HeaderPage from '../components/HeaderPage';


const AdminAuctionPage=()=> { 
    const id = useParams()
    useEffect(async () => {
        console.log(id.id)

        const newData = {
            itemId: id.id,
        }

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const body = JSON.stringify(newData);
        const res = await axios.post('http://localhost:5000/startauction',body , config)

        console.log(res)
    })

    return (
        <div>
        <HeaderPage/>
            <h1>Auction Page</h1>
        </div>
    )
}

export default AdminAuctionPage;

