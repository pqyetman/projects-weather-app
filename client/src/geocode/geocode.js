import Geocode from "react-geocode";


 







 

export const getAddress = (lat, lng, setAddress) => {        


        Geocode.fromLatLng(`${lat}`, `${lng}`).then(
            (response) => {

               
                let address = response.results[0].formatted_address
                let splitString = address.split(" ")
                let removedFirst = splitString.shift()
                let editedAddress = splitString.join(" ").toString()
              
                setAddress(editedAddress)
            },
            (error) => alert(error))


    };

export const getLngLat = (address, setLocation) => {

        Geocode.fromAddress(`${address}`).then(

            (response) => {
                const { lat, lng } = response.results[0].geometry.location; 
                      
                setLocation(response.results)
                
                
            },
            (error) => {
              alert(error)
            }
        );


    };



