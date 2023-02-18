import { useParams } from 'react-router-dom'
import artists from "../assets/artists/artists"
import { FaInstagram } from "react-icons/fa";
import EmailForm from './EmailForm';
function ProfilePage() {
    const {name} = useParams()
    const artist = artists.find( (artistName) => artistName.name === name );
  return (
    <div className="">
    <div className='profileContainer'>
        <div className="imageComponent"> 
        <img src={`${artist.image_md}`} alt="" />
        </div>
        <div className="infoContainer">
            <h2>{artist.name}</h2>
            <a href={`https://www.instagram.com/${artist.instagram}`}><FaInstagram className='icon'/> {artist.instagram.toUpperCase()}</a>
                {artist.about.map(paragraph =>{
                   return <p>{paragraph}</p>
                })}
        </div>
    </div>
        <EmailForm name={artist.name}/>
    </div>
  )
}

export default ProfilePage