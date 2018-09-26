import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><i className="fa fa-calendar-check-o"></i> Crud Alunos</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                     <Link className="nav-link" to='/'>Cadastrar</Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to='/lista'>Lista</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu