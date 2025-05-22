import Link from 'next/link'

export default function Navbar() {
return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
             <Link href="/" className="text-xl font-bold"> Chatham Liquor </Link>
            <div className="space-x-4">
                <Link href="#about"  className="hover:text-blue-500 transition">About</Link>
                <Link href="#catalog"  className="hover:text-blue-500 transition">Catalog</Link>
                <Link href="#reviews"  className="hover:text-blue-500 transition">Reviews</Link>
                <Link href="#contact"  className="hover:text-blue-500 transition">Contact</Link>
            </div>
        </div>
    </nav>
)
}
