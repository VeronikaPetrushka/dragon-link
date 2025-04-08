import MyStories from "../components/MyStories"
import Screen from "../components/Screen";

const MyStoriesScreen = () => {
    return (
        <Screen child={<MyStories />} middle />
    )
};

export default MyStoriesScreen;