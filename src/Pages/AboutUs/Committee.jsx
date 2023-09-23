const Committee = () => {
  const committeeData = [
    {
      id: 1,
      name: "জনাব মোঃ নজরুল ইসলাম",
      position: "সভাপতি",
      number: "+880 1000-000000",
    },
    {
      id: 2,
      name: "জনাব মোঃ নাজিম উদ্দিন",
      position: "সাধারণ শিক্ষক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 3,
      name: "জনাব মোঃ মোশাররফ হোসেন",
      position: "সাধারণ শিক্ষক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 4,
      name: "জনাব মরিয়ম বেগম",
      position: "সংরক্ষিত সাধারণ শিক্ষক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 5,
      name: "জনাব মোঃ ওয়াহিদুজ্জামান ইরণ",
      position: "সাধারণ অভিভাবক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 6,
      name: "জনাব মোঃ কবির হোসেন",
      position: "সাধারণ অভিভাবক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 7,
      name: "জনাব মোঃ নজরুল ইসলাম",
      position: "সাধারণ অভিভাবক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 8,
      name: "জনাব বোরহান উদ্দিন",
      position: "সাধারণ অভিভাবক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 9,
      name: "জনাব তাহেরা খাতুন",
      position: "সংরক্ষিত মহিলা অভিভাবক সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 10,
      name: "জনাব ডাঃ গিয়াস উদ্দিন",
      position: "দাতা সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 11,
      name: "জনাব মোঃ নূরুল ইসলাম",
      position: "প্রতিষ্ঠাতা সদস্য",
      number: "+880 1000-000000",
    },
    {
      id: 12,
      name: "অধ্যক্ষ, আল আজম হাইস্কুল এন্ড কলেজ",
      position: "সদস্য সচিব",
      number: "+880 1000-000000",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">গভর্ণিং বডির সদস্যবৃন্দ</h1>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>নাম</th>
                  <th>গভর্ণিং বডিতে পদবী</th>
                  <th>নম্বর</th>
                </tr>
              </thead>
              <tbody>
                {committeeData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-200" : "bg-green-200"}>
                    <th className="px-4 py-2">{item.id}</th>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.position} </td>
                    <td className="px-4 py-2">{item.number}</td>
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

export default Committee;
