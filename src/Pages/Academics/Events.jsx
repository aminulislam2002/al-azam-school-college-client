import event1 from "../../assets/image/event/event1.jpg"; // Import your event image
// Import other event images as needed

const Events = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-4 justify-between">
        {/* Display two images in one row by default */}
        <div className="w-1/2 lg:w-1/3">
          <img src={event1} alt="Event 1" className="w-full h-screen" />
        </div>
        {/* Add more images here as needed */}
      </div>
    </div>
  );
};

export default Events;
