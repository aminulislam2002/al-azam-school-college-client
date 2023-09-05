import ContactInformation from "../ContactInformation/ContactInformation";
import MadrasahInformation from "../MadrasahInformation/MadrasahInformation";
import Statistics from "../Statistics/Statistics";
import TeachersSection from "../TeachersSection/TeachersSection";

const Home = () => {
  return (
    <div>
      <MadrasahInformation></MadrasahInformation>
      <TeachersSection></TeachersSection>
      <Statistics></Statistics>
      <ContactInformation></ContactInformation>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
