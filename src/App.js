import './App.css';
import SelectionField from './SelectionField.js'
import ImagesField from './ImagesField.js'
import React, {useState} from 'react'

function App() {
  const [images, setImages]=useState([]);
  const [rover, setRover] = useState('curiosity');
  const [camera, setCamera] = useState('fhaz');
  const [sol, setSol] = useState('0');
  const [page, setPage] = useState(2);
  
  async function setNewRequest(newRover, newSol, newCamera){
    setPage(2)
    setRover(newRover);
    setCamera(newCamera);
    setSol(newSol);
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/`+newRover+`/photos?sol=`+newSol+`&camera=`+newCamera+`&page=1&api_key=FRePKQVJD6HQcb30f5gP6S7uvn7q2mh2Bctjl6FX`;
    fetch(url)
    .then(res=>res.json())
    .then(result=>{
      setImages(result.photos)
    })
    .catch(e=>console.log(e))
    console.log(images)
  }

  function addPage(){
    setPage(page+1)

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/`+rover+`/photos?sol=`+sol+`&camera=`+camera+`&page=`+page+`&api_key=FRePKQVJD6HQcb30f5gP6S7uvn7q2mh2Bctjl6FX`)
    .then(res=>res.json())
    .then(result=>{
      setImages(images.concat(result.photos))
    })
    .catch(e=>console.log(e))
  }
  
  return (
    <div className="App">
      <div className='selectionField'>
        <SelectionField
        request={setNewRequest}
        />
      </div>

      <div className='imagesTitle'>Images that we found:</div>

      <div className='imagesFields'>
        <ImagesField 
        images={images}
        addRequest={addPage}
        />
      </div>

      
    </div>
  );
}

export default App;
