import { Image, StyleSheet, Text, View } from 'react-native';
import Rating from './Rating';
export default function ProductItem({ image, rating, name }) {
    return (
        <View style={styles.songItem}>
            <Image height={80} width={80} source={{
                uri: image
            }}></Image>
            <Text style={{ color: 'white', width: 100 }}>{name}</Text>
            <Rating noIncrememnt={true} value={rating} />
        </View>
    )
}


const styles = StyleSheet.create({
    songItem: {
        height: 100,
        backgroundColor: '#111f1f',
        flexDirection: 'row',
        justifyContent: 'space-between', // vertical
        alignItems: 'center',
        width: '100%',
        padding: 20,
        margin: 5,
        elevation:10,
        shadowColor:'black'
    }
});
