import React from 'react';
import TrackedChangesLocationItem from './TrackedChangesLocationItem';
import {MdCancel, MdChevronRight, MdKeyboardArrowDown, MdPauseCircleOutline} from 'react-icons/lib/md';
const chokidar = window.require('chokidar');

class TrackedChangesLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            folder: this.props.folder,
            initialized: false,
            items: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleUnwatch = this.handleUnwatch.bind(this);

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

    handleClick(event) {
        this.setState({'expanded': !this.state.expanded});
    }

    handleUnwatch(event) {
        this.watcher.unwatch(this.state.folder);
    }

    render() {        
        return(
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header" onClick={this.handleClick}>
                        <MdKeyboardArrowDown style={{float: "left", lineHeight:"3 em"}} />
                        <a style={{float:"center"}}>{this.state.folder}</a>
                        <MdPauseCircleOutline style={{float:"right"}} onClick={this.handleUnwatch}/>
                        <TrackedChangesLocationItem data={this.state.items} expanded={this.state.expanded}/> 
                    </div>
                </li>  
            </ul>     
        );
    }
}

export default TrackedChangesLocation;