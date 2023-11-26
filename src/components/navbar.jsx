import * as React from "react";
import SocialMediaIcons from "./socialMediaIcons";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import HackathonLogo from "../svgs/hack-logo.png";
import { Row, Col } from "react-bootstrap";

const drawerWidth = 240;
const navItems = [];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image
        src={HackathonLogo}
        alt="Seneca Hackathon 2024's logo"
        width={100}
        height={100}
      />
      <div style={{ fontSize: "small", marginTop: "0.5em" }}>
        <strong>hosted by</strong>
      </div>
      <Image
        src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg"
        alt="Seneca College's logo"
        width={80}
        height={30}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="unset"
        sx={{
          backgroundColor: "white",
          color: "black",
          top: 0,
          borderBottom: "2px solid red",
          boxShadow: "none",
        }}
      >
        <div className="navBarTop">
          <SocialMediaIcons />
        </div>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Row>
              <Col>
                <Image
                  src={HackathonLogo}
                  alt="Seneca Hackathon 2024's logo"
                  width={75}
                  height={75}
                />
              </Col>
              <Col className="d-flex align-items-center">
                <div style={{ fontSize: "small" }}>
                  hosted by
                  <Image
                    src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg"
                    alt="Seneca College's logo"
                    width={80}
                    height={30}
                  />
                </div>
              </Col>
              <Col>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "black" }}>
                    {item}
                  </Button>
                ))}
              </Col>
            </Row>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
