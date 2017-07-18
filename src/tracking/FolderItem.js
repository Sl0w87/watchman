import React from 'react';

export default function FolderItem (props) {
    return (
        <div className="folderItem" style={{display: props.active? 'block': 'none'}}>
            <a className="folderItemValue">{props.value}</a>
        </div>
    )
}