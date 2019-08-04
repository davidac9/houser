import React, {Component} from 'react'
import House from '../House/House'
import {Link } from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

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
            <div className="dash" onClick={() => this.componentDidMount()}>
                <div className="container">
                    <div className="guide">
                        <h1>
                            Dashboard
                        </h1>
                        <Link to='/wizard/step1'>
                            <button className="new-house">Add New Property</button>
                        </Link>
                    </div>
                    <hr/>
                    {this.state.houses.map((el, i) =>(
                        <House
                        key={i}
                        // key={el.id}
                        id={el.house_id}
                        data={el}
                        deleteFn={this.deleteHouse}
                        />
                    ))}
                </div>
            </div>
        )
    }
}