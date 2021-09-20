import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import  {styles} from "../styles/global";
import { useSelector } from "react-redux";

const SideBar = (props) => {

    const userData = useSelector(state => state.login.user[0])

    
    return(
        <ScrollView>
            <ImageBackground 
                source={require("./menuback.png")}
                style={{ width: undefined, padding: 16, paddingTop: 80}}
            >
                <View style={styles.row}>
                    <View style={{flex: 9}}>
                        <Image source={require('../src/Profile/profile.png')} style={localStyles.profile}/>
                    </View>
                    <View style={{flex: 15}}>
                        <Text style={[styles.H1, {fontSize: 25, marginTop: 10, justifyContent: 'flex-end'}]}>{userData.name}</Text>
                    </View>
                </View>
               
            </ImageBackground>          
            
            <View>
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3, 
        borderColor: '#fff',
    }

})

export default  SideBar

