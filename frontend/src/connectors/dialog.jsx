import React from 'react'

const dialog = () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <p>Content...</p>
        <button onClick={(e) => setOpen(true)}>open</button>
        <dialog
          open={open}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-0 bg-slate-50 p-4 rouned border"
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, tenetur?</p>
          <button onClick={(e) => setOpen(false)} className="bg-red-500 text-white px-2 py-1">
            Close
          </button>
        </dialog>
      </div>
    );
  };

export default dialog