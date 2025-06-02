import { Link } from 'react-router'

import ReactLogo from '../assets/react.svg'

const Navbar = () => {
    return <div className="bg-zinc-100/90 border-b border-zinc-600 fixed top-0 left-0 right-0 z-50 p-3 flex justify-between">
        <div className="flex gap-x-8 items-center">
            <div className="flex gap-x-2">
                <img
                    className="w-8"
                    src={ReactLogo}
                    alt="react logo"
                />
                <div>
                    <p className="font-bold">Create-Web3</p>
                    <p className="text-xs">EVM boilerplate</p>
                </div>
            </div>
            <Link
                className="hidden md:block cursor-pointer"
                to="/"
            >
                Home
            </Link>
        </div>
        <div className="flex items-center">
            <button
                className="text-sm border-2 border-zinc-600 rounded-md px-4 py-2 hover:shadow-md cursor-pointer"
            >
                <span className="hidden md:block">Connect Wallet</span>
                <span className="block md:hidden">Connect</span>
            </button>
        </div>
    </div>
}

export default Navbar;