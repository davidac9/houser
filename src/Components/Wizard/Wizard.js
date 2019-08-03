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
            zip_code: 0
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
            zip_code: e.target.value
        })
    }
    
    newHouse() {
        const body = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            zip_code: this.state.zip_code
        }
        axios
            .post('/api/houses', body ).then(() => {
                // console.log(res)
            })
            .catch(err => console.log(err, "couldn't add house oops"))
            // this.props.history.goBack()
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
                    <button onClick={() => this.newHouse()}>add</button>
                </Link>
                <Link to='/'>
                    Cancel
                </Link>
            </div>
        )
    }
}