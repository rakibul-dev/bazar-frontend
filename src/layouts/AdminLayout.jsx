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
          <Grid item md={2} sx={{ display: { sm: "none", md: "block" } }}>
            {/* <Box sx={{ overflow: "scroll", maxHeight: "100vh" }}> */}
            <Box style={{ height: "100vh" }}>
              <Box
                height="7.7%"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img
                  height="100%"
                  width="100%"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Box>
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
