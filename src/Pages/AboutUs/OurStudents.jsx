const OurStudents = () => {
  const studentsAccordingToClass = [
    {
      id: 1,
      class: "ষষ্ঠ",
      male: "73",
      female: "73",
      total: "",
    },
    {
      id: 2,
      class: "সপ্তম",
      male: "46",
      female: "62",
    },
    {
      id: 3,
      class: "অষ্টম",
      male: "50",
      female: "50",
    },
    {
      id: 4,
      class: "নবম",
      male: "51",
      female: "47",
    },
    {
      id: 5,
      class: "দশম",
      male: "38",
      female: "36",
    },
    {
      id: 6,
      class: "একাদশ",
      male: "27",
      female: "70",
    },
    {
      id: 7,
      class: "দ্বাদশ",
      male: "36",
      female: "110",
    },
  ];

  const studentsAccordingToSubjects = [
    {
      id: 1,
      subjectName: "বাংলা",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৯৮",
      ten: "৭৪",
      eleven: "৯৭",
      twelve: "১৪৬",
    },
    {
      id: 2,
      subjectName: "ইংরেজি",
      six: "১০৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৯৮",
      ten: "৭৪",
      eleven: "৯৭",
      twelve: "১৪৬",
    },
    {
      id: 3,
      subjectName: "গণিত",
      six: "১০৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৯৮",
      ten: "৭৪",
      eleven: "৯৭",
      twelve: "",
    },
    {
      id: 4,
      subjectName: "ইসলাম ও নৈতিক শিক্ষা",
      six: "১০৪",
      seven: "১০০",
      eight: "৯২",
      nine: "৯৩",
      ten: "৬৬",
      eleven: "",
      twelve: "",
    },
    {
      id: 5,
      subjectName: "হিন্দুধর্ম ও নৈতিক শিক্ষা",
      six: "0৫",
      seven: "0৮",
      eight: "০৮",
      nine: "০৫",
      ten: "০৮",
      eleven: "",
      twelve: "",
    },
    {
      id: 6,
      subjectName: "বিজ্ঞান",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৬৮",
      ten: "৫৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 7,
      subjectName: "বাংলাদেশ ও বিশ্ব পরিচয়",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "২৫",
      ten: "১৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 8,
      subjectName: "কৃষি শিক্ষা",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৯১",
      ten: "৭৩",
      eleven: "",
      twelve: "",
    },
    {
      id: 9,
      subjectName: "গার্হস্থ্য বিজ্ঞান",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
    },
    {
      id: 10,
      subjectName: "তথ্য ও যোগাযোগ প্রযুক্তি",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৯৮",
      ten: "৭৪",
      eleven: "",
      twelve: "",
    },
    {
      id: 11,
      subjectName: "চারু ও কারু কলা",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
    },
    {
      id: 12,
      subjectName: "শারিরীক শিক্ষা ও স্বাস্থ্য",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "৯৮",
      ten: "৭৪",
      eleven: "",
      twelve: "",
    },
    {
      id: 13,
      subjectName: "কর্ম ও জীবনমূখী শিক্ষা",
      six: "১৪৬",
      seven: "১০৮",
      eight: "১০০",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
    },
    {
      id: 14,
      subjectName: "পদার্থ বিজ্ঞান",
      six: "",
      seven: "",
      eight: "",
      nine: "২৫",
      ten: "১৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 15,
      subjectName: "রসায়ন",
      six: "",
      seven: "",
      eight: "",
      nine: "২৫",
      ten: "১৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 16,
      subjectName: "জীব বিজ্ঞান",
      six: "",
      seven: "",
      eight: "",
      nine: "২৫",
      ten: "১৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 17,
      subjectName: "উচ্চতর গনিত",
      six: "",
      seven: "",
      eight: "",
      nine: "৬০",
      ten: "৪৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 18,
      subjectName: "ইতিহাস ও বিশ্বসভ্যতা",
      six: "",
      seven: "",
      eight: "",
      nine: "৬০",
      ten: "৪৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 19,
      subjectName: "ভূগোল ও পরিবেশ",
      six: "",
      seven: "",
      eight: "",
      nine: "৬০",
      ten: "৪৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 20,
      subjectName: "পৌরনীতি ও নাগরিকতা",
      six: "",
      seven: "",
      eight: "",
      nine: "৬০",
      ten: "৪৭",
      eleven: "",
      twelve: "",
    },
    {
      id: 21,
      subjectName: "ফিন্যান্স ও ব্যাংকিং",
      six: "",
      seven: "",
      eight: "",
      nine: "০৮",
      ten: "০৯",
      eleven: "",
      twelve: "",
    },
    {
      id: 22,
      subjectName: "হিসাব বিজ্ঞান",
      six: "",
      seven: "",
      eight: "",
      nine: "০৮",
      ten: "০৯",
      eleven: "",
      twelve: "",
    },
    {
      id: 23,
      subjectName: "ব্যবসায় উদ্দ্যোগ",
      six: "",
      seven: "",
      eight: "",
      nine: "০৮",
      ten: "০৯",
      eleven: "",
      twelve: "",
    },
    {
      id: 24,
      subjectName: "ক্যারিয়ার শিক্ষা",
      six: "",
      seven: "",
      eight: "",
      nine: "৯৮",
      ten: "৭৪",
      eleven: "",
      twelve: "",
    },
    {
      id: 25,
      subjectName: "তথ্য ও যোগাযোগ প্রযুক্তি",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "97",
      twelve: "147",
    },
    {
      id: 26,
      subjectName: "পৌরনীতি ও সুশাসন",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "৯৭",
      twelve: "১৪৬",
    },

    {
      id: 27,
      subjectName: "ইসলামের ইতিহাস ও সংস্কৃতি",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "97",
      twelve: "146",
    },
    {
      id: 28,
      subjectName: "সমাজ কর্ম",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "৯৭",
      twelve: "১৪৬",
    },
    {
      id: 29,
      subjectName: "অর্থনীতি",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "৯৭",
      twelve: "১৪৬",
    },
  ];

  // Calculate the 'total' property for each item in the data array
  const newData = studentsAccordingToClass.map((item) => ({
    ...item,
    total: (parseInt(item.male) + parseInt(item.female)).toString(),
  }));

  // Calculate totalMale, totalFemale, and totalStudents
  const totalMale = newData.reduce((total, item) => total + parseInt(item.male), 0);
  const totalFemale = newData.reduce((total, item) => total + parseInt(item.female), 0);
  const totalStudents = totalMale + totalFemale;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">Our Students</h1>
        </div>
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            কাম্য ছাত্র/ছাত্রীর তালিকা-২০২৩
          </h1>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>শ্রেণি</th>
                  <th>ছাত্র</th>
                  <th>ছাত্রী</th>
                  <th>মোট</th>
                </tr>
              </thead>
              <tbody>
                {newData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-200" : "bg-green-200"}>
                    <td className="px-4 py-2">{item?.class}</td>
                    <td className="px-4 py-2">{item?.male}</td>
                    <td className="px-4 py-2">{item?.female}</td>
                    <td className="px-4 py-2">{item?.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>6-12</th>
                  <th>মোট ছাত্র: {totalMale}</th>
                  <th>মোট ছাত্রী: {totalFemale}</th>
                  <th>মোট শিক্ষার্থী: {totalStudents}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            বিষয় ভিত্তিক শিক্ষার্থীর তালিকা-২০২৩
          </h1>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>বিষয়ের নাম</th>
                  <th>ষষ্ঠ</th>
                  <th>সপ্তম</th>
                  <th>অষ্টম</th>
                  <th>নবম</th>
                  <th>দশম</th>
                  <th>একাদশ</th>
                  <th>দ্বাদশ</th>
                </tr>
              </thead>
              <tbody>
                {studentsAccordingToSubjects.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-200" : "bg-green-200"}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item?.subjectName}</td>
                    <td className="px-4 py-2">{item?.six}</td>
                    <td className="px-4 py-2">{item?.seven}</td>
                    <td className="px-4 py-2">{item?.eight}</td>
                    <td className="px-4 py-2">{item?.nine}</td>
                    <td className="px-4 py-2">{item?.ten}</td>
                    <td className="px-4 py-2">{item?.eleven}</td>
                    <td className="px-4 py-2">{item?.twelve}</td>
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

export default OurStudents;
