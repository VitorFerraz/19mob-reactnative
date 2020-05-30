import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Text } from 'native-base';

const style = StyleSheet.create({
    button: {
        marginBottom: 10
    }
});

const Races = ({ handlerSeason, racesList }) => {
    return racesList
        .map(item => item.raceName)
        .map(raceName => (
            <Button 
                style={ style.button }
                onPress={ () => handlerSeason('Races', { raceName })}
                key={ raceName }
            >
                <Text>{ raceName }</Text>
            </Button>
        ));
}

export default Races;