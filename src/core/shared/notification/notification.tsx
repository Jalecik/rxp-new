// components/Notification.js

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return (
    <ToastContainer 
      position="top-right" 
      autoClose={5000} 
      theme="colored"
      hideProgressBar 
      newestOnTop 
      closeOnClick 
      rtl={false} 
      pauseOnFocusLoss 
      draggable 
      pauseOnHover />
  );
};

export const showToast = (message:string, type:string) => {
  if (type === 'error') {
    toast.error(message);
  } else {
    toast.success(message);
  }
};

export default Notification;
