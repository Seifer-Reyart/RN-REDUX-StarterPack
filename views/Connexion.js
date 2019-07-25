import React, {Component} from 'react'
import {Image, Text, TextInput, View, Animated, Dimensions, Keyboard, UIManager, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import {connexion} from '../Store/Actions/user'

const { State: TextInputState } = TextInput;

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            shift: new Animated.Value(0)
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }



    async handleSubmit() {
        const {email, password, shift} = this.state;
        /*
        const {email, password} = this.state;
        try {
            let res = await this.props.connexion(email, password)
            if (res.success) {
                this.props.navigation.navigate('Welcome')
            }
        } catch (error) {
          alert("Une erreur est survenue, veuillez réessayer...")
        }
        */

        try {
            console.log("first");
            let res = await this.props.connexion(email, password);
            console.log("second");
            if (res.success) {
                console.log(res);
                this.props.navigation.navigate('Welcome')
            }
        } catch (error) {
            console.log(error);
            alert("Une erreur est survenue, veuillez réessayer...")
        }

    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ).start();
        });
    };

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    };


    render() {
        const {shift} = this.state;
        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
                <Image source={require("../Images/IdeelTextLogoConnexion.png")} style={{alignSelf: "center"}}/>
                <View style={{marginLeft: 20, marginRight: 20, marginTop: 78}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#39434D"}}>À partir de maintenant, <Text
                        style={{fontSize: 20, fontWeight: "bold", color: "#82DB35"}}> fini les
                        problèmes</Text> d'abonnements !</Text>
                </View>
                <View style={styles.viewInput}>
                    <Image source={require('../Images/connexionMailIcon.png')} style={{alignSelf: "center"}}/>
                    <TextInput
                        style={{height: 40, alignSelf: "center"}}
                        placeholder="E-mail"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.viewInput}>
                    <Image source={require('../Images/passwordIcon.png')} style={{alignSelf: "center"}}/>
                    <TextInput
                        style={{height: 40, alignSelf: "center", width: "70%"}}
                        placeholder="Mot de passe"
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        value={this.state.password}
                    />
                    <View style={{flex: 1, alignSelf: "center"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LostPassword')} style={{
                            alignSelf: "center",
                            borderBottomColor: "#6E8595",
                            borderBottomWidth: 1
                        }}>
                            <Text style={{fontWeight: "600", fontSize: 12, lineHeight: 18, color: "#6E8595"}}>Oublié
                                ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={this.handleSubmit}
                    style={{
                        backgroundColor: "#82DB35",
                        marginLeft: 20,
                        marginRight: 20,
                        width: "90%",
                        borderRadius: 100,
                        alignItems: "center",
                        height: 40,
                        marginTop: 20,
                        justifyContent: "center"
                    }}>
                    <Text style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "600",
                        lineHeight: 21,
                        alignItems: 'center'
                    }}>Connexion</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                    <View style={{
                        height: "80%",
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(0, 0, 0, 0.5)",
                        width: "38%"
                    }}></View>
                    <Text style={{
                        fontSize: 15,
                        color: "#6E8595",
                        marginLeft: 8,
                        marginRight: 8,
                        marginTop: 20,
                        fontWeight: "500"
                    }}>ou</Text>
                    <View style={{
                        height: "80%",
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(0, 0, 0, 0.5)",
                        width: "38%"
                    }}></View>
                </View>
                <TouchableOpacity
                    onPress={() => this.connexion()}
                    style={{
                        backgroundColor: "#3C579E",
                        marginLeft: 20,
                        marginRight: 20,
                        width: "90%",
                        borderRadius: 100,
                        alignItems: "center",
                        height: 40,
                        marginTop: 20,
                        justifyContent: "center"
                    }}>
                    <Text
                        style={{color: "white", fontSize: 14, fontWeight: "600", lineHeight: 21, alignItems: 'center'}}>Continuer
                        avec Facebook</Text>
                </TouchableOpacity>
                <View style={{justifyContent: "flex-end", flex: 1, marginBottom: "7%", alignItems: "center"}}>
                    <Text style={{fontSize: 15, lineHeight: 22, color: "#6E8595", fontWeight: "bold"}}>Pas encore de
                        compte ?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Inscription')}>
                        <Text style={{fontSize: 15, lineHeight: 22, color: "#82DB35", fontWeight: "bold"}}> Inscris-toi
                            !</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    //Pour une meilleure visibilité du code, mettre les styles ici

    container: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 50,
        alignItems: "center"
    },
    viewInput: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 8,
        height: 50,
        borderColor: "rgba(0, 0, 0, 0.3)",
        width: "90%"
    }
})


const mapStateToProps = state => {
    const {user} = state;
    return {
        user
    }
};
/*
const mapDispatchToProps = dispatch => {
    return {
        connexion
    };
};
*/

export default connect(mapStateToProps, {connexion})(Connexion)
