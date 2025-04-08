import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Introduction = () => {
    const navigation = useNavigation();

    return (
        <View style={{width: '100%', height: '100%'}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainScreen')}>
                <Image source={require('../assets/buttons/start.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    button: {
        width: 345,
        height: 52,
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        zIndex: 10
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }

});

export default Introduction;