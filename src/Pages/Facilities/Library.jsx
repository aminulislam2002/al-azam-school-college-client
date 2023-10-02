const Library = () => {
  const booksData = [
    {
      id: 1,
      productName: "পাঠ্য বই",
      quantity: "২০০টি",
    },
    {
      id: 2,
      productName: "পাঠ্য সহায়ক বই",
      quantity: "১০০টি",
    },
    {
      id: 3,
      productName: "ভ্রমণ সহায়ক বই",
      quantity: "১৫০টি",
    },
    {
      id: 4,
      productName: "আত্নজীবনীমূলক বই",
      quantity: "১২০টি",
    },
    {
      id: 5,
      productName: "ইতিহাস বিষয়ক বই",
      quantity: "২৫০টি",
    },
    {
      id: 6,
      productName: "উপন্যাস",
      quantity: "৩০০টি",
    },
    {
      id: 7,
      productName: "বিজ্ঞান বিষয়ক বই ",
      quantity: "১৫০টি",
    },
    {
      id: 8,
      productName: "ম্যাগাজিন",
      quantity: "৪৫০টি",
    },
    {
      id: 9,
      productName: "মুক্তিযুদ্ধ বিষয়ক বই",
      quantity: "১০০টি",
    },
    {
      id: 10,
      productName: "প্রাণী ও উদ্ভিদ বিষয়ক বই",
      quantity: "১০০টি",
    },
  ];

  const materialsData = [
    {
      id: 1,
      productName: "চেয়ার",
      quantity: "২৫টি",
    },
    {
      id: 2,
      productName: "টেবিল",
      quantity: "০২টি",
    },
    {
      id: 3,
      productName: "শোকেস",
      quantity: "০৪টি",
    },
    {
      id: 4,
      productName: "আলমারী",
      quantity: "০১টি",
    },
    {
      id: 5,
      productName: "গ্লোব",
      quantity: "০২টি",
    },
    {
      id: 6,
      productName: "মানচিত্র",
      quantity: "০৫টি",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">লাইব্রেরীর</h1>
        </div>
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            লাইব্রেরীর পাঠ্য পুস্তকের তালিকা
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>বইয়ের প্রকার</th>
                  <th>পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                {booksData.map((item, index) => (
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

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            লাইব্রেরীর অন্যান্য উপকরণ তালিকা
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>বিবরণ</th>
                  <th>পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                {materialsData.map((item, index) => (
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

export default Library;
