import React from 'react';
import {Collection, CollectionItem} from 'react-materialize';

class TrackedChangesList extends React.Component {
    render() {  
        // console.log(this.props.observedItems);
        const observItem = this.props.observedItems || [];  

        const renderItems = observItem.forEach((item) => {
            console.log(observItem);
            <Collection header={observItem.folder}>
            </Collection>
        })
        return (
            <div> {renderItems} </div>                
        );
    }
}

export default TrackedChangesList;