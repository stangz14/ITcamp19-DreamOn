import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import insetUserData from "../connectors/funcCreate";

function Loginform() {
  const [name, setName] = useState("");
  const [dream, setDream] = useState("");
  const [desc, setDesc] = useState("");

  // const handchange = (props, data) => {

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    insetUserData(name, dream, desc).then((resp) => {
      localStorage.setItem("items", JSON.stringify(resp));
      window.location.href = "/home" ;
    });
  };

  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      
      <div className="relative w-full flex justify-center items-center">
        
        <img src="https://media.discordapp.net/attachments/1114157194137583681/1114494846506377226/b6a5c080f7ab2330.png?width=2048&height=2048" alt="" className="absolute w-4/6 "/>
        
        <form className="p-4 rounded-md w-80 h-80 z-10">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ชื่อความฝัน
            </label>
            <input
              type="text"
              id="dream"
              value={dream}
              onChange={(e) => {
                setDream(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              รายละเอียด
            </label>
            <textarea
              type="text"
              id="description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full flex justify-center items-center" to={"/home"}>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="border border-[#eea139] bg-[#eea139] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              ซื้อตั๋ว
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
