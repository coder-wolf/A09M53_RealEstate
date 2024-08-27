import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import FavListCard from './FavListCard';
import { Link } from 'react-router-dom';
import EditButton from '../Shared/EditButton';
import { ApiContext } from '../../providers/ApiProvider';
import { Helmet } from 'react-helmet-async';
import SaveButton from '../Shared/SaveButton';

const UserProfile = () => {
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const countryInputRef = useRef(null);
    const cityInputRef = useRef(null);
    const postalCodeInputRef = useRef(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    // const taxInputRef = useRef(null);

    const {
        user,
    } = useContext(AuthContext);
    console.log(user);

    const [editMode, setEditMode] = useState(false);

    const {
        favIds,
        favHouses,
        updateFavHouses,
    } = useContext(ApiContext);

    useEffect(() => {
        if (favHouses.length == 0) updateFavHouses();
        if (user) {
            const fetchedName = user.displayName;
            const nameParts = fetchedName.split(" ");
            setFirstName(nameParts[0]);
            setLastName(nameParts.slice(1).join(" "));

            const fetchedEmail = user.email;
            setEmail(fetchedEmail);

            const fetchedPhone = user.phoneNumber;
            setPhone(fetchedPhone);

            // const country = 
        }
    }, [favHouses, user]);

    return (
        <div className='lg:px-32 md:px-16 px-8 py-20 pt-10 bg-[#F1F1F8]'>
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            <div className=''>
                <div className='rounded-xl flex flex-row gap-6 p-4 py-6 bg-white'>
                    <div className="avatar">
                        <div className="w-28 h-28 rounded-md">
                            {
                                user.photoURL ?
                                    <img src={user.photoURL} />
                                    :
                                    <div className="bg-[#2B323C] text-neutral-content w-28 h-28 items-center justify-center flex">
                                        <span className="text-6xl text-[#A6ADBB]" title={user.displayName ? user.displayName : user.email}>{user.displayName ? user.displayName[0] : user.email[0].toUpperCase()}</span>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full items-center'>
                        <div>
                            <h2 className='text-4xl font-medium '>{user.displayName}</h2>
                            <p className='text-gray-600 pt-1'> <span className='text-black font-semibold'>Email: </span>{user.email ?? user.reloadUserInfo.providerUserInfo[0].email}</p>
                            <p className='text-gray-600 pt-1'> <span className='text-black font-semibold'>Location: </span>Dhaka, Bangladesh</p>
                            <div className='flex gap-2 pt-1 items-center'>
                                <span className='text-black font-semibold'>Looking For: </span>
                                <div className='flex gap-2'>
                                    <div className="badge">House</div>
                                    <div className="badge ">Small to medium</div>
                                    <div className="badge ">Suberban Area</div>
                                    <div className="badge ">$3000-$4000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <EditButton></EditButton> */}
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2'>
                    <div className='rounded-xl p-6 mt-6 bg-white col-span-2'>
                        <div className=''>
                            <div className='flex flex-row justify-between w-full pb-3'>
                                <h2 className='text-3xl font-semibold pb-6'>Personal Information</h2>
                                {/* <div onClick={() => setEditMode(!editMode)}>
                                    <EditButton onClick={() => setEditMode(true)}></EditButton>
                                </div> */}
                                {
                                    editMode ?
                                        <div onClick={() => {
                                            setEditMode(false);

                                            setFirstName(firstNameInputRef.current.value);
                                            setLastName(lastNameInputRef.current.value);
                                            setEmail(emailInputRef.current.value);
                                            setPhone(phoneInputRef.current.value);
                                            setCountry(countryInputRef.current.value);
                                            setCity(cityInputRef.current.value);
                                            setPostalCode(postalCodeInputRef.current.value);
                                        }}>
                                            <SaveButton></SaveButton>
                                        </div>
                                        :
                                        <div onClick={() => {
                                            setEditMode(true)
                                            // load all the existing data.
                                            // 1. firstname
                                            // 2. lastname
                                            // 3. email
                                            // 4. phone no.
                                            // 5. country
                                            // 6. city
                                            // 7. postal code
                                            // 8. tax id ❌
                                        }}>
                                            <EditButton></EditButton>
                                        </div>
                                }
                            </div>
                            <div className=''>
                                <div className='grid grid-cols-2'>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>First Name</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={firstNameInputRef}
                                                    defaultValue={firstName}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{firstName ? firstName : "Null"}</p>
                                        }
                                    </div>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>Last Name</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={lastNameInputRef}
                                                    defaultValue={lastName}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{lastName ? lastName : "Null"}</p>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>Email</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={emailInputRef}
                                                    defaultValue={email}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{email ? email : "Null"}</p>
                                        }
                                    </div>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>Phone No.</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={phoneInputRef}
                                                    defaultValue={phone}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{phone ? phone : "Null"}</p>
                                        }

                                    </div>
                                </div>
                            </div>
                            <h2 className='text-2xl font-semibold pb-6 pt-10'>Address</h2>
                            <div className=''>
                                <div className='grid grid-cols-2'>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>Country</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={countryInputRef}
                                                    defaultValue={country}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{country ? country : "Null"}</p>
                                        }
                                    </div>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>City/State</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={cityInputRef}
                                                    defaultValue={city}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{city ? city : "Null"}</p>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='pb-4'>
                                        <h2 className='text-lg font-semibold'>Postal Code</h2>
                                        {/* TODO: input field */}
                                        {
                                            editMode ?
                                                <input
                                                    ref={postalCodeInputRef}
                                                    defaultValue={postalCode}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-sm border-none w-full max-w-xs" />
                                                :
                                                <p className="pt-1">{postalCode ? postalCode : "Null"}</p>
                                        }
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='lg:pl-6 pt-6 col-span-2 lg:col-span-1'>
                        <h2 className='text-3xl font-semibold mb-3'>Favourites ({favIds.length})</h2>
                        {
                            favHouses.slice(0, 2).map((house, index) => <FavListCard key={index} house={house}></FavListCard>)
                        }
                        <div className='flex justify-end font-semibold mr-2'>
                            <Link to="/favourites">See more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserProfile;
