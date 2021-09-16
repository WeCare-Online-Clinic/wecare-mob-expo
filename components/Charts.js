import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native';
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
  const state = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: `Suger Level `,
        backgroundColor: [
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2,
        // data: monthlyRegisteredUsers,
        data:[2,5,7,3,8,9,4,5,7,3,5,6]
      },
    ],
  }
  {
    return (
      <View style={[ {padding: 10, backgroundColor: '#f2f2f2' , borderRadius: 10, }]}>
        <View
          style={{ backgroundColor: '#3f51b5', textAlign: 'center' }}
        ></View>
        <View>
          
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          
        </View>
      </View>
    )
  }
}
export default PatientStaticChart
// export default withReducer('patientInClinic', reducer)(PatientsInClinicChart)
