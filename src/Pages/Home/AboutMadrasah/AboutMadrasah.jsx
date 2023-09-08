import image from "../../../assets/image/overview.jpg";
import principal from "../../../assets/image/principal.jpg";

const AboutMadrasah = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20 bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <div>
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-lg lg:text-2xl text-center text-white">প্রতিষ্ঠান পরিচিতি</h1>
            </div>
            <div>
              <img src={image} className="w-full h-72 bg-cover bg-center" alt="" />
              <h5 className="text-center py-1">ছবি : আল-আজম হাইস্কুল এন্ড কলেজ</h5>
              <div>
                <p className="">
                  <span className="font-bold">Overview:</span> Golbunia Nesaria Dakhil Madrash is an educational
                  establishment that is located at Kalaran Shafabandar Bhandaria Pirojpur. Its Educational Institute
                  Identification Number or ElIN, is 102671. On 01 January, 1984, it was first put into operation. The
                  alternative name for Golbunia Nesaria Dakhil Madrasah is o lis a Combined sort of co-educational program.
                  The institution provides education in the following fields: Humanities, Business Studies, Science. Its MPO
                  number is 5402082106. It operates on Day shifts. Its management is Managing. Its recognition is Recognized
                  by the government and the recognition level is Dakhil. The school/college has MPO level with MPO number
                  5402082106 and the MPO type is Yes. Golbunia Nesaria Dakhil Madrasah is under Madrasah Education Board.
                  While many other high schools teach numerous disciplines, you can find the major disciplines that they
                  teach in this high school as Humanities, Business Studies, Science. The management type of this institute
                  is Managing. The region in which it is located is Grameen with geographic location as Plain Land. The
                  institute is in the constituency no 128.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div>
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-lg lg:text-2xl text-center text-white">অধ্যক্ষ</h1>
            </div>
            <div className="py-3 border-2">
              <img
                src={principal}
                className="w-44 h-40 mx-auto border-4 bg-center bg-cover border-green-500"
                alt="Principal's Photo"
              />
              <h1 className="text-center pt-1">এ.কে.এম আব্দুল আহাদ</h1>
              <p className="text-center py-1">
                <span className="">Contact Number:</span> +880 1715-356338
              </p>
              <p className="text-center py-1">
                <span className="">Email:</span> examplemail@gmail.com
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 p-4 mt-4">
              <h3 className="text-center mb-2">
                <span>অধ‍্যক্ষের বাণী:</span>
              </h3>
              <p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat placeat, aliquid temporibus eveniet
                  pariatur magnam quod ad sequi nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero
                  laudantium cumque rem fuga reprehenderit eius porro fugit numquam doloremque?
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMadrasah;
