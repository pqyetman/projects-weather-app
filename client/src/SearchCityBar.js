import { useState, useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Search } from 'react-bootstrap-icons'
import ListGroup from 'react-bootstrap/ListGroup';
import LocContext from './store/loc-context.js';
import {getLngLat, getAddress} from './geocode/geocode.js';



function SearchCityBar() {
  

    const ctx = useContext(LocContext);

    const [searchValue, setSearchValue] = useState("") 
    const [location, setLocation] = useState([])
   

    function setSearch(e) {

        getLngLat(e.target.value, setLocation)                
        let mapLocations = location.map((result, index) => <ListGroup.Item action id = {`${result.geometry.location.lat}` + " " + `${result.geometry.location.lng}`} onClick={setLongLat} key={index.toString()} >{result.formatted_address}</ListGroup.Item>)
        setSearchValue(mapLocations)
          
    
    }

    function setLongLat(e){

      
        const longLat = e.target.id
        const long = Number(longLat.split(" ")[1]).toFixed(2)  
        const lat = Number(longLat.split(" ")[0]).toFixed(2) 
        ctx.setLng(long)
        ctx.setLat(lat)
        getAddress(ctx.lat, ctx.lng, ctx.setLocation)    

    }

    function clearSearch(){
        setLocation([]) 
        setSearchValue(<></>)

    }

 
  
 

    return (
        <>

            <OverlayTrigger
                trigger="focus"
                key='bottom'
                placement='bottom-start'
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