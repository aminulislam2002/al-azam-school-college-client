// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./InstitutePhotoGallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import photo1 from "../../../assets/photogallery/image1.jpg";
import photo2 from "../../../assets/photogallery/image2.jpg";
import photo3 from "../../../assets/photogallery/image3.jpg";
import photo4 from "../../../assets/photogallery/image4.jpg";
import photo5 from "../../../assets/photogallery/image5.jpg";
import photo6 from "../../../assets/photogallery/image14.jpg";
import photo7 from "../../../assets/photogallery/image6.jpg";
import photo8 from "../../../assets/photogallery/image7.jpg";
import photo9 from "../../../assets/photogallery/image8.jpg";
import photo10 from "../../../assets/photogallery/image9.jpg";
import photo11 from "../../../assets/photogallery/image10.jpg";
import photo12 from "../../../assets/photogallery/image11.jpg";
import photo13 from "../../../assets/photogallery/image12.jpg";
import photo14 from "../../../assets/photogallery/image13.jpg";

const MadrasahPhotoGallery = () => {
  return (
    <div className="py-10">
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">PHOTO GALLERY</h1>
      </div>

      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={photo1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo12} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo13} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo14} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default MadrasahPhotoGallery;
