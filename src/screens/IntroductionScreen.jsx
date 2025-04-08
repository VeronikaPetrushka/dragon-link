import Introduction from "../components/Introduction"
import Screen from "../components/Screen";

const IntroductionScreen = () => {
    return (
        <Screen child={<Introduction />} intro />
    )
};

export default IntroductionScreen;