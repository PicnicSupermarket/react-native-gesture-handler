import * as React from 'react';
import { ScrollView as RNScrollView, Switch as RNSwitch, TextInput as RNTextInput, DrawerLayoutAndroid as RNDrawerLayoutAndroid, FlatList as RNFlatList, } from 'react-native';
import createNativeWrapper from '../handlers/createNativeWrapper';
export const ScrollView = createNativeWrapper(RNScrollView, {
    disallowInterruption: true,
    shouldCancelWhenOutside: false,
});
export const Switch = createNativeWrapper(RNSwitch, {
    shouldCancelWhenOutside: false,
    shouldActivateOnStart: true,
    disallowInterruption: true,
});
export const TextInput = createNativeWrapper(RNTextInput);
export const DrawerLayoutAndroid = createNativeWrapper(RNDrawerLayoutAndroid, { disallowInterruption: true });
export const FlatList = React.forwardRef((props, ref) => (<RNFlatList ref={ref} {...props} renderScrollComponent={(scrollProps) => <ScrollView {...scrollProps}/>}/>));
