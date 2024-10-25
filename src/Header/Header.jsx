
import logo from  '../../public/img/logo.png'
const Header = ({freeCredit}) => {
    return (
        <div className="px-4 container mx-auto flex items-center justify-between mt-7">
            {/* logo here */}
            <div>
               <img className='w-16 h-14' src={logo} alt="" />
            </div>

            {/* menu bar and counting coin */}
            <div  className='flex  gap-7 items-center'>
                {/* nav bar */}
                <div className='hidden md:block'>
                    <ul className='flex gap-5 text-sm text-gray-500'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>
                </div>
                {/* counting coin here */}
                <div className='border border-gray-200 rounded-xl px-1 py-1'>{freeCredit} coin  
                <i class="fa-solid fa-circle-dollar-to-slot ml-2"></i>
                </div>
                <i class="fa-solid fa-bars md:hidden text-xl"></i>
            </div>
        </div>
    );
};

export default Header;