import { Tabs } from "../../../components";
import TabCurriculum from "../../../components/tabs/tab-curriculum";
import TabFaqs from "../../../components/tabs/tab-faqs";
import TabInstructor from "../../../components/tabs/tab-instructor";
import TabOverview from "../../../components/tabs/tab-overview";
import TabReview from "../../../components/tabs/tab-review";

const CourseDetailTab = () => {
  return (
    <div>
      <Tabs />
      <TabOverview />
      <TabCurriculum />
      <TabInstructor />
      <TabReview />
      <TabFaqs />
    </div>
  );
};

export default CourseDetailTab;
