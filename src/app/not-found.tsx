import Link from "next/link"
export default function PageNotFound(){
    return(
        <div className="bg-pink-50 flex flex-col items-center justify-center min-h-screen">
             <h1 className="text-6xl font-bold text-black mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg text-black mb-4">Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2">
                    Go to Home
                </button>
            </Link>
        </div>
    )
}