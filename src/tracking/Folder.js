import React from 'react';
import FolderHeader from './FolderHeader';
import FolderItem from './FolderItem';

export default function Folder (props) {
    const {items, expanded} = props
    const folderItems = items.map((item) => {
        return (
            <FolderItem value={item} active={expanded}/>
        )
    })

    return (
        <div className="Folder">
            <a>Watched Folders</a>
            <hr />        
            <FolderHeader value={props.name} expandClick={props.expandClick} activeClick={props.activeClick} initialized={props.initialized} active={props.active} expanded={props.expanded} />            
            {folderItems}
        </div>
    )
}