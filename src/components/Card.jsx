import foto from '../styles/gato.jpg';
import '../styles/Card.css';
import React, { useEffect, useState } from 'react';
import { data } from 'autoprefixer';

const URL_RANDOM_CAT = "https://api.thecatapi.com/v1/images/search?limit=3&mime_types=png,jpg&size=small";
const URL_ADD_FAVORITE_CAT = "https://api.thecatapi.com/v1/favourites";

function Card() {

  // console.log(URL_RANDOM_CAT)

  // const url = https://thecatapi.com/
  // Api-key b12bf088-bbd7-4dfd-b617-eeaf167bef39

  const [randomCat, setRandomCat] = useState([]);
  const [loading, setLoading] = useState(true);

  async function showRandomCats() {
    fetch(URL_RANDOM_CAT)
      .then(res => res.json())
      .then(data => setRandomCat(data))
      .catch((error) => console.error(error))
    setLoading(false)
  }


  async function addFavoriteCat(id) {
    fetch(URL_ADD_FAVORITE_CAT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'b12bf088-bbd7-4dfd-b617-eeaf167bef39'
      },
      body: JSON.stringify({
        image_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  useEffect((() => {
    showRandomCats();
  }), [URL_RANDOM_CAT])


  return (
    <React.Fragment>

      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col">
            <button
              type="button"
              onClick={() => showRandomCats()}
              className="btn btn-primary"
            >
              Gatos Aleatorios
            </button>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center my-5" >
        <div className="row">

          {!loading &&
            randomCat.map(cat => {
              return (
                <div className="col px-5" key={`random cats ${cat.id}`}>
                  <div className="card " >
                    <img src={cat.url} className="card-img card-img-top" alt="imagen de un gato" />
                    <div className="card-body">
                      <h5 className="card-title">Gato</h5>
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                      <button
                        className="btn btn-primary"
                        onClick={() => addFavoriteCat(cat.id)}
                      >
                        Agregar a favoritos
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
