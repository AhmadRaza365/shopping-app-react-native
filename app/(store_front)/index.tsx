import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const index = () => {
    const PlaceHolderImage = require("@/assets/images/background-image.png")
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>

                <Image
                    source={PlaceHolderImage}
                    style={styles.image}
                />

            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                    <Text style={styles.buttonLabel}>Button</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
        borderColor: "red",
        borderWidth: 1
    },
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
})