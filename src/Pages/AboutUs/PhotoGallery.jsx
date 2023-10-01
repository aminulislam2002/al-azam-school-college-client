import image1 from "../../assets/image/computerLab/computer-lab-1.jpg";
import image2 from "../../assets/image/computerLab/computer-lab-2.jpg";
import image3 from "../../assets/image/computerLab/computer-lab-3.jpg";

import image4 from "../../assets/image/science-lab/science-lab-one.jpg";
import image5 from "../../assets/image/science-lab/science-lab-two.jpg";
import image6 from "../../assets/image/science-lab/science-lab-three.jpg";

import slider2 from "../../assets/image/school/school-2.jpg";
import slider3 from "../../assets/image/school/school-3.jpg";
import slider4 from "../../assets/image/school/school-4.jpg";
import slider5 from "../../assets/image/school/school-5.jpg";
import slider6 from "../../assets/image/school/school-6.jpg";
import slider7 from "../../assets/image/school/school-7.jpg";

import ceremony1 from "../../assets/image/ceremony/ceremony-1.jpg";
import ceremony2 from "../../assets/image/ceremony/ceremony-2.jpg";
import ceremony3 from "../../assets/image/ceremony/ceremony-4.jpg";

import august1 from "../../assets/image/15august/15august-3.jpg";
import august2 from "../../assets/image/15august/15august-4.jpg";
import august3 from "../../assets/image/15august/15august-1.jpg";

const PhotoGallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-5 lg:mt-10">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">প্রতিষ্ঠানের ছবি</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={slider7} alt="Image 1" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={slider2} alt="Image 2" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={slider3} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={slider4} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={slider5} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={slider6} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">কম্পিউটার ল‍্যাবের ছবি</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image1} alt="Image 1" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image2} alt="Image 2" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image3} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">বিজ্ঞানাগারের ছবি</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image4} alt="Image 1" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image5} alt="Image 2" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image6} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">পুরস্কার বিতরণ অনুষ্ঠান</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={ceremony2} alt="Image 1" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={ceremony3} alt="Image 2" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={ceremony1} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">জাতীয় শোক দিবস</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={august1} alt="Image 1" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={august2} alt="Image 2" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={august3} alt="Image 3" className="w-full h-72" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
