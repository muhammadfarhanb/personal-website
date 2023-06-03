import { Button } from "../../../components/ui/button";

const Contact =() =>{
    return(
        <div className="bg-gray-200  ">
            <div className="pb-24">
                    <h1 className="text-4xl text-blue-600 font-bold px-40 py-16">
                        Contact Us
                    </h1>
                <div className="bg-white mx-40 flex flex-col py-16 px-20  rounded-xl shadow w-[800px] ">
                    <input className="m-4 text-xl border-2 border-blue-500 rounded-lg p-4  " type="text" placeholder="Name" />
                    <input className="m-4 text-xl border-2 border-blue-500 rounded-lg p-4  " type="text" placeholder="Email Adrees" />
                    <input className="m-4 text-xl border-2 border-blue-500 rounded-lg p-4 " type="text" placeholder="Comment" />
                    <Button className=" bg-green-500 w-fit mx-5 px-5 my-5 hover:bg-green-700">Submit</Button>
                </div>
            </div>
        </div>

    )

}

export default Contact;