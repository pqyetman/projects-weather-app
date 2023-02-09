import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Search } from 'react-bootstrap-icons'
import Geocode from "react-geocode";
import ListGroup from 'react-bootstrap/ListGroup';


function SearchCityBar({setLocation, setLng, setLat}) {

    const [searchValue, setSearchValue] = useState("")

    const goggleAPI = process.env.GOOGLE_API_KEY

    Geocode.setApiKey(`${goggleAPI}`)
    Geocode.setLanguage("en")

   


    function setSearch(e) {



        Geocode.fromAddress(`${e.target.value}`).then(


            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                let locations = response.results
                let mapLocations = locations.map((result, index) => <ListGroup.Item action id = {`${result.geometry.location.lat}` + " " + `${result.geometry.location.lng}`} onClick={setLongLat} key={index.toString()} >{result.formatted_address}</ListGroup.Item>)
                setSearchValue(mapLocations)
          
            },
            (error) => {
                
            }
        );

    }

    function setLongLat(e){

      
        const longLat = e.target.id
        const long = parseFloat(longLat.split(" ")[1]).toFixed(2)  
        const lat = parseFloat(longLat.split(" ")[0]).toFixed(2)     
       
        
        setLocation(e.target.innerText)
      
        setLng(long)
        setLat(lat)
       

    }

    function clearSearch(){
    
        setSearchValue("")


    }

 
  
 

    return (
        <>

            <OverlayTrigger
                trigger="focus"
                key='bottom'
                placement='bottom'
                overlay={
                    <Popover id={`popover-positioned-bottom`} >
                        <Popover.Body>                      
                            <ListGroup variant ="flush" >
                            {searchValue}
                            </ListGroup>
                        </Popover.Body>
                    </Popover>
                }
            >
                <InputGroup className=" bg-transparent">
                    <Form.Control className="  bg-transparent border-top-0 border-start-0 border-end-0 text-white border-3 border-white"
                        placeholder="Search for a city..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        list="datalistOptions"
                        id="exampleDataList"
                        onChange={setSearch}
                        onClick={clearSearch}
                    />

                    <InputGroup.Text className="bg-transparent text-white  border-top-0 border-start-0 border-end-0 border-white" id="basic-addon1"><Search /></InputGroup.Text>
                </InputGroup>
            </OverlayTrigger>

        </>
    );
}

export default SearchCityBar;