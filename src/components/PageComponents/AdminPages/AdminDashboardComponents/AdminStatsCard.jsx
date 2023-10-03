import { Card, Stack, Typography, Box } from "@mui/material";
import React from "react";

const AdminStatsCard = () => {
  return (
    <>
      <Card sx={{ minWidth: "100%" }} variant="elevation" elevation={2}>
        <Box
          sx={{ padding: "15px" }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Box>
            <Typography variant="p">Order</Typography>
            <Typography variant="h5">32,350</Typography>
          </Box>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="p">11350</Typography>
            <Typography variant="p">11350</Typography>
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default AdminStatsCard;
