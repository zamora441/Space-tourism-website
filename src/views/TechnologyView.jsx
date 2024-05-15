
import { useState } from 'react'
import data from '../data.json'
import { Slide } from 'react-awesome-reveal';
const technologies = data.technology

export default function TechnologyView() {
    const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);

    const handleOnClick = (e, name) => {
        e.preventDefault();
        const technology = technologies.find(tech => tech.name == name);
        console.log("click")
        setCurrentTechnology(technology)
    }

    return (
        <main className="bg-technology h-full grow flex flex-col pt-22 pb-10 md:pb-0  lg:ps-10 xl:ps-22 xl:mb-0 lg:pt-32 2xl:ps-32 2xl:pt-46 3xl:ps-40">
            <h1 className='main-title text-center text-white md:self-start px-6 lg:-mb-20 xl:mb-0'>
                <span className='text-gray font-bold me-4 '>03</span>
                Space launch 101
            </h1>
            <div className='flex flex-col md:items-center lg:flex-row-reverse lg:justify-between'>
                <Slide direction='right' duration={800} className='w-full xl:w-auto'>
                    <div className='flex my-8 md:mb-10 lg:mb-0 lg:self-end'>
                        <img src={currentTechnology.images.landscape } alt="Technology image" className='lg:hidden w-full' />
                        <img src={currentTechnology.images.portrait} alt="Technology image" className='hidden lg:block xl:w-98 xl:h-106 2xl:w-auto 2xl:h-auto ms-auto' />
                    </div>
                </Slide>

                <div className='flex flex-col items-center md:max-w-lg px-6 md:px-0 lg:flex-row lg:justify-start lg:gap-8 xl:max-w-2xl '>
                    <Slide direction='down' duration={800}>
                        <ul className='flex gap-4 lg:flex-col lg:items-center lg:gap-7  '>
                            {
                                technologies && technologies.map((tech, index) => (
                                    <li key={index}>
                                        <button type='button' className={`size-10 md:size-13 2xl:size-20 border-1 border-midnight-blue-100 rounded-full  font-bellefair text-base md:text-xl xl:text-2xl transition duration-300 hover:border-white ${tech.name == currentTechnology.name ? 'bg-white text-black' : 'text-white'}`} onClick={e=> handleOnClick(e, tech.name)}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </Slide>
                    <Slide direction='right' duration={800}>


                    <div className='flex flex-col items-center mt-5 md:mt-10 lg:items-start '>
                        <h2 className='main-title mb-2 text-pastel-purple  md:mt-0 2xl:mb-5' >The terminology...</h2>
                        <h3 className='h5 text-2xl text-white uppercase mb-4 md:text-4xl xl:text-6xl 2xl:mb-6'>{currentTechnology.name}</h3>
                        <p className='p text-center md:mb-10 lg:text-start 2xl:max-w-md'>{ currentTechnology.description}</p>
                        </div>
                    </Slide>
                        
                    </div>
                    
                
            </div>
        </main>
    )
}