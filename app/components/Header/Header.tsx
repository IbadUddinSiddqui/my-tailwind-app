import Link from "next/link";

export default function Header() {
    return (
        <header className="max-w-full  bg-white bg-opacity-0 fixed top-0 z-20 backdrop-blur-sm text-white p-4">
            <nav className="flex justify-between items-center">
                {/* Navigation Menu */}
                <ul className="flex space-x-6 bg-transparent text-sm sm:text-base lg:text-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <Link href={'/'}>
                        <li className="hover:text-blue-500 hover:bg-white hover:rounded-full py-2 px-3 inline-block">Home</li>
                    </Link>
                    <Link href={'/about'}>
                        <li className="hover:text-blue-500 hover:bg-white hover:rounded-full py-2 px-3 inline-block">About</li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className="hover:text-blue-500 hover:bg-white hover:rounded-full py-2 px-3 inline-block">Contact</li>
                    </Link>
                    <Link href={'/services'}>
                        <li className="hover:text-blue-500 hover:bg-white hover:rounded-full py-2 px-3 inline-block">Services</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
