import React, {Component} from 'react'
import House from '../House/House'
import {Link } from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }

    }
    render() {
        return(
            <div>
                Dashboard
                {this.state.houses.map(el =>(
                    <House />
                ))}
                <Link to='/wizard'>
                    Add New Property
                </Link>
            </div>
        )
    }
}