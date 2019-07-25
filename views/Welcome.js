import React, { Component } from 'react'
import { Image, Text, TextInput, View, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native'
import {connect} from 'react-redux'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    console.log("Props :", this.props)
    return (
      <ImageBackground style={{width: "100%", height: "100%"}} source={require('../Images/BackgroundResetPassword.png')}>
      <View style={{backgroundColor: "transparent", flex: 1,  alignItems: "center"}}>
        <Image source={require("../Images/welcome.png")} style={{marginTop: 124, marginLeft: 29, marginRight: 29, alignSelf: "center"}}/>
        <View style={{marginTop: 86, marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize: 28, alignSelf: "center", color: "#39434D", fontWeight: "bold"}}>Bienvenue, Name !</Text>
          <Text style={{fontSize: 16, lineHeight: 24, marginTop: 10, textAlign: "center", color: "#6E8595", fontWeight: "500"}}>On va commencer par <Text style={{color: "#82DB35"}}>recenser ensemble tes abonnements. Plus tu mettras d’informations</Text>, plus ideel pourra t’être utile.</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor: "#82DB35", height: 80, alignItems: 'center', width: "100%", justifyContent: "center"}}>
        <View style={{flexDirection:"row", flex: 1, marginBottom: -10, alignItems: "center", textAlign: "center"}}>
          <Text style={{color: "white", fontSize: 18, fontWeight: "600", lineHeight: 27}}>Suivant </Text>
          <Image source={require('../Images/i-arrow-next.png')} style={{marginLeft: 8, height: 18, width: 18}}/>
        </View>
        <View style={{borderBottomColor: "white", borderBottomWidth: 4, marginBottom: 8, width: "30%", justifyContent: "flex-end"}}></View>
      </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  const {user} = state;
  return {
    user
  }
};

export default connect(mapStateToProps, {})(Welcome)
