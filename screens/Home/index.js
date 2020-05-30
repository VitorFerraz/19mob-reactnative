import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Seasons from './components/Seasons';

class Home extends Component {

    state = {
        seasonList: []
    }
    
    componentDidMount() { 
        fetch(`https://ergast.com/api/f1/seasons.json?limit=100`)
        .then((response) => response.json())
        .then((body) => {
              let seasonList = body.MRData.SeasonTable.Seasons.reverse().slice(0,10)
              this.setState({ seasonList })
          })
          .catch((reason) => {
            console.log(reason);
          });
    }
    render() {
        return (
          <SafeAreaView>
            <Seasons
              seasonsList={this.state.seasonList}
              handlerSeason={this.props.navigation.navigate}
            />
          </SafeAreaView>
        );
    }
}

export default Home;