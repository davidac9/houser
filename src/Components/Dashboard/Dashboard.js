import React, {Component} from 'react'
import House from '../House/House'
import {Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }

    }
    getAllHouses() {
        axios
            .get('/api/houses').then( house => {
                this.setState({
                    houses: house.data
                })
                console.log(this.state.houses)
            }).catch(err => console.log(err.response.request.response))
    }
    componentDidMount() {
        this.getAllHouses()
    }

    render() {
        return(
            <div>
                Dashboard
                {this.state.houses.map(el =>(
                    <House 
                    key={el.id}
                    id={el.id}
                    data={el}
                    />
                ))}
                <Link to='/wizard'>
                    Add New Property
                </Link>
            </div>
        )
    }
}