import { Slide } from "react-awesome-reveal"
import { Link } from "react-router-dom"

export default function IndexView() {
    return (
        <main className="bg-index h-full grow pt-24 pb-20 px-6 flex flex-col gap-10 items-center text-center z-0 lg:text-start lg:flex-row lg:justify-between lg:px-20 xl:px-40" >
            <Slide direction="rigth" duration={800}>
                <div className="md:max-w-lg">
                    <h1 className="main-title text-pastel-purple">So, you want to travel to</h1>
                    <h2 className="h2 text-white uppercase md:h1">Space</h2>
                    <p className="p"> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </Slide>
            <Slide direction="right" duration={800}>
                <Link to={'/destination'} className="mt-auto flex justify-center items-center bg-white size-38 font-bellefair text-xl uppercase rounded-full relative md:size-60 lg:size-68 lg:m-0 lg:mt-40 lg:text-3xl  xl:mt-60 after:absolute after:w-full after:h-full after:bg-almost-transparent  after:rounded-full after:-z-10 after:left-0 after:top-0 after:hover:scale-150 after:transition-transform after:duration-300 ">
                        Explore
                </Link>
            </Slide>

        </main>
    )
}
  