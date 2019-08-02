import React, {Component} from 'react'

export default class House extends Component {
    render(){
        return(
            <div>
                <p>{this.props.data.name}</p>
                <p>{this.props.data.city}</p>
                <p>{this.props.data.address}</p>
                <p>{this.props.data.zip_code}</p>
                <button>delete</button>
            </div>
        )
    }
}