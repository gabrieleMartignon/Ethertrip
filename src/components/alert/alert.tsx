


type alertMessage = {
    error : string
    message : string
    ref : any
}

export default function AlertMessage (props : alertMessage) {
  
    return (
        <div className="h-[100px] w-[350px] border-3 border-blue-300 bg-white fixed top-2/12 left-12/12 z-10 p-2 rounded-xl flex justify-center items-center text-black transition-all duration-250 transform"
        ref={props.ref}>
            <div className="w-[20%]">
                <img src="https://img.icons8.com/?size=100&id=63690&format=png&color=000000" alt="alert Icon" height={35} width={35} />
            </div>
            <div className="flex font-montserrat flex-col items-baseline w-[100%] text-sm">
                <h1 className="text-shadow-md font-semibold mb-1">{props.error}</h1>
                <p className="font-medium text-gray-700">{props.message}</p>
            </div>

        </div>
    )
}