// import Create_Blog from "./Create_Blog";

// const Dashboard =() => {
//     return(
//         <div>
//             <p>Welcome to DashBoard !</p>

//             <Create_Blog/>
//         </div>
//     )
// }

// export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css"; // Import a CSS file for styling
// Make sure to import the Table component at the top of the file:
import Table from "../components/DashBoard/Table/Table";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div style={{textAlign:"center"}}>
        <p>Welcome to DashBoard!</p>
        <Table />
      </div>

      {/* Button at the bottom of the page */}
      <div className="button-container">
        <button
          className="create-post-button"
          onClick={() => navigate("/create_Blog")}
        >
          + Create Post
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
