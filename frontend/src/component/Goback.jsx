import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";


function Goback() {

    const navigate = useNavigate();

    const [data, setData] = useState();
    const [dream, setDream] = useState(null);

    const handleClick = async (e) => {
        const setNewOldDream = {
          dream: dream.dream,
          des: dream.description,
          exp: data,
        };
    
        // const patchBody = {olddream: setNewOldDream}
    
        // fetch(`/api/collections/Dream/records/${dream.id}`, {
        //   method: "PATCH",
        //   body: JSON.stringify(patchBody)
        // })
    
        const record = await pb.collection("OldDream").create(setNewOldDream);
        const NewTodo = {
          "olddream+": record.id,
        };
    
        const rec = await pb.collection("Dream").update(dream.id, NewTodo);
      };
    
  return (
    <>
      <div className="p-4">
        <h1 className="text-md mb-2">ยินดีด้วย คุณได้สำเร็จความฝันครั้งนี้แล้ว </h1>
        <textarea
          className="border-2 w-full p-2"
          type="text"
          placeholder="อยากจะเล่าประสบการณ์อะไรไหม"
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={(e) => {
            navigate("/");
            // localStorage.removeItem("items");
            handleClick()
          }}
        >
          เสร็จแล้ว
        </button>
      </div>
    </>
  );
}

export default Goback;
