import ContactInformation from "../ContactInformation/ContactInformation";
import MadrasahInformation from "../MadrasahInformation/MadrasahInformation";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <MadrasahInformation></MadrasahInformation>
      <Statistics></Statistics>
      <ContactInformation></ContactInformation>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
