import './modal.css';

const Modal = ({ dadosItem }) => {

  return (
    <>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <li>
            <img src={dadosItem.imagem} alt="img" className="col-md-12" />
          </li>
          <li>
            {' '}
            <strong className="text-primary">ID:</strong> {dadosItem.id}
          </li>
          <li>
            <strong className="text-primary">Nome:</strong> {dadosItem.name}
          </li>
          <li>
            <strong className="text-primary">E-mail</strong> {dadosItem.email}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Phone:</strong> {dadosItem.phone}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Access:</strong> {dadosItem.access}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Modal;
