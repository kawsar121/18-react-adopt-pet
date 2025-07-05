import React from 'react';
import cat from '../assets/pet.webp';

const Header = () => {
    return (
        <div className='mt-10'>
            <p className='text-gray-700'>Bringing Families Together</p>
            <h1 className='text-5xl text-black font-bold my-6'>Your Path to Adoption <br/> Starts Here</h1>
            <p className='text-black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking <br /> at its layout. The point of using Lorem Ipsum is that it has a.</p>
            <button className='bg-blue-700 p-2 rounded-sm mt-7'>View More</button>
            <div>
                <img className='mx-auto my-9' src={cat} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Header;