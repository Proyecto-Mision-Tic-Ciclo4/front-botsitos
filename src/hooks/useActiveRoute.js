import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const useActiveRoute = (ruta) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname.includes(ruta)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, ruta]);

  return isActive;
};

<<<<<<< HEAD
export default useActiveRoute;
=======
export default useActiveRoute;
>>>>>>> b79c91f64cb1afbc34ac041c5af078cd18f0342e
