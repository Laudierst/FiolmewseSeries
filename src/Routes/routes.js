import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppProvider from '../Context/Provaider';
import UserLogin from '../components/User/Login/Login'
import User from '../components/ContaUser/ContaUser'
import Consumo from '../components/Home/home'
import FormularioCadastro from '../components/formulario/FormCadastraNovo';
import Erro404 from '../components/page404/erro404';
import { useContext } from 'react';
import AppContext from '../Context/SatateDate'
import './router.css'
import Details from '../Details/Details';
import Play from '../components/play/Play';

const AdminRotas = () => {

    const Private = ({ children }) => {
        const { auth, loading } = useContext(AppContext)

        if (loading) {
            return (
                setTimeout(() => {
                    <div className="container">
                        <img src="lod.gif" alt="img" className="marg" />
                    </div>
                }, 6000)
            )
        }

        if (!auth) {
            setTimeout(() => {
                <div className="container">
                    <img src="lod.gif" alt="img" className="marg" />
                </div>
            }, 6000)
            return (
                <Navigate to="/login" />
            )
        }

        return children

    }

    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Consumo />} />
                    <Route exact path="/conta" element={<Private><User /></Private>} />
                    <Route exact path="/login" element={<UserLogin />} />
                    <Route exact path="/cadastro" element={<FormularioCadastro />} />
                    <Route exact path="/sobre" element={<Erro404 />} />
                    <Route exact path="/details/:id" element={<Details />} />
                    <Route exact path="/play" element={<Private><Play /></Private>} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default AdminRotas;