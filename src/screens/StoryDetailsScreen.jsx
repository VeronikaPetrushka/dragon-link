import StoryDetails from "../components/StoryDetails"
import Screen from "../components/Screen";

const StoryDetailsScreen = ({ route }) => {
    const { story } = route.params;

    return (
        <Screen child={<StoryDetails story={story} />} plain />
    )
};

export default StoryDetailsScreen;