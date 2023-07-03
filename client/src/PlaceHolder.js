import Placeholder from 'react-bootstrap/Placeholder';


function PlaceHolder ({size = 12}) {   
   
      
      return (
              <>
              <Placeholder animation="glow">
                <Placeholder xs={size} />
              </Placeholder>
              </>)
              
            
            
            }

export default PlaceHolder;
