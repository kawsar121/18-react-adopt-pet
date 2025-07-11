import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowPets from './ShowPets';
import noData from '../assets/error.webp'

const Pet = () => {
    const {data} = useLoaderData();
    console.log(data)
    if(data.length===0){
        return <div>
                    <img className='mx-auto w-72' src={noData} alt="" srcset="" />
               </div>
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10'>
                {
                    data.map(showData=> <ShowPets key={showData.petId} petCategory={showData}></ShowPets>)
                }
            </div>
            
        </div>
    );
};

export default Pet;