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
        this.changeEvent = this.changeEvent.bind(this);
        this.unlinkEvent = this.unlinkEvent.bind(this);
        this.addDirEvent = this.addDirEvent.bind(this);
        this.unlinkDirEvent = this.unlinkDirEvent.bind(this);
        this.addTrackedLocation = this.addTrackedLocation.bind(this);
        this.unwatchTrackedLocation = this.unwatchTrackedLocation.bind(this);
        this.addObservedItem = this.addObservedItem.bind(this);   
        this.activateObservedItem = this.activateObservedItem.bind(this);

        this.observedItems = JSON.parse(localStorage.getItem('observedItems')) || [];
    }    

    componentDidMount() {
        this.observedItems.forEach((item) => {
            this.activateObservedItem(item);
        });        
    }


    addEvent(location, stats) {
        this.addObservedItem('added', location);
    }

    changeEvent(location, stats){
        this.addObservedItem('changed', location);
    }

    unlinkEvent(location) {
        this.addObservedItem('unlinked', location);
    }

    addDirEvent(location) {
        this.addObservedItem('added Dir', location);
    }

    unlinkDirEvent(location) {
        this.addObservedItem('unlinked Dir', location);
    }   

    activateObservedItem(location) {
        this.addObservedItem('', location);
        chokidar.watch(location, {'ignoreInitial': true, depth: 1})
            .on('add', this.addEvent)
            .on('change', this.changeEvent)
            .on('unlink', this.unlinkEvent)
            .on('addDir', this.addDirEvent)
            .on('unlinkDir', this.unlinkDirEvent)
//   .on('error', error => log(`Watcher error: ${error}`))
//   .on('ready', () => log('Initial scan complete. Ready for changes'))
//   .on('raw', (event, path, details) => {
//     log('Raw event info:', event, path, details);
//   });
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
        const identValue = ident? ident + '': '';
        if (folderIndex >= 0){
            item = newList[folderIndex];
            if (ident) {
                item.items.unshift(identValue + filename);
            }
            newList[folderIndex] = item;
        }
        else{
            item = {folder: dir, items: []};
            if (ident) {
                item.items.push(identValue + filename);
            }
            newList.unshift(item);
        }

        this.setState({'workList': newList});
    }
 
    addTrackedLocation(item) {
        this.observedItems.unshift(item);
        localStorage.setItem('observedItems', JSON.stringify(this.observedItems));

        this.activateObservedItem(item);
    }

    unwatchTrackedLocation(item) {
        const index = this.observedItems.indexOf(item);
        this.observedItems.splice(index, 1);
        localStorage.setItem('observedItems', JSON.stringify(this.observedItems));

        chokidar.unwatch(item);
    }

    render() {
        return(
            <div>
                <TrackedChangesAddBar onAddItem={this.addTrackedLocation} />
                <TrackedChangesList data={this.state.workList} onUnwatch={this.unwatchTrackedLocation}/>
            </div>
        );
    }
}

export default TrackedChanges;