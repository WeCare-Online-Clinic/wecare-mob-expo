import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            <FontAwesome5  name='bars' style={styles.icon} size={25} color={'#1B3E72'} onPress={openMenu}/>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
       width: '100%',
       height: '100%', 
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#1B3E72',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        right: 10,
    },

})




