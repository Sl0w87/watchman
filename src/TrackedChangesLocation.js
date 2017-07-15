import React from 'react';
import TrackedChangesLocationItem from './TrackedChangesLocationItem';
import {MdCancel} from 'react-icons/lib/md';

class TrackedChangesLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleUnwatch = this.handleUnwatch.bind(this);
    }

    handleClick(event) {
        this.setState({'expanded': !this.state.expanded});
    }

    handleUnwatch(event) {
        const item = this.props.data;
        if (this.props.onUnwatch !== undefined)
            this.props.onUnwatch(item.folde);      
    }

    render() {        
        const item = this.props.data;
        return(
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header" onClick={this.handleClick}>
                        <i className="mdi-navigation-chevron-right"/>
                        <a>{item.folder}</a>
                        <MdCancel onClick={this.handleUnwatch}/>
                        <TrackedChangesLocationItem data={item.items} expanded={this.state.expanded}/> 
                    </div>
                </li>  
            </ul>     
        );
    }
}

export default TrackedChangesLocation;