import React from 'react';
import TrackedChangesLocation from './TrackedChangesLocation';

class TrackedChangesList extends React.Component { 
    render() {  
        const items = this.props.data;
        const renderItems = items.map((item) => {
            return (     
                <TrackedChangesLocation folder={item} key={item.toString()} />                
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