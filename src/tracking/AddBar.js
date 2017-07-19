import React from 'react';
import {Button} from 'react-materialize';

export default function AddBar (props) {
    return (
        <div className="AddBar">    
            <Button type="submit" onClick={props.onSubmit}>Add</Button>   
            <div>  
                <input type="text" placeholder="File or Folder" value={props.value} onChange={props.onChange} />
            </div>
        </div>
    )
}