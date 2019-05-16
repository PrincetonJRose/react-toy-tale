import React, {Component} from 'react'
import * as App from './App'

export default class ToyCard extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <img className="toy-avatar" src={this.props.image} />
                <p>Likes: {this.props.likes}</p>
                <button className="like-btn" onClick={()=>this.props.increaseLikes(this.props.id)}>Like!</button>
            </div>
        )
    }

}