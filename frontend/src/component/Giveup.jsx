import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pb from "../connectors/pb";

function Giveup() {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [dream, setDream] = useState(null);

  useEffect(() => {
    const getDream = localStorage.getItem("items");
    setDream(JSON.parse(getDream));
    console.log("dream: " + JSON.parse(getDream));
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

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
        <h1 className="text-md mb-2">Why you just don't give up</h1>
        <textarea
          className="border-2 w-full p-2"
          type="text"
          onChange={(e) => {
            setData(e.target.value);
          }}
          placeholder="Because he did"
        />
      </div>
      <div className="">
        <div className="flex">
          <img
            className="w-3/12 mx-auto"
            src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
          />
        </div>
      </div>
      <div className="flex justify-around items-center">
        <button
          type="submit"
          className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={() => {
            navigate("/");
            handleClick();
            // localStorage.removeItem("items");
          }}
        >
          Give up
        </button>
        <button
          className="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {
            navigate("/home");
          }}
        >
          Go back
        </button>
      </div>
    </>
  );
}

export default Giveup;
