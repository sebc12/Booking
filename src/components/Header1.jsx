import logo from './img/logo.png'


export default function Header1 () {
    
    return (
        <header>
            <div className='header'>
                <img src={logo} className="App-logo" alt="logo" />
                <button className='BookBtn'>Book nu</button>
            
                <a className='oversigt' href='#'>Min oversigt</a>
                </div>
                <div className='lokale'>
                    <h1>Lokale information</h1>
                </div>
        </header>
    )
}

