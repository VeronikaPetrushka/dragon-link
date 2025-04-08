import Main from "../components/Main"
import Screen from "../components/Screen";

const MainScreen = () => {
    return (
        <Screen child={<Main />} full />
    )
};

export default MainScreen;