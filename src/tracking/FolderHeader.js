import React from 'react';
import {MdExpandLess, MdExpandMore, MdPause, MdPlayArrow, MdRotateRight} from 'react-icons/lib/md';

export default function FolderHeader (props) {
    return (
        <div className="FolderHeader">          
            <a className="FolderHeaderValue">{props.value}</a>
            <MdExpandLess className="ExpandLessButton" onClick={props.expandClick} style={{display: props.expanded && props.initialized? 'inline-block': 'none'}} />
            <MdExpandMore className="ExpandMoreButton" onClick={props.expandClick} style={{display: !props.expanded && props.initialized? 'inline-block': 'none'}} />
            <MdRotateRight className= "RotateRight" style={{display: props.initialized || !props.active? 'none': 'inline-block'}} />
            <a className= "RotateRightText" style={{display: props.initialized || !props.active? 'none': 'inline-block'}} >Initialisation</a>
            <MdPause className="PauseButton" onClick={props.activeClick} style={{display: props.active? 'block': 'none'}} />
            <MdPlayArrow className="PlayButton" onClick={props.activeClick} style={{display: !props.active? 'block': 'none'}} />
        </div>
    )
}