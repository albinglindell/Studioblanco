import { useParams } from 'react-router-dom'
import artists from "../assets/artists/artists"
import { FaInstagram } from "react-icons/fa";
function ProfilePage() {
    const {name} = useParams()
    const artist = artists.find( (artistName) => artistName.name === name );
  return (
    <div className='profileContainer'>
        <div className="imageComponent"> 
        <img src={`${artist.image_md}`} alt="" />
        </div>
        <div className="infoContainer">
            <h2>{artist.name}</h2>
            <h3><FaInstagram className='icon'/> {artist.instagram.toUpperCase()}</h3>
                {artist.about.map(paragraph =>{
                   return <p>{paragraph}</p>
                })}
        </div>
    </div>
  )
}

export default ProfilePage