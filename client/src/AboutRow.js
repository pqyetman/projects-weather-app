import Col from "react-bootstrap/Col";


function AboutRow({ title, children, link, linkcontent }) {

  return (
    <>
      <Col md={2} className="pb-2">
        <h5>{title}</h5>
        {children.hasOwnProperty('$$typeof') && children}
        <p>
         {!children.hasOwnProperty('$$typeof') && children}
         &nbsp;
          <a className="text-info" href={link}>
            {linkcontent}  
          </a>
               
        </p>
      </Col>
    </>
  );
}

export default AboutRow;
