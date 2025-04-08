import { ImageBackground } from "react-native"

const Screen = ({ child, full, middle, plain, intro }) => {

    const image = full ? require('../assets/back/1.png')
        : middle ? require('../assets/back/2.png')
            : plain ? require('../assets/back/3.png')
                : intro ? require('../assets/back/Onboarding.png')
                    : null;
    
    return (
        <ImageBackground source={image} style={{ flex: 1 }}>
            {child}
        </ImageBackground>
    )
};

export default Screen;