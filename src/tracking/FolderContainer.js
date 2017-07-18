import React from 'react';
import Folder from './Folder';

export default class FolderContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            "name": this.props.value,
            "expanded": false,
            "active": false,
            "items": []
        }

        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleActiveClick = this.handleActiveClick.bind(this);
    }

    handleExpandClick (event) {
        this.setState({
            "expanded": !this.state.expanded
        })
    }

    handleActiveClick (event) {
        this.setState({
            "active": !this.state.active
        })
    }

    render () {
        return (
            <Folder name={this.state.name} active={this.state.active} expanded={this.state.expanded} items={this.state.items} expandClick={this.state.handleExpandClick} activeClick={this.handleActiveClick} />                        
        )
    }
}
