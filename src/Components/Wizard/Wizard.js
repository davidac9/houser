import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            zipcode: ''
        }
    }
    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    handleChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }
    handleChangeZip(e) {
        this.setState({
            zipcode: e.target.value
        })
    }
    newHouse(name, address, city, zipcode) {
        axios
            .post('/api/houses', )
    }
    render(){
        return(
            <div>
                Wizard
                name
                <input type='text' onChange={e => this.handleChangeName(e)}/>
                address
                <input type='text' onChange={e => this.handleChangeAddress(e)} />
                city
                <input type='text' onChange={e => this.handleChangeCity(e)} />
                zipcode
                <input type='text' onChange={e => this.handleChangeZip(e)} />
                <Link to='/'>
                    Cancel
                </Link>
            </div>
        )
    }
}