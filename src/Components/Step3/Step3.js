import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import store, { NEW_MORTGAGE, NEW_RENT, CLEAR_INPUTS } from './../../store.js'; 

export default class Step3 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }
    handleChangeMortgage(e) {
        this.setState({
            mortgage: e.target.value
        })
    }
    handleChangeRent(e) {
        this.setState({
            rent: e.target.value
        })
    }
    
    saveChanges() {
        store.dispatch({
            type: NEW_MORTGAGE,
            payload: this.state.mortgage

        })
        store.dispatch({
            type: NEW_RENT,
            payload: this.state.rent
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
    //         this.setState({})
    //     })
    // }
    createHouse() {
        const reduxState = store.getState()
        
        const body = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            zip_code: reduxState.zip_code,
            image: reduxState.image,
            monthly_mortgage: this.state.mortgage,
            rent: this.state.rent,
            state: reduxState.houseState,
        }
        // console.log(body)
        axios.post('/api/houses', body ).then(() => {
            console.log(body)
            }).catch(err => console.log(err, "couldn't add house oops"))
            this.clearInputs()
    }

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

                    <p>Recommended Monthly Rent ${this.state.mortgage * 1.25}</p>
                    Monthly Mortgage Amount $
                    <input type='text' value={this.state.mortgage} onChange={e => this.handleChangeMortgage(e)}/>
                    Desired Monthly Rent $
                    <input type='text' value={this.state.rent} onChange={e => this.handleChangeRent(e)}/>

                    <Link to='/wizard/step2'>
                    <button className="next-step" onClick={() => this.saveChanges()} >Previous</button>
                    </Link>
                    <Link to='/'>
                    <button className="next-step" onClick={() => this.createHouse()} >Create</button>
                    </Link>
                </div>
            </div>
        )
    }

}
