import DragonDetails from "../components/DragonDetails"
import Screen from "../components/Screen";

const DragonDetailsScreen = ({ route }) => {
    const { dragon } = route.params;

    return (
        <Screen child={<DragonDetails dragon={dragon} />} plain />
    )
};

export default DragonDetailsScreen;