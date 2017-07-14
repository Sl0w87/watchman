import React from 'react';
import TrackedChangesLocationItem from './TrackedChangesLocationItem';

class TrackedChangesLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({'expanded': !this.state.expanded});
    }

    render() {        
        const item = this.props.data;
        return(
            <ul className="collapsible" expanded="true">
                <li>
                    <div className="collapsible-header" onClick={this.handleClick}>
                        <i className="mdi-navigation-chevron-right"/>
                        <a>{item.folder}</a>
                        <TrackedChangesLocationItem data={item.items} expanded={this.state.expanded}/> 
                    </div>
                </li>  
            </ul>     
        );
    }
}

export default TrackedChangesLocation;