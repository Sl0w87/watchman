import React from 'react';
import {MdExpandLess, MdExpandMore, MdPause, MdPlayArrow} from 'react-icons/lib/md';

export default function FolderHeader (props) {
    return (
        <div className="folderHeader">
            <MdExpandLess onClick={props.onExpandClick} stlye={{display: props.expanded? 'block': 'none'}} />
            <MdExpandMore onClick={props.onExpandClick} stlye={{display: !props.expanded? 'block': 'none'}} />            
            <a className="folderHeaderValue">{props.value}</a>
            <MdPause onClick={props.onActiveClick} stlye={{display: props.active? 'block': 'none'}} />    
            <MdPlayArrow onClick={props.onActiveClick} stlye={{display: !props.active? 'block': 'none'}} />    
        </div>
    )
}