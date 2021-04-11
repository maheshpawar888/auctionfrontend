import React,{useState} from 'react';
import './login.css';
import axios from 'axios';
import HeaderPage from '../components/HeaderPage';
const AddItem=()=> { 

    const [formData,setFormData] = useState({
        itemName:'',
        reservePrice:'',
        itemImage:''
    })
    const { itemName,reservePrice,itemImage} = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    
    const onFileChange = (e) =>{
        console.log(e.target.files[0])
        setFormData({...formData,itemImage:e.target.files[0]})
    }

    const onsubmit=async (e) => {
        try {
            e.preventDefault();
            // console.log(itemName,reservePrice)
            // console.log('----')
            // console.log(itemImage)
            // const newData = {
            //     "itemname":itemName,
            //     "reserveprice":reservePrice,
            //     "files":itemImage
            // }
            // console.log(newData)

            var bodyFormData = new FormData();

            bodyFormData.append("itemname",itemName)
            bodyFormData.append("reserveprice",reservePrice)
            bodyFormData.append("files",itemImage)
            console.log('----')
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            // const body = JSON.stringify(newData);
            // console.log(body)

            const res = await axios.post('http://localhost:5000/addItem',bodyFormData , config)

            console.log(res)
            if(res.data.status == 1) {
                alert('item added succesfully')
                setFormData({
                    itemName:'',
                    reservePrice:'',
                    itemImage:''
                })
            } else {
                alert('item added failed')
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
        <HeaderPage />
        <section class="container-fluid bg">
        <section class="row justify-content-center">
          <section class="col-12 col-sm-6 col-md-3"> 
            <div class="container">
                <form class="form-container" action="login_teacher.php" method="POST">
                    <div class="form-group">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input type="text"
                     required 
                     class="form-control"
                     id="exampleInputEmail1" 
                     name='itemName'
                     value={itemName}
                     onChange={e=>onChange(e)}

                     >
                     </input>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Reserved Price</label>
                    <input type="text"   
                     required
                     class="form-control" 
                     name='reservePrice'
                     value={reservePrice}
                     onChange={e=>onChange(e)}
                     id="exampleInputPassword1">
                    </input>
                     </div>
                    
                        <label for="img">Select image:</label>
                        <input 
                            type="file" 
                            id="img" 
                            name="itemImage"
                            onChange = {e => onFileChange(e)}
                            accept="image/*"
                            >
                        </input>               
                  <hr></hr>
                  <button type="submit" className="btn btn-danger btn-block" onClick={(e) => onsubmit(e)}>Add Item</button>

                  </form>  
            </div>
          </section>
          </section>
          </section>
        
        </div>
    )

}

export default AddItem;

