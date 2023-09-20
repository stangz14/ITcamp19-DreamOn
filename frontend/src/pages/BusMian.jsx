import React from "react";
// import login  from '../connectors/funcCreate'
import getAllDream from "../connectors/funcGetAllDream";
import { Link } from "react-router-dom";

function BusMian() {
  const [item, setItems] = React.useState([{}]);
  const [dream , setDream] = React.useState(null)

  const randomFive = (max) => {
    return Math.floor(Math.random() * max);
  };

  React.useEffect(() => {
    const getDream = localStorage.getItem("items");
    setDream(JSON.parse(getDream));
    getAllDream().then((data) => {
      setItems(data);
    });
  }, []);

  // console.log( login("test"))
  // แก้ให้หน่อย
  return (
    <div
      className="container-fluid bg-red-500"
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1114157194137583681/1114419733853380638/b8a9583eef43d044.gif")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col h-screen justify-between">
          <header className="h-10 ml-auto p-5">
            <Link to={"/history/" + dream?.id}
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 mr-2 -ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Dream History
            </Link>
          </header>
          <main className="mb-auto mt-12 h-10 p-5">
            <div className="">
              {/* {item.map((result, index) => (
                <></>
              ))} */}
              <div className="overflow-x-scroll h-fit">
                <div className="flex gap-6">
                  {item.map((result, index) => 
                    <div className="relative flex justify-center items-center h-auto">
                      <div href="#" class="block max-w-md px-5 z-10 absolute">
                        <h3 class="mb-2 mt-3 text-center tracking-tight text-gray-900 dark:text-white">
                          ความฝันของคุณ <br/> <span class="font-bold">{result.name}</span>
                        </h3>
                        <hr/>
                        <p class="font-normal text-center text-gray-700 dark:text-gray-400">
                          <span class="font-bold">{result.dream}</span>

                        </p>
                      </div>
                      <div className="w-72 h-auto">
                      <img src="https://www.pngkey.com/png/full/1-18114_vector-clouds-png-cloud-png-clip-art.png" className="w-full h-full"/></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <a href="/review">
            <img className="mt-64" src="https://media.discordapp.net/attachments/1114157194137583681/1114463619128758292/IMG_1520.png?width=630&height=630"/>
            </a>
          </main>
          {/* <footer className="h-10 w-full p-10">
          </footer> */}
        </div>
      </div>
    </div>
  );
}

export default BusMian;
