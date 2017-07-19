import React from 'react';
import {Collection, CollectionItem} from 'react-materialize';
import {MdExpandLess, MdExpandMore, MdPause, MdPlayArrow, MdRotateRight} from 'react-icons/lib/md';

export default function Folder (props) {
    const {items, expanded} = props
    const folderItems = items.map((item) => {
        return (
            <CollectionItem style={{display: props.active? 'block': 'none'}}>
                {item}
            </CollectionItem>
        )
    })

    return (
        <div className="Folder">
            <MdExpandLess className="ExpandLessButton" onClick={props.expandClick} style={{display: props.expanded && props.initialized? 'inline-block': 'none'}} />
            <MdExpandMore className="ExpandMoreButton" onClick={props.expandClick} style={{display: !props.expanded && props.initialized? 'inline-block': 'none'}} />
            <MdRotateRight className= "RotateRight" style={{display: props.initialized || !props.active? 'none': 'inline-block'}} />
            <MdPause className="PauseButton" onClick={props.activeClick} style={{display: props.active? 'block': 'none'}} />
            <MdPlayArrow className="PlayButton" onClick={props.activeClick} style={{display: !props.active? 'block': 'none'}} />
            <Collection header={props.name} onClick={props.expandClick}>
                {folderItems}
            </Collection>    
        </div>
    )
}