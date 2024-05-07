'use client'
import { Box, Card, Chip, CardContent, Button, Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import "./JobCard.css"
import Image from 'next/image'

import { toggleModal } from '@/app/redux/features/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/redux/store'
const JobCard = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal)

  const dispatch = useDispatch<AppDispatch>()
  const handleToggleModal = () => {
    dispatch(toggleModal())
  }

  useEffect(() => { console.log(isOpen) }, [isOpen])
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
      <Card elevation={0} className='card-wrapper'>
        {/* card header */}
        <div className='card-top'>
          <Chip variant='outlined' label="⌛Posted 5 days ago" size='small' className='date-chip' />
        </div>
        {/* card content */}
        <CardContent className="card-content">
          {/* company details */}
          <div className='company-details'>
            {/* <Image src={"#"} alt={`-${"logo"}`} height={25} width={25} /> */}
            <div className='logo' />
            {/* company details */}
            <div>
              <h3 className='company-name'>Firefly</h3>
              <h2 className='company-role'>Frotend engineer</h2>
              <p className='company-location'>India</p>
            </div>
          </div>
          {/* salary estimation */}
          <p className='salary'>Estimated Salary: ₹30 - 50 LPA ✅</p>
          <div className='about-company'>
            <p>About Company</p>
            <strong>About us</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, velit recusandae, provident veritatis, animi vero voluptatum commodi libero esse alias explicabo tempore id doloribus iusto quaerat facere in. Tempora, fugiat!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, velit recusandae, provident veritatis, animi vero voluptatum commodi libero esse alias explicabo tempore id doloribus iusto quaerat facere in. Tempora, fugiat!
            </p>
            {/* gradient mask */}
            <div className='gradient-mask'>
              <p onClick={handleToggleModal}>View Jobs</p>
            </div>
          </div>
          {/* experience */}
          <div className='experience'>
            <h3>Minimum Experience</h3>
            <h2>4 years</h2>
          </div>
          {/* CTA Buttons */}
          <div className='cta-buttons'>
            <Button size='large' variant='contained' disableElevation disableRipple className='easy-apply' >⚡Easy Apply</Button>
            <Button size='medium' variant='contained' disableElevation disableRipple className='unlock-referral' >
              <Avatar className='avatar'>A</Avatar>
              <Avatar className='avatar'>B</Avatar>
              Unlock referral asks</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

}

export default JobCard