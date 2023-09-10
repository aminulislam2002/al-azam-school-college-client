// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TopSlider.css";

import slider1 from "../../../assets/image/slide/image1.jpg";
import slider2 from "../../../assets/image/slide/image2.jpg";
import slider3 from "../../../assets/image/slide/image3.jpg";
import slider4 from "../../../assets/image/slide/image4.jpg";
import slider5 from "../../../assets/image/slide/image5.jpg";
import slider6 from "../../../assets/image/slide/image6.jpg";
import slider7 from "../../../assets/image/slide/image7.jpg";
import slider8 from "../../../assets/image/slide/image8.jpg";
import slider10 from "../../../assets/image/slide/image18.jpg";
import slider11 from "../../../assets/image/slide/image11.jpg";
import slider12 from "../../../assets/image/slide/image12.jpg";
import slider13 from "../../../assets/image/slide/image13.jpg";
import slider14 from "../../../assets/image/slide/image14.jpg";
import slider15 from "../../../assets/image/slide/image15.jpg";
import slider16 from "../../../assets/image/slide/image16.jpg";
import slider17 from "../../../assets/image/slide/image17.jpg";
import slider18 from "../../../assets/image/slide/image18.jpg";
import slider19 from "../../../assets/image/slide/image19.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TopSlider = () => {
  const sliderContainerPosition = {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
  };

  return (
    <div>
      <>
        <div className="relative lg:h-screen h-[50vh]">
          <div className="absolute inset-0 bg-cover bg-center mt-16"></div>
          <div>
            <div style={sliderContainerPosition}>
              <>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={slider1}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider2}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider3}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider4}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider5}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider6}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider7}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider8}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider10}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider11}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider12}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider13}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider14}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider15}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider16}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider17}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider18}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slider19}
                      className="bg-center bg-cover w-full h-auto"
                      alt="Slider Image"
                      style={{ height: "130vh" }}
                    />
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default TopSlider;
