
import Link from "next/link"
export default function Header() {
    return (
        <header className="  w-full bg-white bg-opacity-0 fixed top-0 z-20 backdrop-blur-sm text-xl text-white p-4">
            <nav className=" flex justify-between items-center ">
            <ul className="flex space-x-6 bg-transparent">
            <Link href={'/'}> <li className=" hover:text-blue-500  hover:bg-white hover:rounded-full py-2 px-3">Home</li></Link>
              <Link href={'/about'}>  <li className=" hover:text-blue-500  hover:bg-white hover:rounded-full py-2 px-3">About</li></Link>
                <Link href={'/contact'}><li className=" hover:text-blue-500  hover:bg-white hover:rounded-full py-2 px-3">Contact</li></Link>
                <Link href={'services'}> <li className=" hover:text-blue-500  hover:bg-white hover:rounded-full py-2 px-3">Services</li></Link>
                
            
          
            </ul>  
        </nav> 
        </header>
    )

}
 