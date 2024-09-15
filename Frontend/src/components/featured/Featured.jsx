import {SearchRounded} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './featured.css';
import {useState} from 'react';

export default function Featured({type}) {
  const transition = {duration: 8, type: 'spring'};

  const [close, setClose] = useState (false);
  const [company, setCompany] = useState ('');
  const [bronchure, setBronchure] = useState (false);
  const [companyName, setCompanyName] = useState ('');
  const [destination, setDestination] = useState ('');

  const download = () => {
    setClose (!close);
  };

  const change = event => {
    const value = event.target.value;

    if (value === 'agent') {
      setCompany (value);
    } else if (value === 'tourist' || companyName.length > 2) {
      setBronchure (true);
    } else {
      setBronchure (false);
    }
  };

  const Company = event => {
    const value = event.target.value;
    setCompanyName (value);
  };

  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <div className="slide-item" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">Where do you want to tour?</span>
            <div className="featured-search">
              <SearchRounded className="search-icon" />
              <input
                type="text"
                className="destination-search"
                placeholder="Search destination"
                onChange={e => setDestination (e.target.value)}
              />

              <button className="search-button">
                <Link to={`/safaris/${destination}`}>Search</Link>
              </button>
            </div>
            <span className="slide-header" />
            <div className="slide-buttons" />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item1" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">HOME OF BEAUTY SCENARIES</span>
            <span className="slide-header">KENYA</span>

            <div className="slide-buttons">
              <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/kenya">
                <button className="take-tour">Explore Kenya</button>
              </Link>
              <Link to="/destination/kenya">
                <button className="take-tour">Discover Kenya</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item4" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE PEARL OF AFRICA</span>
            <span className="slide-header">UGANDA</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/uganda">
                <button className="take-tour">Explore Uganda</button>
              </Link>
              <Link to="/destination/uganda">
                <button className="take-tour">Discover Uganda</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item5" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE ROOF OF AFRICA</span>
            <span className="slide-header">TANZANIA & ZANZIBAR</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/tanzania">
                <button className="take-tour">Explore Tanzania</button>
              </Link>
              <Link to="/destination/tanzania">
                <button className="take-tour">Discover Tanzania</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item2" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">LAND OF THOUSAND HILLS</span>
            <span className="slide-header">RWANDA</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/rwanda">
                <button className="take-tour">Explore Rwanda</button>
              </Link>
              <Link to="/destination/rwanda">
                <button className="take-tour">Discover Rwanda</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item6" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE LAND OF BRAVE</span>
            <span className="slide-header">NAMIMBIA</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/namimbia">
                <button className="take-tour">Explore Namimbia</button>
              </Link>
              <Link to="/destination/namimbia">
                <button className="take-tour">Discover Namimbia</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item8" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">LANDS OF GIANTS</span>
            <span className="slide-header">BOTSWANA</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/botswana">
                <button className="take-tour">Explore Botswana</button>
              </Link>
              <Link to="/destination/botswana">
                <button className="take-tour">Discover Botswana</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item7" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">VICTORIA FALLS</span>
            <span className="slide-header">ZAMBIA & ZIMBABWE</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/victoria-falls">
                <button className="take-tour">Explore Victoria Falls</button>
              </Link>
              <Link to="/destination/victoria-falls">
                <button className="take-tour">Discover Victoria Falls</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-item3" />

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE RAINBOW NATION</span>
            <span className="slide-header">SOUTH AFRICA</span>

            <div className="slide-buttons">
            <Link to="/shop">
                <button className="take-tour">Go to Shop</button>
              </Link>
              <Link to="/destination/southafrica">
                <button className="take-tour">Explore South Africa</button>
              </Link>
              <Link to="/destination/southafrica">
                <button className="take-tour">Discover South Africa</button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
