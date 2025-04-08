import DragonGame from "../components/DragonGame"
import Screen from "../components/Screen";

const DragonGameScreen = () => {
    return (
        <Screen child={<DragonGame />} middle />
    )
};

export default DragonGameScreen;