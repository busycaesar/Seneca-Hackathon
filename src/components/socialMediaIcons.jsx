import { Grid } from "@mui/material";
import Image from "next/image";
import Instagram from "../svgs/instagram.png";
import Facebook from "../svgs/facebook.png";
import LinkedIn from "../svgs/linkedin.png";
import Twitter from "../svgs/twitter.png";
import Tiktok from "../svgs/tiktok.png";

export default function SocialMediaIcons() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Image src={Instagram} alt="Link to Instagram" width={25} />
      </Grid>
      <Grid item xs={1}>
        <Image src={Facebook} alt="Link to Facebook" width={25} />
      </Grid>
      <Grid item xs={1}>
        <Image src={LinkedIn} alt="Link to LinkedIn" width={25} />
      </Grid>
      <Grid item xs={1}>
        <Image src={Twitter} alt="Link to Twitter" width={25} />
      </Grid>
      <Grid item xs={1}>
        <Image src={Tiktok} alt="Link to Tiktok" width={25} />
      </Grid>
    </Grid>
  );
}
