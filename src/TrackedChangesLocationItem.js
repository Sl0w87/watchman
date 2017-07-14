import React from 'react';

class TrackedChangesLocationItem extends React.Component {
    render() {
        const styles = this.props.expanded? {display: 'block'}: {display: 'none'};
        const item = this.props.data.map((item) => {
            return(
                <div className="collapsible-body" style={styles} key={item.toString()}><p>{item}</p></div>
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