'use client'
import { toggleModal } from '@/app/redux/features/modalSlice'
import { AppDispatch, RootState } from '@/app/redux/store'
import { Box, Fade } from '@mui/material'
import Modal from '@mui/material/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./JobDescription.css"
const JobDescriptionModal = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal)

  const dispatch = useDispatch<AppDispatch>()
  const handleToggleModal = () => {
    dispatch(toggleModal())
  }
  return (
    <React.Fragment>
      {isOpen &&
        <Modal

          className="modal-wrapper"
          open={isOpen}
          onClose={handleToggleModal}
        >
          <Fade in={isOpen}>
            <Box className='modal-container'>
              
            </Box>
          </Fade>
        </Modal>
      }
    </React.Fragment>
  )
}

export default JobDescriptionModal