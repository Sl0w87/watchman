import React from 'react';
import TrackedChangesLocation from './TrackedChangesLocation';

class TrackedChangesList extends React.Component {
    render() {  
        const renderItems = this.props.data.map((item) => {
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