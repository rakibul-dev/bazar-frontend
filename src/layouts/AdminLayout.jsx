import { Box, Container, Grid } from "@mui/material";

import CustomerAppBar from "../components/CommonComponents/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/CommonComponents/AdminSidebar/AdminSidebar";
import AdminAppbar from "../components/CommonComponents/AdminAppbar/AdminAppbar";
import { Scrollbars } from "react-custom-scrollbars";

const AdminLayout = () => {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item md={2}>
            {/* <Box sx={{ overflow: "scroll", maxHeight: "100vh" }}> */}
            <Box style={{ height: "100vh" }}>
              <Box height="9%">hello</Box>
              <Scrollbars autoHide>
                <AdminSidebar />
              </Scrollbars>
            </Box>

            {/* </Box> */}
          </Grid>
          <Grid item xs={12} md={10}>
            <AdminAppbar />
            <Container>
              <Box marginTop="30px">
                <Outlet />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminLayout;
