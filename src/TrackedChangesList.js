import React from 'react';
import TrackedChangeRow from './TrackedChangeRow';

class TrackedChangesList extends React.Component {
    render() {
        const { data } = this.props
        // const rows = data.map(item => item)
        var rows = [];

        // var trackedLocations = JSON.parse(localStorage.getItem('trackedLocations')) || [];
       
        // trackedLocations.forEach((change) => {
        //     rows.push(<TrackedChangeRow value={change} key={change.toString()} />)
        // });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default TrackedChangesList;