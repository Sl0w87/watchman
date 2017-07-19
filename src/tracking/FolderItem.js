import React from 'react';

export default function FolderItem (props) {
    return (
        <div className="FolderItem" style={{display: props.active? 'block': 'none'}}>
            <a className="FolderItemValue">{props.value}</a>
        </div>
    )
}