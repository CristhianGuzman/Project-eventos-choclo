import React, { useState } from 'react';
import Footer from '../Footer/footer';
import Menu from '../Menu/Menu';
import "./login-user.css"

function LoginUser(){

    <link rel="stylesheet" type="text/css" href="/login-user.css"></link>

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [validPass, setValidPass] = useState('');
    const [validUser, setValidUser] = useState('');
    
    
    function registro(){

        window.location.href= "./registeruser"
    }
    

    function handleChange(name, value){
        if(name === "usuario"){
            setUser(value)  
        }else {
            setPassword(value)      
        }
    };


    function handleSubmit(e){
        e.preventDefault()
        if(user ===''){  
           setValidUser('is-invalid')
        }else{
           setValidUser('')
        }

        if(password ===''){
            setValidPass('is-invalid')
        }else{
            setValidPass('')
        }
        
        saveUser();
    };

    
    async function saveUser(){
        if((user !='') && (password !='')){

        var datos =  {         
            name: user,
            pass: password
        }
      
        try {
            const response = await fetch('http://localhost:5000',{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                    'Content-Type': 'application/json'
                }

            });

            const data = await response.json();
            window.location.href= "./"   
            
        } catch (error) {
            alert("Ingreso no permitido")
        }
                  
        }         
    }
    


    ///VARIABLE 
    var classNamePass = `form-control  ${validPass}`
    var classNameUser = `form-control  ${validUser}`



    return(
        <>
       
        <hr/>
            <div className="container-fluid ">
                
                <div className= "modal-dialog text-center">
                    <div className="col-sm-9 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img">
                            <i className="mt-5 fas fa-users fa-6x d-flex justify-content-center" 
                                    style={{color: "#ffffff"}}></i>
                            <h3 className="h3 mb-3">Bienvenido,</h3>
                            <h6 className="h6 mb-3 align-items-start">Por favor autentíquese para ingresar</h6>

                            <form onSubmit= {handleSubmit}>
                            <div id= "#user-group" className= "form-group ">
                                <label>Usuario</label>
                                
                                <input 
                                    id= "usuario" 
                                    name= "usuario"
                                    type="text" 
                                    className = {classNameUser}
                                    placeholder="Usuario" 
                                    onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                                <div className = "h5 mb-2 invalid-feedback">Ingrese el usuario</div>                           
       
                            </div>

                            <div id= "contrasena-group" className= "form-group">
                                <label>Contraseña</label>
                                
                                <input  
                                    id="password"
                                    name="password"
                                    type="password" 
                                    className= {classNamePass}
                                    placeholder= "Contraseña"
                                    onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                </input>

                                <div className = "h5 mb-2 invalid-feedback">Ingrese la contraseña</div>
                            </div>


                            <div className="row justify-content-center align-items-center mt-5 mb-3">

                                <button  type="submit" 
                                className="btn col-3 mx-3" id="boton1">
                                Ingresar</button>

                                <button onClick={()=>{registro()}} type="button" 
                                className="btn col-4" id="boton2">Registrarse</button>

                                
                            </div>

                            <h6 className=" h6 " >¿Olvidó su contraseña?</h6>
  
                        </form >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default LoginUser