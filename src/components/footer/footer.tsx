import type {ReactElement} from "react";


export default function Footer() : ReactElement {
    return (
        <div className="flex justify-center items-center h-[20vh] ">
            <div className="sm:h-[10vh] h-[8vh] w-[85vw] bg-[#f5e6d3] shadow-md opacity-90 rounded-xl font-montserrat flex justify-evenly items-center font-semibold md:text-base sm:text-xs text-[8px] min-h-[60px]">
                <p className="flex items-center sm:p-0 p-4">
                    Project developed in collaboration with
                    <a
                        className="ml-2 bg-gradient-to-l from-green-300 to-green-400 rounded-md shadow-xl text-shadow-lg cursor-pointer py-1 px-2 font-bold hover:scale-110 transition-all duration-300 sm:scale-100 scale-90"
                        href="https://www.start2impact.it/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        start2impact
                    </a>
                </p>
                <div className="flex justify-center items-center font-semibold">
                    <p className="sm-mr-1 mr-0">Contacts</p>
                    <div className="flex justify-center items-center sm:scale-100 scale-50">
                        <a className="rounded-lg hover:bg-gray-300 transition-all duration-300 w-[40px] h-[40px] p-1" href="https://www.linkedin.com/in/gabrielemartignon/"><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="Linkedin Icon" /></a>
                        <a className="rounded-lg hover:bg-gray-300 transition-all duration-300 w-[40px] h-[40px] p-1" href="https://github.com/gabrieleMartignon"><img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="GitHub Icon" /></a>
                        <a className="rounded-lg hover:bg-gray-300 transition-all duration-300 w-[40px] h-[40px] p-1" href="mailto:gabrielemartignon@gmail.com"><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Mail Icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}