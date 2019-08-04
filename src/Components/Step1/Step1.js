import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios';
import store, { NEW_NAME, NEW_ADDRESS, NEW_CITY, NEW_ZIP, NEW_HOUSE_STATE, CLEAR_INPUTS } from './../../store.js'; 
import './Step1.css'

export default class Step1 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            zip_code: reduxState.zip_code,
            houseState: reduxState.houseState
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
    handleChangeHouseState(e) {
        this.setState({
            houseState: e.target.value
        })
    }
    
    saveChanges() {
        store.dispatch({
            type: NEW_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type: NEW_ADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type: NEW_CITY,
            payload: this.state.city
        })
        store.dispatch({
            type: NEW_ZIP,
            payload: this.state.zip_code
        })
        store.dispatch({
            type: NEW_HOUSE_STATE,
            payload: this.state.houseState
        })
    }
    clearInputs() {
        store.dispatch({
            type: CLEAR_INPUTS
        })
    }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         const reduxState = store.getState()
    //         this.setState({
                
    //         })
    //     })
    // }

    // newHouse() {
    //     store.dispatch({
    //         type: NEW_NAME,
    //         payload:this.state.name
    //     })
    //     store.dispatch({
    //         type: NEW_ADDRESS,
    //         payload:this.state.address
    //     })
    //     store.dispatch({
    //         type: NEW_CITY,
    //         payload: this.state.city
    //     })
    //     store.dispatch({
    //         type: NEW_ZIP,
    //         payload: this.state.zip_code
    //     })

    //     const body = {
    //         name: this.state.name,
    //         address: this.state.address,
    //         city: this.state.city,
    //         zip_code: this.state.zip_code
    //     }
    //     axios
    //         .post('/api/houses', body ).then(() => {
    //             // console.log(res)
    //         })
    //         .catch(err => console.log(err, "couldn't add house oops"))
    //         // this.props.history.goBack()
    // }
    render(){
        return(
            <div className="dash">
                <div className="container">
                <div className="guide">
                        <h1>
                            Add New Listing
                        </h1>
                    
                        <Link to='/'>
                            <button className="cancel" onClick={() => this.clearInputs()}>Cancel</button>
                        </Link>
                    </div>
                    <hr/>
                    Property Name
                    <input type='text' value={this.state.name} onChange={e => this.handleChangeName(e)}/>
                    Address
                    <input type='text' value={this.state.address} onChange={e => this.handleChangeAddress(e)} />
                    City
                    <input type='text' value={this.state.city} onChange={e => this.handleChangeCity(e)} />
                    Zipcode
                    <input type='text' value={this.state.zip_code} onChange={e => this.handleChangeZip(e)} />
                    State
                    <input type='text' maxlength='2' value={this.state.houseState} onChange={e => this.handleChangeHouseState(e)} />
                    
                        <Link to='/wizard/step2'>
                            <button className="next-step" onClick={() => this.saveChanges()}>Next</button>
                        </Link>
                </div>
            </div>

        )
    }
}