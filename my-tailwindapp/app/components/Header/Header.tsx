export default function Header() {
    return (
        <header className="  w-full bg-white bg-opacity-0 fixed top-0 z-20 backdrop-blur-sm text-xl text-white p-4">
            <nav className=" flex justify-between items-center ">
            <ul className="flex space-x-6 bg-transparent">
                <li className=" hover:text-blue-500  hover:bg-white hover:rounded p-1">Home</li>
                <li className=" hover:text-blue-500  hover:bg-white hover:rounded p-1">About</li>
                <li className=" hover:text-blue-500  hover:bg-white hover:rounded p-1">Contact</li>
                <li className=" hover:text-blue-500  hover:bg-white hover:rounded p-1">Services</li>
            </ul>  
        </nav> 
        </header>
    )

}
 