
import React, { useEffect } from 'react';

const UserWay = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '<script src="https://cdn.userway.org/widget.js" data-account="8EpBKF0nOA"></script>';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default UserWay;
