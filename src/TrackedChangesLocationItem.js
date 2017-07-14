import React from 'react';

class TrackedChangesLocationItem extends React.Component {
    render() {
        const item = this.props.data.map((item) => {
            return(
                <div className="collapsible-body"><p>{item}</p></div>
            );
        })
        return(
            <div>
                {item}
            </div>
        );
    }
}

export default TrackedChangesLocationItem;