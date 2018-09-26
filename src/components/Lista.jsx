import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../consts'

export default class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.renderRows = this.renderRows.bind(this)
    }

    componentDidMount() {
        axios.get(BASE_URL)
            .then(res => this.setState({ ...this.state, list: res.data }))
    }

    renderRows() {
        const list = this.state.list || []
        return list.map(node => (
            <tr key={node.id}>
                <th scope="row">{node.id}</th>
                <td>{node.nome}</td>
                <td>{node.telefone}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="container">
            <div className="row">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Matricula</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderRows()}
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}