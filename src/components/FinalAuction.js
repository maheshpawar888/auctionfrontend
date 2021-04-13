import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';

import CustomerDash from '../components/CustomerDash';

const FinalAuction = () =>{
    const id = useParams()

        const [data, setData] = useState({
          items: []
      })

      const getItem = () => {
          axios.get("http://localhost:5000/getItems/"+id.id).then((res) => {
              setData({items: res.data})
              console.log(res.data)
          })
      }

      useEffect(() => {
        console.log(id.id)

          console.log('inside use')
          getItem()
          
      },[])
    return (
        <div>
          <CustomerDash/> 
            {/* <h1>Show Auction</h1> */}

            <div className="row">
            <div className="col-6">
                <img id="image" src="image.png"/>
                <p id="image-id">Item ID - 1</p>
            </div>
            <div className="col-6">
                <table id="details">
                    <tr>
                        <td><h5><b>Item Name :</b></h5></td>
                        <td><h6>{data.items[0].itemName}</h6></td>
                    </tr>
                    <tr>
                        <td><h5><b>Reserved Price :</b></h5></td>
                        <td><h6>20000</h6></td>
                    </tr>
                    <tr>
                        <td><h5><b>Your cost :</b></h5></td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input className="btn btn-danger" type="submit"/></td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    )
}

export default FinalAuction;
