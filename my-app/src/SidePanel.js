import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faChartBar,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./SidePanel.css"; // Import your CSS file for SidePanel styling

const SidePanel = () => {
  return (
    <div className="side-panel">
      <div>
        <div className="side-panel-item">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      <div className="side-panel-items">
        <div className="side-panel-item">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="side-panel-item">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
        <div className="side-panel-item">
          <FontAwesomeIcon icon={faComments} />
        </div>
        
      </div>
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default SidePanel;
