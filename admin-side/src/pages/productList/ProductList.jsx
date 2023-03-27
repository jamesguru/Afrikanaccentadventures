import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getProducts, deleteProduct } from "../../redux/apiCalls";
import { publicRequest } from "../../requestMethods";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const [open, setOpen] = useState(false);
  const [packageID, setPackageID] = useState(0);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  console.log(products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = () => {
    console.log(packageID)
    deleteProduct(packageID, dispatch);
  
   setOpen(false)
  };
  const handleCancel = () => {
    setOpen(false)
  };
  const openPop = (id) => {
console.log(id)
    setOpen(true)
    setPackageID(id)
    
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "Package",
      headerName: "Package",
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
            <Link to={"/product/" + params.row._id}>
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
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        className="datagrid-cont"
      />

      {
        open &&
        <div className="pop">
        <div className="pop-over">
          <div className="pop-item">
            <span>Are you sure you want to delete this package?</span>

            <div className="buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}
