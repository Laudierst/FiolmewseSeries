import React, { useState, useEffect, useContext } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { red } from '@material-ui/core/colors';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home.css'
import { Card } from 'react-bootstrap';
import Contexte from '../../Context/SatateDate'
import Slind from '../Slind/Slind';
import { Link } from 'react-router-dom'

const Consumo2 = () => {

  const { filmes } = useContext(Contexte)

  const [chec, setChec] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const req = await axios.get('https://api-store-stylestop.onrender.com/user')
        const res = await req.data

        setChec(res)
        setLoad(true)
      })()
    }, 1000)
  }, [])

  useEffect(() => {
    (async () => {
      try {

        setChec((chec && chec))

      } catch (error) {
        console.log({ Erro: error })
      }
    })()
  }, [chec])

  useEffect(() => {
    return
  }, [])

  //console.log(filmes)

  const img = JSON.parse(localStorage.getItem('imagem'))
  const name = JSON.parse(localStorage.getItem('name'))

  const Usuario = () => {
    if (name && img) {
      return (
        <div>
          <img src={img} alt="img" className="imgUser" />
        </div>
      )
    } else {
      return <div></div>
    }
  }

  return (
    <div>
      
      <Usuario />
      <Slind />

      <Card className="mt-5 bg-dark">
        <Card.Body className="col-sm-12">

          {filmes.map(e => (


            <div key={e.id} className="div-lado box1">

              <Link to={`/details/${e.id}`} className="card">

                <img src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} 
                  alt="imagem" 
                  className="card-img-top alt" 
                />

              </Link>
              <div className="card border border-0 mt-3 titolo1 bg" style={{background: '#000'}}>
                <h5 className="card-title">{e.title}</h5>
              </div>
                
            </div>
            

          ))}
          
          {!!load && <Loading />}
        </Card.Body>
        <div className="mt-5"></div>
      </Card>
        
      </div>
  );
}

export default Consumo2;
