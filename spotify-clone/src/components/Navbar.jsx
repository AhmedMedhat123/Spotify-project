import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            onClick={() => navigate(-1)}
            className='bg-black text-xl p-2 rounded-[100%] cursor-pointer'
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            onClick={() => navigate(1)}
            className='bg-black text-xl p-2 rounded-[100%] cursor-pointer'
            icon={faAngleRight}
          />
        </div>
        <div className='flex items-center gap-3'>
          <div className="btn">Explore Premium</div>
          <div className="btn-secondary">Install App</div>
          {/* Conditionally render the Login button */}
          {!isLogin && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          )}
          {/* <div className="bg-purple-500 text-black rounded-[100%] w-7 h-7 flex items-center justify-center">O</div> */}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <div className="btn">All</div>
        <div className="btn-secondary">Music</div>
        <div className="btn-secondary">Podcasts</div>
      </div>
    </>
  );
};

export default Navbar;
