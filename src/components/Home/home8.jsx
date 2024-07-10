import React, { useState, useEffect } from 'react';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home.css'
import './style.css'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import key from '../../Key/key'
import { Link } from 'react-router-dom'

import 'swiper/package.json'

const Consumo = () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key()}&language=pt-BR&page=7`

    const [chec, setChec] = useState([])
    const [load] = useState(false)
    const [ scollx, setScollx ] = useState(-400)
    const [filmes2, setFilmes2] = useState([])

    useEffect(() => {
        (async() => {
            const filme = await axios.get(url)

            setFilmes2(filme.data.results)
        })()
    }, [url])

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

    const handleLeftArrow = () => {
        let x = scollx - Math.round(window.innerWidth / 2);
        let listw = filmes2.length * 150;
        if((window.innerWidth - listw) > x) {
        x = (window.innerWidth - listw) - 60;
        }
        setScollx(x)
    }

    const handleRightArrow = () => {
        
        let x = scollx + Math.round(window.innerWidth / 2);
        if(x > 0) {
        x = 0;
        }
        setScollx(x)
    }

    //console.log(filmes)

    //{`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} 
    return (
        <div className="movieRow">
        <div className="movieRow--left">
            <MdNavigateBefore style={{
            fontSize: 50, 
            color: "#000", 
            background: "#FFF"           
            }} onClick={handleLeftArrow} className="imgBoder" />
        </div>
        <div className="movieRow--right">
            <MdNavigateNext style={{
            fontSize: 50, 
            color: "#000", 
            background: "#FFF" 
            }} onClick={handleRightArrow} className="imgBoder" />
        </div>
        
        <div className="movieRow--listarea" >
        <div className="movieRow--list" style={{
            marginLeft: scollx,
            width: filmes2.length * 150
          }}>
        {filmes2.length > 0 && filmes2.map(e => (
          <Link to={`/details/${e.id}`}>
            <div key={e.id} className="movieRow--item">
              <div className="card-group card border-0">
                <div className="">
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt="Card cap" />
                  <div className="titolo1">
                    <strong>{e.title}</strong>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
        ))}
        </div>
        {!!load && <Loading />}
      </div>   
    </div>
  );
}

export default Consumo;
