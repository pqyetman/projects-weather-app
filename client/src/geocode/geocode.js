import Geocode from "react-geocode";

Geocode.setApiKey(`${process.env.REACT_APP_MAP_KEY}`)
Geocode.setLanguage("en")

export const getAddress = (lat, lng, setAddress) => {        


        Geocode.fromLatLng(`${lat}`, `${lng}`).then(
            (response) => {

               
                let address = response.results[0].formatted_address
                let splitString = address.split(" ")
                let removedFirst = splitString.shift()
                let editedAddress = splitString.join(" ").toString()
              
                setAddress(editedAddress)
            },
            (error) => console.log(error))


    };

export const getLngLat = (address, setLocation) => {

        Geocode.fromAddress(`${address}`).then(

            (response) => {
                
                      
                setLocation(response.results)
                
                
            },
            (error) => {
            //   alert(error)
            }
        );


    };



