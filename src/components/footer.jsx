import React from "react";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SocialMediaIcons from "../components/socialMediaIcons";

export default function Footer() {
  return (
    <div className="footer">
      <h2>Need Help?</h2>
      <Grid container spacing={20}>
        <Grid item xs={4}>
          <h3>Email us</h3>
          <span style={{}}>
            <EmailIcon />
          </span>
          info@senecahackathon.com
        </Grid>
        <Grid item xs={4}>
          <h3>Address</h3>
          <p>
            Seneca College Newnham Campus, 1750 Finch Ave E., North York,
            Toronto, ON M2J 2X5
          </p>
        </Grid>
        <Grid item xs={4}>
          <h3>Social Media</h3>
          <div style={{ marginTop: "1em" }}>
            <SocialMediaIcons />
          </div>
        </Grid>
      </Grid>
      <p style={{ margin: 0 }}>
        &copy; Copyright. All rights reserved by Housing Hackathon.
      </p>
    </div>
  );
}
