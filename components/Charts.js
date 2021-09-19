import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Dimensions } from 'react-native';
import {styles} from '../styles/global'
import { style } from 'dom-helpers';

const useStyles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'white',
  },
})



const PatientStaticChart = ({stat}) => {


  let statLabels=[];
  let data1=[];
  let data2=[];

  let dataLength=stat.dataList && stat.dataList.length;
  for(var i=0; i<dataLength; i++){
    statLabels[i] = stat.dataList[i].date.split("21-").pop();    
  }
  for(var j=0; j<dataLength; j++){
    data1[j]=stat.dataList[j].data1;   
  }  
  for(var z=0; z<dataLength; z++){
    data2[z]=stat.dataList[z].data2;
  } 

  console.log('TATATATATATAAA',statLabels)

  const windowWidth = Dimensions.get('window').width;
  
  const state = {
    labels: statLabels,
    
    datasets: [
      
       { 
         data: data1,
         color: (opacity = 1) => `rgba(255, 51, 108 , ${opacity})`, 
         strokeWidth: 3 

      },
      { data: data2,
        color: (opacity = 1) => `rgba(41, 251, 157  , ${opacity})`, 
        strokeWidth: 2 
      }
    ],
    legend: [`${stat.field1}`, `${stat.field2}`],
  }
  {
    return (
      <View style={[ {borderRadius: 10, }]}>
        <View
          style={{ backgroundColor: '#3f51b5', textAlign: 'center' }}
        ></View>
        <View>
          
            <LineChart
                data={state}
                width={windowWidth-windowWidth*0.2} // from react-native
                height={220}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                // backgroundColor: [
                //     'rgba(75,192,192,0.5)',
                //     'rgba(0,0,205,0.5)',
                //     'rgba(75,192,192,0.5)',
                //     'rgba(0,0,205,0.5)',
                //     'rgba(75,192,192,0.5)',
                //     'rgba(0,0,205,0.5)',
                //     'rgba(75,192,192,0.5)',
                //     'rgba(0,0,205,0.5)',
                //     'rgba(75,192,192,0.5)',
                //     'rgba(0,0,205,0.5)',
                //     'rgba(75,192,192,0.5)',
                //     'rgba(0,0,205,0.5)',
                //   ],
                backgroundGradientFrom: "#f2f2f2",
                backgroundGradientTo: "#f2f2f2",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(27, 62,114,0.3)`,
                labelColor: (opacity = 1) => `#1B3E72`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#1B3E72"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 10
                }}
              
            />
          
        </View>
      </View>
    )
  }
}
export default PatientStaticChart
// export default withReducer('patientInClinic', reducer)(PatientsInClinicChart)
