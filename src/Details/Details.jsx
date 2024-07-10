import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import key from "../Key/key"
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

export default function Details() {

    const navigate = useNavigate()

    const { id } = useParams()

    //console.log(id)

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key()}&language=pt-BR&page=1`

    const [ filmesid, setFilmesid ] = useState([])
    
    useEffect(() => {
        (async() => { 
            const req = await axios.get(url)

            const DetailsFilmes = {
                id,
                title: req.data.title,
                sinopse: req.data.overview,
                image: `https://image.tmdb.org/t/p/w500${req.data.poster_path}`,
                realeaseDate: req.data.release_date
            }        

            setFilmesid(DetailsFilmes)
        
        })()
    },[id, url])

   // console.log(filmesid)

   const Voltar = () => {
       return navigate("/")
   }

    return (
    
        <Container>
            <div className="movie">
                <img src={filmesid.image} alt={filmesid.sinopse} />
                <div className="details">
                    <h1>{filmesid.title}</h1>
                    <span>Sinopse: {filmesid.sinopse}</span>
                    <span className="release-date">Release date: {filmesid.realeaseDate}</span>
                    <Nav.Link href="/play" className="btnLink">Assistir</Nav.Link>
                
                    <button onClick={Voltar}>
                        Voltar
                    </button>
                    <br />
                </div>
            </div>
        </Container>
       
    )
}
