import React from 'react';
import TrackedChangesAddBar from './TrackedChangesAddBar';
import TrackedChangesList from './TrackedChangesList';
import path from 'path';
const chokidar = window.require('chokidar');

class TrackedChanges extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            'workList': []
        }

        this.addEvent = this.addEvent.bind(this);
        this.addTrackedLocation = this.addTrackedLocation.bind(this);
        this.addObservedItem = this.addObservedItem.bind(this);   
        this.activateObservedItem = this.activateObservedItem.bind(this);

        this.observedItems = JSON.parse(localStorage.getItem('observedItems')) || [];
    }    

    componentDidMount() {
        this.observedItems.forEach((item) => {
            this.activateObservedItem(item);
        });        
    }

    activateObservedItem(location) {
        chokidar.watch(location, {'ignoreInitial': true, depth: 1})
            .on('add', this.addEvent);
    }

    addObservedItem(ident, location) {
        const dir = location.substring(0, location.lastIndexOf(path.sep));
        const filename = location.replace(/^.*[\\\/]/, '')
        var folder = this.state.workList.find((item) => item.folder == dir);
        var folderIndex = -1;
        if (folder != undefined)
            folderIndex = this.state.workList.indexOf(folder);

        var newList = this.state.workList;
        var item = undefined;
        if (folderIndex >= 0){
            item = newList[folderIndex] ;
            item.items.unshift(ident + ' ' + filename);
            newList[folderIndex] = item;
        }
        else{
            item = {folder: dir, items: []};
            item.items.push(ident + ' ' + filename);
            newList.unshift(item);
        }

        this.setState({'workList': newList});
    }

    addEvent(location) {
        this.addObservedItem('added', location);
    }
 
    addTrackedLocation(item) {
        this.observedItems.unshift(item);
        localStorage.setItem('observedItems', JSON.stringify(this.observedItems));

        this.activateObservedItem(item);
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