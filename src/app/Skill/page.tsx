/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const Skill =() =>{
    return(
        <div className="bg-white">
            <div className="container pb-14">

                <div className="text-5xl font-extrabold py-16 px-28">
                    Skill's
                </div>
                    <div className="flex justify-around sm:flex-wrap ">
                        <div className="">
                            <Image  src={"/image/html.png"} alt="Html" width={300} height={100}/>
                        </div>
                        <div className="">
                            <Image src={"/image/css3.png"} alt="Css 3" width={150} height={50}/>
                        </div>
                        <div className="">
                            <Image src={"/image/java.png"} alt="JavaScript" width={350} height={200}/>
                        </div>
                    </div>
                    <div className=" flex justify-around my-10 sm:flex-wrap ">
                        <div className="">
                            <Image  src={"/image/typescript.png"} alt="TypeScript" width={200} height={100}/>
                        </div>
                        <div className="">
                            <Image  src={"/image/next.png"} alt="Next.js" width={200} height={100}/>
                        </div>
                        <div className="">
                            <Image  src={"/image/tailwindcss.png"} alt="TailwindCss" width={200} height={100}/>
                        </div>
                    </div>         
            </div>
        </div>

    )

}

export default Skill;