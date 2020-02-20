import React from 'react'
import {Container} from 'react-bootstrap/'
import ResumeTitle from './ResumeTitle'
import ResumeHeader from './ResumeHeader'
import ResumeSkillsSec from './ResumeSkillsSec'
import ResumeWorkExperience from './ResumeWorkExperience'
import ResumeEducation from './ResumeEducation'
import ResumeLeadManagSkills from './ResumeLeadManagSkills'
import ResumeGenInterest from './ResumeGenInterests'
function ResumeLayout(){
    return (
        <Container>
            <ResumeTitle />
            <ResumeHeader />
            <ResumeSkillsSec />
            <ResumeWorkExperience/>
            <ResumeEducation />
            <ResumeLeadManagSkills />
            <ResumeGenInterest />
        </Container>
         


    )
}

export default ResumeLayout