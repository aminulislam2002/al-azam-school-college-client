const ScienceLab = () => {
  const data = [
    {
      id: 1,
      productName: "চুম্বক",
      quantity: "২টি",
    },
    {
      id: 2,
      productName: "প্রিং ব্যালেন্স",
      quantity: "১টি",
    },
    {
      id: 3,
      productName: "বিকার ৫০০ এমএল",
      quantity: "২টি",
    },
    {
      id: 4,
      productName: "বিকার ২৫০ এমএল",
      quantity: "২টি",
    },
    {
      id: 5,
      productName: "টেস্টটিউব (বড় )",
      quantity: "৬টি",
    },
    {
      id: 6,
      productName: "টেস্টটিউব (ছোট)",
      quantity: "১৬টি",
    },
    {
      id: 7,
      productName: "ফানেল",
      quantity: "২টি",
    },
    {
      id: 8,
      productName: "মর্টার পেসল",
      quantity: "৩টি",
    },
    {
      id: 9,
      productName: "লিটমাস পেপার",
      quantity: "২ প্যাকেট",
    },
    {
      id: 10,
      productName: "প্রিজম",
      quantity: "২টি",
    },
    {
      id: 11,
      productName: "লেন্স কনকেভ",
      quantity: "৩টি",
    },
    {
      id: 12,
      productName: "লেন্স কনভেক্স",
      quantity: "৫টি",
    },
    {
      id: 13,
      productName: "দর্পন",
      quantity: "২টি",
    },
    {
      id: 14,
      productName: "কর্ক",
      quantity: "৬টি",
    },
    {
      id: 15,
      productName: "স্পিরিট ল্যাম্প",
      quantity: "২টি",
    },
    {
      id: 16,
      productName: "ল্যাম্প স্ট্যান্ড",
      quantity: "২টি",
    },
    {
      id: 17,
      productName: "তারজালি",
      quantity: "২টি",
    },
    {
      id: 18,
      productName: "গ্যাস ঝার",
      quantity: "২টি",
    },
    {
      id: 19,
      productName: "ফিল্টার পেপার",
      quantity: "১টি",
    },
    {
      id: 20,
      productName: "কাঁচনল",
      quantity: "১ প্যাকেট",
    },
    {
      id: 21,
      productName: "সোডিয়াম বাই কাঃ",
      quantity: "১টি",
    },
    {
      id: 22,
      productName: "কপার সালফেট",
      quantity: "১টি",
    },
    {
      id: 23,
      productName: "এমোনিয়াম ক্লোরাইড",
      quantity: "১টি",
    },
    {
      id: 24,
      productName: "ফানেল ২৫০ এমএল",
      quantity: "২টি",
    },
    {
      id: 25,
      productName: "হাইড্রোক্লোরিক এসিড",
      quantity: "১টি",
    },
    {
      id: 26,
      productName: "নাইট্রিক এসিড",
      quantity: "১টি",
    },
    {
      id: 27,
      productName: "সালফিউরিক এসিড",
      quantity: "১টি",
    },
    {
      id: 28,
      productName: "থার্মোমিটার",
      quantity: "৩টি",
    },
    {
      id: 29,
      productName: "কম্পাউন্ড মাইক্রোস্কুপ",
      quantity: "১টি",
    },
    {
      id: 30,
      productName: "ডিসেক্টিং ট্র্যা",
      quantity: "১টি",
    },
    {
      id: 31,
      productName: "কনিক্যাল ক্ল্যাক্স",
      quantity: "৩টি",
    },
    {
      id: 32,
      productName: "উলফ বোতল",
      quantity: "২টি",
    },
    {
      id: 33,
      productName: "গোলতলী ফ্ল্যাক্স",
      quantity: "২টি",
    },
    {
      id: 34,
      productName: "স্লাইড ক্যালিপার্স",
      quantity: "৩টি",
    },
    {
      id: 35,
      productName: "স্কুগজ",
      quantity: "৩টি",
    },
    {
      id: 36,
      productName: "স্কোরোমিটার",
      quantity: "২টি",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">Our Science Lab</h1>
        </div>
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            বিজ্ঞানাগারের যন্ত্রপাতির তালিকা
          </h1>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>পণ্যের নাম</th>
                  <th>পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
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

export default ScienceLab;
