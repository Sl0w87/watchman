import React from 'react';
import {Button, Input} from 'react-materialize';

class TrackedChangesAddBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.setState({value: event.target.value});

        var trackedLocations = JSON.parse(localStorage.getItem('trackedLocations'));
        if (trackedLocations == undefined)
            trackedLocations = [];
        trackedLocations.push(this.state.value);
        localStorage.setItem('trackedLocations', JSON.stringify(trackedLocations));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>                       
                <Button type="submit" style={{float: "right", marginLeft: "5px"}}>Add</Button>     
                <div className="file-path-wrapper" style={{overflow: "hidden"}} >
                    <input type="text" placeholder="File or Folder" value={this.state.value} onChange={this.handleChange} />
                </div>
            </form>
        );
    }
}

export default TrackedChangesAddBar;