import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CustomerDash from '../components/CustomerDash';

const ShowAuction = () =>{
        const [data, setData] = useState({
          items: []
      })

      const getItem = () => {
          axios.get("http://localhost:5000/showliveauction").then((res) => {
              setData({items: res.data})
              console.log(res.data)
          })
      }

      useEffect(() => {
          console.log('inside use')
          getItem()
          
      },[])
    return (
        <div>
          <CustomerDash/> 
            {/* <h1>Show Auction</h1> */}

            <table class="table table-hover">
            <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Image</th>
            <th>Reserve Price</th>
          </tr>
            </thead>
            <tbody>
            {data.items.map(item => (

                <tr>
                  <td>{item.itemName}</td>
                  <td><img src={item.itemImg}/></td>
                  <td>{item.reservePrice}</td>
                  <td><a href={'/finalauction/'+item.id} className="btn btn-success">Join</a></td>
                </tr>
                ))}
         

            </tbody>
        </table>
        </div>
    )
}

export default ShowAuction;
