import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useBaseURL from "../../../../Hooks/useBaseURL";

const AddNotice = () => {
  const [url] = useBaseURL();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsLoading(true);

    fetch(`${url}/postNotices`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard/manageNotices");
        if (data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: "Notice Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add notice!",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mx-20">
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Add a Notice</h1>
      </div>
      {isLoading ? (
        <>
          <div className="text-center my-4">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="noticeHeadline" className="block text-gray-700 text-sm font-bold mb-2">
                Notice Headline
              </label>
              <input
                type="text"
                id="noticeHeadline"
                name="noticeHeadline"
                className="form-input mt-1 block w-full"
                {...register("noticeHeadline", { required: "Notice Headline is required" })}
              />
              {errors.noticeHeadline && <p className="text-red-500 mt-2">{errors.noticeHeadline.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="noticeDescription" className="block text-gray-700 text-sm font-bold mb-2">
                Notice Description
              </label>
              <textarea
                id="noticeDescription"
                name="noticeDescription"
                className="form-textarea mt-1 block w-full"
                rows="5"
                {...register("noticeDescription", { required: "Notice Description is required" })}
              />
              {errors.noticeDescription && <p className="text-red-500 mt-2">{errors.noticeDescription.message}</p>}
            </div>

            <div className="flex justify-center items-center">
              <div className="mb-4 w-full">
                <label htmlFor="publishedDateTime" className="block text-gray-700 text-sm font-bold mb-2">
                  Published Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="publishedDateTime"
                  name="publishedDateTime"
                  className="form-input mt-1 block w-full"
                  {...register("publishedDateTime", { required: "Published Date and Time is required" })}
                />
                {errors.publishedDateTime && <p className="text-red-500 mt-2">{errors.publishedDateTime.message}</p>}
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-1/3"
              >
                ADD NOTICE
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddNotice;
