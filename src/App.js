import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import Nav from './components/navBar/nav2';
import AdminRotas from './Routes/routes';
import './style.css'
//import { Footer } from './components/footer/Fotter';

function App() {

  return (

    <div className="">
      <div className="col-md-8 offset-md-2">
        <Nav />        
        <AdminRotas />
      </div>
      <ToastContainer />
     {/* <Footer/>*/}
    </div>


  );
}

export default App;
