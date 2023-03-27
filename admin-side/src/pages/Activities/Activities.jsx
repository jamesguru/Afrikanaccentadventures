import "./activities.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { publicRequest } from "../../requestMethods";

const Activities = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [activityID, setActivityID] = useState(0);


  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await publicRequest.get("/activities/");

        setData(res.data);

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getActivities();
  }, []);

  const handleDelete = async() => {

    await publicRequest.delete(`/activities/${activityID}`)

    setOpen(false);
    window.location.reload();
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const openPop = (id) => {
    console.log(id);
    setOpen(true);
    setActivityID(id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "activity",
      headerName: "activity",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.img}
              alt=""
              height="100px"
              width="100px"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "Active", headerName: "Active", width: 250 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/activity/"+ params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => openPop(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
     <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />

      {open && (
        <div className="pop">
          <div className="pop-over">
            <div className="pop-item">
              <span>Are you sure you want to delete this activity?</span>

              <div className="buttons">
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
