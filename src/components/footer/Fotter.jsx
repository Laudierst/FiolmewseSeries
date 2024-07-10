import React from 'react'
import "./styles.css"

/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  return(
    <div className='tela mt-5 mb-5 container text-white'>
        <hr className='text-white' />
        <div className="row">
            <div className="col-sm-6">
                <div className="card border-0">
                <div className="card-body text-center">
                    <h5 className="card-title">Seja bem vindo ao Filmes e Séries</h5>
                    <p className="card-text">Trabalhamos com toda dedicação para trazer os melhores fimes e séries para seu lazer.</p>
                    <a href="/termos" className="btn btn-primary">Termos de uso</a>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card border-0">
                <div className="card-body text-center">
                    <h5 className="card-title">Contato</h5>
                    <p className="card-text">E-mail: josesantanadeveloper@gmail.com</p>
                    <p className="card-text">Whtsapp: +55 (75) 998269680</p>
                    <p className="card-text">Telegram: +55 (75) 998269680</p>
                </div>
                </div>
            </div>
            
            </div>
            
            <div className="container text-center mt-5">
            <h5 className="card-title">Desenvolverdor</h5>
            <p className="card-text">José Santana de Jesus</p>
            <span>CPF: 034.322.725-88</span>
            </div>
    </div>
   )
  }
