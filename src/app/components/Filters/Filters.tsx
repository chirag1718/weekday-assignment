'use client'
import React, { useEffect } from 'react'
import "./Filters.css"
import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { filterReset, setCompanyName, setJobType, setLocation, setMinBasePay, setMinExperience, setRole } from "@/app/redux/features/fliterSlice"
import { Trash } from 'lucide-react'
const Filters = () => {
  const { companyName, jobType, location, minBasePay, minExperience, role } = useSelector((state: RootState) => state.filters)
  const dispatch = useDispatch()

  return (
    <div className='filter-wrapper'>
      <Grid container direction="row" gap={1} >
        {/* Min Exp */}
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="experience">Experience</InputLabel>
            <Select
              labelId='experience'
              id='experience'
              value={minExperience}
              input={<OutlinedInput id="select-multiple-experience" label="Experience" />}
              onChange={(e) => dispatch(setMinExperience(e.target.value))}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        {/* company name */}
        <Grid item xs={12} sm={6} md={4} lg={2}>

          <FormControl fullWidth>
            <TextField
              label='Company Name'
              id='company-name'
              value={companyName}
              onChange={e => dispatch(setCompanyName(e.target.value))}
            />
          </FormControl>
        </Grid>

        {/* location */}
        <Grid item xs={12} sm={6} md={4} lg={1.5}>

          <FormControl fullWidth>
            <InputLabel id="location">Location</InputLabel>
            <Select
              labelId='location'
              id='location'
              input={<OutlinedInput id="select-multiple-location" label="Location" />}
              value={location}
              onChange={e => dispatch(setLocation(e.target.value))}
            >
              <MenuItem value={"Delhi ncr"}>Delhi ncr</MenuItem>
              <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Chennai"}>Chennai</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Rmote/On-site */}
        <Grid item xs={12} sm={6} md={4} lg={1.5}>
          <FormControl fullWidth>
            <InputLabel id="job-type">Remote</InputLabel>
            <Select
              labelId='job-type'
              id='job-type'
              value={jobType}
              onChange={e => dispatch(setJobType(e.target.value))}
              input={<OutlinedInput id="select-multiple-job-type" label="Remote" />}
            >
              <MenuItem value={"Remote"}>Remote</MenuItem>
              <MenuItem value={"In-office"}>In-office</MenuItem>
              <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* role */}
        <Grid item xs={12} sm={6} md={4} lg={1.5}>
          <FormControl fullWidth>
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId='role'
              id='role'
              value={role}
              onChange={e => dispatch(setRole(e.target.value))}
              input={<OutlinedInput id="select-multiple-role" label="Role" />}
            >
              <MenuItem value={"Frontend"}>Frontend</MenuItem>
              <MenuItem value={"Backend"}>Backend</MenuItem>
              <MenuItem value={"Ios"}>Ios</MenuItem>
              <MenuItem value={"Tech Lead"}>Tech Lead</MenuItem>
              <MenuItem value={"Andriod"}>Andriod</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* minimum-base-pay-salary */}
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="minimum-base-pay-salary">Minimum base pay salary</InputLabel>
            <Select
              labelId='minimum-base-pay-salary'
              id='minimum-base-pay-salary'
              value={minBasePay}
              onChange={e => dispatch(setMinBasePay(e.target.value))}
              input={<OutlinedInput id="select-multiple-minimum-base-pay-salary" label="Minimum base pay salary" />}
            >
              <MenuItem value={0}>0L</MenuItem>
              <MenuItem value={10}>10L</MenuItem>
              <MenuItem value={20}>20L</MenuItem>
              <MenuItem value={30}>30L</MenuItem>
              <MenuItem value={40}>40L</MenuItem>
              <MenuItem value={50}>50L</MenuItem>
              <MenuItem value={60}>60L</MenuItem>
              <MenuItem value={70}>70L</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Button variant='outlined' sx={{ height: '100%' }} color='error' onClick={() => dispatch(filterReset())}><Trash /></Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Filters