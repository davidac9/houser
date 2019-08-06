import React, {Component} from 'react'
import './House.css'

export default class House extends Component {
    render(){
        return(
            <div className='houses'>
                <img src={this.props.data.image} alt=''/>
                <div className="info">
                <p>
                    Property Name: {this.props.data.name}
                    {/* Address: {this.props.data.address}
                    State: {this.props.data.state}
                    Zip: {this.props.data.zip_code} */}
                </p>
                <p>Address: {this.props.data.address}</p>
                <p>City: {this.props.data.city}</p>
                <p>State: {this.props.data.state}</p>
                <p>Zip: {this.props.data.zip_code}</p>
                </div>
                <div className="price">
                    <p>Monthly Mortgage: ${this.props.data.monthly_mortgage / 100}</p>
                    <p>Monthly Rent: ${this.props.data.rent / 100}</p>
                </div>
                <button className="delete" onClick={() => this.props.deleteFn(this.props.id)}>Remove</button>
            </div>
        )
    }
}