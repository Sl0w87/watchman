import React from 'react';
import Collapsible from 'react-collapsible';

class TrackedChangesList extends React.Component {
    constructor(props){
        super(props);        
        this.renderItems = props.data.map((item) => {
            if (!item.items)
                item.items = []
            return (
                item
            )
        })
    }
    render() {  
        const renderItems = this.renderItems.map((item) => {
            return (                    
                <li>
                    <div className="collapsible-header">
                        <i className="mdi-navigation-chevron-right"/>
                        <a>{item.folder}</a>
                        {                            
                            item.items.map((change) => {
                                console.log(change);
                                return(
                                    <div className="collapsible-body"><p>{change}</p></div>
                                );
                            })
                        }
                    </div>
                </li>   
            )
        })

        return (
            <div className="container">
                <br /><br />
                <ul className="collapsible" data-collapsible="expandable">
                    {renderItems}
                </ul>

            </div>               
        );
    }
}

export default TrackedChangesList;