import React, {Component} from 'react'

export default class ToyForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="">
            <form className="add-toy-form" onSubmit={this.props.handleSubmit} >
                    <h3>Create a toy!</h3>
                    <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
                    <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
                    <br/><input type="submit" name="submit" value="Create New Toy" className="submit"/>
                </form>
        </div>
        )
    }
}