// import * as React from "react";
// import { Button, StyleSheet, Text, View, TouchableHighlight } from "react-native";

// export interface Props
// {
//     name: string;
//     level?: number;
//     onIncrement?: () => void;
//     onDecrement?: () => void;
// }

// export interface State
// {
    
// }

// export class Hello extends React.Component<Props, State>
// {
//     private _props: Props;
    
    
//     public constructor(props: Props, state: State)
//     {
//         super(props, state);
//         this._props.name = props.name;
//         this._props.level = props.level;
//         this._props.onIncrement = props.onIncrement;
//         this._props.onDecrement = props.onDecrement;
//     }
    
//     public render()
//     {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.largeText}>
//                     First View with Button!
//                 </Text>
//                 <TouchableHighlight
//                     style={styles.button}
//                     onPress={this.onButtonPress.bind(this)}>
//                     <Text style={styles.buttonText}>
//                         Button here!
//                     </Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#dddfd4"
//     },
//     largeText: {
//         flex: 1,
//         fontSize: 52,
//         fontFamily: "HelveticaNeue-CondensedBold",
//         paddingLeft: 20,
//         paddingRight: 20,
//         paddingTop: 40,
//         color: "#173e43"
//     },
//     button: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         alignSelf: "stretch",
//         backgroundColor: "#3fb0ac",
//     },
//     buttonText: {
//         fontFamily: "HelveticaNeue-CondensedBold",
//         color: "#fae596",
//     }
// });