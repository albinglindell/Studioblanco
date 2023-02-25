import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
function EmailForm({name, artistEmail}) {
  const [referenceFile, setReferenceFile] = useState([])

    let emailVal = useRef()
    let customerNameVal = useRef()
    let placementVal = useRef()
    let placementImgVal = useRef()
    let motivVal = useRef()
    let referencesVal = useRef()


const handleRefFiles= (event)=>{
setReferenceFile([event.target.files])
console.log(referenceFile)
}
const handleUpload = (e)=>{
  e.preventDefault()

        let email = emailVal.current.value
        let customerName = customerNameVal.current.value
        let placement = placementVal.current.value
        let placementImg = placementImgVal.current.value
        let motiv = motivVal.current.value
        let references = referencesVal.current.value

  const formVal = {
    email,
    artistEmail,
    customerName,
    placement,
    placementImg,
    motiv,
    references
  };
  
  emailjs.send("service_ulzc2ia","template_9euciaa", formVal, "yybxNquIp9gNJKOH_")
  .then((response) => {
     console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
     console.log('FAILED...', err);
  });
}



  return (
    <div className='emailFormContainer'>
        <h2>Skicka en bokningsförfrågan till {name}</h2>
        <form>
        <label htmlFor="customerName">Namn:</label>
        <input ref={customerNameVal} type="text" id="customerName" />

        <label htmlFor="email">Email:</label>
        <input ref={emailVal} type="email" id="email" />

        <label htmlFor="placement">Placering:</label>
        <input ref={placementVal} type="text" id="placement" />

        <label htmlFor="placementImg">Bild på plasering:</label>
        <input ref={placementImgVal} type="file" multiple id="placementImg" />
        
        <label htmlFor="motiv">Motiv:</label>
        <input ref={motivVal} type="text" id="motiv" />
        
        <label htmlFor="references">Referenser:</label>
        <input ref={referencesVal} type="file" multiple id="references" onChange={handleRefFiles}/>
        
        <button onClick={handleUpload}>Skicka</button>
        </form>
    </div>
  )
}

export default EmailForm