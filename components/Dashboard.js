import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation : {navigate}, route: { params: { user } } }) => {

    const profileHandler = () => {
        navigate('PROFILE', {user})
    }

    const repositoryHandler = () => {
        navigate('REPOS', {user})
    }

    const noteHandler = () => {
        navigate('NOTES', {user})
    }

    return (
        <View style={styles.container}>
            <View style={styles.profilePicBox}>
                <Image source={{uri:user.avatar_url}} 
                style={styles.image}
                />
            </View>
            <TouchableOpacity
                style={[styles.box, styles.blue]}
                onPress={profileHandler}
            >
                <Text style={styles.buttonText}>Profile Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.box, styles.pink]}
                onPress={repositoryHandler}
            >
                <Text style={styles.buttonText}>Repositories</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.box, styles.purple]}
                onPress={noteHandler}
            >
                <Text style={styles.buttonText}>Notes</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
    },
    blue: {
        backgroundColor: 'powderblue',
    },
    purple: {
        backgroundColor: 'violet'
    },
    pink: {
        backgroundColor: 'pink'
    }
});
export default Dashboard;