import React, { useContext } from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'
import './theme3.css'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import ResumeContext from '../../Context/ResumeContext'

const Theme3 = (props) => {
    const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
    const { themeData, componentRef } = props;
    const { name, phone,address,email, skill1,skill2,skill3,skill4,skill5,skill6,skill7,self,LeetCode,GeeksforGeeks,CodeChef,Date,Date2,Date3} = themeData.personalData;

    // const {address} = themeData.personalData1;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    return (
        <>
            <Box id="section-to-print" ref={componentRef}>
                <Box _dark={{ border: '1px solid white' }} id="theme3">
                    {/* Personal Info  */}
                    <header id='info' className='text-center mt-2'>
                        

<Heading as='h2' size='2xl' className='mb-2' style={{ 
  fontFamily: 'serif',
  fontWeight: 'lighter',
  textTransform: 'capitalize'
}}>
  <span style={{ fontSize: '0.9em' }}>{name}</span>
</Heading>
                    <Box marginTop={'-10px'}>
                        <Text fontSize='md' className='text-muted my-1 '>
                        <FaGithub className='d-inline mx-1'/><a href={address} target="_blank"><u>Github</u></a>
                        
                           <SiGmail className='d-inline mx-1' /><text><u>{email}</u></text>
                            <AiFillLinkedin className='d-inline mx-1' /><a href={phone} target="_blank"><u>LinkedIn </u></a>
                        </Text>
                    </Box>
                        {/* <Heading as='h3' size='md' className='mt-1 mb-2'>
                            {profile}
                        </Heading> */}
                    </header>
                    {/* Education Part  */}
                    <Box marginTop={'-18px'}>
                    <section id="education" className='my-2' >
                         <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter'
  }}>
    <span style={{ fontSize: '1.7rem' }}>E</span>DUCATION
  </Heading>
                        <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-10px',
  width: '90%',
  marginLeft: '4%',
  marginRight: '8%'
}} />
                      
                        <Box id='education-set' className='basic-set' fontsize=''>
                            {
                                Object.entries(educationTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="subBox">
                                            {/* <Text className='sub-title'>{element[1]}</Text> */}
                                        
                                            {/* <Text className='sub-title' ml={2} marginTop='-13px' marginLeft='-20px'>

  <span style={{fontSize: 'larger', fontWeight: 'bold', fontFamily: 'serif'}}> </span>
  {element[1]}
</Text>
<text>{Date}</text> */}
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Text className='sub-title' ml={2} marginTop='-7px' marginLeft='-20px' fontSize={'1.1rem'}>
    <span style={{fontSize: 'larger', fontWeight: 'bold', fontFamily: 'serif'}}> </span>
    {element[1]}
  </Text>
  <span style={{ marginLeft: '370px',marginTop: '-12px',fontFamily: 'Times New Roman,Times,serif' }}>{Date}</span>
</div>




                                            <Box className='sub-details' marginTop='-7px' marginLeft='-28px' fontsize={'0.83rem'} >
                                                {
                                                    (Object.entries(educationDesc)[index] === undefined)
                                                        ?
                                                        null
                                                        :
                                                        Object.entries(educationDesc)[index][1].split(';').map((element, index) => {
                                                            return <li key={index}>{element}</li>
                                                        })
                                                }
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </section>
                    </Box>
                    {/* WORK EXPERIENCE  */}
                    <Box marginTop={'-25px'}>
                    {
                        !checkWork &&
                        <section id="experience" className='my-2'>
                            {/* <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='md' px={20} py={2}>
                                EXPERIENCE
                            </Heading> */}
                            <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter'
  }}>
    <span style={{ fontSize: '1.7rem' }}>E</span>XPERIENCE
  </Heading>

                            <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-8px',
  width: '90%',
  marginLeft: '5%',
  marginRight: '8%'
}} />

                            <Box id='experience-set' className='basic-set' >
                                {
                                    Object.entries(workTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                {/* <Text className='sub-title' marginTop='-10px' marginLeft='-19px'>{element[1]}</Text> */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
  <Text className='sub-title' ml={2} marginTop='-7px' marginLeft='-20px'>
    <span style={{fontSize: 'larger', fontWeight: 'bold', fontFamily: 'serif'}}> </span>
    {element[1]}
  </Text>
  <span style={{ marginLeft: '410px',marginTop: '-12px',fontFamily: 'Times New Roman,Times,serif' }}>{Date2}</span>
</div>
                                                <Box className='sub-details' marginTop='-8px' marginLeft='-22px' fontSize={'0.84rem'}>
                                                    {
                                                        (Object.entries(workDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(workDesc)[index][1].split(';').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </section>
                    }
                    </Box>
                    {/* Project Section  */}
                    <Box marginTop='-30px'>
                    {
                        !checkProj &&
                        <section id="projects" className='my-2'>
                            <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter'
  }}>
    <span style={{ fontSize: '1.7rem' }}>P</span>ROJECTS
  </Heading>

                            <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-8px',
  width: '90%',
  marginLeft: '5%',
  marginRight: '8%'
}} />

                            <Box id='project-set' className='basic-set'>
                                {
                                    Object.entries(projectTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                {/* <Text className='sub-title' marginTop='-10px' marginLeft='-16px'>{element[1]}</Text> */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
  <Text className='sub-title' ml={2} marginTop='-7px' marginLeft='-20px'>
    <span style={{fontSize: 'larger', fontWeight: 'bold', fontFamily: 'serif'}}> </span>
    {element[1]}
  </Text>
  <span style={{ marginLeft: '400px',marginTop: '-12px',fontFamily: 'Times New Roman,Times,serif' }}>{Date3}</span>
</div>
                                                <Box className='sub-details' marginTop='-6px' marginLeft='-20px' fontSize={'0.84rem'}>
                                                    {
                                                        (Object.entries(projectDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(projectDesc)[index][1].split(';').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </section>
                    }
                    </Box>
                    {/* Award & Achievement */}
                    <Box marginTop='-25px'>
                    {
                        !checkAward &&
                        <section id="awards" className='my-2'>
                            <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter'
  }}>
    <span style={{ fontSize: '1.7rem' }}>A</span>CHIEVEMENTS
  </Heading>
                            <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-8px',
  width: '90%',
  marginLeft: '5%',
  marginRight: '8%'
}} />

                            <Box id='award-set' className='basic-set d-flex justify-content-between align-items-center' >
                                <Box marginTop='-7px' marginLeft='-9px' fontSize={'0.84rem'}>
                                    {
                                        awards.split(';').map((element, index) => {
                                            return <li key={index}>{element}</li>
                                        })
                                    }
                                </Box>
                            </Box>
                        </section>
                        }
                    </Box>
                        {/* Skills Part  */}
                        <Box marginTop='-20px'></Box>
                    <section id="skills" className='my-2'>
                    <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter'
  }}>
    <span style={{ fontSize: '1.7rem' }}>T</span>ECHNICAL SKILLS
  </Heading>
                        <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-8px',
  width: '90%',
  marginLeft: '5%',
  marginRight: '8%'
}} />

                        {/* <Box id='skills-set' className='basic-set d-flex justify-content-center align-items-center'>
                            <Box className='skillBox' marginTop='-7px' marginLeft='-445px'> */}
                              <div> {
                               skill1 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Languages:&nbsp;&nbsp;  </text>}

                               <text>{skill1}</text>
                               </div>
                               <div> {
                               skill2 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Databases:&nbsp;&nbsp;  </text>}

                               <text>{skill2}</text>
                               </div>
                               <div> {
                               skill3 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Libraries:&nbsp;&nbsp;  </text>}

                               <text>{skill3}</text>
                               </div>
                               <div> {
                               skill4 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Frameworks:&nbsp;&nbsp;  </text>}

                               <text>{skill4}</text>
                               </div>
                               <div> {
                               skill5 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Developer Tools:&nbsp;&nbsp;  </text>}

                               <text>{skill5}</text>
                               </div>
                               <div> {
                               skill6 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Course Work:&nbsp;&nbsp;  </text>}

                               <text>{skill6}</text>
                               </div>
                               <div> {
                               skill7 &&
                              
                            <text style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'serif',marginLeft: '65px'}}>Others:&nbsp;&nbsp;  </text>}

                               <text>{skill7}</text>
                               </div>

                               
                            {/* </Box>
                        </Box> */}
                    </section>

                    {/* Coding Profiles  */}
                    <Box marginTop='-20px'>
                    {
                        !checkProj &&
                        <section id="projects" className='my-2'>
                            <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter'
  }}>
    <span style={{ fontSize: '1.7rem' }}>C</span>ODING PROFILES
  </Heading>
                            <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-8px',
  width: '90%',
  marginLeft: '5%',
  marginRight: '8%'
}} />

                            <Box id='project-set' className='basic-set'>
                                <Box marginLeft={'-10px'}>
                                <div>
                                    <text><strong>&#x2022; LeetCode : </strong></text>
                            <a href={LeetCode} textDecoration='underline'>
                                <u>Profile</u>
                                
                                
                                    </a>
                                    </div>
                                    <div>
                                    <text><strong>&#x2022; GeeksforGeeks : </strong></text>
                            <a href={GeeksforGeeks} textDecoration='underline'>
                                <u>Profile</u>
                                
                                
                                    </a>
                                    </div>
                                    <div>
                                    <text><strong>&#x2022; CodeChef : </strong></text>
                            <a href={CodeChef} textDecoration='underline'>
                                <u>Profile</u>
                                
                                
                                    </a>
                                    </div>
                                    </Box>
                                    {/* <a href={LeetCode} style="text-decoration: underline">Clickable underlined text</a> */}
                            </Box>
                        </section>
                    }
                    </Box>
                       
                        {
                        <section id="self" className='my-2'>
                        {/* <Heading  className='my-2' _dark={{ color: 'gray.800' }} bg={''} as='h3' size='md' px={20} py={2} marginLeft='-30px' fontFamily={}>SELF INTRODUCTION AUDIO</Heading> */}
                        <Heading _dark={{ color: 'gray.800' }} bg={''} as='h3' size='lg' px={35} py={2} marginLeft='10px' marginTop='-14px' style={{ 
    fontFamily: 'serif',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'lighter',
    
  }}>
    <span style={{ fontSize: '1.7rem' }}>S</span>ELF INTRODUCTION
  </Heading>
  <hr style={{ 
  border: 'none',
  borderTop: '2px solid #000',
  marginTop: '-8px',
  width: '90%',
  marginLeft: '5%',
  marginRight: '8%'
}} />
                                <a href={self} styles={{ color: 'blue', fontSize: 'md' }}>
                               <text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text><u> {self}</u>
                                    </a>
                                </section>
                        }
                        
                                
                        
                </Box>
            </Box>
        </>
    )
}

export default Theme3
