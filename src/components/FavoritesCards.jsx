import { useState, useEffect } from 'react';

const URL_GET_FAVORITE_CAT = "https://api.thecatapi.com/v1/favourites";
const URL_REMOVE_FAVORITE_CAT = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;


function FavoritesCards() {

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


    return (
        <div className="container d-flex justify-content-center my-5" >
            <div className="row">

                {!loading &&
                    favoriteCats.map(cat => {
                        return (
                            <div className="col px-5" key={`favorite cat ${cat.image.id}`}>
                                <div className="card " >
                                    <img src={cat.image.url} className="card-img card-img-top" alt="imagen de un gato" />
                                    <div className="card-body">
                                        <h5 className="card-title">Gato</h5>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => removeFavoriteCat(cat.id)}
                                        >
                                            Sacar de favorito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}

export default FavoritesCards;

