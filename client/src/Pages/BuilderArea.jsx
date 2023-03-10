import React, { useContext, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
  const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)
  const [isOpen, setIsOpen] = useState(false);
  const [resumeLink] = useState("");
  const [setResumeData] = useState({});

  const handleSelectNewTemplate = () => {
    setShowComponent(!showComponent)
  }

  const handleSaveResumeData = (data) => {
    setResumeData(data);
    
  }
  

  

  return (
    <>
      {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBody>
          {resumeLink}
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
        <UserDataCollect onSave={handleSaveResumeData} />
        <div id='theme-box-border'>
          {props.theme}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <Button className='mx-2 my-5' colorScheme={'facebook'} variant={'outline'} onClick={handlePrint}>Download</Button>
       
        <Button className='mx-2 my-5' colorScheme={'facebook'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
        <Button className='mx-2 my-5' colorScheme='facebook' variant='outline' onClick={() => window.open('https://www.ilovepdf.com/pdf_to_word', '_blank')}>Save as doc</Button>


        {/* <Button className='mx-2 my-5' colorScheme={'facebook'} variant={'outline'} onClick={}>Save</Button> */}
      </div>
      <Footer />
    </>
  )
}

export default BuilderArea
