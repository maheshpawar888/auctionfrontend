import React,{useState,useEffect} from 'react';
import './show.css';
import axios from 'axios';
import HeaderPage from '../components/HeaderPage';

const AdminShowItems=()=> { 
    const [data, setData] = useState({
        items: []
    })

    const getItem = () => {
        axios.get("http://localhost:5000/getItems").then((res) => {
            setData({items: res.data})
            console.log(res.data)
         })
    }

    useEffect(() => {
        console.log('inside use')
        getItem()
         
    },[])

    return(
        <div>
        <HeaderPage/>
        <table class="table table-hover">
            <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Image</th>
            <th>Item Price</th>
          </tr>
            </thead>
            <tbody>
            {data.items.map(item => (

          <tr>
            <td>{item.itemName}</td>
            <td><img src={item.itemImg}/></td>
            <td>{item.reservePrice}</td>
            <td><a href={'/adminauctionpage/'+item.id} className="btn btn-danger">Start Auction</a></td>
          </tr>
          ))}

            </tbody>
        </table>
        </div>
    )
}   

export default AdminShowItems;
