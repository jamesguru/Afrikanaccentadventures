import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./packagelist.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { useLocation, Prompt } from "react-router-dom";
const PackageList = () => {
  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState("newest");
  const [query, setQuery] = React.useState("");
  const [Packages, setPackages] = React.useState([]);
  const [filteredPackages, setfilteredPackages] = React.useState([]);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
 
  const [loading, setLoading] = React.useState(false);
  
  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,

      [e.target.name]: value,
    });
  };

  useEffect(() => {
    setLoading(true);

    const getPackages = async () => {
      try {
        if (cat) {
          const res = await publicRequest.get(`/packages?category=${cat}`);

          setPackages(res.data);
        } else if (query) {
          const res = await publicRequest.get(`/packages?search=${query}`);

          setPackages(res.data);
        } else {
          const res = await publicRequest.get(`/packages`);

          setPackages(res.data);
        }
      } catch (error) {
        console.log(error)
      }
    };

    getPackages();

    setLoading(false);
  }, [cat, query]);

  useEffect(() => {
    setLoading(true);

    cat &&
      setfilteredPackages(
        Packages.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

    setLoading(false);
  }, [Packages, filters, query, cat]);

  useEffect(() => {
    setLoading(true);

    query &&
      setfilteredPackages(
        Packages.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

    setLoading(false);
  }, [Packages, filters, query, cat]);

  useEffect(() => {
    setLoading(true);

    if (sort === "newest") {
      setfilteredPackages((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredPackages((prev) =>
        [...prev].sort((a, b) => a.originalPrice - b.originalPrice)
      );

      setfilteredPackages((prev) =>
        [...prev].sort((a, b) => a.discountedPrice - b.discountedPrice)
      );
    } else {
      setfilteredPackages((prev) =>
        [...prev].sort((a, b) => b.originalPrice - a.originalPrice)
      );

      setfilteredPackages((prev) =>
        [...prev].sort((a, b) => b.discountedPrice - a.discountedPrice)
      );
    }

    setLoading(false);
  }, [sort,query]);

  return (
    <div>
      <Navbar />

      <div className="packagelist-background">
        <div className="search-input">
          <input
            type="text"
            className="package-search"
            placeholder="Search package"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="filters-list">
        <div className="filters">
          <span>Filters packages:</span>

          <div className="packages-filter">
            <select name="categories" id="" onChange={handleFilters}>
              <option value="">All</option>
              <option value="popular">Popular</option>
              <option value="new">latest</option>
              <option value="best-seller">Best Seller</option>
              <option value="gorilla-trekking">Gorilla trekking</option>
              <option value="family-holidays">Family Holidays</option>
              <option value="group-holidays">Group Holidays</option>
              <option value="cultural-holidays">Cultural Safaris</option>
              <option value="luxury-safaris">Luxury African Safaris</option>
              <option value="honey-moons">Honey moons</option>
              <option value="tanzania">Tanzania</option>
              <option value="kenya">Kenya</option>
              <option value="uganda">Uganda</option>
              <option value="namibia">Namimbia</option>
              <option value="south-africa">South Africa</option>
              <option value="botswana">Botswana</option>
              <option value="rwanda">Rwanda</option>
              <option value="victoria-falls">Victoria Falls</option>
            </select>
          </div>
        </div>

        <div className="sort">
          <span>Sort packages: </span>
          <select name="" id="" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price(desc)</option>
          </select>
        </div>
      </div>
      <div className="package-body">
        {cat || query
          ? filteredPackages?.map((item, index) => (
              <div className="package-item">
                <div className="package-container">
                  <img
                    src={item.img}
                    alt=""
                  />

                <div className="package-duration">{item.duration}</div>

                  <div className="package-info">
                    <div className="package-info-button">
                      <span>from ${item.originalPrice} Per person.</span>
                      <Link to="/package/details">
                        <button className="package-expore">Explore</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="package-desc">
                  <h2>{item.title}</h2>
                  <span>
                    {item.overview}
                  </span>
                </div>
              </div>
            ))
          : Packages.map((item, index) => (
              <div className="package-item">
                <div className="package-container">
                  <img
                    src={item.img}
                    alt=""
                  />

                    <div className="package-duration">{item.duration}</div>

                  <div className="package-info">
                    <div className="package-info-button">
                      <span>from ${item.originalPrice} Per person.</span>
                      <Link to="/package/details">
                        <button className="package-expore">Explore</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="package-desc">
                  <h2>{item.title}</h2>
                  <span>
                    {item.overview}
                  </span>
                </div>
              </div>
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default PackageList;
