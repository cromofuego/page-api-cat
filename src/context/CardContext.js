import React, { useEffect, useState } from 'react';

const URL_RANDOM_CAT = "https://api.thecatapi.com/v1/images/search?limit=3&mime_types=png,jpg&size=small";
const URL_ADD_FAVORITE_CAT = "https://api.thecatapi.com/v1/favourites";
const URL_GET_FAVORITE_CAT = "https://api.thecatapi.com/v1/favourites";
const URL_REMOVE_FAVORITE_CAT = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

const CardContext = React.createContext();

function CardProvider(props) {

  // < FavoritesCards >
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [loadingFavoriteCat, setLoadingFavoriteCat] = useState(true);


  async function showAllFavoritesCats() {
    fetch(URL_GET_FAVORITE_CAT, {
      method: 'GET',
      headers: {
        'x-api-key': 'b12bf088-bbd7-4dfd-b617-eeaf167bef39'
      }
    })
      .then(response => response.json())
      .then(data => {
        setFavoriteCats(data)
        setLoadingFavoriteCat(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function removeFavoriteCat(id) {
    fetch(URL_REMOVE_FAVORITE_CAT(id), {
      method: 'DELETE',
      headers: {
        'x-api-key': 'b12bf088-bbd7-4dfd-b617-eeaf167bef39'
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') return showAllFavoritesCats();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    showAllFavoritesCats();
  }, [])
  // </ FavoritesCards >


  // < Random Card >
  const [randomCat, setRandomCat] = useState([]);
  const [loadingRadnomCats, setLoadingRadnomCats] = useState(true);

  async function showRandomCats() {
    fetch(URL_RANDOM_CAT)
      .then(res => res.json())
      .then(data => {
        setRandomCat(data)
        setLoadingRadnomCats(false)
      })
      .catch((error) => console.error(error))
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
        if (data.message === 'SUCCESS') {
          showAllFavoritesCats()
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect((() => {
    showRandomCats();
  }), [])
  // </ Random Card >  

  const verificationNotRepeatFavoriteCat = (id) => {
    const index = favoriteCats.findIndex(item => item.image_id === id)
    console.log(favoriteCats)
    console.log(index)
    if (index >= 0) {
      alert('Ya ha sido agregado');
    } else {
      addFavoriteCat(id)
    }
  }
  console.log(favoriteCats)

  return (
    <CardContext.Provider value={{
      verificationNotRepeatFavoriteCat,
      favoriteCats,
      loadingRadnomCats,
      showAllFavoritesCats,
      removeFavoriteCat,
      randomCat,
      loadingFavoriteCat,
      showRandomCats,
      addFavoriteCat,

    }}>
      {props.children}
    </CardContext.Provider>
  );
}

export { CardProvider, CardContext };