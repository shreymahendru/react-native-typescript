import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface CustomComponentProps
{
    message: string;
    objects: {
        one: string;
        two: string;
    };
}

interface State
{
    
}


export class CustomComponent extends React.Component<CustomComponentProps, State>
{
    private _props: CustomComponentProps;
    private _state: State;
    
    
    public constructor(props: CustomComponentProps, state: State)
    {
        console.log(props);
        super(props, state);
        this._props = props;
        this._state = state;
    }   
    
    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this._props.message}</Text>
                <Text style={styles.text}>{this._props.objects.one}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontStyle: "italic",
        fontFamily: "Georgia",
        fontSize: 26,
        color: "#173e43"
    } 
});