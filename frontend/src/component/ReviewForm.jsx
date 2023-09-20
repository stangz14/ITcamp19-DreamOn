import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

import Giveup from "./Giveup";
import Goback from "./Goback";


function ReviewForm() {
  const [open, setOpen] = useState(false);
  const [giveup, setGiveup] = useState(false);
  const [dream, setDream] = useState(null);

 useEffect(()=>{
  const getDream = localStorage.getItem('items');
  setDream(JSON.parse(getDream));
  console.log("dream: " + JSON.parse(getDream));
  },[])

  return (
    <div className=" flex justify-center items-center w-screen h-screen flex-col">
      <h1 className="text-4xl mb-2 text-white drop-shadow-2xl">สิ้นสุดทางฝัน</h1>
      <div className="w-3/5 h-3/5 bg-white rounded-md p-4 flex flex-col justify-between shadow-md mt-5">
        {!open ? (
          <>
            <h1 className="text-md p-5">
              <p className="text-2xl"><span className="font-bold">ชื่อความฝัน</span>: <span>{dream?.name}</span></p>
              <p className="text-2xl mt-2"><span className="font-bold">รายละเอียด</span>: <span>{dream?.description}</span></p>
              
            </h1>
            <div className="flex justify-around items-center">
              <button
                className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => {
                  setOpen(true);
                  setGiveup(true);
                }}
              >
                ยอมแพ้
              </button>
              <button
                className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => {
                  setOpen(true);
                  setGiveup(false);
                }}
              >
                สำเร็จ
              </button>
            </div>
          </>
        ) : (
          giveup ? <Giveup /> :< Goback/>
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
