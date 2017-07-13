import React from 'react';
import TrackedChangesAddBar from './TrackedChangesAddBar';
import TrackedChangesList from './TrackedChangesList';

class TrackedChanges extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: []
        }
    }

    addItem (item) {
        const newList = this.state.list.concat([item]);

        localStorage.setItem('trackedLocations', JSON.stringify(newList));

        this.setState({ list: newList })
    }

    render() {
        return(
            <div>
                <TrackedChangesAddBar onAddItem={this.addItem.bind(this)} />
                <TrackedChangesList data={this.state.list} />
            </div>
        );
    }
}

export default TrackedChanges;