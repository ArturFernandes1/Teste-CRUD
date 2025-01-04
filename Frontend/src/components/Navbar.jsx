import React from "react";
import '../components/Navbar.scss'


function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light background-nav">
                <div class="container-fluid">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/Listarproduto">Listar Produtos</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar