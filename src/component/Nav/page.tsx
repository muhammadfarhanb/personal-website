import Link from "next/link";
import Image from "next/image";
const Nav =() =>{
    return(

        <div className="bg-blue-600 ">       
            <div className="container ">
                <nav className="flex items-center flex-wrap ">
                    <div className="flex-1">
                       <Image src={"/image/logo.jpg"} alt="logo" width={500} height={300} 
                       className="w-48"/>
                    </div>
                    <div className="flex flex-wrap">
                        <Link className="text-white p-8 font-bold text-l " href={"/"}>Home</Link>
                        <Link className="text-white p-8 font-bold text-l " href={"About"}>About</Link>
                        <Link className="text-white p-8 font-bold text-l " href={"Skill"}>Skill</Link>
                        <Link className="text-white p-8 font-bold text-l " href={"Contact"}>contact</Link>
                    </div>
                </nav>

            </div>
        </div>

    )

}

export default Nav;