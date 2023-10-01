import image1 from "../../assets/image/computerLab/computer-lab-1.jpg";
import image2 from "../../assets/image/computerLab/computer-lab-2.jpg";
import image3 from "../../assets/image/computerLab/computer-lab-3.jpg";

const ComputerLab = () => {
  const computersData = [
    {
      id: 1,
      productName: "কম্পিউটার",
      quantity: "১৭টি",
    },
    {
      id: 2,
      productName: "প্রজেক্টের",
      quantity: "০২টি",
    },
    {
      id: 3,
      productName: "স্কেনার",
      quantity: "০১টি",
    },
    {
      id: 4,
      productName: "প্রিন্টার",
      quantity: "০১টি",
    },
    {
      id: 5,
      productName: "ক্যামেরা",
      quantity: "০১টি",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-3xl lg:text-4xl text-center uppercase text-white font-semibold">Our Computer Lab</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image1} alt="Computer Lab Image 1" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image2} alt="Computer Lab Image 2" className="w-full h-72" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image3} alt="Computer Lab Image 3" className="w-full h-72" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            কম্পিউটার ল‍্যাবের যন্ত্রপাতির তালিকা
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>যন্ত্রপাতির নাম</th>
                  <th>পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                {computersData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-200" : "bg-green-200"}>
                    <th className="px-4 py-2">{item.id}</th>
                    <td className="px-4 py-2">{item.productName}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerLab;
