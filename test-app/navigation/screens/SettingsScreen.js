import * as React from 'react';
import { View, Text } from 'react-native';
import GoogleAuth from '../../components/GoogleAuth';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <GoogleAuth />
        </View>
    );
}