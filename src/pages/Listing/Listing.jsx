import ListingCard from './ListingCard';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useContext, useEffect } from 'react';
import { ApiContext } from '../../providers/ApiProvider';

const Listing = () => {
    const {
        housesData,
        updateHousesData,
        favHouses,
        updateFavHouses,
        favIds,
    } = useContext(ApiContext);

    useEffect(() => {
        if (housesData.length == 0) updateHousesData();
        if (favHouses.length == 0) updateFavHouses();
    }, [housesData, favHouses])

    return (
        <div className='px-32 bg-[#F1F1F8] pb-32'>
            <div className=''>
                <h2 className="text-3xl font-semibold pt-10">Search properties to rent</h2>
                <div className='border w1/2 bg-white rounded-lg my-6 p-6 flex gap-5 pr-12'>
                    <div className=''>
                        <p className='text-gray-400 font-semibold '>Location</p>
                        <p className='font-semibold'>New York</p>
                    </div>
                    <div className='border-r-2 w-8'></div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold '>When</p>
                        <p className='font-semibold'>Select Move-in Date</p>
                    </div>
                    <div className='border-r-2 w-8 ml-auto'></div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold '>Price Range</p>
                        <p className='font-semibold flex justify-between items-center gap-4'>
                            <span>$1,200 - $2,500</span>
                            <IoIosArrowDropdownCircle className='text-[#F0EFFB] bg-[#7065F080] rounded-3xl border-none'></IoIosArrowDropdownCircle>
                        </p>
                    </div>
                    <div className='border-r-2 w-8 ml-auto'></div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold '>Property Type</p>
                        <p className='font-semibold flex justify-between items-center'>
                            <span>Houses</span>
                            <IoIosArrowDropdownCircle className='text-[#F0EFFB] bg-[#7065F080] rounded-3xl border-none'></IoIosArrowDropdownCircle>
                        </p>
                    </div>
                    <div className='border-r-2 w-8 ml-auto'></div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold '>Buy / Rent</p>
                        <p className='font-semibold flex justify-between items-center'>
                            <span>Rent</span>
                            <IoIosArrowDropdownCircle className='text-[#F0EFFB] bg-[#7065F080] rounded-3xl border-none'></IoIosArrowDropdownCircle>
                        </p>
                    </div>
                    <div className='border-r-2 w-8'></div>
                    <button className='text-white bg-[#7065F0] rounded-lg px-6 py-3 font-medium '>Search</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {
                    housesData.map(house => <ListingCard
                        key={house.id}
                        house={house}
                    ></ListingCard>)
                }
            </div>
        </div>
    );
};

export default Listing;