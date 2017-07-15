import React from 'react';
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
                <TrackedChangesLocation data={item} key={item.toString()}/>                
            )
        })
        return (
            <div className="container">
                {renderItems}
            </div>       
        );
    }
}

export default TrackedChangesList;