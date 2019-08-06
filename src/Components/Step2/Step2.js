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

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                image: reduxState.image
            })
        })
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
                    Image URL
                <input type='text' value={this.state.image} onChange={e => this.handleChangeImage(e)}/>
                
                <Link to='/wizard/step1'>
                <button className="next-step" onClick={() => this.saveChanges()} >Previous</button>
                </Link>
                
                <Link to='/wizard/step3'>
                <button className="next-step" onClick={() => this.saveChanges()} >Next</button>
                </Link>
                </div>
            </div>
        )
    }

}
