import React from 'react'

export default function Image(props){
    return (
        <li>
            <img src={props.image.img_src} alt={props.image.id}/>
        </li>
    )
}