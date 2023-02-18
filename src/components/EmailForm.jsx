import React from 'react'

function EmailForm({name}) {
  return (
    <div className='emailFormContainer'>
        <h2>Skicka en bokningsförfrågan till {name}</h2>
        <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="placement">Placering:</label>
        <input type="text" id="placement" />
        <label htmlFor="placementImg">Bild på plasering:</label>
        <input type="file" id="placementImg" />
        <label htmlFor="motiv">Motiv:</label>
        <input type="text" id="motiv" />
        <label htmlFor="references">Referenser:</label>
        <input type="file" id="references" />
        <button>Skicka</button>
        </form>
    </div>
  )
}

export default EmailForm