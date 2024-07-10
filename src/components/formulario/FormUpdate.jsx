import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone'
import api from '../../api/api';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap'

/**
 * Essa variável é quem determina os valores iniciais dos input citado no values do useState
 */
const camposIniciasDeValores = {
  name: '',
  image: '',
  email: '',
  password: '',
  phone: ''
};

export default function FormularioCadastro(props) {
  const [values, setValues] = useState(camposIniciasDeValores);
  const [selectedFile, setSelectedFile] = useState('')
  const history = useNavigate();

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
    api.put("/put", values)
      .then(() => {
        if (props.idAtual === '') {
          toast.success('Usuario Cadastrado com sucesso');
        } else {
          toast.success('O Usuario foi Atualizado com sucesso');

        }
        //Correção de eero
        history("/conta")
        setTimeout(() => {
          window.location.reload()
        }, 6250)
      })
      .catch((err) => {
        toast.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        //Correção
        history('/conta');
        setTimeout(() => {
          window.location.reload()
        }, 6250)

      });
  }

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const fileUrl = URL.createObjectURL(file)

    setSelectedFile(fileUrl)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <>
      <div className="p-5 mt-5">
        <h1 className="titolo2 mb-5">Sistema de Cadastro</h1>
        <Form onSubmit={onSubmit}>
          <div className="form-group input-group mt-2">
            <div className="input-grou-prepend align-self-center">
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
          <div className="form-group input-group mt-2">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i class="fa-solid fa-image  p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Sua Imagem"
              name="imagem"
              value={values.image}
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group mt-2">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i className="fas fa-envelope  p-1 mt-2 text-info" />
              </div>
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Senha"
              name="email"
              value={values.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group mt-2">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i class="fa-solid fa-key p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              min="0"
              name="password"
              value={values.password}
              onChange={onChange}
            />

          </div>
          <div className="form-group input-group mt-2">
            <div className="input-grou-prepend align-self-center">
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
          <button
            type="submit"
            theme="contained-green"
            className="user-login__submit-button h5 btb p-2 mt-3 shadow-lg mb-5 bg-body rounded-3 cor-btn"
            rounded
          >
            Atualiza
          </button>
        </Form>
      </div>
    </>
  );
}
