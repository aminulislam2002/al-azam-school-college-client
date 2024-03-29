import { Link } from "react-router-dom";

const ImportanceLinksSection = () => {
  // Get the current day as a number (0 = Sunday, 1 = Monday, etc.)
  const currentDay = new Date().getDay();

  // Define a CSS class to change the background color for the current day
  const dayClasses = [
    "text-green-600 font-semibold", // Sunday
    "text-green-600 font-semibold", // Monday
    "text-green-600 font-semibold", // Tuesday
    "text-green-600 font-semibold", // Wednesday
    "text-green-600 font-semibold", // Thursday
    "text-red-600 font-semibold", // Friday
    "text-red-600 font-semibold", // Saturday
  ];

  // Define the opening hours for each day
  const openingHours = [
    "09:00 AM - 05:00 PM", // Sunday
    "09:00 AM - 05:00 PM", // Monday
    "09:00 AM - 05:00 PM", // Tuesday
    "09:00 AM - 05:00 PM", // Wednesday
    "09:00 AM - 05:00 PM", // Thursday
    "Closed", // Friday
    "Closed", // Saturday
  ];

  return (
    <div className="container mx-auto lg:py-20 py-10">
      <div className="grid grid-cols-12 gap-10 lg:gap-5">
        <div className="col-span-12 md:col-span-12 lg:col-span-4 w-full">
          <div>
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-lg lg:text-2xl text-center text-white">Opening Hours</h1>
            </div>
            <div className="shadow-md py-3 px-5">
              <div className="grid grid-cols-2 gap-2 pb-2">
                <div className="text-gray-600">Sunday:</div>
                <div className={currentDay === 0 ? dayClasses[currentDay] : ""}>{openingHours[0]}</div>

                <div className="text-gray-600">Monday:</div>
                <div className={currentDay === 1 ? dayClasses[currentDay] : ""}>{openingHours[1]}</div>

                <div className="text-gray-600">Tuesday:</div>
                <div className={currentDay === 2 ? dayClasses[currentDay] : ""}>{openingHours[2]}</div>

                <div className="text-gray-600">Wednesday:</div>
                <div className={currentDay === 3 ? dayClasses[currentDay] : ""}>{openingHours[3]}</div>

                <div className="text-gray-600">Thursday:</div>
                <div className={currentDay === 4 ? dayClasses[currentDay] : ""}>{openingHours[4]}</div>

                <div className="text-gray-600">Friday:</div>
                <div className={currentDay === 5 ? dayClasses[currentDay] : ""}>{openingHours[5]}</div>

                <div className="text-gray-600">Saturday:</div>
                <div className={currentDay === 6 ? dayClasses[currentDay] : ""}>{openingHours[6]}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-full">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">শিক্ষা বোর্ডের লিংক</h1>
          </div>
          <div className="shadow-md py-3">
            <ul>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://dshe.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="http://emis.gov.bd/SSO/Account/Login?ReturnUrl=%2FSSO"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  ইএমআইএস লগইন
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://sylhetboard.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  সিলেট শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://bmeb.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  মাদ্রাসা শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://bteb.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://www.nu.ac.bd/" className="hover:underline hover:text-red-500 px-5">
                  জাতীয় বিশ্ব বিদ্যালয়
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-full">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">গুরুত্বপূর্ণ লিংক</h1>
          </div>
          <div className="shadow-md py-3">
            <ul>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://moedu.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  শিক্ষা মন্ত্রনালয়
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://dhakaeducationboard.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  ঢাকা শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://barisalboard.portal.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  বরিশাল শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://teachers.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  শিক্ষক বাতায়ন
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://www.bangla-news.com/bangla-newspapers/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  বাংলা সংবাদ পত্র
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://banbeis.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  ব্যানবেইস
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportanceLinksSection;
