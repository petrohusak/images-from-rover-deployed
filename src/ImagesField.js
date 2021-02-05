import React, {useState} from 'react'
import Image from './Image.js'

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
            <button onClick={changePage}>Load more</button>
        </div>
    );
}