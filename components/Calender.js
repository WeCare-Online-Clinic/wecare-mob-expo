import React from 'react';
import{ Text, View, } from 'react-native'; 
import { Calendar } from 'react-native-calendars';
 
const Calender = () =>{
    return(
        <>
        <Calendar 
            style={{
                paddingBottom: 5, 
                width: 350, 
                backgroundColor: '#C4DFE8', 
                borderTopLeftRadius: 20, 
                borderTopRightRadius: 20
            }}   
            
        />
        </>
    )
}

export default Calender;