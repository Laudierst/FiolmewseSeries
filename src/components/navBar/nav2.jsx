import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsGithub } from 'react-icons/bs'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
import { FcPortraitMode } from 'react-icons/fc'
import { BsGear } from 'react-icons/bs'
import { FaRunning } from 'react-icons/fa'
import "./nav.css"

function BasicExample() {

    const img = JSON.parse(localStorage.getItem('image'))
    const name = JSON.parse(localStorage.getItem('name'))
    const img2 = "https://www.rbsdirect.com.br/imagesrc/25273339.jpg?w=700"

    console.log(img)

    const Usuario = () => {
        if (name && img) {
        return (
            <div>
            <img src={!img === undefined ? img2: img} alt="img" className="imgUser" />
            </div>
        )
        } else {
        return <div></div>
        }
    }

    const Sair = () => {
       localStorage.clear()
    }

    const email = localStorage.getItem("user")

    return (
        <Navbar bg="" expand="lg"  className="text-white navbar-dark mb-3">
            <Usuario />
            <Container>
                <Navbar.Brand href="/" className="titolo3 text-white">
                    
                    <i className="fa-solid fa-house">
                    <span className="p-2">Serie e Filmes</span>
                    </i>
                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-white">
                            <strong>Home</strong></Nav.Link>
                        <Nav.Link href="/sobre" className="text-white">
                            <strong>Sobre</strong>
                        </Nav.Link>
                        <NavDropdown title="Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">

                                <TiSocialYoutubeCircular className="bg-white h5 text-danger" />
                                Youtube
                                
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Laudier2">
                                
                                    <BsGithub className="bg-white m-1 h" />
                                
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">
                                
                                <AiFillLinkedin className="bg-white text-primary m-1 h" />
                               
                                LinkDin
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://laudierstdev.ga/">
                                
                                <FcPortraitMode className="bg-white m-1 h" />
                                
                                Portifólio
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav>
                        <div>
                            {email ? <NavDropdown title={email ? "Conta" : ""} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/conta">
                                
                                <BsGear className="m-1 bg-white" />
                                
                                Minha Conta
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/" className="h5" onClick={Sair}>
                                <FaRunning className="m1 bg-white"/>
                                Sair
                            </NavDropdown.Item>
                            </NavDropdown> : ""}
                        </div>
                    </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cadastro">
                            {!email ? <strong className="nav-link text-white">Cadastre-se</strong> : ""}
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            {!email ? <strong className="nav-link text-white">Login</strong> : ""}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        
        </Navbar>
    );
}

export default BasicExample;