import React from 'react';
import TrackedChangesAddBar from './TrackedChangesAddBar';
import TrackedChangesList from './TrackedChangesList';
import path from 'path';

class TrackedChanges extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            "workList": JSON.parse(localStorage.getItem("observedItems"))
        }
        
        this.addTrackedLocation = this.addTrackedLocation.bind(this);
    }    
 
    addTrackedLocation(location) {
        var newList = this.state.workList || [];
        const dir = location.substring(0, location.lastIndexOf(path.sep));
        var folder = newList.find((item) => item == dir);
        if (folder === undefined)
        {
            newList.unshift(location);
            localStorage.setItem("observedItems", JSON.stringify(newList));
            
            this.setState({"workList": newList});
        }
    }

    render() {
        return(
            <div>
                <TrackedChangesAddBar onAddItem={this.addTrackedLocation} />
                <TrackedChangesList data={this.state.workList} />
            </div>
        );
    }
}

export default TrackedChanges;