import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SignIn from './login/SignIn';

function PrivateRoute({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage?.getItem("user"));
    setUser(user)

  }, []);

  return  children ;
    
}

export default PrivateRoute;
