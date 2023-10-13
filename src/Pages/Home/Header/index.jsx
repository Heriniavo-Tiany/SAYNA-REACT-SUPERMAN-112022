import './styles.css';

const Header = () => {
    return (
        <section className="hero-home">
            <nav className="navbar">
                <div className="logo">
                    <img src="/assets/logos/logo_blanc.png" width={90} alt="logo"/>
                </div>
                <ul>
                    <li><a href="/"><h1>HOME</h1></a></li>
                    <li><a href="#"><h1 id="game" className="inactive">GAME</h1></a></li>
                    <li><a href="#"><h1 id="game">E-SHOP</h1></a></li>
                    <li><a href="/MonCompte"><h1 id="game" className="inactive">Mon Compte</h1></a></li>
                </ul>
            </nav>
            <div className="container">
                <div className='hero-home-text row'>
                    <div className="col-md-3">
                        <img src="/assets/logos/logoDC.png" alt=""/>
                    </div>
                    <div className="col-md-9">
                        <h1 className="white adventure xl">SUPERMAN</h1>
                        <h1 className="white adventure text-xl">L’HOMME D’ACIER</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header;