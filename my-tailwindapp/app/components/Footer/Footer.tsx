

export default function Footer (){
    return(
        <footer className="w-full bg-white bg-opacity-30  bottom-0 left-0 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center"  >
          <p className="text-gray-100">&copy; 2024 My Website. All Rights Reserved.</p>
          <ul className="flex space-x-4">
            <li><a href="#privacy" className="text-gray-100">Privacy</a></li>
            <li><a href="#terms" className="text-gray-100">Terms</a></li>
          </ul>
        </div>
      </footer>
    )
} 