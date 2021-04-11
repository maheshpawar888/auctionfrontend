import React,{useState} from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RegisterPage=()=> { 
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        username:'',
        mobileno:''
    })
    const { email,password,username,mobileno } = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})

    const onsubmit=async (e) => {
        try {
            e.preventDefault();
        console.log(email,password,username,mobileno)
        

            const newData = {
                email: email,
                password:password,
                mobileno:mobileno,
                username:username
            }
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }

            const body = JSON.stringify(newData);
            const res = await axios.post('http://localhost:5000/register',body , config)

            console.log(res)
        } catch(err) {
            console.log(err)
        }
        
    }

    return (
        <div>
        <section class="container-fluid bg">
        <section class="row justify-content-center">
          <section class="col-12 col-sm-6 col-md-3"> 
            <div class="container">
                <form class="form-container" action="signup_teacher.php" method="POST">
                   
                    <div class="form-group">
                        <label for="teacher_name">Username</label>
                        <input type="text" 
                         placeholder="Username"
                         required 
                         class="form-control" 
                         id="teacher_name"
                         name="username" 
                         value={username}
                         onChange={e=>onChange(e)}

                         >
                         </input>
                    </div>

                     <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email"
                         placeholder="name@gmail.com"
                         required 
                         class="form-control" 
                         id="exampleInputEmail1" 
                         aria-describedby="emailHelp"
                         name="email"
                         value={email}
                         onChange={e=>onChange(e)}
                         >

                         </input>
                    </div>

                    <div class="form-group">
                        <label for="teacher_name">Mobile No</label>
                        <input type="text" 
                         placeholder="Mobile No"
                         required 
                         class="form-control" 
                         id="teacher_name"
                         name="mobileno"
                         value={mobileno} 
                         onChange={e=>onChange(e)}
                         >
                         </input>
                    </div>


                      
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <div class="input-group">
                        <input type="password" 
                         placeholder="**************"
                         required 
                         class="form-control" 
                         data-toggle="password"
                         id="exampleInputPassword1"
                         name="password"
                         value={password}
                         onChange={e=>onChange(e)}
                         />
                    </div>
                   </div>
                   <button type="submit" className="btn btn-danger btn-block" onClick={(e) => onsubmit(e)}>Sign up</button>
                   <hr></hr> <p id="ptext">Already have an account?<Link to='/' className="btn">login</Link>
                            </p>
                </form>  
            </div>
          </section>
          </section>
          </section>
        </div>
    )
}

export default RegisterPage;

