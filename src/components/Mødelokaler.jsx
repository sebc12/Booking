const card1 = [
    "Image",
    "Lokale 1",
    "Et stort klasse lokale på 3.sal",
    "{plug}",
    "{sun}",
    "{people}",
    "{video}",
]

export default function Mødelokaler() {

    const plug = <iconify-icon icon="fluent:plug-disconnected-20-regular"></iconify-icon>
    const sun = <iconify-icon icon="akar-icons:sun"></iconify-icon>
    const people = <iconify-icon icon="cil:people"></iconify-icon>
    const video = <iconify-icon icon="fluent:video-28-regular"></iconify-icon>
    

    return (

        <div>
            <div className="grid-container-1">
      <div className="card">
        <div>
            <a href="#"><img src="https://via.placeholder.com/250" alt="placeholder"  /></a>
        </div>
        <div className="cardText">
            <h2>Lokale 1</h2>
            <h3>Et stort klasse lokale på 3.sal</h3>
            <div className="list">
                <p><icon className="icon">{plug}</icon>10 stikkontakter</p>
                <p><icon className="icon">{sun}</icon>Mulighed for mørklægning</p>
                <p><icon className="icon">{people}</icon>Max. 30 mennesker</p>
                <p><icon className="icon">{video}</icon>Projekter tilgængelig</p>
            </div>
        </div>
      </div>
      <div className="card">
        <div>
            <a href="#"><img src="https://via.placeholder.com/250" alt="placeholder"  /></a>
        </div>
        <div className="cardText">
            <h2>Lokale 2</h2>
            <h3>Et stort klasse lokale på 4.sal</h3>
            <div className="list">
                <p><icon className="icon">{plug}</icon>10 stikkontakter</p>
                <p><icon className="icon">{sun}</icon>Ingen mulighed for mørklægning</p>
                <p><icon className="icon">{people}</icon>Max. 30 mennesker</p>
                <p><icon className="icon">{video}</icon>Projekter tilgængelig</p>
            </div>
        </div>
      </div>
      <div className="card">
        <div>
            <a href="#"><img src="https://via.placeholder.com/250" alt="placeholder"  /></a>
        </div>
        <div className="cardText">
            <h2>Lokale 2</h2>
            <h3>Et stort klasse lokale på 2.sal</h3>
            <div className="list">
                <p><icon className="icon">{plug}</icon>10 stikkontakter</p>
                <p><icon className="icon">{sun}</icon>Mulighed for mørklægning</p>
                <p><icon className="icon">{people}</icon>Max. 30 mennesker</p>
                <p><icon className="icon">{video}</icon>Projekter tilgængelig</p>
            </div>
        </div>
      </div>
      <div className="card">
        <div>
            <a href="#"><img src="https://via.placeholder.com/250" alt="placeholder"  /></a>
        </div>
        <div className="cardText">
            <h2>Lokale 2</h2>
            <h3>Et stort klasse lokale på 2.sal</h3>
            <div className="list">
                <p><icon className="icon">{plug}</icon>10 stikkontakter</p>
                <p><icon className="icon">{sun}</icon>Mulighed for mørklægning</p>
                <p><icon className="icon">{people}</icon>Max. 30 mennesker</p>
                <p><icon className="icon">{video}</icon>Projekter tilgængelig</p>
            </div>
        </div>
      </div>


      <div className="card">
        <div>
            <a href="#"><img src="https://via.placeholder.com/250" alt="placeholder"  /></a>
        </div>
        <div className="cardText">
            <h2>Lokale 2</h2>
            <h3>Et stort klasse lokale på 2.sal</h3>
            <div className="list">
                <p><icon className="icon">{plug}</icon>10 stikkontakter</p>
                <p><icon className="icon">{sun}</icon>Mulighed for mørklægning</p>
                <p><icon className="icon">{people}</icon>Max. 30 mennesker</p>
                <p><icon className="icon">{video}</icon>Projekter tilgængelig</p>
            </div>
        </div>
      </div>
      <div className="card">
        <div>
            <a href="#"><img src="https://via.placeholder.com/250" alt="placeholder"  /></a>
        </div>
        <div className="cardText">
            <h2>Lokale 2</h2>
            <h3>Et stort klasse lokale på 2.sal</h3>
            <div className="list">
                <p><icon className="icon">{plug}</icon>10 stikkontakter</p>
                <p><icon className="icon">{sun}</icon>Mulighed for mørklægning</p>
                <p><icon className="icon">{people}</icon>Max. 30 mennesker</p>
                <p><icon className="icon">{video}</icon>Projekter tilgængelig</p>
            </div>
        </div>
      </div>
      </div>
      </div>

        
    );
  }