import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";

const OnlineApplyForm = () => {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      fatherName: "",
      motherName: "",
      birthdayDate: "",
      email: "",
      mobileNumber: "",
      parentsMobileNumber: "",
      address: "",
      admissionClass: null, // Set the default value for the Select field
      previousSchoolName: "",
      previousClass: null, // Set the default value for the Select field
      passingYear: "",
      gpa: "",
      sscBoardRoll: "",
      sscRegNumber: "",
    },
  });

  const navigate = useNavigate();

  const [showGuide, setShowGuide] = useState(false); // Add state for showing/hiding the guide

  const onSubmit = (data) => {
    fetch("http://localhost:5000/postApplication", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
        if (data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: "Application Successfully Submit",
            showConfirmButton: true,
            timer: 5000,
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Application Submit Failed! Please try again!",
            showConfirmButton: true,
            timer: 5000,
          });
        }
      });
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide); // Toggle the showGuide state
  };

  return (
    <div className="md:container md:mx-auto mx-10 py-10 md:py-30 md:max-w-xl">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold text-white bg-green-500 uppercase py-5">Online Admission Form</h1>
        <p className="py-1">আপনার আবেদন ফরমটি ইংরেজিতে পূরণ করুন।</p>
        <button
          onClick={toggleGuide}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 focus:outline-none focus:shadow-outline"
        >
          ফর্মপূরণ গাইড
        </button>
        {/* Conditional rendering of the guide */}
        {showGuide && (
          <div className="bg-gray-200 p-4 mt-4 rounded-md">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, illum, necessitatibus facilis rem sed
                recusandae a dolorum enim dolores soluta quaerat. Ullam deserunt, dolor doloremque soluta similique ab
                tenetur accusamus, quia et voluptate obcaecati accusantium cumque! Voluptates aut quasi quaerat maxime unde,
                porro beatae non eius numquam et? Similique, provident!
              </li>
            </ul>
            <button
              onClick={toggleGuide}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded-md focus:outline-none focus:shadow-outline"
            >
              ঠিক আছে
            </button>
          </div>
        )}
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name field  */}
          <div className="text-gray-500 font-bold  text-lg lg:text-2xl py-5">প্রার্থীর ব্যক্তিগত তথ্য</div>
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">প্রার্থীর পূর্ণ নাম:</label>
            <input
              type="text"
              {...register("name")}
              name="name"
              placeholder="Enter your full name"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* father name field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">পিতার নাম:</label>
            <input
              type="text"
              {...register("fatherName")}
              name="fatherName"
              placeholder="Enter Your father's name"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* mother name field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">মাতার নাম::</label>
            <input
              type="text"
              {...register("motherName")}
              name="motherName"
              placeholder="Enter your mother's name"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your birthday filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">জন্ম তারিখ:</label>
            <input
              type="date"
              {...register("birthdayDate")}
              name="birthdayDate"
              placeholder="Enter your date of birth"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your email filed address */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">ই-মেইল ঠিকানা:</label>
            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="Enter your email"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your mobile number filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">মোবাইল নম্বর:</label>
            <input
              type="text"
              {...register("mobileNumber")}
              name="mobileNumber"
              placeholder="Enter your mobile number"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your parents mobile number filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">অভিভাবকের মোবাইল নম্বর:</label>
            <input
              type="text"
              {...register("parentsMobileNumber")}
              name="parentsMobileNumber"
              placeholder="Enter your parents mobile number"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your address filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">স্থায়ী ঠিকানা:</label>
            <input
              type="text"
              {...register("address")}
              name="address"
              placeholder="Enter your address"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your admission class filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">যে ক্লাস পড়তে ইচ্ছুক:</label>
            <Controller
              name="admissionClass"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "Six", label: "Six" },
                    { value: "Seven", label: "Seven" },
                    { value: "Eight", label: "Eight" },
                    { value: "Nine", label: "Nine" },
                    { value: "Ten", label: "Ten" },
                    { value: "Eleven", label: "Eleven" },
                    { value: "Twelve", label: "Twelve" },
                  ]}
                />
              )}
            />
          </div>

          <div className="text-gray-500 font-bold  text-lg lg:text-2xl py-5">প্রার্থীর একাডেমিক তথ্য</div>

          {/* previous School name field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">পূর্ববর্তী স্কুল / কলেজের নাম :</label>
            <input
              type="text"
              {...register("previousSchoolName")}
              name="previousSchoolName"
              placeholder="Enter your previous school name"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your class filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">পরীক্ষার নাম:</label>
            <Controller
              name="previousClass"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "Six", label: "Six" },
                    { value: "Seven", label: "Seven" },
                    { value: "JSC", label: "JSC" },
                    { value: "Nine", label: "Nine" },
                    { value: "SSC", label: "SSC" },
                    { value: "Eleven", label: "Eleven" },
                  ]}
                />
              )}
            />
          </div>

          {/* your passing  filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">পাশের সন:</label>
            <input
              type="text"
              {...register("passingYear")}
              name="passingYear"
              placeholder="Enter your passing year"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your Gpa  filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">জি.পি.এ:</label>
            <input
              type="text"
              {...register("gpa")}
              name="gpa"
              placeholder="Enter your GPA"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your ssc board roll  filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">বোর্ড রোল - এসএসসি (যদি থাকে) :</label>
            <input
              type="text"
              {...register("sscBoardRoll")}
              name="sscBoardRoll"
              placeholder="Enter ssc board roll"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* your ssc registration number  filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-3">রেজিস্ট্রেশন নম্বর - এসএসসি (যদি থাকে) :</label>
            <input
              type="text"
              {...register("sscRegNumber")}
              name="sscRegNumber"
              placeholder="Enter your ssc registration number"
              className="appearance-none border rounded-md w-full py-2 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 lg:py-3 px-3 mt-5 rounded-md w-full focus:outline-none focus:shadow-outline"
            >
              Submit Your Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineApplyForm;
