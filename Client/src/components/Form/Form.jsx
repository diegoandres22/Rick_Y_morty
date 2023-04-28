import { useState } from "react";
import Validation from "./Validation";
import './Form.css'

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (evento) => {
        evento.preventDefault();
        login(userData);
    }

    return (
        <div className="contenedor">

            
            <img className="tituloryc" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
            <form onSubmit={handleSubmit} className="form" >

                <label htmlFor="email" className="titulos">Email</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}  className="inputs" placeholder="ingresar E-mail"/>
                {errors.email && <p className="errores">{errors.email}</p>}

                <label htmlFor="password" className="titulos">Password</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange} className="inputs" placeholder="ingresar la contraseña"/>
                {errors.password && <p className="errores">{errors.password}</p>}


                <button className="superbtn">Submit</button>
            </form>
        </div>
    )
}
export default Form;