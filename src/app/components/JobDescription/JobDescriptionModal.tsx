'use client'
import { toggleModal } from '@/app/redux/features/modalSlice'
import { AppDispatch, RootState } from '@/app/redux/store'
import { Box, Fade } from '@mui/material'
import Modal from '@mui/material/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./JobDescription.css"
const JobDescriptionModal = ({ jobDes, jobRole, companyName, jobLocation, id }: { jobDes: string, jobRole: string, companyName: string, jobLocation: string, id: string }) => {
  const { isOpen, jobId } = useSelector((state: RootState) => state.modal)

  const dispatch = useDispatch<AppDispatch>()
  const handleToggleModal = () => {
    dispatch(toggleModal(null))
  }
  return (
    <React.Fragment>
      {isOpen && id === jobId &&
        <Box sx={{ backgroundColor: "transparent" }}>
          <Modal
            className="modal-wrapper"
            open={isOpen}
            onClick={handleToggleModal}
          >
            <Fade in={isOpen} >
              <div className='modal-container'>
                <p className='title'>Job Description</p>
                <div className='details'>
                  <p>{companyName} | {jobRole} | {jobLocation}</p>
                </div>
                <div>
                  <p className='sub-title'>About Company:</p>
                  <p className='job-description'>{jobDes}</p>
                </div>
              </div>
            </Fade>
          </Modal>
        </Box>
      }
    </React.Fragment>
  )
}

export default JobDescriptionModal

