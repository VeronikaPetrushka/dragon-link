import CreateStory from "../components/CreateStory"
import Screen from "../components/Screen";

const CreateStoryScreen = ({ route }) => {
    const { story } = route.params || {};

    return (
        <Screen child={<CreateStory story={story} />} middle />
    )
}; 

export default CreateStoryScreen;