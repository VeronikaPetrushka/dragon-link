import CreateDragon from "../components/CreateDragon"
import Screen from "../components/Screen";

const CreateDragonScreen = ({ route }) => {
    const { dragon } = route.params || {};

    return (
        <Screen child={<CreateDragon dragon={dragon} />} middle />
    )
};

export default CreateDragonScreen;