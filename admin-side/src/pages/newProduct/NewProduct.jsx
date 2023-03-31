import "./newProduct.css";
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
let ItinenaryDay = [];
let Pricing = [];
let Categories = [];
let Transport = [];
let Accomodation = [];
let TourFeature = [];
let Exclusions = [];
let Inclusions = [];
let AddedValue = [];
let NightStops = [];
//extraRoomPrice
//childrenPrice
export default function NewProduct() {
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

  const [Itinenary, setItinenary] = useState("");
  const [addedItinenary, setAddedItinenary] = useState([]);
  const [day, setDay] = useState("");

  const [startDatePricing, setStartDatePricing] = useState("");
  const [lastDatePricing, setLastDatePricing] = useState("");
  const [pricingPrice1, setPricingPrice1] = useState(0);
  const [pricingPrice2, setPricingPrice2] = useState(0);
  const [pricingPrice3, setPricingPrice3] = useState(0);
  const [pricingPrice4, setPricingPrice4] = useState(0);
  const [pricingPrice5, setPricingPrice5] = useState(0);
  const [pricingPrice6, setPricingPrice6] = useState(0);

  const [room1, setRoom1] = useState(0);
  const [room2, setRoom2] = useState(0);
  const [room3, setRoom3] = useState(0);
  const [room4, setRoom4] = useState(0);
  const [room5, setRoom5] = useState(0);
  const [room6, setRoom6] = useState(0);
  const [nightstop, setNightStop] = useState("");

  const [accomodation, setAccomodation] = useState("");
  const [destination, setDestination] = useState("");
  const [similarAccomodation, setSimilarAccomodation] = useState("");

  const [gallery, setGallery] = useState([]);

  const [percentage, setpercentage] = useState(0);
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const [percentage3, setpercentage3] = useState(0);
  const [percentage4, setpercentage4] = useState(0);
  const [numberOfDays, setNumberofDays] = useState(0);
  const [numberOfPricing, setNumberOfPricing] = useState(0);
  const [numberOfAccomodation, setNumberOfAccomodation] = useState(0);
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

  const handleCat = (cat) => {
    Categories.push(cat);
  };

  const handleAddItenenary = (e) => {
    e.preventDefault();

    if (day && Itinenary) {
      const itinenaryItem = {
        day,
        Itinenary,
      };

     

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

  const handlePricing = (e) => {
    e.preventDefault();

    if (startDatePricing && lastDatePricing) {
      const pricingItem = {
        startdate: startDatePricing,
        lastdate: lastDatePricing,
        price1: {
          numberOfPeople: 1,
          price: pricingPrice1,
          room: room1,
        },
        price2: {
          numberOfPeople: 2,
          price: pricingPrice2,
          room: room2,
        },
        price3: {
          numberOfPeople: 3,
          price: pricingPrice3,
          room: room3,
        },
        price4: {
          numberOfPeople: 4,
          price: pricingPrice4,
          room: room4,
        },
        price5: {
          numberOfPeople: 5,
          price: pricingPrice5,
          room: room5,
        },
        price6: {
          numberOfPeople: 6,
          price: pricingPrice6,
          room: room6,
        },
      };
      
      Pricing.push(pricingItem)
      setNumberOfPricing(Pricing.length);
      setStartDatePricing("");
      setLastDatePricing("");
      setPricingPrice1(0);
      setPricingPrice2(0);
      setPricingPrice3(0);
      setPricingPrice4(0);
      setPricingPrice5(0);
      setPricingPrice6(0);
      setRoom1(0)
      setRoom2(0)
      setRoom3(0)
      setRoom4(0)
      setRoom5(0)
      setRoom6(0)

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
    setAccomodation(e.target.value);
  };

  const handleSimilarAccomodation = (e) => {
    setSimilarAccomodation(e.target.value);
  };
  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleAddAccomodation = (e) => {
    e.preventDefault();
    const accomodationItem = {
      accomodation,
      similarAccomodation,
      destination,
    };

    Accomodation.push(accomodationItem);
    setNumberOfAccomodation(accomodation.length);
    console.log(Accomodation);
    toast.success(`You have added Accomodation ${Accomodation.length}`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleTransport = (transport) => {
    Transport.push(transport);
  };

  const handleNightStops = (e) => {
    e.preventDefault()
    if (nightstop) {
      NightStops.push(nightstop);
      toast.success(`You have added night ${NightStops.length}`, {
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

  const handleExclusion = (exclusion) => {
    Exclusions.push(exclusion);
  };

  const handleInclusion = (inclusion) => {
    Inclusions.push(inclusion);
  };

  const handleAddValue = (addvalue) => {
    AddedValue.push(addvalue);
  };

  const handleTourFeature = (feature, desc) => {
    const featureItem = {
      feature,
      desc,
    };

    TourFeature.push(featureItem);
    console.log(TourFeature);
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

  const handleClick = (e) => {
    const Package = {
      ...inputs,
      video: video,
      img: image,
      img1: image1,
      img2: image2,
      img3: image3,
      img4: image4,
      categories: Categories,
      itinenary: ItinenaryDay,
      pricing: Pricing,
      accomodation: Accomodation,
      gallery: gallery,
      transport:Transport,
      tourfeature:TourFeature,
      exclusions:Exclusions,
      inclusions:Inclusions,
      addedvalue:AddedValue,
      nightstops:NightStops

    };


    e.preventDefault();

    addProduct(Package, dispatch);

    toast.success(`Package has been successfully uploaded`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.reload();
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Package</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image*</label>
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
          <label> Standard Price* </label>
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

        <div className="transport">
          <label>Transport* </label>

          <div className="transport-item">
            <input
              name="tourguide"
              type="checkbox"
              onClick={() => handleTransport("4x4 Land Cruiser")}
            />
            <span>4x4 Land Cruiser</span>
          </div>

          <div className="transport-item">
            <input
              name="tourguide"
              type="checkbox"
              placeholder="10"
              onClick={() => handleTransport("4x4 Mini Bus")}
            />
            <span>4x4 Mini Bus</span>
          </div>

          <div className="transport-item">
            <input
              name="tourguide"
              type="checkbox"
              placeholder="10"
              onClick={() => handleTransport("Train")}
            />
            <span>Train</span>
          </div>
          <div className="transport-item">
            <input
              name="tourguide"
              type="checkbox"
              placeholder="10"
              onClick={() => handleTransport("Flight")}
            />
            <span>Flight</span>
          </div>
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
          <label>Category* </label>
          <div className="addcategory">
            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("kenya")} />
              <span>Kenya</span>
            </div>

            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("uganda")} />
              <span>Uganda</span>
            </div>
            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("tanzania")} />
              <span>Tanzania</span>
            </div>

            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("rwanda")} />
              <span>Rwanda</span>
            </div>

            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("south-africa")}
              />
              <span>South Africa</span>
            </div>

            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("botswana")} />
              <span>Botswana</span>
            </div>

            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("victoria-falls")}
              />
              <span>Victoria falls</span>
            </div>
            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("namibia")} />
              <span>Namibia</span>
            </div>
            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("popular")} />
              <span>Popular</span>
            </div>

            <div className="category-checkbox">
              <input type="checkbox" onClick={() => handleCat("best-seller")} />
              <span>Best sellers</span>
            </div>

            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("short-safaris")}
              />
              <span>Short safaris</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("cultural-holidays")}
              />
              <span>Cultural safaris</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("luxury-safaris")}
              />
              <span>Luxury Safaris</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("gorilla-trekking")}
              />
              <span>Gorilla Trekking</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("group-holidays")}
              />
              <span>Group Holidays</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("family-holidays")}
              />
              <span>Family Safaris</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("honey-moons")}
              />
              <span>Honey Moon</span>
            </div>
            <div className="category-checkbox">
              <input
                type="checkbox"
                onClick={() => handleCat("new")}
              />
              <span>New</span>
            </div>
          </div>
        </div>

        <div className="addProductItem">
          <label>Itinerary*</label>

          <span className="itinenary">Day {numberOfDays} Added</span>

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

          <input
            type="text"
            placeholder="Fly Nairobi - Masai Mara Game Reserve"
            onChange={handleDay}
            value={day}
          />
          <textarea
            cols="40"
            rows="5"
            name="Itinerary"
            className="itenerary"
            placeholder="Jambo Kenya the first day in Nairobi kenya."
            onChange={handleItenenary}
            value={Itinenary}
          ></textarea>

          <button onClick={handleAddItenenary}>add itinenary</button>
        </div>

        <hr />

        <div className="addProductItem">
          <label> Extra Room </label>
          <input
            name="extraRoomPrice"
            type="number"
            placeholder="$88"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label> Children Price* </label>
          <input
            name="childrenPrice"
            type="number"
            placeholder="$88"
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="nightstops">
          <input type="text" onChange={(e) => setNightStop(e.target.value)} placeholder="Nakuru"/>
          <button onClick={handleNightStops}>Add Night Stop</button>
        </div>
        <hr />
        <div className="addProductItem">
          <label>Pricing* </label>
          <span className="itinenary">Pricing {numberOfPricing} Added</span>

          <div className="pricing-card">
            <div className="pricing-item">
              <span>Enter start date for pricing</span>

              <input
                name="startdatepricing"
                type="date"
                placeholder="Fri 21 APR 2023"
                value={startDatePricing}
                onChange={(e) => setStartDatePricing(e.target.value)}
              />
            </div>

            <div className="pricing-item">
              <span>Enter last date for pricing</span>

              <input
                name="lastdatepricing"
                type="date"
                placeholder="Wed 1 JUN 2023"
                value={lastDatePricing}
                onChange={(e) => setLastDatePricing(e.target.value)}
              />
            </div>

            <div className="pricing-item">
              <span>1. Price(solo)</span>

              <input
                name="pricingprice"
                type="number"
                placeholder="300"
                value={pricingPrice1}
                onChange={(e) => setPricingPrice1(e.target.value)}
              />
              <span htmlFor="">Number of rooms</span>

              <input
                type="number"
                value={room1}
                onChange={(e) => setRoom1(e.target.value)}
              />
            </div>

            <hr />

            <div className="pricing-item">
              <span>2. Price(2 people)</span>

              <input
                name="pricingprice"
                type="number"
                placeholder="500"
                value={pricingPrice2}
                onChange={(e) => setPricingPrice2(e.target.value)}
              />
              <span htmlFor="">Number of rooms</span>

              <input
                type="number"
                value={room2}
                onChange={(e) => setRoom2(e.target.value)}
              />
            </div>

            <hr />

            <div className="pricing-item">
              <span>3. Price(3 people)</span>

              <input
                name="pricingprice"
                type="number"
                placeholder="670"
                value={pricingPrice3}
                onChange={(e) => setPricingPrice3(e.target.value)}
              />
              <span htmlFor="">Number of rooms</span>

              <input
                type="number"
                value={room3}
                onChange={(e) => setRoom3(e.target.value)}
                placeholder="0"
              />
            </div>
            <hr />

            <div className="pricing-item">
              <span>4. Price(4 people)</span>

              <input
                name="pricingprice"
                type="number"
                placeholder="700"
                value={pricingPrice4}
                onChange={(e) => setPricingPrice4(e.target.value)}
              />
              <span htmlFor="">Number of rooms</span>

              <input
                type="number"
                value={room4}
                onChange={(e) => setRoom4(e.target.value)}
              />
            </div>

            <div className="pricing-item">
              <span>5. Price(5 people)</span>

              <input
                name="pricingprice"
                type="number"
                placeholder="880"
                value={pricingPrice5}
                onChange={(e) => setPricingPrice5(e.target.value)}
              />
              <span htmlFor="">Number of rooms</span>

              <input
                type="number"
                value={room5}
                onChange={(e) => setRoom5(e.target.value)}
              />
            </div>

            <div className="pricing-item">
              <span>6. Price(6 people)</span>

              <input
                name="pricingprice"
                type="number"
                placeholder="1200"
                value={pricingPrice6}
                onChange={(e) => setPricingPrice6(e.target.value)}
              />
              <span htmlFor="">Number of rooms</span>

              <input
                type="number"
                value={room6}
                onChange={(e) => setRoom6(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handlePricing}>add pricing</button>
          <hr />
        </div>
        <div className="addProductItem">
          <label>Add Accomodation*</label>

          <div className="accomodation">
            <label htmlFor="">Destination</label>
            <input
              name="pricing"
              type="text"
              placeholder="Lake Nakuru National Park"
              onChange={handleDestination}
            />
          </div>
          <div className="accomodation">
            <label htmlFor="">Accomodation</label>
            <input
              name="pricing"
              type="text"
              placeholder="Lake Nakuru Sopa Lodge"
              onChange={handleAccomodation}
            />
          </div>
          <div className="accomodation">
            <label htmlFor="">Similar Accomodation</label>
            <input
              name="pricing"
              type="text"
              placeholder="Sarova Lion hill Game Lodge"
              onChange={handleSimilarAccomodation}
            />
          </div>

          <button onClick={handleAddAccomodation}>Add accomodation</button>
        </div>
        <hr />

        <div className="addInclusions">
          <h3>Inclusions*</h3>

          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleInclusion(
                  "Arrival and departure airport transfers as per itinerary."
                )
              }
            />
            <span>
              Arrival and departure airport transfers as per itinerary.
            </span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleInclusion("Bed and Breakfast accommodation in Nairobi.")
              }
            />
            <span>Bed and Breakfast accommodation in Nairobi.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleInclusion(
                  "Full Board accommodation in the Lodges/Camps whilst on safari asindicated on the itinerary."
                )
              }
            />
            <span>
              Full Board accommodation in the Lodges/Camps whilst on safari as
              indicated on the itinerary.
            </span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleInclusion(
                  "Transportation on 6-seater Safari minivans or 4x4 Land cruiser,driven by English-speaking driver/guide (exclusive use of vehicle)."
                )
              }
            />
            <span>
              Transportation on 6-seater Safari minivans or 4x4 Land cruiser,
              driven by English-speaking driver/guide (exclusive use of
              vehicle).
            </span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() => handleInclusion("All Park/Reserve entrance fees.")}
            />
            <span>All Park/Reserve entrance fees.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleInclusion(
                  "Services of our English-speaking guide or clients Relations officers for briefings in Nairobi."
                )
              }
            />
            <span>
              Services of our English-speaking guide or clients Relations
              officers for briefings in Nairobi.
            </span>
          </div>
          <h3>Added Value*</h3>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleAddValue("Complimentary Afrikan Accent pen.")
              }
            />
            <span>Complimentary Afrikan Accent pen.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleAddValue(
                  "Complimentary Afrikan Accent 1 litre mineral water per person per day."
                )
              }
            />
            <span>
              Complimentary Afrikan Accent 1 litre mineral water per person per
              day.
            </span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleAddValue("Complimentary Afrikan Accent Safari bag.")
              }
            />
            <span>Complimentary Afrikan Accent Safari bag.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleAddValue("Complimentary Afrikan Accent Safari Hat.")
              }
            />
            <span>Complimentary Afrikan Accent Safari Hat.</span>
          </div>
          <h3>Price Exclusions:*</h3>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() => handleExclusion("Any optional activity.")}
            />
            <span>Any optional activity.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleExclusion(
                  "Personal Expenses such as Tips,Laundry and Telephone."
                )
              }
            />
            <span>Personal Expenses such as Tips,Laundry and Telephone.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleExclusion("Drinks (sodas, beer, wine, spirits...).")
              }
            />
            <span>Drinks (sodas, beer, wine, spirits...).</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleExclusion("Visa Fees (currently US$ 50 per person).")
              }
            />
            <span>Visa Fees (currently US$ 50 per person).</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() => handleExclusion("Medical and travel insurance.")}
            />
            <span>Medical and travel insurance.</span>
          </div>
          <div className="inclusion-item">
            <input
              type="checkbox"
              onClick={() =>
                handleExclusion("Any other concept not indicated as included.")
              }
            />
            <span>Any other concept not indicated as included.</span>
          </div>
        </div>
        <hr />

        <div className="feature">
          <h3>Tour Feature*</h3>
          <div className="feature-body">
            <div className="tour-feature">
              <input
                type="checkbox"
                onClick={() =>
                  handleTourFeature(
                    "Mid-range tour",
                    "This mid-range tour uses lodges and tented camps."
                  )
                }
              />
              <div>
                <h5>Mid-range tour</h5>
                <span>This mid-range tour uses lodges and tented camps.</span>
              </div>
            </div>
            <div className="tour-feature">
              <input
                type="checkbox"
                onClick={() =>
                  handleTourFeature(
                    "Can be customized",
                    "You can request minor changes to the accommodations and destinations of this tour."
                  )
                }
              />
              <div>
                <h5>Can be customized</h5>
                <span>
                  You can request minor changes to the accommodations and
                  destinations of this tour.
                </span>
              </div>
            </div>

            <div className="tour-feature">
              <input
                type="checkbox"
                onClick={() =>
                  handleTourFeature(
                    "Private tour",
                    "This tour will be organized exclusively for you and won't be shared with others."
                  )
                }
              />
              <div>
                <h5>Private tour</h5>
                <span>
                  This tour will be organized exclusively for you and won't be
                  shared with others.
                </span>
              </div>
            </div>

            <div className="tour-feature">
              <input
                type="checkbox"
                onClick={() =>
                  handleTourFeature(
                    "Can start any day",
                    "If availability permits, this tour can start on any day."
                  )
                }
              />
              <div>
                <h5>Can start any day</h5>
                <span>
                  If availability permits, this tour can start on any day.
                </span>
              </div>
            </div>
            <div className="tour-feature">
              <input
                type="checkbox"
                onClick={() =>
                  handleTourFeature(
                    "Suitable for solo travelers",
                    "Solo travelers can book this private tour.."
                  )
                }
              />
              <div>
                <h5>Suitable for solo travelers</h5>
                <span>Solo travelers can book this private tour..</span>
              </div>
            </div>
            <div className="tour-feature">
              <input
                type="checkbox"
                onClick={() =>
                  handleTourFeature(
                    "Suitable for all ages",
                    "This tour is suitable for children of all ages."
                  )
                }
              />
              <div>
                <h5>Suitable for all ages</h5>
                <span>This tour is suitable for children of all ages.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="addProductItem">
          <label>Gallery Images*</label>

          <label>Image 1</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile2(e.target.files[0])}
          />

          <button onClick={handleUpload1}>upload</button>
          <h4 style={{ color: "green" }}>{uploading1}</h4>

          <label>Image 2</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile3(e.target.files[0])}
          />

          <button onClick={handleUpload2}>upload</button>
          <h4 style={{ color: "green" }}>{uploading2}</h4>

          <label>Image 3</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile4(e.target.files[0])}
          />

          <button onClick={handleUpload3}>upload</button>
          <h4 style={{ color: "green" }}>{uploading3}</h4>
          <label>Image 4</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile5(e.target.files[0])}
          />

          <button onClick={handleUpload4}>upload</button>
          <h4 style={{ color: "green" }}>{uploading4}</h4>
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
}
