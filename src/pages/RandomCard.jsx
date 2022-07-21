import '../styles/RandomCard.css';
import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import '../styles/Footer.css';

function RandomCard() {

  const {
    showRandomCats,
    loadingRadnomCats,
    randomCat,
    verificationNotRepeatFavoriteCat,
  } = useContext(CardContext);

  return (
    <React.Fragment>
      <section className='section-randomCat' >

        <div className='col-12 my-4'>
          <h1 className='text-center'>
            Look for a new cat for your collection
          </h1>
        </div>

        <div className="container d-flex justify-content-center mt-5">
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={() => showRandomCats()}
                className="btn btn-dark btn-lg"
              >
                Random Cats
              </button>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center my-4" >
          <div className="row">

            {!loadingRadnomCats &&
              randomCat.map(cat => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4 px-5 d-flex justify-content-center" key={`random cats ${cat.id}`}>
                    <div className="card mb-4" >
                      <img src={cat.url} className="card-img card-img-top" alt="imagen de un gato" />
                      <div className="card-body d-flex justify-content-center"> 

                          <button
                            className="btn btn-outline-success"
                            onClick={() => verificationNotRepeatFavoriteCat(cat.id)}
                          >
                            Add Favorite
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
              <a className=' link-apiCat text-reset fw-bold fs-4 text' href='https://thecatapi.com/'>
                API CAT
              </a>
            </div>
          </div>
        </div>
      </footer>

    </React.Fragment>
  );
}

export { RandomCard };
