import React, { useState, useContext, useEffect } from 'react';
import './cadastro.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContext from '../../Context/SatateDate'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Modal, Form, Table } from 'react-bootstrap'
import api from '../../api/api'
import { BsPencilSquare } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";

export default function Cadastro() {
  

  const { users } = useContext(AppContext)

  const URL = "https://api-store-v4bm.onrender.com/user/"  //"http://15.228.82.63/"

  /**
   * Esse hook useState esta recebendo o valor do evento onClick e assim
   * passo como parâmetro para o componente FormularioCadastro para que assim
   * possamos preencher os campos imput e atualizá-lo com identificação via id
   *
   */

  const [idAtual, setIdAtual] = useState('');
  const [item, setItem] = useState('');
  const [email, setEmail] = useState();

  const navigate = useNavigate()

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
    if (idAtual) {
      api
        .get(`/user/${idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [idAtual]);

  console.log(values)
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
    api.put("/user", values)
      .then(() => {
        if (idAtual === '') {
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
        toast.error(err);
        //Correção
        history('/conta');
        setTimeout(() => {
          window.location.reload()
        }, 6250)

      });
  }

  useEffect(() => {
    (async () => {
      const email2 = await localStorage.getItem("user")
      const emaiL = await JSON.parse(email2)
      setEmail(emaiL)

    })()
  }, [])

  const mail = users.filter((reqEmail) => {
    return reqEmail.email.includes(email)
  })

  /**
   * Essa função é responsável por apaga um usuario via id,
   * que esta vindo via evento do onClick
   */
  const Apagausuario = (id) => {
    axios
      .delete(URL + id)
      .then((res) => {
        toast.success('O usuário foi deletado com sucesso');
        localStorage.clear()
        setTimeout(() => {
          window.location.reload()
        }, 6280)
      })
      .catch((erro) => {
        toast.error(
          'Houve um erro ao tenta apaga esse usuário, erro relacionado a ' +
          erro
        );
        setTimeout(() => {
          navigate('/', window.location.reload())  //window.location.reload()
        }, 6280)
      });
  };

  //fechar Mural
  const handleClose = () => setIdAtual(false);

  return (
    <Card>
      <Card.Body className="row">
        <Table responsive="sm">
          <thead>
            <tr className="text-white">
              <th scope="col">
                <FcAcceptDatabase className="h3" />
              </th>
              <th scope="col">Usuario</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
              <th scope="col">Access</th>
              <th scope="col">edit user</th>
              <th scope="col">Deelete</th>
            </tr>
          </thead>

          {mail.map((r) => (
            <tbody key={r.id} className="container">
              <tr className="btn-outline-secondary text-white">
                <th scope="row">
                  <Button onClick={() => setItem(r)}>
                    <FaEye className="bg-primary" />
                  </Button>

                  <Modal
                    show={item}
                    onHide={() => setItem(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        {item.name}
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="col-6 m-auto bg-white rounded">
                      <Card.Img src={item.imagem} className="bg-white rounded" />
                      <Card.Text className="m-1 bg-white">
                        <img src={item.image} alt="img" className="col-sm-12" />
                        <strong className="bg-white">
                          name:{" "}
                        </strong>
                        {item.name}
                        <br />
                        <strong className="bg-white">
                          age:{" "}
                        </strong>
                        {item.age}
                        <br />
                        <strong className="bg-white">
                          Email:{" "}
                        </strong>
                        {item.email}
                        <br />
                        <strong className="bg-white">
                          Phone:{" "}
                        </strong>
                        {item.phone}
                        <strong className="bg-white">
                          :{" "}
                        </strong>
                        {item.access}
                        
                      </Card.Text>
                    </Modal.Body>
                  </Modal>
                </th>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td>{r.age}</td>
                <td>{r.access}</td>
                <td onClick={() => setIdAtual(r.id)} ><BsPencilSquare className="mz h3 text-white" /></td>
                <td onClick={() => Apagausuario(r.id)}><BiTrash className="mz h3 text-danger" /></td>

              </tr>
              <Modal show={idAtual} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="titolo1 m-auto">Sistema de Atualização de dados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                      />
                      <Form.Label>Imagem</Form.Label>
                      <Form.Control
                        type="text"
                        name="image"
                        placeholder="Insira uma imagem"
                        autoFocus
                        value={values.image}
                        onChange={onChange}
                      />
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        autoFocus
                        value={values.email}
                        onChange={onChange}
                      />
                      <Form.Label>Password</Form.Label>
                      <div onClick={MostraPassword}>
                        {!!verpass ? <i class="fa-solid fa-eye-slash olho bg-white"></i> :
                          <i className="fas fa-eye olho bg-white" />}
                      </div>
                      <Form.Control
                        type={verpass ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={onChange}
                      />
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="phone"
                        autoFocus
                        value={values.phone}
                        onChange={onChange}
                      />
                      <Modal.Footer>
                        <Button onClick={handleClose} className="btn btn-secondary col-5 m-auto">
                          Fecha
                        </Button>
                        <Button onClick={onSubmit} className="btn btn-primary col-5 m-auto">
                          Salvar
                        </Button>
                      </Modal.Footer>
                    </Form.Group>
                  </Form>
                </Modal.Body>

              </Modal>
            </tbody>
          ))}
          
        </Table>
        
      </Card.Body>
    </Card >
  );
}
