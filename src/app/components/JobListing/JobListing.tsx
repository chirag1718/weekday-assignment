'use client'
import { Grid, Box } from '@mui/material'
import React, { useEffect } from 'react'
import JobCard from '../JobCard/JobCard'
import Filters from '../Filters/Filters'
import { useInView } from 'react-intersection-observer'
import { useDataHook } from "@/app/hooks/useDataHook"
import "./JobListing.css"
const JobListing = () => {
     const { handleFetchJobPosts, filteredPosts, isLoading } = useDataHook()

     // infinite scroll 
     const { ref, inView } = useInView()
     useEffect(() => {
          handleFetchJobPosts()
     }, [inView])

     return (
          <Box className='listing-wrapper'>
               <Filters />
               <Grid container gap={5} margin={0} marginBottom={10} direction="row" justifyContent={"center"} alignItems={"center"} className='listing-wrapper' width={"100%"} height={"100%"}>
                    {filteredPosts.map((post, index) => {
                         return (
                              <Grid key={`${post.jdUid}_${index}`} item ref={ref} >
                                   <JobCard {...post} />
                              </Grid>
                         )
                    })}
               </Grid >
               {
                    isLoading &&
                    <div className='loading'>
                         <span className='loader' />
                    </div>
               }
          </Box >
     )
}

export default JobListing