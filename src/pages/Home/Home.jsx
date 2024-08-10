import { BiRightArrow } from 'react-icons/bi';
import Banner from './Banner';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { BsPlayBtn } from 'react-icons/bs';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChangeTab = tab => {
        setSelectedTab(tab);
    }

    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-2 gap-10 px-32 py-32 pt-20'>
                <div className='relative'>
                    <img
                        className='aspect-[1] object-cover '
                        src="https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9"
                        alt="" />
                    <div className='absolute top-10 -left-10 bg-white p-5 px-8 rounded-lg shadow-xl flex gap-2 pl-4 '>
                        <div className='bg-[#F0EFFB] w-max p-3 border-[#7065F012] border-2 rounded-3xl'>
                            <BsPlayBtn className='text-[#5C4DEF] text-xl'></BsPlayBtn>
                        </div>
                        <div>
                            <p className="font-semibold">Virtual home tour</p>
                            <p className="text-gray-500">We provide you with virtual tour</p>
                        </div>
                    </div>

                </div>
                <div className='px-20 pt-12'>
                    <div className='border bg-[#FAFAFE] flex w-max rounded-lg items-center font-semibold'>
                        <button onClick={() => { handleChangeTab(0) }} className={`px-8 m-2 p-2 ${selectedTab == 0 ? "bg-white rounded-md shadow-md text-[#7065F0]" : "text-gray-400"}`}>For tenants</button>
                        <button onClick={() => { handleChangeTab(1) }} className={`px-8 m-2 p-2 ${selectedTab == 1 ? "bg-white rounded-md shadow-md text-[#7065F0]" : "text-gray-400"}`}>For landlords</button>
                    </div>
                    <h2 className="text-3xl font-semibold pt-10">We make it easy for tenants and landlords</h2>
                    <p className='text-gray-500 py-6'>Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? You'll save a bunch of money and time with our services.</p>
                    <button className='bg-[#7065F0] text-white font-medium px-6 py-2 rounded-lg flex gap-2 items-center'>
                        <span>See more</span>
                        <IoIosArrowForward></IoIosArrowForward>
                    </button>
                </div>

            </div>
        </div >
    );
};

export default Home;