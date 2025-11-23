import { navItems } from "../constants";

const NavBar = () => {
  return (
  
      <div className="container flex items-center hidden md:flex justify-around fixed py-4 z-100 w-full bg-black/30 backdrop-blur-md">
      
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        
      </div>
    
  );
};

export default NavBar;