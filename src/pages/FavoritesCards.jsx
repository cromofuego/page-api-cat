import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import '../styles/FavoritesCards.css';
import '../styles/Footer.css';

function FavoritesCards() {

    const {
        favoriteCats,
        loadingFavoriteCat,
        removeFavoriteCat,
    } = useContext(CardContext);

    return (
        <React.Fragment>
            <section className='section-favorite'>
                <div className="container d-flex flex-column flex-wrap justify-content-center my-4" >


                    {favoriteCats.length > 0 ?
                        <div className='col-12 mb-4'>
                            <h1 className='text-center'>
                                Here your lovely cats!
                            </h1>
                        </div>
                        :
                        <div className='col-12 mb-4'>
                            <h1 className='text-center'>
                                Add a new cat that you love it!
                            </h1>
                        </div>
                    }

                    <div className="row">
                        {!loadingFavoriteCat &&
                            favoriteCats.map(cat => {
                                return (
                                    <div
                                        className="col-12 col-md-6 col-lg-4 px-5 d-flex  justify-content-center"
                                        key={`favorite cat ${cat.image.id}`}
                                    >
                                        <div className="card mb-4" >
                                            <img
                                                src={cat.image.url}
                                                className="card-img card-img-top"
                                                alt="imagen de un gato"
                                            />
                                            <div className="card-body d-flex justify-content-center">
                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() => removeFavoriteCat(cat.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <div className='container text-center p-4'>
                    <div className='row'>
                        <div className='col'>
                            <a
                                href='https://www.instagram.com/elkin.web/'
                                className=' link-instagram link-secondary fs-4 text'
                            >
                                © 2022 By @elkin.web
                                <img
                                    className='img-instagram'
                                    src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                                    alt="Icono de Instagram"
                                />
                            </a>
                        </div>
                        <div className='col'>
                            <a
                                className=' link-apiCat text-reset fw-bold fs-4 text'
                                href='https://thecatapi.com/'
                            >
                                API CAT
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export { FavoritesCards };

