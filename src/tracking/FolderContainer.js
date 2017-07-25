import React from 'react';
import Folder from './Folder';
import path from 'path';

const chokidar = window.require('chokidar');
const {ipcRenderer} = window.require('electron');

export default class FolderContainer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            "name": this.props.value,
            "expanded": false,
            "active": false,
            "initialized": false,
            "items": []
        }

        this.watcher = undefined;

        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleActiveClick = this.handleActiveClick.bind(this);

        this.addEvent = this.addEvent.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.unlinkEvent = this.unlinkEvent.bind(this);
        this.addDirEvent = this.addDirEvent.bind(this);
        this.unlinkDirEvent = this.unlinkDirEvent.bind(this);
        this.readyEvent = this.readyEvent.bind(this);
    }  
 
    addItem(ident, location) {
        if (ident && this.state.initialized) {
            const filename = location.replace(/^.*[\\\/]/, '')
            var newList = this.state.items
            const time = new Date();
            const message = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${ident} ${filename}`;
            newList.unshift(message)
            ipcRenderer.send('trackedChange', {
                title: 'watchman', 
                message: message,
                icon: path.join(__dirname, 'logo.png'),
                sound: false,
                wait: true
            }) 
            this.setState({"items": newList})
        }
    }

    activateItem(location) {
        this.addItem('', location);
        this.watcher = chokidar.watch(location)
            .on('add', this.addEvent)
            .on('change', this.changeEvent)
            .on('unlink', this.unlinkEvent)
            .on('addDir', this.addDirEvent)
            .on('unlinkDir', this.unlinkDirEvent)
            .on('ready', this.readyEvent)
    }


    handleExpandClick (event) {
        this.setState({
            "expanded": !this.state.expanded
        })
    }

    handleActiveClick (event) {
        !this.state.active? 
            this.activateItem(this.state.name): 
            this.watcher.close();                 
        
        this.setState({
            "active": !this.state.active,
            "initialized": false,
            "expanded": false
        })
      
    }

    readyEvent() {
        this.setState({"initialized": true});
    }

    addEvent(location, stats) {
        this.addItem('new', location);
    }

    changeEvent(location, stats){
        this.addItem('changed', location);
    }

    unlinkEvent(location) {
        this.addItem('deleted', location);
    }

    addDirEvent(location) {
        this.addItem('new Dir', location);
    }

    unlinkDirEvent(location) {
        this.addItem('deleted Dir', location);
    }   

    render () {
        return (
            <Folder name={this.state.name} initialized={this.state.initialized} active={this.state.active} expanded={this.state.expanded} items={this.state.items} expandClick={this.handleExpandClick} activeClick={this.handleActiveClick} />                        
        )
    }
}
