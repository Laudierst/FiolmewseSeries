import React, { useState, useContext } from 'react';
import StoreContext from '../../../Context/SatateDate'
import { Card, Form } from 'react-bootstrap'
import './Login.css';
import { useNavigate } from 'react-router-dom'
//import { toast } from 'react-toastify';

const UserLogin = () => {
  //console.clear()

  const { login } = useContext(StoreContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [verpass, setVerpass] = useState(false)

  const MostraPassword = () => {
    setVerpass(prevState => !prevState)
  }

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log("submit", { email, password })

    if (password && email) {
      //console.log("submit", { email, password })
      //const email2 = JSON.parse(localStorage.getItem("user"))

      login(email, password)

      setTimeout(() => {
        navigate('/')      
      }, 1200)
    }

  }

  return (
    <div className='container'>
      <div className="card p-5 mt-5 mb-5 container2">
        {/*<p className="text-light">{String(auth)}</p>*/}
        <p className="bg-white h5">Faça login para acistir</p>
        <h1 className="user-login__title  bg-white">Acessece o Sistema</h1>
        <Form autoComplete="nope" onSubmit={handleSubmit} className="bg-white">
          <div className="user-login__form-control bg-white">
            <Form.Label htmlFor="email" className=" bg-white">E-mail</Form.Label>
            <input
              id="email"
              type="text"
              name="email"
              className="bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-login__form-control bg-white">
            <label htmlFor="password" className=" bg-white">Senha</label>
            <div onClick={MostraPassword}>
              {verpass ? <i className="fa-solid fa-eye-slash olho2"></i> :
                <i className="fas fa-eye olho2" />}
            </div>
            <input
              id="password"
              className="bg-white"
              type={verpass ? "text" : "password"}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            theme="contained-green"
            className="btn btn-outline-info btn-lg btn-block col-12"
            rounded
          >
            Entrar
          </button>
        </Form>

        <Card.Link href="/cadastro" className="btn btn-outline-secondary mt-5" style={{textDecoration: "none", textAlign: 'center'}}>
          Ainda não tenho conta
        </Card.Link>
      </div>
    </div>
  );
};

export default UserLogin;
