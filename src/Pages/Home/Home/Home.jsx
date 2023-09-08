import AboutMadrasah from "../AboutMadrasah/AboutMadrasah";
import ContactInformation from "../ContactInformation/ContactInformation";
import ImportanceLinksSection from "../ImportanceLinksSection/ImportanceLinksSection";
import LocationAndAddress from "../LocationAndAddress/LocationAndAddress";
import MadrasahInfoAndNotice from "../MadrasahInfoAndNotice/MadrasahInfoAndNotice";
import MadrasahInformation from "../MadrasahInformation/MadrasahInformation";
import MadrasahPhotoGallery from "../MadrasahPhotoGallery/MadrasahPhotoGallery";
import Statistics from "../Statistics/Statistics";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopSlider from "../TopSlider/TopSlider";
import VideoWithMadrasah from "../VideoWithMadrasah/VideoWithMadrasah";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <TopSlider></TopSlider>
      <MadrasahInformation></MadrasahInformation>
      <AboutMadrasah></AboutMadrasah>
      <TeachersSection></TeachersSection>
      <MadrasahInfoAndNotice></MadrasahInfoAndNotice>
      <Statistics></Statistics>
      <MadrasahPhotoGallery></MadrasahPhotoGallery>
      <VideoWithMadrasah></VideoWithMadrasah>
      <ImportanceLinksSection></ImportanceLinksSection>
      {/* <ContactInformation></ContactInformation> */}
      <LocationAndAddress></LocationAndAddress>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
