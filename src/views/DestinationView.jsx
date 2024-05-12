import { Slide, Zoom } from 'react-awesome-reveal';
import data from '../data.json' 
import { useState } from 'react';

const destinations = data.destinations;

export default function DestinationView() {
    const [currentDestination, setCurrentDestination] = useState(destinations[0]);

    const handleOnClick = (e, name) => {
        e.preventDefault();
        const destination = destinations.find(dest => dest.name == name);
        setCurrentDestination(destination)
    }

    return (
        <main className='bg-destination h-full grow flex flex-col pt-22 pb-10 px-6 items-center lg:flex-row lg:justify-between lg:px-10 xl:px-24 3xl:px-40'>
            <div className='flex flex-col items-center w-full lg:w-auto'>
                <h1 className='main-title text-white md:self-start lg:self-center lg:me-38'>
                    <span className='font-bold text-gray me-4'>01</span> 
                    Pick your destination
                </h1>
                <Zoom duration={800}>
                     <img src={currentDestination.images.webp} alt="Destination image" className='my-8 size-44  md:size-76 lg:size-96 2xl:size-102' />
                </Zoom>
            </div>
            
            <div className='flex flex-col items-center lg:items-start md:max-w-lg 2xl:max-w-2xl'>
                <Slide direction='left' duration={800}>
                    <ul className='flex text-sm gap-10 text-pastel-purple font-barlow-condensed font-normal uppercase  md:text-xl '>
                        {destinations && destinations.map((dest, index) => (
                            <li key={index} className={`cursor-pointer pb-1 relative after:absolute after:h-[3px] after:w-full after:bg-gray after:-bottom-1 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300 ${currentDestination.name == dest.name ? 'after:scale-x-100 after:bg-white' : ''}`}>
                                <button type='button' onClick={(e) => handleOnClick(e, dest.name)}>
                                    {dest.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </Slide>



                <div className=' border-b-1 border-midnight-blue-100 pb-8 text-center lg:text-start '>
                    <Slide direction='right' duration={800}>
                        <h2 className='h3 md:h2 uppercase text-white'>{currentDestination.name}</h2>
                    </Slide>

                    <Slide direction='left' duration={800}>
                        <p className='p'>
                            { currentDestination.description}  
                        </p>
                    </Slide>
                </div>
                
                <Slide direction='left' duration={800} >
                    <div className=' mt-8 text-center flex flex-col gap-8 md:flex-row md:gap-32'>
                        <div className='uppercase '>
                            <h3 className='h6 text-pastel-purple mb-3'>AVG. Distance</h3>
                            <h4 className='h5 text-white'>{ currentDestination.distance}</h4>
                        </div>

                        <div className='uppercase'>
                            <h3 className='h6 text-pastel-purple mb-3'>EST. travel time</h3>
                            <h4 className='h5 text-white'>{ currentDestination.travel}</h4>
                        </div>
                    </div>
                </Slide>
            </div>

        </main>
    )
}