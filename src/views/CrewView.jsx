import { useState } from 'react';
import data from '../data.json'
import { Slide, Zoom } from 'react-awesome-reveal';

const crew = data.crew;

export default function CrewView() {
    const [currentMember, setCurrentMember] = useState(crew[0])

    const handleOnClick = (e, name) => {
        e.preventDefault();
        const member = crew.find(member => member.name == name);
        console.log("click")
        setCurrentMember(member)
    }

    return (
        <main className="bg-crew h-full grow grid grid-cols-1 pt-22 pb-10 px-6 place-items-center md:pb-0 lg:grid-cols-2 lg:px-10 xl:px-24  3xl:px-40 gap-4 lg:auto-rows-fr xl:pt-0 "> 
            <h1 className='main-title text-white md:place-self-start lg:self-center '>
                <span className='text-gray font-bold me-4 '>02</span>
                Meet your crew
            </h1>

            <div className='flex justify-center border-b-1 border-b-gray w-full md:order-last md:border-b-0 lg:order-none lg:row-span-2 lg:place-self-end lg:justify-end h-min'>
                <Zoom duration={800}>
                    <img src={ currentMember.images.webp} alt="Crew member photo" className='w-44 h-56 md:w-103 md:h-110 xl:w-110 xl:h-114 2xl:w-114 2xl:h-124'/>
                </Zoom>
            </div>

            <Slide className='lg:place-self-start  lg:h-full'>
            <div className='flex flex-col items-center  lg:items-start '>
                <ul className='flex gap-5  mb-6 lg:mt-auto xl:mb-20 '>
                    {
                        crew && crew.map((member, index) => (
                            <li key={index} >
                                <button type='button' onClick={e => 
                                    handleOnClick(e, member.name) 
                                } className={` ${currentMember.name === member.name ? 'bg-white' : 'bg-midnight-blue-200 md:bg-midnight-blue-100'} size-3 md:size-5 lg:size-5  cursor-pointer   rounded-full hover:bg-gray transition duration-300 `}>

                                </button>
                            </li>
                        ))
                    }
                </ul>

                <div className='flex flex-col items-center md:max-w-lg md:order-first md:mt-4 lg:items-start  2xl:max-w-2xl lg:h-76'>
                    <h2 className='text-lg text-gray  tracking-widest md:tracking-[0.2em] font-bellefair font-light  uppercase md:text-2xl md:mb-3 lg:text-4xl' >
                        {currentMember.role}
                    </h2>

                    <h3 className='h5 text-2xl text-white uppercase mb-2 md:text-4xl text-center lg:text-5xl lg:text-start 2xl:text-6xl '>
                        {currentMember.name}
                    </h3>

                    <p className='p text-center md:mb-10 lg:text-start'>{ currentMember.bio}</p>
                </div>
                </div>
            </Slide>
                

        </main>
    )
}