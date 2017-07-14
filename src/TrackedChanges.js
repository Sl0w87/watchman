import React from 'react';
import TrackedChangesAddBar from './TrackedChangesAddBar';
import TrackedChangesList from './TrackedChangesList';
const chokidar = window.require('chokidar');

class TrackedChanges extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            'observedList': JSON.parse(localStorage.getItem('observedItems')) || []            
        }

        this.addEvent = this.addEvent.bind(this);
        this.addTrackedLocation = this.addTrackedLocation.bind(this);
        this.addObservedItem = this.addObservedItem.bind(this);   

        this.state.observedList.forEach((item) => {
            this.activateObservedItem(item.folder);
        });        
    }    

    activateObservedItem(path) {
        chokidar.watch(path, {'ignoreInitial': true})
            .on('add', this.addEvent);
    }

    addObservedItem(ident, path) {
        const dir = path.substring(0,path.lastIndexOf("\\"));
        const filename = path.replace(/^.*[\\\/]/, '')
        var folder = this.state.observedList.find((item) => item.folder === dir);
        var folderIndex = -1;
        if (folder !== undefined)
            folderIndex = this.state.observedList.indexOf(folder);

        var newList = this.state.observedList;
        if (folderIndex >= 0)
            newList[folderIndex].items.unshift(ident + ' ' + filename);
        else{
            newList.unshift({folder: dir, items: []});
        }
        
        this.setState({'observedList': newList}); 
    }

    addEvent(path) {
        this.addObservedItem('added', path);
    }
 
    addTrackedLocation(item) {
        const newList = this.state.observedList || [];
        newList.unshift({'folder': item});
        localStorage.setItem('observedItems', JSON.stringify(newList));
        this.setState({'observedList': newList}); 
        this.activateObservedItem(item);
    }

    render() {
        return(
            <div>
                <TrackedChangesAddBar onAddItem={this.addTrackedLocation} />
                <TrackedChangesList data={this.state.observedList} />
            </div>
        );
    }
}

export default TrackedChanges;