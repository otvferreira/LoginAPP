import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen = ({ navigation }) => {
    const handleLogout = async () => {
        const auth = getAuth();
        await signOut(auth);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
