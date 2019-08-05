import React, {Component} from 'react'
// import Route, {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
// import axios from 'axios';
// import store, { NEW_NAME, NEW_ADDRESS, NEW_CITY, NEW_ZIP } from './../../store.js'; 

export default class Wizard extends Component {
    // constructor(props) {
    //     super(props)
        // const reduxState = store.getState()
        // this.state = {
        //     name: reduxState.name,
        //     address: reduxState.address,
        //     city: reduxState.city,
        //     zip_code: reduxState.zip_code

        // }
    // }
    // handleChangeName(e) {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleChangeAddress(e) {
    //     this.setState({
    //         address: e.target.value
    //     })
    // }
    // handleChangeCity(e) {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }
    // handleChangeZip(e) {
    //     this.setState({
    //         zip_code: e.target.value
    //     })
    // }
    
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
    // newHouse() {

    //     const body = {
    //         name: this.state.name,
    //         address: this.state.address,
    //         city: this.state.city,
    //         zip_code: this.state.zip_code
    //     }
    //     axios
    //         .post('/api/houses', body ).then(() => {

    //         })
    //         .catch(err => console.log(err, "couldn't add house oops"))
    // }
    render(){
        return(
            // <div>
            //     Wizard
            //     name
            //     <input type='text' onChange={e => this.handleChangeName(e)}/>
            //     address
            //     <input type='text' onChange={e => this.handleChangeAddress(e)} />
            //     city
            //     <input type='text' onChange={e => this.handleChangeCity(e)} />
            //     zipcode
            //     <input type='text' onChange={e => this.handleChangeZip(e)} />
            //     <Link to='/'>
            //         <button onClick={() => this.newHouse()}>add</button>
            //     </Link>
            //     <Link to='/'>
            //         Cancel
            //     </Link>
            // </div>
            <Switch>
                <Route component={Step1} path='/wizard/step1' />
                <Route component={Step2} path='/wizard/step2' />
                <Route component={Step3} path='/wizard/step3' />
            </Switch>
        )
    }
}