import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React from "react";

const LeaveComment = () => {
  return (
    <>
      <Box height="100%" marginTop="100px">
        <Box gap={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" fontWeight="bold">
            Write a Review for this product
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            gap={0.05}
          >
            <Typography variant="p" fontWeight="bold">
              Your Rating
            </Typography>
            <Rating value={5} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }} gap={1}>
            <Typography variant="p" fontWeight="bold">
              Your Review *
            </Typography>
            <TextField
              label="Write review here... "
              size="medium"
              //   maxRows={15}
              rows={5}
              multiline
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Button variant="contained" size="small">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LeaveComment;
