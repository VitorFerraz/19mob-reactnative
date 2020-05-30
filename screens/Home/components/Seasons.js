import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Text } from 'native-base';

const style = StyleSheet.create({
    button: {
        marginBottom: 10
    }
});

const Seasons = ({ handlerSeason, seasonsList }) => {
    console.log(seasonsList)
    return seasonsList
        .map(item => item.season)
        .map(year => (
            <Button 
                style={ style.button }
                onPress={ () => handlerSeason('Season', { year })}
                key={ year }
            >
                <Text>{ year }</Text>
            </Button>
        ));
}

export default Seasons;