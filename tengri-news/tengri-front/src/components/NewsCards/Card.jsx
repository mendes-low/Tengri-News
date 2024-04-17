// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { getDataItems } from '../../data'

// const Card = ({ match }) => {
//     const { data } = getDataItems();
//     const { id } = match.params
//     const [itemData, setItemData] = useState([]);
//     const selectCard = data.find(card => card.id === parseInt(id));

//     useEffect(() => {
//         axios({
//             method: 'get',
//             url: `http://localhost:3000/news?newsId=${id}`,
//             responseType: 'document'
//         })
//             .then(response => {
//                 setItemData(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }, [id]);

//     return (
//         <div>
//             {itemData && <div dangerouslySetInnerHTML={{ __html: itemData }} />}
//         </div>
//     )
// }

// export default Card




















import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Card.css'
import HeaderBottom from '../HeaderBottom';

const Card = ({ }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/news?newsId=${id}`)
                .then(response => {
                    setItemData(response.data);
                    setLoading(false)
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false)
                });
        }
    }, [id]);

    return (
        <div className='flex flex-col pb-[600px] px-3 mx-[120px] border-2 bg-white mb-10 rounded-b-lg shadow-lg shadow-[#e7e7e7]'>
            <HeaderBottom />
            <div>
                <div className='flex justify-center'>
                    {loading && <img src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952e7zb6qfrhkio5p1s9t0idk7wne1r0wqot8nw2z6i&ep=v1_gifs_search&rid=200w.gif&ct=g' />}
                    {error && <div>{error}</div>}
                </div>
                {itemData && <div className='flex flex-col space-y-2' dangerouslySetInnerHTML={{ __html: itemData }} />}
            </div>
        </div>
    );
}

export default Card;




