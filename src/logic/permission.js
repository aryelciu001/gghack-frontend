import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import { Platform } from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { BackHandler, DeviceEventEmitter } from 'react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

  

const PLATFORM_LOCATION_PERMISSIONS = {
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
}

const REQUEST_PERMISSION_TYPE = {
    location: PLATFORM_LOCATION_PERMISSIONS
}

const PERMISSIONS_TYPE = {
    location : 'location'
}

class AppPermission {
    
    checkPermission = async (type): Promise<boolean> => {
       // console.log("AppPermission checkPermission type: ", type)
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
       // console.log("AppPermission checkPermission permissions: ", permissions)
        if(!permissions) {
            return true
 
        }
        try {
           const result = await check(permissions)
           // console.log("AppPermission checkPermission result: ", result)
            if (result === RESULTS.GRANTED) {
                this.checkGPS();
            }
            return this.requestPermission(permissions);
        } catch (error) {
            return false
        }
    }

    requestPermission = async (permissions): Promise<boolean> => {
        //console.log("AppPermission requestPermission permissions: ", permissions)
        try {
            const result = await request(permissions)
          //  console.log("AppPermission requestPermission result: ", result)
            return result === RESULTS.GRANTED
        }
        catch (error) {
            return false
        }
    }

    onLocationEnablePressed = () => {
        if (Platform.OS === 'android') {
            //console.log("enabling")
          RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000})
          .then(data => {
            //  console.log("data retrieved")
            alert(data);
          }).catch(err => {
             // console.log("error is")
            // The user has not accepted to enable the location services or something went wrong during the process
            // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
            // codes : 
            //  - ERR00 : The user has clicked on Cancel button in the popup
            //  - ERR01 : If the Settings change are unavailable
            //  - ERR02 : If the popup has failed to open
            alert("Error " + err.message + ", Code : " + err.code);
          });
          promise = null;
        }
      }
      
      locStatus = "enabled";

      checkGPS = () => {
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
        ok: "YES",
        cancel: "NO",
        enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
        showDialog: true, // false => Opens the Location access page directly
        openLocationServices: true, // false => Directly catch method is called if location services are turned off
        preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
        preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
        providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
        }).then(function(success) {
            // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
            navigator.geolocation.getCurrentPosition((position) => {
                let initialPosition = JSON.stringify(position);
                this.setState({ initialPosition });
                }, error => console.log(error), {  });
            }.bind(this)
        ).catch((error) => {
            console.log(error.message);
        });
        
        DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
            console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
            return status;
        });
 
            // used only when "providerListener" is enabled
            LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener.

            return this.locStatus;
    }
}

const Permission = new AppPermission()
export {Permission, PERMISSIONS_TYPE}