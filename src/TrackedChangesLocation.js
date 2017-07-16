import React from 'react';
import TrackedChangesLocationItem from './TrackedChangesLocationItem';
import {MdCancel, MdChevronRight, MdKeyboardArrowDown, MdKeyboardArrowUp, MdPauseCircleOutline, MdPlayCircleOutline} from 'react-icons/lib/md';
const chokidar = window.require('chokidar');

class TrackedChangesLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            folder: this.props.folder,
            initialized: false,
            active: false,
            items: []
        }

        this.handleExpand = this.handleExpand.bind(this);
        this.handleUnwatch = this.handleUnwatch.bind(this);
        this.handleWatch = this.handleWatch.bind(this);

        this.addEvent = this.addEvent.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.unlinkEvent = this.unlinkEvent.bind(this);
        this.addDirEvent = this.addDirEvent.bind(this);
        this.unlinkDirEvent = this.unlinkDirEvent.bind(this);

        this.watcher = undefined;
    }

    componentDidMount() {
        this.activateObservedItem(this.state.folder);
    }

    activateObservedItem(location) {
        this.addObservedItem('', location);
        this.setState({"active": true});
        this.watcher = chokidar.watch(location, {'ignoreInitial': true, depth: 1})
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
        const filename = location.replace(/^.*[\\\/]/, '')
        var newList = this.state.items;
        if (ident) {
            newList.unshift(ident + " " + filename);
        }   
        var notif = new window.Notification(ident, {
            body: location,
            silent: true // We'll play our own sound
        });

        this.setState({"initialized": true, items: newList});
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

    handleExpand(event) {
        this.setState({'expanded': !this.state.expanded});
    }

    handleUnwatch(event) {
        this.watcher.unwatch(this.state.folder);
        this.setState({active: false});
    }

    handleWatch(event) {
        this.watcher = chokidar.watch(this.state.folder);
        this.setState({active: true});
    }

    render() {                
        return(
            <div>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header" onClick={this.handleExpand}>
                            <MdKeyboardArrowDown size="35" style={{float: "left", display: this.state.expanded? "none": ""}}/>
                            <MdKeyboardArrowUp size="35" style={{float: "left", display: this.state.expanded? "": "none"}}/>
                            <MdPauseCircleOutline size="35" style={{float: "right", display: this.state.active? "": "none"}} onClick={this.handleUnwatch}/>
                            <MdPlayCircleOutline size="35" style={{float: "right", display: this.state.active? "none": ""}} onClick={this.handleWatch}/>   

                            <a style={{float:"center"}}>{this.state.folder}</a>
                        </div>
                        <TrackedChangesLocationItem data={this.state.items} expanded={this.state.expanded}/> 
                    </li>  
                </ul>     
            </div>
            
        );
    }
}

export default TrackedChangesLocation;