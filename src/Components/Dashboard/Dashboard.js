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
        this.getAllHouses = this.getAllHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)

    }
    getAllHouses() {
        axios
            .get('/api/houses').then( house => {
                this.setState({
                    houses: house.data
                })
            }).catch(err => console.log(err.response.request.response))
    }
    componentDidMount() {
        this.getAllHouses()
    }

    deleteHouse(id) {
        axios
            .delete(`/api/houses/${id}`).then(res => {
                this.setState({houses: res.data})
            }).catch( err => console.log('delete no work'))
            this.getAllHouses()
    }

    render() {
        return(
            <div onClick={() => this.componentDidMount()}>
                Dashboard
                {this.state.houses.map((el, i) =>(
                    <House 
                    key={i}
                    // key={el.id}
                    id={el.house_id}
                    data={el}
                    deleteFn={this.deleteHouse}
                    />
                ))}
                <Link to='/wizard' getHouses={this.getAllHouses}>
                    Add New Property
                </Link>
            </div>
        )
    }
}