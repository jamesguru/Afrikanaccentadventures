import React from "react";
import "./travelguidekenya.css";
import PetsRounded from "@material-ui/icons/PetsRounded";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Table from "react-bootstrap/Table";
const TravelGuideKenya = () => {
  return (
    <div className="travelguidekenya">
      <NavBar />

      <div className="tanzania-background">
        <div className="travelwithus-title">
          <h1>Travel Guide Kenya</h1>
        </div>
      </div>
      <div className="travelwithus-header">
        <h3>Travel Guide Kenya</h3>
      </div>
      <div className="travelguide-body">
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>About Kenya</h3>
            <span>
              Kenya is ranked among the best destinations in the world. The
              country is home to: the big five; a rich cultural heritage; a
              pristine coastline with clear blue waters of the Indian Ocean and
              white sandy beaches; the annual masai mara wildebeest migration
              spectacle; the great rift valley with its volcanic mountains and
              soda lakes; and a breathtaking landscape from the snow capped
              Mount Kenya in the central area, a semi arid North and lush green
              topography to the West that culminates with Lake Victoria (the
              World's second largest freshwater lake). Most importantly, Kenyans
              are warm and hospitable people who are always ready to greet
              visitors with a smile.
            </span>
          </div>
        </div>
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>Climate</h3>
            <span>
              Although Kenya is considered to fall in the tropics, climate and
              temperature varies depending on altitude and proximity to the
              ocean. Coastal regions are hot and humid while the central
              plateaus are warm and dry, with cool nights. So pack multiple
              layers of clothing to ensure you stay comfortable on afternoon
              game drives and walks. It goes without saying that the standard
              safari gear must include a sunscreen and mosquito repellent. In
              areas where malaria is prevalent, summer is generally a more risky
              time to travel. So, before you go on safari, consult your doctor
              for the necessary anti-malaria medication.
            </span>
          </div>
        </div>
        <div className="travelguide-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Public Holiday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st January</td>
                <td>New Years Day</td>
              </tr>
              <tr>
                <td>25th March</td>
                <td>Good Friday</td>
              </tr>
              <tr>
                <td>14th April</td>
                <td>Easter Monday</td>
              </tr>
              <tr>
                <td>1st May</td>
                <td>Labour Day</td>
              </tr>
              <tr>
                <td>14th April</td>
                <td>Easter Monday</td>
              </tr>
              <tr>
                <td>1st June</td>
                <td>Madaraka Day</td>
              </tr>
              <tr>
                <td>Eid al-Fitr</td>
                <td>(end of Ramadan)</td>
              </tr>
              <tr>
                <td>Eid al-Adha</td>
                <td>�</td>
              </tr>
              <tr>
                <td>20th October</td>
                <td>Mashujaa Day or Heroes' Day</td>
              </tr>
              <tr>
                <td>12th December</td>
                <td>Jamhuri / Independence Day</td>
              </tr>
              <tr>
                <td>25th December</td>
                <td>Christmas Day</td>
              </tr>
              <tr>
                <td>26th December</td>
                <td> Boxing Day</td>
              </tr>
            </tbody>
          </Table>
        </div>
        Eid al fitr and Eid al adha are commemorated depending on the sighting
        of the new moon Dates for Good friday and Easter Monday also vary every
        year.
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>Customs Regulations</h3>
            <h6>Prohibited items</h6>
            <span>
              Include counterfeit money and goods, pornography, matches made
              using white phosphorus, narcotics, soaps and cosmetics containing
              mercury, and used tires.
            </span>
            <h6>Restricted items</h6>
            <span>
              Include animal traps, unwrought precious metals and stones, arms
              and ammunition, ivory, hippopotamus teeth, rhinoceros horn,
              tortoise shell, whalebone, antlers, coral, endangered species, and
              historic artifacts..
            </span>
          </div>
        </div>
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>Taxi Services</h3>
            <span>
              Taxis are immediately available at the main entry points Jomo
              Kenyatta International Airport and Mombasa International Airport.
              Taxis are also available outside most hotels in Nairobi, Mombasa
              and at most of the country's major towns.
            </span>
          </div>
        </div>
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>Visa fees</h3>

            <ul>
              <li>Transit eVisa/visa on arrival: US$21.</li>
              <li>Single-entry eVisa/visa on arrival: US$51.</li>
              <li>East Africa tourist visa: US$100.</li>
              <li>Transit visa: �10.</li>
              <li>Single-entry visa: �30.</li>
              <li>Multiple-entry visa: �60.</li>
              <li>East Africa visa: �65.</li>
            </ul>
            <span>
              These fees are for visas obtained in advance from the embassy/high
              commission. Kenya has an agreement with Tanzania and Uganda to
              waiver visa re-entry fees if travelling between the three
              countries as long as single-entry visas remain valid for each
              country. This means multiple-entry visas are not required if going
              from Kenya to Tanzania or Uganda and back to Kenya. The same
              applies for travel from Uganda and Tanzania..
            </span>
          </div>
        </div>
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>Jomo Kenyatta International Airport</h3>
            <span>
              Jomo Kenyatta International Airport (JKIA) is Kenya's main entry
              point and the biggest airport in East Africa. Located in the
              Embakasi suburb 15 kilometres (9 mi) southeast of Nairobi's
              central business district, the airport has scheduled flights to
              destinations in over 50 countries.
            </span>
          </div>
        </div>
        <div className="travelguide-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelguide-info">
            <h3>Security</h3>
            <span>
              Similar to other cities and towns around the world, it is
              advisable to take the usual precautions to safe-guard yourself and
              your belongings. Do not leave valuables in your car.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TravelGuideKenya;
