import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <Card  expand="xxl" style={{ width: '87%', border:'0', marginTop:'40px'}}>
  <Row xs={1} md={2} className="g-4">
    <div style={{ border:'0', left:'5%'}}>
      <h5 style={{color:'#5fbaa7'}}>About Us:</h5>
      <div className='wrap'>
            <p ><a href='./main' style={{textDecoration:'none', color:'black'}}>Department</a> <a href='./main' style={{textDecoration:'none', color:'black', marginLeft:'20px'}}>Regulations and tariffs</a></p>
            <p><a href='./main' style={{textDecoration:'none', color:'black'}}>Partner banks</a> <a href='./main' style={{textDecoration:'none', color:'black', marginLeft:'50px'}}>Where to find us</a></p>
            <p><i>© 2022 Exchanger License No. 22 issued 19.03.1992</i></p>
      </div>
    </div>
    <Card style={{ width: '25rem', border:'0', left:'17%'}}> 
      <div>
      <h5 style={{color:'#5fbaa7'}}>Contacts:</h5>
      <p><strong>1488</strong> free of charge from mobile phones</p>
      <p><strong>+38-007-228-77-01</strong> for calls from abroad</p>
      </div>
    </Card>
  </Row>
</Card>
  )
}

export default Footer