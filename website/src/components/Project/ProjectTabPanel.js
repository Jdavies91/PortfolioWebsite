import React from 'React'


function ProjectTabPanel(props){
    return(
        <TabPanel>
          <ProjectLayout data={props.Projectdata[0]} />
          {/* <ProjectLayout data={Projectdata[0]} /> */}
          </TabPanel>
    )
}

export default ProjectTabPanel;