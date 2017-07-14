import React from 'react';
import {Button} from 'react-materialize';

class TrackedChangesAddBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.setState({value: event.target.value});
        if (this.props.onAddItem !== undefined)
            this.props.onAddItem(this.state.value);        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (  
            <div>    
                <Button type="submit" onClick={this.handleSubmit} style={{float: "right", marginLeft: "5px"}}>Add</Button>     
                <div className="file-path-wrapper" style={{overflow: "hidden"}} >
                    <input type="text" placeholder="File or Folder" value={this.state.value} onChange={this.handleChange} />
                </div>        
            </div>
        );
    }
}

export default TrackedChangesAddBar;