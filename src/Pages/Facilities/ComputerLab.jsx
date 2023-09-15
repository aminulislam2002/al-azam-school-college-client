import image1 from "../../assets/image/computerLab/computer-lab-1.jpg";
import image2 from "../../assets/image/computerLab/computer-lab-2.jpg";
import image3 from "../../assets/image/computerLab/computer-lab-3.jpg";

const ComputerLab = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-3xl lg:text-4xl text-center uppercase text-white font-semibold">Our Computer Lab</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image1} alt="Computer Lab Image 1" className="w-full h-auto" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image2} alt="Computer Lab Image 2" className="w-full h-auto" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image3} alt="Computer Lab Image 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerLab;
