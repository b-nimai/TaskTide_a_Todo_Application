import React from 'react'

const TextareaBox = ({label, placeholder, onChange, row}) => {
  return (
    <div>
        <div className="text-sm font-medium text-left py-2">
          {label}
        </div>
        <textarea 
            rows={row} 
            cols="50" 
            placeholder={placeholder}
            onChange={onChange}
            className="w-full px-2 py-1 border rounded border-slate-200"
        ></textarea>
    </div>
  )
}

export default TextareaBox
