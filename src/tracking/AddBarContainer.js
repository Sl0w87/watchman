import React from 'react';
import AddBar from './AddBar';

export default class AddBarContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onSubmit = props.onSubmit
    }

    handleChange (event) {        
        console.log('handleChange')
        this.setState({value: event.target.value})
    }

    handleSubmit (event) {        
        console.log('handleSubmit')
        this.setState({value: event.target.value})
        if (this.onSubmit !== undefined)
            this.onSubmit(this.state.value)
    }

    render () {
        return (
            <AddBar value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        )
    }
}