import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { toast } from 'react-toastify';
import './form.css'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * Essa variável é quem determina os valores iniciais dos input citado no values do useState
 */

export default function FormularioCadastro(props) {
  console.clear()

  const [values, setValues] = useState([]);
  const history = useNavigate();

  const [verpass, setVerpass] = useState(false)

  const MostraPassword = () => {
    setVerpass(prevState => !prevState)
  }

  /**
   * Aqui estamos utilizando o onChange para verifica tudo que esta sendo digitado
   * nos inputes via name, e passando todo esses valores para a variável do nosso useState
   * O values e assim podemos criar na nossa base de dados via axios como vamos ver abaixo.
   */
  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };
  /**
   * Aqui estamos fazendo uma espesse de filtragem do produto via id via props,
   * lembra da variável que eivamos para o formulário via props a idAtual, então é ela que
   * estamos usando, porque ela traz o id de um produto
   */
  useEffect(() => {
    if (props.idAtual) {
      api
        .get(`/user/${props.idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [props.idAtual]);
  /**
   * E aqui que fazemos a criação e editação do produto o onSubmit.
   */
  function onSubmit(ev) {
    /**
     * Esse ev.preventDefault() é para evitar que o botão faça a,
     * ação natural dele que é da refresh, e ai podemos determinar para
     * onde a pagina seja redirecionada com o useHistory do react-router-dom
     */
    ev.preventDefault();

    /**
     * E o que for resolvido na condição de cima vai ser executado aqui.
     * Seja para criar um produto ou para atualizar
     */
    
    api.post("/user", values)
      .then(() => {
        toast.success('Usuario Cadastrado com sucesso');
        
        //Correção de eero
        history("/")
      })
      .catch((err) => {
        console.log(err)
        toast.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        //Correção
        history('/');
        setTimeout(() => {
          window.location.reload()
        }, 6250)

      });
  }

  return (
    <div className="card p-5 mt-5 bg-white col-md-5  col-md-4 offset-md-4">
      <h1 className="titolo2 mb-5 bg-white">Sistema de Cadastro</h1>
      <Form onSubmit={onSubmit} className=" bg-white">
        <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fas fa-id-badge p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Seu Nome"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fa-solid fa-image  p-1 mt-2 text-info"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Url de uma Imagem"
            name="imagem"
            value={values.image}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fas fa-envelope  p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fa-solid fa-key p-1 mt-2 text-info"></i>
            </div>
          </div>
          <input
            type={verpass ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            min="0"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <div onClick={MostraPassword}>
            {verpass ? <i className="fa-solid fa-eye-slash olho3 bg-white"></i> :
              <i className="fas fa-eye olho3 bg-white" />}
          </div>
        </div>
        <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fas fa-phone-alt  p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="phone"
            className="form-control"
            placeholder="Telefone"
            min="0"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />

        </div>
        <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fas fa-phone-alt  p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="age"
            className="form-control"
            placeholder="Age"
            name="age"
            value={values.age}
            onChange={onChange}
          />
          <div className="form-group input-group mt-2 bg-white">
          <div className="input-grou-prepend align-self-center bg-white">
            <div className="input-group-text">
              <i className="fas fa-phone-alt  p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="access"
            className="form-control"
            placeholder="Access"
            name="access"
            value={values.access}
            onChange={onChange}
          />

        </div>

        </div>
        <button
          type="submit"
          theme="contained-green"
          className="btn btn-outline-info btn-lg btn-block col-12 mt-2"
        >
          Cadastrar
        </button>
        <Link to="/login" className="btn btn-outline-secondary mt-5 m-auto" style={{textDecoration: "none", textAlign: 'center'}}>Ja tenho conta</Link>
      </Form>
    </div>
  );
}
