import Link from "next/link";
import Image from "next/image";
const Nav =() =>{
    return(

        <div className="flex flex-shrink">        
            <div className="">
                <nav className="bg-green-600  flex">
                    <div className="flex justify-start items-center mx-28">
                       <Image src={"/image/logo.jpg"} alt="logo" width={500} height={300} 
                       className="w-48"/>
                    </div>
                    <div className="mx-64 p-8">
                        <Link className="text-white p-6 font-bold text-l " href={"/"}>Home</Link>
                        <Link className="text-white p-6 font-bold text-l " href={"About"}>About</Link>
                        <Link className="text-white p-6 font-bold text-l " href={"Skill"}>Skill</Link>
                        <Link className="text-white p-6 font-bold text-l " href={"Contact"}>contact</Link>
                    </div>
                </nav>

            </div>
        </div>

    )

}

export default Nav;