import React from 'react';
import TrackedChangeRow from './TrackedChangeRow';

class TrackedChangesList extends React.Component {
    render() {
        var rows = [];

        var trackedLocations = JSON.parse(localStorage.getItem('trackedLocations'));
        if (trackedLocations != undefined)
        {
            trackedLocations.forEach((change) => {
                rows.push(<TrackedChangeRow value={change} key={change.toString()} />)
            });
        }
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