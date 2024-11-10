import Link from "next/link"


 export default function Navbar(){
  
    return (
      <div>
        {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-pink-200 bg-opacity-95 border-b-4 border-black flex justify-between items-center p-4 z-10">
        {/* Website Name */}
        <div className="text-2xl font-bold text-gray-800 font-poppins">Beauty & co</div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-12">
          <li className="hover:text-blue-500 text-black font-semibold"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-500 text-black font-semibold"><Link href="/about">About us</Link></li>
          <li className="hover:text-blue-500 text-black font-semibold"><Link href="/services">Services</Link></li>
          <li className="hover:text-blue-500 text-black font-semibold"><Link href="/contact">Contact us</Link></li>
          <li className="hover:text-blue-500 text-black font-semibold"><Link href="/vacancy">Vacancy</Link></li>
          <li className="hover:text-blue-500 text-black font-semibold"><Link href="/vacancy/categories">Categories</Link></li>
        </ul>
      </nav>
    </div>
    )
}