import Settings from "../components/Settings"
import Screen from "../components/Screen";

const SettingsScreen = () => {
    return (
        <Screen child={<Settings />} middle />
    )
};

export default SettingsScreen;