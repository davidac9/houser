import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios';
import store, { NEW_IMAGE, CLEAR_INPUTS } from './../../store.js'; 

export default class Step2 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            image: reduxState.image
        }
    }
    handleChangeImage(e) {
        this.setState({
            image: e.target.value
        })
    }
    
    saveChanges() {
        store.dispatch({
            type: NEW_IMAGE,
            payload: this.state.image

    })
}
    clearInputs() {
        store.dispatch({
            type: CLEAR_INPUTS
        })
    }

    render(){
        return(
            <div>
                Wizard
                Image URL
                <input type='text' value={this.state.image} onChange={e => this.handleChangeImage(e)}/>

                <Link to='/wizard/step1'>
                    <button onClick={() => this.saveChanges()} >Previous</button>
                </Link>

                <Link to='/wizard/step3'>
                    <button onClick={() => this.saveChanges()} >Next</button>
                </Link>
                <Link to='/'>
                    <button onClick={() => this.clearInputs()} >Cancel</button>
                </Link>
            </div>
        )
    }

}
