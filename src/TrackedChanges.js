import React from 'react';
import TrackedChangesAddBar from './TrackedChangesAddBar';
import TrackedChangesList from './TrackedChangesList';
const chokidar = window.require('chokidar');

class TrackedChanges extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            trackedLocations: localStorage.getItem('trackedLocations') || [],
            observedList: [{
                folder: '',
                items: []
            }]
        }
        this.addEvent = this.addEvent.bind(this);
    }

    addItem(ident, path) {
        const dir = path.substring(0,path.lastIndexOf("\\")+1);
        var folder = this.state.observedList.find((item) => item.folder == dir);        
        var folderIndex = -1;
        if (folder != undefined)
            folderIndex = this.state.observedList.indexOf(folder);

        const newList = this.state.observedList;
        if (folderIndex >= 0)
            newList[folderIndex].items.unshift(ident + ' ' + path);
        else
            newList.unshift({folder: dir, items: []});

        setState('observedList', newList)
    }

    addEvent(path) {
        addItem('added', path);
    }

    addItem (item) {
        const newList = this.state.trackedLocations.concat([item]);
        localStorage.setItem('trackedLocations', JSON.stringify(newList));

        this.setState({ trackedLocations: newList })

        chokidar.watch(item, {ignoreInitial: true})
            .on('add', this.addEvent);
    }

    render() {
        return(
            <div>
                <TrackedChangesAddBar onAddItem={this.addItem.bind(this)} />
                <TrackedChangesList data={this.state.observedList} />
            </div>
        );
    }
}

export default TrackedChanges;