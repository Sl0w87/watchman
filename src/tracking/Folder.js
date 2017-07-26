import React from 'react';
import {MdExpandLess, MdExpandMore, MdPause, MdPlayArrow, MdRotateRight, MdClose} from 'react-icons/lib/md';
import classNames from 'classnames';

export default function Folder (props) {
    const {items, expanded} = props
    const folderItems = items.map((item) => {
        return (
            <div className={classNames("row", "FolderItem", {"active": props.expanded})}>
                <div className="col s12 m4 l2">
                    {item.date}
                </div>
                <div className="col s12 m4 l2">
                    {item.ident}
                </div>
                <div className="col s12 m4 l8">
                    {item.name}
                </div>                
            </div>
        )
    })

    const renderExpandButton = (expanded) => {
        if (expanded)
            return (<MdExpandLess className={classNames("ExpandButton", {"active": props.expanded})} onClick={props.expandClick} />)
        else
            return (<MdExpandMore className={classNames("ExpandButton", {"active": props.expanded})} onClick={props.expandClick} /> )       
    }

    const renderStateButton = (active, initialized) => {
        if (active && initialized)
            return (<MdPause className={classNames("StateButton", {"active": props.active})} onClick={props.activeClick} />)
        else if (!active && !initialized)
            return (<MdPlayArrow className={classNames("StateButton", {"active": props.active})} onClick={props.activeClick} />)
        else
            return (<MdRotateRight className={classNames("StateSpinner", {"active": !props.initialized})} />)
    }

    return (
        <div className="Folder">
            <MdClose className="CloseButton" onClick={props.closeClick}/>
            {renderExpandButton(props.expanded)}
            {renderStateButton(props.active, props.initialized)}       
            <h2 className={classNames("FolderHeader", {"active": props.expanded})}>{props.name}</h2>            
            {folderItems}
        </div>
    )
}