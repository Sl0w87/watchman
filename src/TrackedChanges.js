import React from 'react';
import TrackedChangesAddBar from './TrackedChangesAddBar';
import TrackedChangesList from './TrackedChangesList';

class TrackedChanges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <TrackedChangesAddBar />
                <TrackedChangesList />
            </div>
        );
    }
}

export default TrackedChanges;