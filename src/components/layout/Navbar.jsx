import React, { useState } from "react";
import {
  Drawer,
  Button,
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const pages = ["All Quotes", "Add A Quote"];

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navButtonHandler = (item) => {
    if (item === "All Quotes") {
    } else if (item === "Add A Quote") {
    }
  };

  const drawerItems = (
    <List>
      {["All Quotes", "Add A Quote"].map((text, index) => (
        <ListItem button key={text} onClick={() => navButtonHandler(text)}>
          <ListItemIcon>
            {index % 2 === 0 ? (
              <FormatQuoteSharpIcon />
            ) : (
              <AddCircleOutlineSharpIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
        <IconButton
          onClick={() => {
            setToggleDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ mt: 0.5 }}>
          Greate Quote
        </Typography>
      </Box>
      <Drawer open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        {drawerItems}
      </Drawer>

      <Container
        maxWidth="xl"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: { display: "none" },
        })}
      >
        <Toolbar disableGutters>
          <Box sx={{ flex: "1 1 0", display: "flex" }}>
            <Typography variant="h6" noWrap component="div" sx={{ mr: "auto" }}>
              Greate Quote
            </Typography>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={navButtonHandler}
                sx={{ color: "white" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
