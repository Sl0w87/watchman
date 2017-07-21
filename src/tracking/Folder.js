import React from 'react';
import {MdExpandLess, MdExpandMore, MdPause, MdPlayArrow, MdRotateRight} from 'react-icons/lib/md';
import classNames from 'classnames';

export default function Folder (props) {
    const {items, expanded} = props
    const folderItems = items.map((item) => {
        return (
            <p className={classNames("FolderItem", {"active": props.expanded})}>
                {item}
            </p>
        )
    })

    const renderExpandButton = (expanded) => {
        if (expanded)
            return (<MdExpandLess className={classNames("ExpandButton", {"active": props.expanded})} onClick={props.expandClick} />)
        else
            return (<MdExpandMore className={classNames("ExpandButton", {"active": props.expanded})} onClick={props.expandClick} /> )       
    }

    const renderStateButton = (active) => {
        if (active)
            return (<MdPause className={classNames("StateButton", {"active": props.active})} onClick={props.activeClick} />)
        else
            return (<MdPlayArrow className={classNames("StateButton", {"active": props.active})} onClick={props.activeClick} />)
    }

    return (
        <div className="Folder">
            {renderExpandButton(props.expanded)}
            {renderStateButton(props.active)}       
            <h2>{props.name}</h2>            
            {folderItems}
        </div>
    )
}