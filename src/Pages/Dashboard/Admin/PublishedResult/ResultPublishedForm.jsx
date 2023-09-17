import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useBaseURL from "../../../../Hooks/useBaseURL";
import Swal from "sweetalert2";

const ResultPublishedForm = () => {
  const { control, handleSubmit, reset } = useForm();
  const [visibleDivs, setVisibleDivs] = useState([0]);
  const [dynamicFormData, setDynamicFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url] = useBaseURL();

  const handleAddDiv = () => {
    setVisibleDivs((prevVisibleDivs) => [...prevVisibleDivs, prevVisibleDivs.length]);
  };

  const onSubmit = (data) => {
    const currentYear = new Date().getFullYear();
    // Create an object to hold the data for each visibleDiv
    const visibleDivData = visibleDivs.map((divIndex) => ({
      subject: data[`input${divIndex}_1`],
      marks: data[`input${divIndex}_2`],
    }));
    // Combine data from non-dynamic and dynamic fields
    const formData = {
      studentName: data.studentName,
      birthdayDate: data.birthdayDate,
      fatherName: data.fatherName,
      motherName: data.motherName,
      class: parseFloat(data.class),
      roll: parseFloat(data.roll),
      passingYear: currentYear,
      results: visibleDivData,
    };
    // Push the formData into the array
    setDynamicFormData([...dynamicFormData, formData]);

    setIsLoading(true);
    fetch(`${url}/postResult`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: "Result published Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add result!",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Result Published Form</h1>
      {isLoading ? (
        <>
          <div className="text-center my-4">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-5">
              <div className="mb-5 flex justify-center items-center gap-10">
                <Controller
                  name="studentName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Name of Student"
                    />
                  )}
                />
                <Controller
                  name="birthdayDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Date of Birth"
                    />
                  )}
                />
              </div>
              <div className="mb-5 flex justify-center items-center gap-10">
                <Controller
                  name="fatherName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Father's Name"
                    />
                  )}
                />
                <Controller
                  name="motherName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Mother's Name"
                    />
                  )}
                />
              </div>
              <div className="mb-5 flex justify-center items-center gap-10">
                <Controller
                  name="class"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Class"
                    />
                  )}
                />
                <Controller
                  name="roll"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Roll No."
                    />
                  )}
                />
              </div>
            </div>

            {visibleDivs.map((divIndex) => (
              <div key={divIndex} className="mb-5 flex justify-center items-center gap-10">
                <Controller
                  name={`input${divIndex}_1`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="subject">Select Subject</option>
                      <option value="Bangla 1st">Bangla 1st</option>
                      <option value="Bangla 2nd">Bangla 2nd</option>
                      <option value="English 1st">English 1st</option>
                      <option value="English 2nd">English 2nd</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="Higher Mathematics">Higher Mathematics</option>
                      <option value="ICT">ICT</option>
                    </select>
                  )}
                />
                <Controller
                  name={`input${divIndex}_2`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:border-blue-500"
                      placeholder="Marks"
                    />
                  )}
                />
              </div>
            ))}

            <div className="flex justify-center items-center">
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
      <div className="flex justify-end">
        <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddDiv}>
          Add One
        </button>
      </div>
    </div>
  );
};

export default ResultPublishedForm;
