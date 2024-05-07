'use client'
import { Box, Card, Chip, CardContent, Button, Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import "./JobCard.css"
import Image from 'next/image'

import { toggleModal } from '@/app/redux/features/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/redux/store'
import JobDescriptionModal from '../JobDescription/JobDescriptionModal'

interface Props {
  companyName: string
  jdLink: string
  jdUid: string
  jobDetailsFromCompany: string
  jobRole: string
  location: string
  logoUrl: string
  maxExp: number | null
  minExp: number | null
  maxJdSalary: number | null
  minJdSalary: number | null
  salaryCurrencyCode: string
}
const JobCard = ({ companyName, jdLink, jdUid, jobDetailsFromCompany, jobRole, location, logoUrl, maxExp, maxJdSalary, minExp, minJdSalary, salaryCurrencyCode }: Props) => {
  const { isOpen } = useSelector((state: RootState) => state.modal)

  const dispatch = useDispatch<AppDispatch>()
  const handleToggleModal = () => {
    dispatch(toggleModal())
  }

  useEffect(() => { console.log(isOpen) }, [isOpen])
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const newJobRole = capitalizeFirstLetter(jobRole)
  const newLocation = capitalizeFirstLetter(location)
  return (
    <>
      <JobDescriptionModal jobDes={jobDetailsFromCompany} />
      <Card elevation={0} className='card-wrapper'>
        {/* card header */}
        <div className='card-top'>
          <Chip variant='outlined' label="⌛Posted 5 days ago" size='small' className='date-chip' />
        </div>
        {/* card content */}
        <CardContent className="card-content">
          {/* company details */}
          <div className='company-details'>
            <Image src={logoUrl} alt={`-${"logo"}`} height={25} width={25} className='logo' />
            {/* company details */}
            <div>
              <h3 className='company-name'>{companyName}</h3>
              <h2 className='company-role'>{newJobRole}</h2>
              <p className='company-location'>{newLocation}</p>
            </div>
          </div>
          {/* salary estimation */}
          {minJdSalary !== null ? (
            <p className='salary'>Estimated Salary: ₹{minJdSalary} - {maxJdSalary !== null ? maxJdSalary : "N/A"} LPA ✅</p>
          ) : (
            <p className='salary'>Estimated Salary: ₹{maxJdSalary} LPA ✅</p>
          )}

          <div className='about-company'>
            <p>About Company</p>
            <strong>About us</strong>
            <p>{jobDetailsFromCompany}
            </p>
            {/* gradient mask */}
            <div className='gradient-mask'>
              <p onClick={handleToggleModal}>View Jobs</p>
            </div>
          </div>
          {/* experience */}
          <div className='experience'>
            <h3>Minimum Experience</h3>
            <h2>{minExp !== null ? `${minExp} years` : <u>Not mentioned</u>}</h2>
          </div>
          {/* CTA Buttons */}
          <div className='cta-buttons'>
            <Button LinkComponent={'a'} href={jdLink} size='large' variant='contained' disableElevation disableRipple className='easy-apply'>⚡Easy Apply</Button>
            <Button LinkComponent={'a'} href={jdLink} size='medium' variant='contained' disableElevation disableRipple className='unlock-referral' >
              <Avatar className='avatar'>A</Avatar>
              <Avatar className='avatar'>B</Avatar>
              Unlock referral asks</Button>
          </div>
        </CardContent>
      </Card>
    </>
  )

}

export default JobCard