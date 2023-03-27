import "./newActivities.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useDispatch } from "react-redux";
import app from "../../firebasestore";
import { addProduct } from "../../redux/apiCalls";
import axios from "axios";
import { publicRequest } from "../../requestMethods";
let ItinenaryDay = [];
let Pricing = [];
let Inclusions = [];
const NewActivities = () => {
  const [inputs, setInputs] = useState({});

  const [file, setFile] = useState(null);

  const [file2, setFile2] = useState(null);

  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);

  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const [cat, setCat] = useState([]);

  const [Itinenary, setItinenary] = useState("");
  const [addedItinenary, setAddedItinenary] = useState([]);
  const [day, setDay] = useState("");

  const [startDatePricing, setStartDatePricing] = useState("");
  const [lastDatePricing, setLastDatePricing] = useState("");
  const [pricingPrice, setPricingPrice] = useState(0);

  const [accomodation, setAccomodation] = useState([]);

  const [gallery, setGallery] = useState([]);

  const [percentage, setpercentage] = useState(0);
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const [percentage3, setpercentage3] = useState(0);
  const [percentage4, setpercentage4] = useState(0);
  const [numberOfDays, setNumberofDays] = useState(0);
  const [numberOfPricing, setNumberOfPricing] = useState(0);
  const [inclusions, setInclusions] = useState("");

  const dispatch = useDispatch();

  const [uploading, setUploading] = useState("uploading is 0%");
  const [uploading1, setUploading1] = useState("uploading is 0%");
  const [uploading2, setUploading2] = useState("uploading is 0%");
  const [uploading3, setUploading3] = useState("uploading is 0%");
  const [uploading4, setUploading4] = useState("uploading is 0%");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handleItenenary = (e) => {
    setItinenary(e.target.value);
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleAddItenenary = (e) => {
    e.preventDefault();

    if (day && Itinenary) {
      const itinenaryItem = {
        day,
        Itinenary,
      };

      console.log(itinenaryItem);

      ItinenaryDay.push(itinenaryItem);

      setNumberofDays(ItinenaryDay.length);

      toast.success(`You have added Itinenary ${ItinenaryDay.length}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setDay("");
      setItinenary("");
    } else {
      toast.warning(`Make sure you have fill in Itinenary`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleInclusions = (e) => {
    e.preventDefault();

    if (inclusions) {
      Inclusions.push(inclusions);

      toast.success(`Inclusions ${Inclusions.length} have been added.`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handlePricing = (e) => {
    e.preventDefault();

    if (startDatePricing && lastDatePricing && pricingPrice) {
      const pricingItem = {
        startdate: startDatePricing,
        lastdate: lastDatePricing,
        price: pricingPrice,
      };

      Pricing.push(pricingItem);

      setNumberOfPricing(Pricing.length);
      setStartDatePricing("");
      setLastDatePricing("");
      setPricingPrice(0);

      toast.success(`You have added pricing ${Pricing.length}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warning(`Make sure you have fill all pricing fields.`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleAccomodation = (e) => {
    setAccomodation(e.target.value.split(","));
  };
  const handleGallery = (e) => {
    setGallery(e.target.value.split(","));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "uploads");

    setUploading("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage(url);

      setUploading("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading("uploading failed");
    }
  };
  const handleUpload1 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file2);
    data.append("upload_preset", "uploads");

    setUploading1("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage1(url);

      setUploading1("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading1("uploading failed");
    }
  };

  const handleUpload2 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file3);
    data.append("upload_preset", "uploads");

    setUploading2("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage2(url);

      setUploading2("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading2("uploading failed");
    }
  };

  const handleUpload3 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file4);
    data.append("upload_preset", "uploads");

    setUploading3("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage3(url);

      setUploading3("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading3("uploading failed");
    }
  };
  const handleUpload4 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file5);
    data.append("upload_preset", "uploads");

    setUploading4("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage4(url);

      setUploading4("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading4("uploading failed");
    }
  };

  const handleUploadVideo = (e) => {
    e.preventDefault();

    const filename = new Date().getTime() + file2.name;

    const storage = getStorage(app);

    const StorageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(StorageRef, file2);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setpercentage(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;

          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideo(downloadURL);
        });
      }
    );
  };

  const handleClick = async (e) => {
    const activity = {
      ...inputs,
      video: video,
      img: image,
      pricing: Pricing,
      inclusions:Inclusions
    };

    console.log(activity);

    await publicRequest.post("/activities/", activity);

    e.preventDefault();
    toast.success(`Package has been successfully uploaded`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Activity</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button onClick={handleUpload}>upload</button>

          <h4 style={{ color: "green" }}>{uploading}</h4>
        </div>

        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile2(e.target.files[0])}
          />
          <button onClick={handleUploadVideo}>upload</button>
          <h4 style={{ color: "teal" }}>{`File upload is ${percentage} %`}</h4>
        </div>
        <div className="addProductItem">
          <label>Title* </label>
          <input
            type="text"
            name="title"
            placeholder="Mountain Hiking"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Description* </label>
          <textarea
            name="desc"
            cols="40"
            rows="5"
            onChange={handleChange}
            placeholder="description"
          ></textarea>
        </div>

        <div className="addProductItem">
          <label>Price* </label>
          <input
            name="originalPrice"
            type="number"
            placeholder="$88"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Duration*</label>
          <input
            name="duration"
            type="text"
            placeholder="4 days"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Tour Type*</label>
          <input
            name="tourtype"
            type="text"
            placeholder="Daily Tour"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Group Size* </label>
          <input
            name="groupsize"
            type="number"
            placeholder="5"
            onChange={handleChange}
          />
        </div>

      
        <div className="addProductItem">
          <label>Overview*</label>
          <textarea
            cols="40"
            rows="5"
            name="overview"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="addProductItem">
          <label>Inclusions*</label>
          <textarea
            cols="40"
            rows="5"
            placeholder="Arrival and departure airport transfers as per itinerary"
            onChange={(e) => setInclusions(e.target.value)}
          ></textarea>

          <button onClick={handleInclusions}>Add Inclusions</button>
        </div>
        <div className="addProductItem">
          <label>Pricing* </label>
          <span className="itinenary">Pricing {numberOfPricing} Added</span>

          <div className="pricing">
            <div>
              <h4>Enter start date for pricing</h4>

              <input
                name="startdatepricing"
                type="date"
                placeholder="Fri 21 APR 2023"
                onChange={(e) => setStartDatePricing(e.target.value)}
              />
            </div>

            <div>
              <h4>Enter last date for pricing</h4>

              <input
                name="lastdatepricing"
                type="date"
                placeholder="Wed 1 JUN 2023"
                onChange={(e) => setLastDatePricing(e.target.value)}
              />
            </div>

            <h4>Price*</h4>

            <input
              name="pricingprice"
              type="number"
              placeholder="$88"
              onChange={(e) => setPricingPrice(e.target.value)}
            />

            <button onClick={handlePricing}>add pricing</button>
          </div>
          <hr />

          <ToastContainer
            position="right-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select name="active" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewActivities;
