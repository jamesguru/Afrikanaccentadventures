import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import {useEffect,useMemo,useState} from 'react';
import { publicRequest } from "../../requestMethods";

export default function Home() {


  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo( () => [

    "Jan",

    "Feb",

    "March",

    "April",

    "May",

    "June",

    "July",

    "August",

    "Sep",

    "October",

    "November",

    "December",



  ], [])

console.log(userStats);

  useEffect(() =>{

    const getStats = async () =>{

      try {

        const res = await publicRequest.get("/users/stats");


        res.data.map((item) => 
        
        
        setUserStats((prev) => [


          ...prev,

          {name:MONTHS[item._id - 1], "Active Users" : item.total}
        ])
        
        )
        
      } catch (error) {
        
      }
    }


    getStats();

  },[MONTHS])



  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
