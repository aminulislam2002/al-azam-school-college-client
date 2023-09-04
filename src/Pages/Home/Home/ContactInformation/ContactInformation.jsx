import { useForm } from "react-hook-form";

const ContactInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your submit logic
  };

  return (
    <div className="container mx-auto h-screen bg-gray-300">
      <div className="flex justify-center items-center gap-10">
        <div className="w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sed quam, non libero magnam fugiat! Corrupti sint
          est animi quos repudiandae illum possimus culpa, veniam blanditiis minima totam tempora iste?
        </div>
        <div className="w-full" id="Contact">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-blue-950">CONTACT US</h1>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label className="block text-gray-600 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                />
                {errors.name?.message && <p className="text-red-500">Name is required</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-600 text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                />
                {errors.email?.message && <p className="text-red-500">Email is required</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-600 text-sm font-medium mb-2">Your Number</label>
                <input
                  type="number"
                  name="number"
                  {...register("number", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                />
                {errors.number?.message && <p className="text-red-500">Number is required</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-600 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  {...register("message", { required: true })}
                  className="w-full h-40 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                />
                {errors.number?.message && <p className="text-red-500">Message is required</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
