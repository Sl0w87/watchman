import React from 'react';

class TrackedChangeRow extends React.Component {
    render() {
        var value = this.props.value;

        return (
            <tr>
                <td>{value}</td>
            </tr>
        );
    }
}

export default TrackedChangeRow;