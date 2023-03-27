import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";

export default function UserList() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/newsletter/${id}`);
      window.location.reload();
    } catch (error) {}
  };

  const handleUpdate = async (id) => {
    try {
      await publicRequest.put(`/newsletter/${id}`, { status: 2 });

      window.location.reload();
    } catch (error) {}
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/newsletter/");

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },

    { field: "email", headerName: "Email", width: 400 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },

    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <button className="userListEdit" onClick={() => handleDelete(params.row._id)}>Edit</button>

            {params.row.status === 1 ? (
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleUpdate(params.row._id)}
              />
            ) : (
              <span></span>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}