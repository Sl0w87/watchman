import React from 'react';
import path from 'path';
import AddBarContainer from './AddBarContainer';
import FolderContainer from './FolderContainer';

export default class TrackingContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            "workList": []
        }
        
        this.addWorkListItem = this.addWorkListItem.bind(this)
        this.handleCloseClick = this.handleCloseClick.bind(this)
    }    

    componentDidMount () {
        var workList = JSON.parse(localStorage.getItem("observedItems"))
        workList = workList? workList: []
        this.setState({
            "workList": workList
        });
    }
 
    addWorkListItem (location) {
        var newList = this.state.workList || [];
        const dir = location.substring(0, location.lastIndexOf(path.sep))
        var folder = newList.find((item) => item === dir)
        if (folder === undefined)
        {
            newList.unshift(location)
            localStorage.setItem("observedItems", JSON.stringify(newList))            
            this.setState({"workList": newList})
        }
    }

    handleCloseClick (location) {
        var newList = this.state.workList || [];
        const index = newList.indexOf(location)
        if (index >= 0) 
            newList.splice(index, 1)
        
        localStorage.setItem("observedItems", JSON.stringify(newList))
        this.setState({"worklist": newList})
    }

    render () {
        const folderItems = this.state.workList.map((item) => {
            return (
                <FolderContainer key={item.toString()} value={item} closeClick={this.handleCloseClick}/>
            )
        })

        return (
            <div className="trackingContainer">
                <AddBarContainer onSubmit={this.addWorkListItem} />
                {folderItems}
            </div>
        )
    }
}