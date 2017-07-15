import React from 'react';
import TrackedChangesLocation from './TrackedChangesLocation';

class TrackedChangesList extends React.Component {
    constructor(props){
        super(props);
        this.handleUnwatch = this.handleUnwatch.bind(this);
    }

    handleUnwatch(item) {
        if (this.props.onUnwatch)
            this.props.onUnwatch(item);
    }

    render() {  
        const renderItems = this.props.data.map((item) => {
            return (     
                <TrackedChangesLocation data={item} key={item.toString()} onUnwatch={this.handleUnwatch}/>                
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