import { useContext, useEffect } from 'react';
import ListingCard from '../Listing/ListingCard';
import { ApiContext } from '../../providers/ApiProvider';

const Favourites = () => {
    const {
        favHouses,
        updateFavHouses,

    } = useContext(ApiContext);

    useEffect(() => {
        if (favHouses.length == 0) updateFavHouses();
    }, [favHouses]);

    return (
        <div className='px-32 bg-[#F1F1F8] pb-32'>
            <h2 className="text-3xl font-semibold pt-10 pb-12">Favourites</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    favHouses.map(house => <ListingCard house={house}></ListingCard>)
                }
            </div>
        </div>
    );
};

export default Favourites;