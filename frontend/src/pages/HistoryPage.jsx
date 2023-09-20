import React from 'react'
import HistoryForm from '../component/HistoryForm'
import { Link } from "react-router-dom";

function HistoryPage() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1114157194137583681/1114419733853380638/b8a9583eef43d044.gif")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100% !important",
      }}
    > <header className="h-10 ml-auto p-5">
    <Link to="/home"
      className="absolute text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
    >
      Back to Home
    </Link>
  </header>
      <HistoryForm />
    </div>
  )
}

export default HistoryPage;