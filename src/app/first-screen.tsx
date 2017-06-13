import * as React from "react";
import { NavigationComponentProps } from "react-navigation";
import { View, TouchableHighlight, StyleSheet, Text } from "react-native";

interface Props
{
    navigation: any;
}

interface State
{
    
}


export class FirstScreen extends React.Component<Props, State>
{
    private _props: NavigationComponentProps<any>;
    private _state: State;
    
    public static navigationOption = {
        title: "First"
    };  
    
    
    public constructor(props: NavigationComponentProps<any>, state: State)
    {
        super(props, state);   
        console.log(props);
        this._props = props;
        this._state = state;
    }
    
    public onButtonPress()
    {
        this._props.navigation.dispatch({ type: "Navigate", routeName: "Second" });
    }
    
    public render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>
                    First View with Button!
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        Button here!
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dddfd4"
    },
    largeText: {
        flex: 1,
        fontSize: 52,
        fontFamily: "HelveticaNeue-CondensedBold",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        color: "#173e43"
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#3fb0ac",
    },
    buttonText: {
        fontFamily: "HelveticaNeue-CondensedBold",
        color: "#fae596",
    }
});