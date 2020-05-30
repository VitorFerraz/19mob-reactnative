import React, { Component, useEffect, useState } from 'react';

import { Text, View } from 'react-native';
import Races from './components/Races';

const Season = (props) => {

    const [racesList, setRaces] = useState([]);

    useEffect(() => {
        fetch(`https://ergast.com/api/f1/${props.route.params.year}.json`)
            .then((response) => response.json())
            .then((body) => {
                let racesList = body.MRData.RaceTable.Races
                setRaces(racesList);
            })
            .catch((reason) => {
                console.log(reason);
            });
    }, [])

    return(
        <View>
            <Races
                racesList={racesList}
                handlerSeason={props.navigation.navigate}
            />
        </View>
    );
}

// class Season extends Component {
//     state = {
//         racesList: []
//     }
    
//     componentDidMount() { 
//         fetch(`https://ergast.com/api/f1/${this.props.route.params.year}.json`)
//           .then((response) => response.json())
//           .then((body) => {
//               let racesList = body.MRData.RaceTable.Races
//               this.setState({ racesList })
//           })
//           .catch((reason) => {
//             console.log(reason);
//           });
//     }
//     render() {
//         return (
//           <View>
//             <Races
//               racesList={this.state.racesList}
//               handlerSeason={this.props.navigation.navigate}
//             />
//           </View>
//         );
//     }
// }

export default Season;