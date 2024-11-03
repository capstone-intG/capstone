import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Menu_Header from "../compoAssets/menu_header";
import { useLocation } from "react-router-dom";
import "../compoAssets/news_background_style.css";
import "../compoAssets/news_info.css";

import ExampleImage from '../logo_image/emblem_K01.png';


function News2() {

    const [selectedNewsType, setSelectedNewsTeam] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("newsTypeSelect"));
    if (storedData && storedData.selectedNewsType) {
        setSelectedNewsTeam(storedData.selectedNewsType);
    }
  }, []);
  
  return(
    <div>
        <Menu_Header></Menu_Header>
        <div className="news_info_container">

            

            <div className="news_info_catalog">
                <div className="news_info_catalog_info">{selectedNewsType}</div>
            </div>
            <div className="news_info">
                <ul>
                    <li>
                        <img src={ExampleImage}></img>
                        info 1
                    </li>
                    <li>
                        <img src={ExampleImage}></img>
                        info 2
                    </li>    
                </ul>
            </div>
        </div>
    </div>
);

    
    
}

export default News2;