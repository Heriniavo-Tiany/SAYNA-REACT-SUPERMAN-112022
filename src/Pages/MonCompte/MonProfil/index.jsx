import React from 'react';
import './styles.css';

const MonProfil = () => {
  return (
      <div className="containerInfos">
        <div className="infos">
          <div className="infoMenu">
              <p className="text-underline">Mes informations</p>
              <p>Historique des commandes</p>
              <p>Mes avis</p>
              <p>Mes favoris</p>
            <button className="purple-btn2">Déconnexion</button>
          </div>
          <div className="infosPersNewsLetter">
            <div className="InfoPers">
              <p className="adventure">Informations personnelles</p>
              <hr className='hr'/>
              <p>Nom: Lorem ipsum dolor sit amet.</p>
              <p>Prénom: Lorem ipsum dolor sit amet.</p>
              <p>Mot de passe: Lorem ipsum dolor sit amet.</p>
              <p>Email: Lorem ipsum dolor sit amet.</p>
              <p>Numéro de téléphone: Lorem ipsum dolor sit amet.</p>
              <p>Adresse de livraison: Lorem ipsum dolor sit amet.</p>
              <p>Adresse de facturation: Lorem ipsum dolor sit amet.</p>
              <button className='purple-btn2'>Modifier</button>
            </div>
            <div className="NewsLetter">
              <h2>Newsletter</h2>
              <p>Abonnez-vous à la newsletter ! Ne ratez pas nos offres exceptionnelles sur votre article préféré !</p>
              <div className="YN">
                <div className="yes">
                  <input type="radio" name="newsletter" id="oui" />
                  <label htmlFor="oui">Oui</label><br />
                  <input type="radio" name="newsletter" id="non" />
                  <label htmlFor="non">Non</label>
                </div>
              </div>
              <button className='purple-btn2'>Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MonProfil;
