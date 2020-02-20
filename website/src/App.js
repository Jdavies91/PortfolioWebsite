import React from 'react'
import Nbar from './components/NavBar/Nbar'
import AboutLayout from './components/About/AboutLayout'
import ContactContainer from './components/Contact/ContactContainer'
import WebProjects from './components/Project/WebProjects'
import SoftwareProjects from './components/Project/SoftwareProjects'
import Footer from './components/Footer/Footer'
import HomeLayout from './components/Home/HomeLayout'
import ResumeLayout from './components/Resume/ResumeLayout'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App(){

        return(
            <div>
              
            <Router>
            <Nbar />
                 <Switch> 
                   
                    <Route path="/about" component={AboutLayout} />
                    <Route path="/contact" component={ContactContainer} />
                    <Route path= "/webprojects" component={WebProjects} />
                    <Route path= "/softwareprojects" component={SoftwareProjects} />
                    <Route path= "/resume" component={ResumeLayout} />
        
                    <Route path="/" exact component={HomeLayout} />
                    
                 </Switch> 
            </Router>
            <Footer />
            </div>
         

        
        )
        
    
}
export default App