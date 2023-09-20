import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import pb from "../connectors/pb";
import { getsingleDream, getAllDream } from "../connectors/funcGetDream";
import RemoveDream from "../connectors/functRemoveDream";

function HistoryForm() {
  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentDream, setCurrentDream] = useState(null);
  const [dream, setDream] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getsingleDream(id).then((data) => {
      setItem(data);
      console.log(data);
    });
  }, []);

  function openDialog(dream) {
    setOpen(true);
    setCurrentDream(dream);
  }

  function handleDelete(id){
    RemoveDream(id)
    window.location.reload()
  }

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex items-center flex-col pt-40"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/1114157194137583681/1114419733853380638/b8a9583eef43d044.gif")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100% !important",
        }}
      >
        <h1 className="text-white text-3xl font-medium">ความฝันที่เคยผ่านมา</h1>
        <div className=" flex w-full justify-center h-3/5  overflow-y-scroll">
          <ul className="flex flex-col p-4 rounded-md w-full max-w-xl  ">
            {item?.map((result, index) => (
              <li
                className="border-gray-400 flex flex-row mb-2"
                onClick={() => {
                  openDialog(result);
                }}
                key={index}
              >
                <button className="w-full block">
                  <div className="select-none cursor-pointer bg-gray-200 rounded-md flex justify-between items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="">
                      <div className="font-medium">{result.dream}</div>
                    </div>
                    {/* <div className="text-gray-600 text-xs">6:00 AM</div> */}
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {currentDream && (
            <dialog
              open={open}
              className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-0 bg-slate-50 border flex flex-col p-4 w-full max-w-md"
            >
              <div className="p-1 px-10 text-center">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-lg font-medium">ความฝัน</p> {currentDream.dream}
                  </div>
                  <div>
                    <p className="text-lg font-medium">รายละเอียด</p>
                    {currentDream.description}
                  </div>
                </div>
              </div>
              {/* <hr/> */}
              <div class="flex mt-5">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-500 mx-auto text-white px-4 py-1 rounded-md"
                >
                  ออก
                </button>
                <button
                  onClick={() => handleDelete(currentDream.id)}
                  className="bg-red-500 mx-auto text-white px-4 py-1 rounded-md"
                >
                  ลบความฝัน
                </button>
              </div>
            </dialog>
          )}
        </div>
      </div>
    </>
  );
}

export default HistoryForm;
