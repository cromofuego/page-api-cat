import React from 'react';

function CardContext() {
    // < FavoritesCards >

    const [favoriteCats, setFavoriteCats] = useState([]);
    const [loading, setLoading] = useState(true);

    async function showAllFavoritesCats() {
        fetch(URL_GET_FAVORITE_CAT, {
            method: 'GET',
            headers: {
                'x-api-key': 'b12bf088-bbd7-4dfd-b617-eeaf167bef39'
            }
        })
            .then(response => response.json())
            .then(data => setFavoriteCats(data))
            .catch((error) => {
                console.error(error);
            });
        setLoading(false)
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
                console.log(" gatito removido de favoritos " + data.message)
                if(data.message  === 'SUCCESS') return showAllFavoritesCats();
            })
            .catch((error) => {
                console.error(error);
            });            
    }



    useEffect(() => {
        showAllFavoritesCats();
    }, [URL_GET_FAVORITE_CAT])
    // </ FavoritesCards >

  return (
    <div>CardContext</div>
  )
}

export default CardContext;