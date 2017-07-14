import React from 'react';
import TrackedChangesLocationItem from './TrackedChangesLocationItem';

class TrackedChangesLocation extends React.Component {
    render() {
        const item = this.props.data;
        return(
            <ul className="collapsible" data-collapsible="expandable">
                <li>
                    <div className="collapsible-header">
                        <i className="mdi-navigation-chevron-right"/>
                        <a>{item.folder}</a>
                        <TrackedChangesLocationItem data={item.items}/> 
                    </div>
                </li>  
            </ul>     
        );
    }
}

export default TrackedChangesLocation;