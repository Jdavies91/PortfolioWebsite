import React from 'react'
import Softwaredata from '../../Softwaredata'
import '../../css/tabs.css'
import '../../css/portfolio.css'
import ProjectLayout from './ProjectLayout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Container } from 'react-bootstrap'
import 'react-tabs/style/react-tabs.css';
import Center from 'react-center'
function SoftwareProjects() {
    //try and get the constructor to work
    return (
      <Container className="text-center" fluid = {true}>
        
      <Tabs defaultactivekey="profile" id="uncontrolled-tab-example" >
      <TabList className=" text-center TabListcss ">
           <div className="text-center projectHeaderTitle" >
           <h1 >Software Projects</h1>
           <Center>
           <hr className="hrProjectHead"fluid = {false}/>
           </Center>
       
           </div>
  
         <div className="text-center tabsinflex ">
         <Tab >Amazon Web Services Viewing Instances</Tab>
        <Tab >Keboola ETL Terraform</Tab>
     </div>
        
      </TabList>
      <TabPanel>
      <ProjectLayout header="Software" data={Softwaredata[0]} />
      </TabPanel>
      <TabPanel>
      <ProjectLayout header="Software" data={Softwaredata[1]} />
      </TabPanel>
      </Tabs>
      </Container>
      
    )
   
    
}

export default SoftwareProjects