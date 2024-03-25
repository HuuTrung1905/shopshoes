import logo from '~/assets/images/logo.png';

function Header() {
    return (
        <header className="w-full h-20 shadow-cus flex justify-center">
            <div className="flex justify-between items-center h-full w-[90rem]">
                <img src={logo} alt="logo" />
                <ul className="flex list-none">
                    <li className="text-lg font-semibold cursor-pointer py-0 px-5 hover:text-cyan-500">Home</li>
                    <li className="text-lg font-semibold cursor-pointer py-0 px-5 hover:text-cyan-500">Men</li>
                    <li className="text-lg font-semibold cursor-pointer py-0 px-5 hover:text-cyan-500">Women</li>
                    <li className="text-lg font-semibold cursor-pointer py-0 px-5 hover:text-cyan-500">Kid</li>
                </ul>
                <div>
                    <input placeholder="Search" />
                    <button></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
