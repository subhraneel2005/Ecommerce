import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navabara = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })} className='px-3 py-2 rounded-xl bg-slate-500 cursor-pointer text-slate-100'>Logout</button>
      ) : (
        <button onClick={loginWithRedirect} className='px-3 py-2 rounded-xl bg-slate-500 cursor-pointer text-slate-100'>Login</button>
      )}
    </div>
  );
};

export default Navabara;
