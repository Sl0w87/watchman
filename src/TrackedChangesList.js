import React from 'react';
import Collapsible from 'react-collapsible';
import TrackedChangesLocation from './TrackedChangesLocation';

class TrackedChangesList extends React.Component {
    constructor(props){
        super(props);        
        this.renderItems = props.data.map((item) => {
            if (!item.items)
                item.items = []
            return (
                item
            )
        })
    }
    render() {  
        const renderItems = this.renderItems.map((item) => {
            return (     
                <TrackedChangesLocation data={item} />                
            )
        })

        return (
            <div className="container">
                <br /><br />
                {renderItems}
            </div>               
        );
    }
}

export default TrackedChangesList;