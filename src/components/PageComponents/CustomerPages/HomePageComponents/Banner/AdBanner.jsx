import { Box, Grid, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "./AdBanner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AdBanner = () => {
  return (
    <div>
      {/* <Box sx={{ height: "90vh", width: "100%" }}> */}
      <Swiper
        style={{
          "--swiper-pagination-color": "#d23f57ff",
          "--swiper-pagination-bullet-inactive-color": "#2b3445ff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        // spaceBetween={50}
        modules={[Pagination, Autoplay]}
        // controller={{ control: controlledSwiper }}
        // modules={[Controller]}
        // controller={{ control: controlledSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        loop={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
      >
        <SwiperSlide>
          {/* <Box sx={{ height: "80vh", width: "100%" }}> */}
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item md={5} sm={12} width="90%" height="100%">
              <Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="h2">
                    50% Off For Your First Shopping
                  </Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis lobortis consequat eu, quam etiam at quis ut
                    convalliss.
                  </Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Button variant="contained" focusRipple disableRipple>
                    Shop now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={8} md={5} width="95%">
              <img
                src="/public/images/watch.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
          </Grid>
          {/* </Box> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Box sx={{ height: "80vh", width: "100%" }}> */}
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item md={5} sm={12} width="90%" height="100%">
              <Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="h2">
                    50% Off For Your First Shopping
                  </Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis lobortis consequat eu, quam etiam at quis ut
                    convalliss.
                  </Typography>
                </Box>
                <Box sx={{ my: 3 }}>
                  <Button variant="contained" focusRipple disableRipple>
                    Shop now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={8} md={5} width="95%" height="100%">
              <img
                src="/public/images/watch.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
          </Grid>
          {/* </Box> */}
        </SwiperSlide>
      </Swiper>
      {/* </Box> */}
    </div>
  );
};

export default AdBanner;
