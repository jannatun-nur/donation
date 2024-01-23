
import logo from '../../public/assets/images/logo.png'
const Navbar = () => {
  return (
    <div>
    <div className="navbar bg-cyan-700 text-white w-full">
  <div className="flex-1">
    <p className="px-4 text-xs lg:text-xl">Kindness</p>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-6 lg:w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={logo}/>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-cyan-700 rounded-box w-52">
        <button>Home</button>
        <button>About</button>
        <button>Donation</button>
      </ul>
    </div>
  </div>
 
 <input type="text" placeholder='Search' className='w-16 md:w-24 lg:w-28 rounded-lg bg-white text-gray-800'/>
</div>
    </div>
  );
};

export default Navbar;
