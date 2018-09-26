import React, { Component } from 'react'
import { BASE_URL } from '../consts'
import axios from 'axios'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            matricula: '',
            nome: '',
            telefone: '',
            erroMatricula: false,
            erroNome: false,
            erroTelefone: false,
            cadastroSucesso: false
        }

        this.handleForm = this.handleForm.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleClear() {
        this.setState({
            matricula: '',
            nome: '',
            telefone: '',
            erroMatricula: false,
            erroNome: false,
            erroTelefone: false
        })
    }

    handleForm(e) {
        let formOk = true
        this.setState({
            erroMatricula: false,
            erroNome: false,
            erroTelefone: false
        })
        if (this.state.matricula === "") {
            this.setState({ erroMatricula: true })
            formOk = false
        }
        if (this.state.nome === "") {
            this.setState({ erroNome: true })
            formOk = false
        }
        if (this.state.telefone === "") {
            this.setState({ erroTelefone: true })
            formOk = false
        }
        if (formOk) {
            axios.post(BASE_URL, {
                id: this.state.matricula,
                nome: this.state.nome,
                telefone: this.state.telefone
            }).then(resp => { 
                this.handleClear()
                this.setState({ cadastroSucesso: true }) 
            })
        }

        e.preventDefault()
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <span className="anchor" id="formChangePassword"></span>
                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h3 className="mb-0">Adicionar Aluno</h3>
                            </div>
                            <div className="card-body">
                                <form className="form" onSubmit={this.handleForm}>
                                    <div className="alert alert-success alert-dismissible fade show" style={this.state.cadastroSucesso ? { display: 'block' } : { display: 'none' }} role="alert">
                                        <strong>Sucesso!</strong> O usuário foi cadastrado.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPasswordOld">Matrícula</label>
                                        <input type="text" name="matricula" value={this.state.matricula} onChange={(e) => this.handleChange(e)} className="form-control" id="inputPasswordOld" required="" />
                                        <span className="form-text small text-muted" style={this.state.erroMatricula ? { display: 'block' } : { display: 'none' }}>
                                            A matricula deve ser preenchida.
                                </span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPasswordNew">Nome</label>
                                        <input type="text" name="nome" value={this.state.nome} onChange={(e) => this.handleChange(e)} className="form-control" id="inputPasswordNew" required="" />
                                        <span className="form-text small text-muted" style={this.state.erroNome ? { display: 'block' } : { display: 'none' }}>
                                            O nome deve ser preenchido.
                                </span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPasswordNewVerify">Telefone</label>
                                        <input type="text" name="telefone" value={this.state.telefone} onChange={(e) => this.handleChange(e)} className="form-control" id="inputPasswordNewVerify" required="" />
                                        <span className="form-text small text-muted" style={this.state.erroTelefone ? { display: 'block' } : { display: 'none' }}>
                                            O telefone deve ser preenchido.
                                </span>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success btn-lg float-right">Salvar</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
