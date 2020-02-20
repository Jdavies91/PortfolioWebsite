import React from 'react'
import '../../css/resume.css'
import {Row,Col} from 'react-bootstrap/'
import TechSkillsdata from '../../TechSkillsdata'
import ResumeSkills from './ResumeSkills'
function ResumeSkillsSec(){
    const Skills = TechSkillsdata.map((item) => <ResumeSkills key={item.id} skills={item.skills} /> );
    return(
        <Row>
        <Col>
        <h5 ><u>Technical Skills</u></h5>
        <ul className="techskillUl">
            {Skills}
        </ul>
        
           
        </Col>
        </Row>
    )
}

export default ResumeSkillsSec