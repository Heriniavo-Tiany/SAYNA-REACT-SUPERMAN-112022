import React, {useState} from 'react';
import './styles.css';

const Filter = () => {
    const [showCategories, setShowCategories] = useState(true);
    const [showUniverses, setShowUniverses] = useState(true);
    const [showColors, setShowColors] = useState(true);

    return (
        <div className="containerFilter">
            <div className="Filter">
                <h1 className="adventure">Filtres</h1>
                <label htmlFor="prix">Prix</label>
                <input type="range" id="prix" name="prix" min="0" max="200" step="1"/>

                <div className="dropdownCateg">
                    <div className="dropDownTitle" onClick={() => setShowCategories(!showCategories)}>
                        <p>Catégorie</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>

                    </div>

                    <div className="hrFilter"></div>
                    {showCategories && (
                        <div className="CategCheck Menu">
                            <CategoryCheckbox label="Bestsellers"/>
                            <CategoryCheckbox label="Goodies"/>
                            <CategoryCheckbox label="Vêtements"/>
                            <CategoryCheckbox label="Affiches/Posters"/>
                            <CategoryCheckbox label="Comics"/>
                            <CategoryCheckbox label="Multimédia"/>
                            <CategoryCheckbox label="Equipement"/>
                            <CategoryCheckbox label="Bijoux"/>
                            <CategoryCheckbox label="Véhicule"/>
                        </div>
                    )}
                </div>

                <div className="dropdownCateg">
                    <div className="dropDownTitle" onClick={() => setShowColors(!showColors)}>
                        <p>Couleur</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>

                    <div className="hrFilter"></div>
                    {showColors && (
                        <div className="ColorCheck">
                            <ColorCheckbox label="Bleu"/>
                            <ColorCheckbox label="Noir"/>
                            <ColorCheckbox label="Rouge"/>
                            <ColorCheckbox label="Blanc"/>
                            <ColorCheckbox label="Autres couleurs"/>
                        </div>
                    )}
                </div>

                <div className="dropdownCateg">
                    <div className="dropDownTitle" onClick={() => setShowUniverses(!showUniverses)}>
                        <p>Univers</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>

                    <div className="hrFilter"></div>
                    {showUniverses && (
                        <div className="UniversCheck">
                            <UniverseCheckbox label="The Batman"/>
                            <UniverseCheckbox label="The Dark Knight Rises"/>
                            <UniverseCheckbox label="Batman V Superman"/>
                            <UniverseCheckbox label="Batman et Robin"/>
                            <UniverseCheckbox label="Autres comics"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CategoryCheckbox = ({label}) => (
    <li className="checkItems">
        <input type="checkbox" name={label} id={label}/>
        <label htmlFor={label}>{label}</label>
    </li>
);

const ColorCheckbox = ({label}) => (
    <div className="checkCouleur">
        <input type="checkbox" name={label} id={label}/>
        <label htmlFor={label}>{label}</label>
    </div>
);

const UniverseCheckbox = ({label}) => (
    <div className="checkUnivers">
        <input type="checkbox" name={label} id={label}/>
        <label htmlFor={label}>{label}</label>
    </div>
);

export default Filter;
