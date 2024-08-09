import React, { useState } from 'react'
import { ImEye, ImEyeBlocked } from "react-icons/im";

const PasswordInput = ({label, placeholder, onChange}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <div className="relative w-full">
        <input
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
        <button
          onClick={() => setVisible(!visible)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {visible ? <ImEyeBlocked /> : <ImEye />}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
