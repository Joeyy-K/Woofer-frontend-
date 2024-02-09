import { NavLink, useLocation } from 'react-router-dom';
import { bottombarlinks } from '../../constants';

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='fixed bottom-0 left-0 w-full bg-blue-500 shadow'>
      <ul className="flex justify-around py-2">
        {bottombarlinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <li
              key={`bottombar-${link.label}`}
              className={`flex flex-col items-center ${
                isActive ? 'bg-blue-500 rounded' : 'text-white bg-white-500'
              } transition duration-300`}
            >
              <NavLink to={link.route} className="flex flex-col items-center">
                <img
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                  className={`${isActive}`}
                />
                <span className='text-xs'>{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomBar;
