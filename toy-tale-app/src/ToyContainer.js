import React, {Component} from 'react'
import ToyCard from './ToyCard'

export default class ToyContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="toy-collection">
                            {this.props.toys.map( toy => {
                return <ToyCard 
                            id={toy.id} 
                            name={toy.name} image={toy.image} likes={toy.likes} increaseLikes={this.props.increaseLikes}/>
                })}
            </div>
        )
    }

}
