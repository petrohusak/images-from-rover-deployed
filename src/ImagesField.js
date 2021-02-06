import React, {useState} from 'react'
import Image from './Image.js'
import { Button } from '@material-ui/core';

export default function ImagesField({images, addRequest}){
    const [page, setPage] = useState(2);

    function changePage(){
        setPage(page+1);
        addRequest(page);
    }

    return(
        <div>
            <ul>
                {images.map(img=>{
                    return (
                        <Image 
                        image={img}
                        key={img.id}
                        />
                    )
                })
                }
            </ul>
            <Button variant="contained" color="primary" onClick={changePage}>Load more</Button>{/*<button onClick={changePage}>Load more</button> */}
        </div>
    );
}