import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import Badge from 'components/Badge';
import Separator from 'components/Separator';
import { TextInput } from 'react-native-gesture-handler';



function Notes({ route: { params: { user } } }) {
    const [state, setState] = React.useState({ notes: [], note: '' })

    const renderNote = note => {
        return (
            <View style={styles.rowContainer}>
                <Text>{note}</Text>
                <Separator />
            </View>
        )
    }

    const handleNote = (note) => {
        setState(prev => ({ ...prev, note }))
    }

    const handleSubmit = () => {
        setState(prev => ({ notes: prev.notes.concat(prev.note) }))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Badge {...user} />
            <ScrollView>
                {state.notes.map(note => renderNote(note))}
            </ScrollView>
            <View style={styles.footerContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={state.note}
                    onChangeText={handleNote}
                    placeholder='New Note'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{ height: 50, backgroundColor: 'black' }} /> */}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Notes;