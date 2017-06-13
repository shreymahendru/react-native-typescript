import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomComponent } from "./components/custom-component";

interface State
{
    
}

export interface Props
{
    
}

export class SecondScreen extends React.Component<Props, State>
{
    private _props: Props;
    private _state: State;
    
    static navigationOption = {
        title: "Second"
    };
    
    public constructor(props: Props, state: State)
    {
        super(props, state);
        this._props = props;
        this._state = state;
    }
    
    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>Hello</Text>
                <CustomComponent 
                    message="bruh"
                    objects={{    
                        "one": "Object one",
                        "two": "Object two"
                    }} />
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
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#173e43"
    }
});