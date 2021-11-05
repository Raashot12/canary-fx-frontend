import React, { useState } from "react";
import routes from "routes"

import Aside from "components/sidebarAndMain/Aside";
import Main from "components/sidebarAndMain/mainLayout/Main";

function DashboardLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Aside
        routes={routes}
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        location={props.location}
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default DashboardLayout;
