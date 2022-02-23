import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

const QuoteItem = (props) => {
  console.log("quoteitem");
  return (
    <Container maxWidth={"sm"}>
      <Paper
        elevation={3}
        sx={(theme) => ({
          display: "flex",
          padding: 1,
          mb: 2,
          [theme.breakpoints.down("sm")]: { height: 50 },
        })}
      >
        <Box
          sx={{
            mr: "auto",
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
          }}
        >
          <Typography
            variant="h6"
            sx={(theme) => ({
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              [theme.breakpoints.down("sm")]: { width: 150 },
              [theme.breakpoints.up("sm")]: { width: 250 },
            })}
          >
            {props.quote}
          </Typography>
          <Typography variant="caption">{props.autor}</Typography>
        </Box>
        <Button
          variant="contained"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: { maxWidth: 120, maxHeight: 50 },
            [theme.breakpoints.up("sm")]: {
              maxWidth: 180,
              maxHeight: 50,
              mt: "auto",
              mb: "auto",
            },
          })}
        >
          <Typography variant="caption">View FullScreen</Typography>
        </Button>
        <Divider />
      </Paper>
    </Container>
  );
};

export default QuoteItem;
