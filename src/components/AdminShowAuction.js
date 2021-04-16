import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Dashboard from '../components/HeaderPage';

const AdminShowAuction = () =>{
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
          <Dashboard /> 
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
                  <td><a href={'/adminfinalauction/'+item.id} className="btn btn-success"> View </a></td>
                </tr>
                ))}
         

            </tbody>
        </table>
        </div>
    )
}

export default AdminShowAuction;
