/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const About =() =>{
    return(
        <div>
            <div className="bg-green-300 h-screen">
                <div>
                    <h1 className="text-5xl font-bold text-blue-700 py-16 px-16" >About Me</h1>
                </div>
                <div className="flex items-end justify-end px-44 ">
                    <Image src={"/image/about.jpg"} alt="About" width={300} height={200}/>
                </div>
                <div className="text-blue-700 w-1/2 px-16 -mt-96">
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                    of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                    in classical literature, discovered the undoubtable source. Lorem Ipsum comes from 
                    sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                     Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.<br/>
                     This book is a treatise on the theory of ethics, very popular during the Renaissance.
                      The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
                      section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
                    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
                    are also reproduced in their exact original form, accompanied by English versions from the 
                    1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
        </div>

    )

}

export default About;


