import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './userCollectData.css'
import { IoMdCloudUpload } from 'react-icons/io'
import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react'
import ResumeContext from '../../Context/ResumeContext'

const UserDataCollect = () => {
    const [regnum, setRegnum] = useState("");
    const [dept, setDept] = useState("");
    const [role, setRole] = useState("");
   
    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork,checkSkill,setCheckSkill } = useContext(ResumeContext)

    
    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    // const [codingData, setcodingData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile",address: "Github", phone: "LinkedIn", email: "Email Address", skill: 'Your, Skills, are, shown, here' })
//    const [personalData1, setPersonalData1] = useState({address: "GitHub"})
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })
    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value})
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
        
    }
   
    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = projectData
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData })
        setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use semicolon(;) to jump to next bullet point' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                        <Input name='Date3' onChange={handleChangePersonal} type={'text'} placeholder='Batch eg:(2020-2024)' />
                    </FormControl>
            </>
        )
        let arr = projArrTemplate
        arr.push(template)
        setProjArrTemplate(arr)
        setProjectCount(i)
    }

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = educationData
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData)
    }
    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Use semicolon(;) to jump to next bullet point' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                        <Input name='Date' onChange={handleChangePersonal} type={'text'} placeholder='Batch eg:(2020-2024)' />
                    </FormControl>
                
               
            </>
        )
        let arr = educationArrTemplate
        arr.push(template)
        setEducationArrTemplate(arr)
        setEducationCount(i)
    }

    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        let tempWorkData = workData
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData({ ...workData }, tempWorkData)
    }
    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`wDescription${i}`} name='wDescription' onChange={handleChangeWork} placeholder='Use semicolon(;) to jump to next bullet point' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                        <Input name='Date2' onChange={handleChangePersonal} type={'text'} placeholder='Batch eg:(2020-2024)' />
                    </FormControl>
            </>
        )
        let arr = workArrTemplate
        arr.push(template)
        setWorkArrTemplate(arr)
        setWorkCount(i)
    }
    // Technical skills
    

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target
        setAwardData({ ...awardData, [name]: value })
    }
    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData })
       
    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData])
    //mongodb
    

    const addToList = () => {
        axios.post("http://localhost:3001/insert", {
          regnum: regnum,
          dept: dept,
          role: role,
          })
    }
    //mongodb
    return (
        <>
            <div id="form-collect">
                {/* Personal Details Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>
                        Personal Details
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <div className='file'>
                            <label htmlFor='input-file'>
                                <i className="material-icons"><IoMdCloudUpload size={30} />
                                </i>Select a file
                            </label>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
                            <img className="blah" src={personalData.profileImage} alt="your profile preview" />
                        </div>
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='name' onChange={handleChangePersonal} type={'text'} placeholder='Your Name'/>
                        <Input  onChange={(event) => {setDept(event.target.value);}} type={'text'} marginTop='10px' placeholder='Department'/>
                        <div>
                        <Input  onChange={(event) => {setRole(event.target.value);}} type={'text'} marginTop='10px' width='260px' placeholder='Role'/>
                        <Input  onChange={(event) => {setRegnum(event.target.value);}} type={'number'} marginTop='10px' width='300px' placeholder='Reg Number'/>
                        </div>
                       
                       
                     </FormControl>
                    

                    {/* <FormControl isRequired className='my-2'>
                        <Input name='summary' onChange={handleChangePersonal} type={'text'} placeholder='' />
                    </FormControl> */}
                    {/* <FormControl isRequired className='my-2'>
                        <Input name='profile' onChange={handleChangePersonal} type={'text'} placeholder='Work Profile' />
                    </FormControl> */}
                    <FormControl isRequired className='my-2'>
                        <Input name='address' onChange={handleChangePersonal} type={'text'} placeholder='Github Link eg:(https://github.com/your-username)'  />
                        
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='email' onChange={handleChangePersonal} type={'text'} placeholder='Email id' />
                        
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='phone' onChange={handleChangePersonal} type={'text'} placeholder='LinkedIn Link eg:(https://www.linkedin.com/in/username/)' />
                       
                    </FormControl>
                    
                </div>
                

                {/* Education Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Education
                    </Heading>
                    <hr />
                    <Button onClick={handleEducationClick} className='my-3 w-100' colorScheme='facebook' variant='solid'>+ Add Education</Button>
                    {
                        (educationCount > 0) ? educationArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Work Experience Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Experience
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckWork(!checkWork))} colorScheme='facebook' />
                    </div>
                    <hr />
                    <Button disabled={checkWork} onClick={handleWorkClick} className='my-3 w-100' colorScheme='facebook' variant='solid'>+ Add Experience</Button>
                    {
                        (workCount > 0) ? workArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Projects Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Projects
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckProj(!checkProj))} colorScheme='facebook' />
                    </div>
                    <hr />
                    <Button disabled={checkProj} onClick={handleProjectClick} className='my-3 w-100' colorScheme='facebook' variant='solid'>+ Add Projects</Button>
                    {
                        (projectCount > 0) ? projArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>
                {/* Awards & Achievement  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Achievements
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckAward(!checkAward))} colorScheme='facebook' />
                    </div>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Textarea name='awards' disabled={checkAward} onChange={handleChangeAwards} placeholder='Use semicolon(;) to jump to next bullet point' />
                    </FormControl>
                </div>


                {/* Skills Area  */}
                
                {/* <div id="form-personal" className='mb-2'>
                <div className='d-flex align-items-center justify-content-between'>
                    <Heading as='h4' size='md' className='my-2'>
                        Technical Skills
                    </Heading>
                    <Switch defaultChecked={true} onChange={() => (setCheckSkill(!checkSkill))} colorScheme='facebook' />
                    
                    </div>
                    <hr />
                    <Button disabled={checkProj} onClick={handleProjectClick} className='my-3 w-100' colorScheme='facebook' variant='solid'>+ Add Skills</Button>
                    {
                        (projectCount > 0) ? projArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                    </div> */}

<div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Technical Skills
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='skill1' onChange={handleChangePersonal} type={'text'} placeholder='Languages' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='skill2' onChange={handleChangePersonal} type={'text'} placeholder='Databases' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='skill3' onChange={handleChangePersonal} type={'text'} placeholder='Libraries' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='skill4' onChange={handleChangePersonal} type={'text'} placeholder='FrameWorks' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='skill5' onChange={handleChangePersonal} type={'text'} placeholder='Developer Tools' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='skill6' onChange={handleChangePersonal} type={'text'} placeholder='Course Work' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='skill7' onChange={handleChangePersonal} type={'text'} placeholder='Others' />
                    </FormControl>
                </div>

                
                    
                {/* Coding profiles */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Coding Profiles
                    </Heading>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Input name='LeetCode' onChange={handleChangePersonal} type={'link'} placeholder='LeetCode Profile Link eg:(https://leetcode.com/username/)' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='GeeksforGeeks' onChange={handleChangePersonal} type={'email'} placeholder='GeeksForGeeks Profile Link eg:(https://auth.geeksforgeeks.org/user/username/)' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='CodeChef' onChange={handleChangePersonal} type={'link'} placeholder='CodeChef Profile Link eg:(https://www.codechef.com/users/username/)' />
                    </FormControl>
                
                </div>
                
                <div>
                <Heading as='h4' size='md' className='my-2'>
                            Self Intro Audio Link
                        </Heading>
                <FormControl isRequired className='my-2'>
                        <Input name='self' onChange={handleChangePersonal} type={'text'} placeholder='Paste the link here' />
                    </FormControl>
                 <text>1.Visit </text>   <a href ="https://record.reverb.chat/" target="_blank">https://record.reverb.chat/</a>
                 <p>2.Record audio and copy the link</p>
                 <p>3.Paste the link</p>
                    </div>
                    <Button  colorScheme={'facebook'} onClick={addToList} marginTop='10px'>Save</Button>
            </div>
            
        </>
    )
}

export default UserDataCollect