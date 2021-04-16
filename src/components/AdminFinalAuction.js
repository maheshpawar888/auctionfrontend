import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';

import Dashboard from '../components/HeaderPage';

const AdminFinalAuction = () =>{
    const id = useParams()

        const [data, setData] = useState({
          items: [],
          itemName:'AAA',
          itemImg:'',
          reservePrice:2000
      })
      const { itemName,itemImg,reservePrice } = data;
    const onChange = e => setData({...data,[e.target.name]:e.target.value}) 

      const getItem = () => {
          axios.get("http://localhost:5000/getItems/"+id.id).then((res) => {
              setData({items: res.data})
              setData({
                itemName:res.data[0].itemName,
                itemImg:res.data[0].itemImg,
                reservePrice:res.data[0].reservePrice
              })
              console.log(res.data[0].itemName)
          })
      }

      useEffect(() => {
        console.log(id.id)

          console.log('inside use')
          getItem()
          
      },[])
    return (
        <div>
          <Dashboard /> 

            <div className="row">
            <div className="col-6">
                <img id="image" src={itemImg}/>
                <p id="image-id">Item ID - 1</p>
            </div>
            <div className="col-6">
                <table id="details">
                    <tr>
                        <td><h5><b>Item Name :</b></h5></td>
                        <td><h6 name="itemName" value={itemName} 
                        onChange={e=>onChange(e)}
                        >{itemName}</h6></td>
                    </tr>
                    <tr>
                        <td><h5><b>Reserved Price :</b></h5></td>
                        <td><h6
                        name="reservePrice" value={reservePrice} 
                        onChange={e=>onChange(e)}
                        >{reservePrice}</h6></td>
                    </tr>
                    <tr>
                        <button className="btn btn-block btn-danger"> Stop Auction </button>
                    </tr>
                </table>
            </div>
        </div>

        <div className="row text-center">
            <div className="col-12">
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
            </tbody>
          </table>         
        </div>
        </div>           
        </div>
    )
}

export default AdminFinalAuction;
