import image from "../../../assets/image/overview.jpg";
import principal from "../../../assets/image/principal.jpg";

const AboutMadrasah = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20">
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
                <div className="overflow-y-auto max-h-[30vh] content">
                  <span className="font-bold">ওভারভিউ:</span> আল-আজম হাই স্কুল অ্যান্ড কলেজ, বাংলাদেশের সিলেট জেলার, বিশ্বনাথ
                  উপজেলার , আমতৈল এ ১৯৯৪ সালে প্রতিষ্ঠিত হওয়ার পর থেকে মানসম্পন্ন শিক্ষা প্রদানের জন্য নিবেদিত রয়েছে। একটি
                  সরকারী প্রতিষ্ঠান হিসাবে, আমাদের লক্ষ্য হল একটি সামগ্রিক শিক্ষার মাধ্যমে শিক্ষার্থীদের ক্ষমতায়ন করা।
                  একাডেমিক শ্রেষ্ঠত্ব, চরিত্রের বিকাশ এবং সম্প্রদায়ের সেবাকে উৎসাহিত করে। আল-আজম হাই স্কুল অ্যান্ড কলেজ,
                  বাংলাদেশ জাতীয় পাঠ্যপুস্তক পাঠ্যক্রম অনুসরণ করে, ক্লাস ৬ থেকে এইস এস সি উচ্চমাধ্যমিক স্তর পর্যন্ত
                  শিক্ষার্থীদের শিক্ষা দান করা হয়। আল-আজম হাই স্কুল অ্যান্ড কলেজে স্কুল বিভাগে ৭৬৯ জন এবং কলেজ বিভাগে ২৪৩ জন
                  শিক্ষার্থী রয়েছে। ২১টি শ্রেণীকক্ষ, একটি সুসজ্জিত ডিজিটাল কম্পিউটার ল্যাব এবং একটি বিজ্ঞান ল্যাব সহ, আমরা
                  একটি সমৃদ্ধ একাডেমিক পরিবেশ দেয়ার চেষ্টা করি। আল-আজম উচ্চ বিদ্যালয় ও কলেজে মোট ২৪ জন দক্ষ শিক্ষক ও সদস্যের
                  একটি নিবেদিত দল নিয়ে গর্ব করে। আমাদের স্কুল ছাত্র-ছাত্রীদের খেলাধুলায় পারদর্শী হতে উৎসাহিত করে, মাঠে
                  অসংখ্য পুরস্কার অর্জন করে। আমরা সক্রিয়ভাবে সহ-পাঠ্যক্রমিক ক্রিয়াকলাপে অংশগ্রহণ করি, শিক্ষার্থীদের
                  অংশগ্রহণ ও বৃদ্ধি পেতে অনুপ্রাণিত করি। ক্লাস ৬ থেকে এইচএসসি পর্যন্ত শিক্ষার্থীদের জন্য ভর্তি চলছে। আমাদের
                  সাথে যোগাযোগের করতে পারেন, ঠিকানা: জেলা সিলেট, উপজেলা বিশ্বনাথ, ডাকঘর আমতৈল। মোবাইল নম্বর +৮৮০ ১৭১৫-৩৫৬৩৩৮
                  ইমেইল: alazamhighschoolandcollege@gmail.com আমরা আজীবন শিক্ষার্থীদের লালনপালন করতে প্রতিশ্রুতিবদ্ধ। যারা
                  বৈচিত্র্যকে আলিঙ্গন করে, সমালোচনামূলকভাবে চিন্তা করে এবং সমাজে ইতিবাচকভাবে অবদান রাখে। আমাদের শ্রেষ্ঠত্ব,
                  সততা, সম্মান, সহানুভূতি, সহযোগিতা, উদ্ভাবন, সম্প্রদায়ের সম্পৃক্ততা এবং জীবনব্যাপী শিক্ষার মূল্যবোধ আমাদের
                  শিক্ষাগত যাত্রাকে নির্দেশ করে।
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="shadow-emerald-300 shadow-lg">
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-lg lg:text-2xl text-center text-white">অধ্যক্ষ</h1>
            </div>
            <div className="py-3 border-2">
              <img src={principal} className="w-44 h-40 mx-auto border-4 border-green-500" alt="Principal's Photo" />
              <h1 className="text-center pt-1 text-lg font-semibold">এ.কে.এম আব্দুল আহাদ</h1>
              <div className="text-center py-1">
                <span className="text-base font-medium">Contact Number:</span> +880 1715-356338
              </div>
              <div className="text-center py-1">
                <span className="text-base font-medium">Email:</span> examplemail@gmail.com
              </div>
            </div>
          </div>
          <div className="shadow-emerald-300 shadow-lg">
            <div className="mt-4">
              <div className="w-full py-3 bg-green-500">
                <h1 className="text-lg lg:text-2xl text-center text-white">অধ্যক্ষের বাণী</h1>
              </div>
            </div>
            <div className="border-2 p-4">
              {/* <h3 className="text-center mb-2">
                <span>অধ্যক্ষের বাণী:</span>
              </h3> */}
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi optio alias voluptate excepturi officiis
                voluptatibus ipsa incidunt quas maxime, recusandae tempore accusantium magni consectetur quidem esse rem
                reprehenderit beatae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMadrasah;
