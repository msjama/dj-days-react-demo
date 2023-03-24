import './App.css';
import Header from './components/Header';
import AlbumMessage from './components/AlbumMessage';
import AlbumListing from './components/AlbumListing';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  return ( 
   <>
   <Header headerContent = "Dj Days React Demo"/>
   <AlbumMessage MessageContent = "You need more albums"/>

   <Form/>

   <Button/>

   <AlbumListing
   albumname = "Lemonade"
   AlbumArtist = " Beyonze"
   AlbumGenre ="R&B"
   />

<AlbumListing
   albumname = "Get Rich or Die Trying"
   AlbumArtist = " Hip-hop"
   AlbumGenre ="Hip-hop"

   />

<AlbumListing
   albumname = "Love, Damini"
   AlbumArtist = "Burna Boy"
   AlbumGenre ="Afro Beats"

   />

<AlbumListing
   albumname = "Rave and Roses"
   AlbumArtist = "Rema"
   AlbumGenre ="Afro Beats"
/>
     </>
  );
}

export default App;
