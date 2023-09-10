import NoticeHeadline from "../../Shared/NoticeHeadline/NoticeHeadline";
import AboutInstitute from "../AboutInstitute/AboutInstitute";
import ContactInformation from "../ContactInformation/ContactInformation";
import ImportanceLinksSection from "../ImportanceLinksSection/ImportanceLinksSection";
import LocationAndAddress from "../LocationAndAddress/LocationAndAddress";
import InstitutePhotoGallery from "../InstitutePhotoGallery/InstitutePhotoGallery";
import Statistics from "../Statistics/Statistics";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopSlider from "../TopSlider/TopSlider";
import VideoWithInstitute from "../VideoWithInstitute/VideoWithInstitute";
import InstituteInfoAndNotice from "../InstituteInfoAndNotice/InstituteInfoAndNotice";
import InstituteInformation from "../InstituteInformation/InstituteInformation";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <NoticeHeadline></NoticeHeadline>
      <TopSlider></TopSlider>
      <InstituteInformation></InstituteInformation>
      <AboutInstitute></AboutInstitute>
      <TeachersSection></TeachersSection>
      <InstituteInfoAndNotice></InstituteInfoAndNotice>
      <Statistics></Statistics>
      <InstitutePhotoGallery></InstitutePhotoGallery>
      <VideoWithInstitute></VideoWithInstitute>
      <ImportanceLinksSection></ImportanceLinksSection>
      {/* <ContactInformation></ContactInformation> */}
      <LocationAndAddress></LocationAndAddress>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
