import { View, Text , Image, StyleSheet, ScrollView} from 'react-native';
import Hamburger from '../assets/menubutton.png';
import ISWLogo from '../assets/grafik2.png';
import React from 'react';
import Card from '../shared/card';
import Category from './components/Category';
import CirlceCard from './components/Explore/CirlceCard';
import Paybills from '../assets/paybills.png';
import Transfers from '../assets/transfers.png';
import Virtualcard from '../assets/virtualcard.png';
import Qrpayments from '../assets/qrpayment.png';
import Buyairtime from '../assets/buyairtime.png';
import Loans from '../assets/loans.png';
import HomeIcon from '../assets/homeicon.png';
import SettingIcon from '../assets/Settings.png';
import SideBar from './SideBar';



const Accounts = () => {
  return (
    <>
    <View style={styles.root}>
          <View style={styles.arrangeTop}>
              <Image source={Hamburger} />
              <Image source={ISWLogo} />
          </View>
          <Text style={styles.macc}>My Accounts</Text>
          <View style={{ height: 130, }}>
              <ScrollView scrollEventThrottle={16} horizontal>
                  <Category account='Accounts: 123456789' balance='Balance: ₦10,000' />
                  <Category account='Accounts: 123456789' balance='Balance: ₦20,000' />
                  <Category account='Accounts: 123456789' balance='Balance: ₦30,000' />
                  <Category account='Accounts: 123456789' balance='Balance: ₦40,000' />
                  <Category account='Accounts: 123456789' balance='Balance: ₦50,000' />
              </ScrollView>
          </View>
          <View style={styles.circlecardrow}>
              <CirlceCard textImage='Transfers'>
                  <Image source={Transfers} />
              </CirlceCard>

              <CirlceCard textImage='Pay Bills'>
                  <Image source={Paybills} />
              </CirlceCard>
              <CirlceCard textImage='Buy Airtime'>
                  <Image source={Buyairtime} />

              </CirlceCard>
          </View>
          <View style={styles.circlecardrow1}>
              <CirlceCard textImage='QR Payment'>
                  <Image source={Qrpayments} />

              </CirlceCard>
              <CirlceCard textImage='Loans'>
                  <Image source={Loans} />

              </CirlceCard>
              <CirlceCard textImage='Virtual Cards'>
                  <Image source={Virtualcard} />

              </CirlceCard>
          </View>
      <View> 
      <View >
        <View style={styles.bottomnav}>
        <View style={styles.arr}>
        <Image source={HomeIcon} textImage="Dashboard"/>
        <Image source={SettingIcon} textImage="Settings"/>
        </View> 
        </View>
        </View>
      </View>
      
      </View>
      
      </>

  )
};

const styles = StyleSheet.create({
    circlecardrow:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 20,
        paddingTop: 20
    },
    circlecardrow1:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 20,
        paddingTop: 20
    },
    root: {
        backgroundColor: 'white'
    },
 arrangeTop:{
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginTop: 20
},
macc: {
    padding: 20,
    paddingLeft: 20,
    fontSize: 20
},
card: {
    backgroundColor: '#f5f4f4',
    height: 40,
    with: 60,
    
},
bottomnav: {
    height: 60, 
    width: '100%', 
    marginTop:80,  
    backgroundColor: '#DC2D2D', 
    shadowOffset: {width: 1, height: 1}, 
    shadowColor: '#333',
    shadowOpacity: 0.3 ,
   
},
arr:{
    flexDirection: 'row',
    height: 60, 
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    justifyContent: 'space-between'

}
})

export default Accounts