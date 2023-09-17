import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const ResultPublishedForm = () => {
  const { control, handleSubmit } = useForm();
  const [visibleDivs, setVisibleDivs] = useState([0]);

  const handleAddDiv = () => {
    setVisibleDivs((prevVisibleDivs) => [...prevVisibleDivs, prevVisibleDivs.length]);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Result Published Form</h1>
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
                  <option value="Option">Select Subject</option>
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                  <option value="Option4">Option 4</option>
                  <option value="Option5">Option 5</option>
                  <option value="Option6">Option 6</option>
                  <option value="Option7">Option 7</option>
                  <option value="Option8">Option 8</option>
                  <option value="Option9">Option 9</option>
                  <option value="Option10">Option 10</option>
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
      <div className="flex justify-end">
        <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddDiv}>
          Add One
        </button>
      </div>
    </div>
  );
};

export default ResultPublishedForm;
