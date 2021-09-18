import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Dimensions } from 'react-native';
import {styles} from '../styles/global'

const useStyles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'white',
  },
})



const PatientStaticChart = () => {
  // const reducerData = useSelector(
  //   ({ patientInClinic }) => patientInClinic.doctorDashboard
  // )
  // if (!reducerData) {
  //   window.location.reload()
  // }
  // const monthlyRegisteredUsers = reducerData.patientCountInClinic
//   const materializeUIClasses = useStyles()
const windowWidth = Dimensions.get('window').width;
  const state = {
    labels: [
      'Jan | ',
      'Feb | ',
      'Mar | ',
      'Apr | ',
      'May | ',
      'Jun | ',
      'Jul | ',
      'Aug | ',
      'Sep | ',
      'Oct | ',
      'Nov | ',
      'Dec',
    ],
    datasets: [
      
       { data: [2,5,7,3,8,9,4,5,7,3,5,6]
      }
    ],
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
                color: (opacity = 1) => `rgba(75,192,192,0.5)`,
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
