import { Typography } from "@mui/material";
import React from "react";
import Orders from "../Orders/Orders";

const DashboardHome = () => {
  return (
    <div>
      <Typography paragraph>
        <Orders></Orders>
      </Typography>
    </div>
  );
};

export default DashboardHome;
