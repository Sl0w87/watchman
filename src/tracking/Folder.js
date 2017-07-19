import React from 'react';
import FolderHeader from './FolderHeader';
import FolderItem from './FolderItem';

export default function Folder (props) {
    const folderItems = props.items.map((item) => {
        return (
            <FolderItem value={item.value} active={props.expanded}/>
        )
    })
    return (
        <div className="Folder">
            <a>Watched Folders</a>
            <hr />        
            <FolderHeader value={props.name} expandClick={props.expandClick} activeClick={props.activeClick} active={props.active} expanded={props.expanded} />            
            {folderItems}
        </div>
    )
}