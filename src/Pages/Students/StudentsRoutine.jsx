const StudentsRoutine = () => {
  const data = [
    {
      id: 1,
      date: "০১/১০/২০২৩",
      day: "রবিবার",
      subject: "বাংলা ১ম পত্র",
    },
    {
      id: 2,
      date: "০২/১০/২০২৩",
      day: "সোমবার",
      subject: "বাংলা ২য় পত্র",
    },
    {
      id: 3,
      date: "০৩/১০/২০২৩",
      day: "মঙ্গলবার",
      subject: "ইসলাম ও নৈতিক শিক্ষা/হিন্দুধর্ম ও নৈতিক শিক্ষা",
    },
    {
      id: 4,
      date: "০৪/১০/২০২৩",
      day: "বুধবার",
      subject: "সাধারণ বিজ্ঞান/ বাংলাদেশ ও বিশ্বপরিচয়",
    },
    {
      id: 5,
      date: "০৫/১০/২০২৩",
      day: "বৃহস্পতিবার",
      subject: "জীববিজ্ঞান/ পৌরনীতি ও সুশাসন",
    },
    {
      id: 6,
      date: "০৮/১০/২০২৩",
      day: "রবিবার",
      subject: "ইংরেজি ১ম পত্র",
    },
    {
      id: 7,
      date: "০৯/১০/২০২৩",
      day: "সোমবার",
      subject: "ইংরেজি ২য় পত্র",
    },
    {
      id: 8,
      date: "১০/১০/২০২৩",
      day: "মঙ্গলবার",
      subject: "পদার্থবিজ্ঞান/ইতিহাস ও সংস্কৃতি/ব্যবসায় উদ্দ্যোগ",
    },
    {
      id: 9,
      date: "১১/১০/২০২৩",
      day: "বুধবার",
      subject: "রসায়ন/ভূগোল ও পরিবেশ/হিসাববিজ্ঞান",
    },
    {
      id: 10,
      date: "১৫/১০/২০২৩",
      day: "রবিবার",
      subject: "সাধারণ গণিত",
    },
    {
      id: 11,
      date: "১৬/১০/২০২৩",
      day: "সোমবার",
      subject: "তথ্য ও যোগাযোগ প্রযুক্তি",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">students routines</h1>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">
            দশম শ্রেণির নির্বাচনী পরীক্ষা-২০২৩
          </h1>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base lg:text-lg">
                <tr>
                  <th>#</th>
                  <th>১০.০০-১.০০ ঘটিকা সকাল</th>
                  <th>তারিখ</th>
                  <th>বার</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-200" : "bg-green-200"}>
                    <th className="px-4 py-2">{item.id}</th>
                    <td className="px-4 py-2">{item.subject}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">{item.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500 rounded-lg shadow-md mt-10 lg:mt-20">
          <h1 className="text-lg lg:text-3xl text-center uppercase text-white font-semibold">একাদশ ও দ্বাদশ</h1>
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-collapse">
              {/* head */}
              <thead className="bg-blue-950 text-white text-base">
                <tr>
                  <th>#</th>
                  <th>Day</th>
                  <th>Class</th>
                  <th>10:20am - 11:10am</th>
                  <th>11:10am - 11:55am</th>
                  <th>11:55am - 12:40pm</th>
                  <th>12:40pm - 01:05pm</th>
                  <th>01:15pm - 02:00pm</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-200">
                  <td></td>
                  <td>রবিবার</td>
                  <td>
                    <ul>
                      <li>একাদশ</li>
                      <li>দ্বাদশ</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ইংরেজি</li>
                      <li>আইসিটি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>আইসিটি</li>
                      <li>ইংরেজি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ই.ইতিহাস ও সংস্কৃতি</li>
                      <li>পৌরনীতি ও সুশাসন</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>পৌরনীতি ও সুশাসন</li>
                      <li>ই.ইতিহাস ও সংস্কৃতি</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>সোমবার</td>
                  <td>
                    <ul>
                      <li>একাদশ</li>
                      <li>দ্বাদশ</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>আইসিটি</li>
                      <li>বাংলা</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>বাংলা</li>
                      <li>আইসিটি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>পৌরনীতি ও সুশাসন</li>
                      <li>ই.ইতিহাস ও সংস্কৃতি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ই.ইতিহাস ও সংস্কৃতি</li>
                      <li>অর্থনীতি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>অর্থনীতি</li>
                      <li>পৌরনীতি ও সুশাসন</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-blue-200">
                  <td></td>
                  <td>মঙ্গলবার</td>
                  <td>
                    <ul>
                      <li>একাদশ</li>
                      <li>দ্বাদশ</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ইংরেজি</li>
                      <li>বাংলা</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>বাংলা</li>
                      <li>ইংরেজি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>সমাজকর্ম</li>
                      <li>আইসিটি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>আইসিটি</li>
                      <li>সমাজকর্ম</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>বুধবার</td>
                  <td>
                    <ul>
                      <li>একাদশ</li>
                      <li>দ্বাদশ</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ইংরেজি</li>
                      <li>ই.ইতিহাস ও সংস্কৃতি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ই.ইতিহাস ও সংস্কৃতি</li>
                      <li>ইংরেজি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>অর্থনীতি</li>
                      <li>পৌরনীতি ও সুশাসন</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>পৌরনীতি ও সুশাসন</li>
                      <li>অর্থনীতি</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr className="bg-blue-200">
                  <td></td>
                  <td>বৃহস্পতিবার</td>
                  <td>
                    <ul>
                      <li>একাদশ</li>
                      <li>দ্বাদশ</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>বাংলা</li>
                      <li>ইংরেজি</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>ইংরেজি</li>
                      <li>বাংলা</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>অর্থনীতি</li>
                      <li>সমাজকর্ম</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>সমাজকর্ম</li>
                      <li>অর্থনীতি</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsRoutine;
