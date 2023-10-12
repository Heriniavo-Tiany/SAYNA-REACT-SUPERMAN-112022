import './styles.css';
const Header = () => {
    return (
        <section className="hero">
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
            <div>
                <h1 className="white"></h1>
                <h1 className="white adventure text-xl">ENVIE D’UN SLIP JAUNE ?</h1>
            </div>
        </section>
    )
}
export default Header;