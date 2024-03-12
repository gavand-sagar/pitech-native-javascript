import { Button, View, StyleSheet } from "react-native";

export function ButtonList() {
    let items = ["Dashboard", "Forms", "Reports", "Profile"]

    return (
        <View style={styles.container}>
            {items.map(x => <Button key={x} title={x}></Button>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});