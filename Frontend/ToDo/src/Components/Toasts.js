import toast from "react-hot-toast";


export const successToast = (message) =>  {
  toast.success(message, {
    duration: 4000,
    position: 'top-center',
    style: {
      background: '#333',
      color: '#fff',
    },
  });
}

export const errorToast = (message) => {
  toast.error(message, {
    duration: 4000,
    position: 'top-center',
    style: {
      background: '#ff4d4d',
      color: '#fff',
    },
  });
}