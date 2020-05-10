import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';

import Separator from 'components/Separator';
import Badge from 'components/Badge';

function Repositories({ navigation: { navigate }, route: { params: { user } } }) {
    const [state, setState] = React.useState({ list: [], loading: true, error: false })
    const { list, loading, error } = state;
    React.useEffect(() => {
        fetch(user.repos_url)
            .then(response => response.json())
            .then(data => {
                const list_elements = data.map((repo, index) => {
                    return (
                        <View key={index} style={styles.rowContainer}>
                            <TouchableOpacity onPress={() => navigate('WEB', { url: repo.html_url })}>
                                <Text style={styles.name}>{repo.name}</Text>
                            </TouchableOpacity>
                            <Text style={styles.description}>{repo.description ? repo.description : ''}</Text>
                            <Separator />
                        </View>
                    )
                })
                setState(prev => ({ ...prev, loading: false, list: list_elements }))
            })
            .catch(error => setState(prevState => ({ ...prevState, loading: false, error: true })))
    }, [])
    return (
        <ScrollView style={styles.container}>
            <Badge {...user} />
            {loading ? <ActivityIndicator size='large' /> : list}
            {error && <Text>Something went Wrong!!</Text>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 10
    }
});

export default Repositories;