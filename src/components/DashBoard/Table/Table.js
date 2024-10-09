// import React, { useState } from 'react';
// import './Table.css';
// import MaterialTable from 'material-table';

// const empList = [
//   { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, city: "Bangalore" },
//   { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
//   { id: 3, name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
//   { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
// ]

// function Table() {

//   const [data, setData] = useState(empList)
//   const columns = [
//     { title: "ID", field: "id", editable: false },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "Phone Number", field: 'phone', },
//     { title: "City", field: "city", }
//   ]

//   return (
//     <div className="App">
//       <h1 align="center">React-App</h1>
//       <h4 align='center'>Material Table with CRUD operation</h4>
//       <MaterialTable
//         title="Employee Data"
//         data={data}
//         columns={columns}
//         editable={{
//           onRowAdd: (newRow) => new Promise((resolve, reject) => {
//             const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve()
//             }, 2000)
//           }),
//           onRowDelete: selectedRow => new Promise((resolve, reject) => {
//             const index = selectedRow.tableData.id;
//             const updatedRows = [...data]
//             updatedRows.splice(index, 1)
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve()
//             }, 2000)
//           }),
//           onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
//             const index=oldRow.tableData.id;
//             const updatedRows=[...data]
//             updatedRows[index]=updatedRow
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve()
//             }, 2000)
//           })

//         }}
//         options={{
//           actionsColumnIndex: -1, addRowPosition: "first"
//         }}
//       />
//     </div>
//   );
// }

// export default Table;

// import React, { useState } from "react";
// import "./Table.css";
// // import MaterialTable from 'material-table';
// import MaterialTable from "@material-table/core";

// export const Table = () => {
//   const data = [
//     { id: 1, title: "abcd" },
//     { id: 2, title: "efg" },
//     { id: 3, title: "abhdd" },
//     { id: 4, title: "aioyh" },
//     { id: 5, title: "asdgj" },
//     { id: 6, title: "vbnm" },
//   ];

//   const columns = [
//     {
//       title: "ID",
//       field: "Id",
//     },
//     {
//       title: "Title",
//       field: "title",
//     },
//   ];
//   return (
//     <div>
//       <MaterialTable
//         title="CRUD operations"
//         data={data}
//         columns={columns}
//         // options={{
//         //     search:false,
//         //     paging:false

//         // }}
//       />
//     </div>
//   );
// };

// export default Table;

// import React from "react";
// import "./Table.css"; // Import the CSS file
// import MaterialTable from "@material-table/core";

// export const Table = () => {
//   const data = [
//     { id: 1, title: "abcd" },
//     { id: 2, title: "efg" },
//     { id: 3, title: "abhdd" },
//     { id: 4, title: "aioyh" },
//     { id: 5, title: "asdgj" },
//     { id: 6, title: "vbnm" },
//   ];

//   const columns = [
//     {
//       title: "ID",
//       field: "id",
//     },
//     {
//       title: "Title",
//       field: "title",
//     },
//   ];

//   return (
//     <div className="table-container"> {/* Use the CSS class for the container */}
//       <MaterialTable
//         title="CRUD Operations"
//         data={data}
//         columns={columns}
//         options={{
//           //search: false,
//           //paging: false,
//           headerStyle: {
//             textAlign: "center", // Still use inline style for header alignment
//             fontWeight: "bold",
//           },
//         }}
//         className="table-style" // Use the CSS class for table width
//       />
//     </div>
//   );
// };

// export default Table;

// import React from "react";
// import "./Table.css"; // Import the CSS file
// import MaterialTable from "@material-table/core";

// export const Table = () => {
//   const data = [
//     { id: 1, title: "abcd" },
//     { id: 2, title: "efg" },
//     { id: 3, title: "abhdd" },
//     { id: 4, title: "aioyh" },
//     { id: 5, title: "asdgj" },
//     { id: 6, title: "vbnm" },
//   ];

//   const columns = [
//     {
//       title: "ID",
//       field: "id",
//     },
//     {
//       title: "BLOG_TITLE",
//       field: "title",
//     },
//     {
//         title: "OPERATIONS",
//         field: "ii",
//       },
//   ];

//   return (
//     <div className="table-container"> {/* Use the CSS class for the container */}
//       <h2 className="table-title">CRUD Operations</h2> {/* Add the title here */}
//       <MaterialTable
//         title={false}
//         data={data}
//         columns={columns}
//         options={{
//           headerStyle: {
//             textAlign: "center", // Header alignment
//             fontWeight: "bold",
//           },
//         }}
//         className="table-style" // Use the CSS class for table width
//       />
//     </div>
//   );
// };

// export default Table;

import React from "react";
import "./Table.css"; // Import the CSS file
import MaterialTable from "@material-table/core";

export const Table = () => {
  const data = [
    { id: 1, title: "abcd" },
    { id: 2, title: "efg" },
    { id: 3, title: "abhdd" },
    { id: 4, title: "aioyh" },
    { id: 5, title: "asdgj" },
    { id: 6, title: "vbnm" },
  ];

  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "BLOG_TITLE",
      field: "title",
    },
    {
      title: "OPERATIONS",
      field: "operations",
      render: (rowData) => (
        <div>
          <button
            onClick={() => handleEdit(rowData)}
            className="button edit-button"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(rowData.id)}
            className="button delete-button"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (rowData) => {
    alert(`Edit clicked for: ${rowData.title}`);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    alert(`Delete clicked for ID: ${id}`);
    // Implement your delete logic here
  };

  return (
    <div className="table-container">
      {" "}
      {/* Use the CSS class for the container */}
      <h2 className="table-title">CRUD Operations</h2>{" "}
      {/* Add the title here */}
      <MaterialTable
        title={false}
        data={data}
        columns={columns}
        options={{
          headerStyle: {
            textAlign: "center", // Header alignment
            fontWeight: "bold",
          },
        }}
        className="table-style" // Use the CSS class for table width
      />
    </div>
  );
};

export default Table;
