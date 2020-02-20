import React from 'react'
import Webdata from '../../Webdata'
import '../../css/tabs.css'
import ProjectLayout from './ProjectLayout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Container } from 'react-bootstrap'
import Center from 'react-center'
function WebProjects(){
    //try and get the constructor to work
    return (
        <Container className="text-center" fluid = {true}>
        
        <Tabs defaultactivekey="profile" id="uncontrolled-tab-example" >
        <TabList className=" text-center TabListcss ">
             <div className="text-center projectHeaderTitle" >
             <h1 >Web Projects</h1>
             <Center>
             <hr className="hrProjectHead"fluid = {false}/>
             </Center>
         
             </div>
    
           <div className="text-center tabsinflex ">
            <Tab >Memory Game</Tab>
            <Tab>My Portfolio</Tab>
            <Tab>Best B4</Tab>
       </div>
          
        </TabList>
          <TabPanel>
          <ProjectLayout header="Website" data={Webdata[0]} />
          </TabPanel>
          <TabPanel>
              <ProjectLayout header="Website" data={Webdata[1]} />
          </TabPanel>
          <TabPanel>
              <ProjectLayout header="Website" data={Webdata[2]} />
               
          </TabPanel>
        </Tabs>
        </Container>
        )
    }


export default WebProjects