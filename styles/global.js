import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  titleText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    // backgroundColor: 'gray',
  },
  column: {
    flexDirection: 'column',
    marginVertical: 15,
  },
  left: {
    alignSelf: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    borderRadius: 10,
    height: 50,
  },
  scrollContainer: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    paddingTop: 0,
  },
  scrollView: { 
  },
  container: {
      flex: 1,
      // backgroundColor: '#459365'
  },
  mainCard: {
      // backgroundColor: '#459365',
      flex: 1,
  },
  card: {
      backgroundColor: '#C4DFE8',
      margin: 10,
      borderRadius: 10,
  },
  cardTitle: {
      backgroundColor: '#1B3E72',
      margin: 10,        
      marginBottom: 0,
      borderRadius: 10,
      padding: 5,
      alignContent: 'center',
  },
  H1: {
      color: '#fff',
      fontSize: 20,
      marginLeft: 5,
      marginRight: 5,
  },
  title: {
    color: '#1B3E72',
    fontSize: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  p: {
      color: '#1B3E72',
      paddingBottom: 3,
      fontSize: 15,
  },
  p18: {
    color: '#1B3E72',
    paddingBottom: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pBold: {
    color: '#1B3E72',
    paddingBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardI: {
      // backgroundColor: '#FFF',
      margin: 10,
      borderRadius: 10,
      paddingLeft: 20,
      paddingTop: 5,
  },
  whitecard: {
    margin: 30,
    marginVertical: 10,
    marginRight: 10,    
  },
  separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boxBorder: { 
    borderWidth: 1, 
    borderColor: '#1B3E72',
    width: 300, 
    height: 400,
    borderRadius: 5,
    justifyContent: 'center',
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }],
    // height: 280,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
});

