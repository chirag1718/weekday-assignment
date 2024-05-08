'use client'
import { RootState } from '@/app/redux/store'
import { Grid, Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading, setPosts, setHasMorePosts, setOffset } from '@/app/redux/features/jobPostSlice'
import JobCard, { PostsArray } from '../JobCard/JobCard'
import Filters from '../Filters/Filters'
import { useInView } from 'react-intersection-observer'
import "./JobListing.css"
const JobListing = () => {
     const dispatch = useDispatch()
     const { posts, isLoading, hasMorePosts, limit, offset } = useSelector((state: RootState) => state.jobPosts)
     const { companyName, jobType, location, minBasePay, minExperience, role } = useSelector((state: RootState) => state.filters)
     const { ref, inView } = useInView()

     useEffect(() => {
          handleFetchJobPosts()
     }, [inView])
     // fetch job posts
     const handleFetchJobPosts = async () => {
          const body = JSON.stringify({
               "limit": limit,
               "offset": offset
          })

          const requestOptions = {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body
          }

          try {
               dispatch(setIsLoading(true)) // isloading = true
               const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions) // fetching posts
               const result = await response.json()//
               dispatch(setPosts(result.jdList)) // setting posts
               dispatch(setOffset(offset + result.jdList.length)); // updating the offset by adding the number of new posts fetched
               dispatch(setIsLoading(false)) // isLoading = false
               // checking if there are more posts to fetch
               if (result.length > 0) {
                    dispatch(setHasMorePosts(true))

               } else {
                    dispatch(setHasMorePosts(false))
               }
          } catch (error) {
               console.error(error)
          }
     }

     //? refactor this code into a hook
     const filteredPosts = posts?.filter((post: PostsArray) => {
          const roleMatch = !role || post.jobRole.toLowerCase().includes(role.toLowerCase()) // filters for job role
          const locationMatch = !location || post.location.toLowerCase().includes(location.toLowerCase()) // filter for locations 
          const companyNameMatch = !companyName || post.companyName.toLowerCase().includes(companyName.toLowerCase()) // instant search filter for company names
          const jobTypeMatch = !jobType || post.location.toLowerCase().includes(jobType.toLowerCase()) // filters for job type
          const minExpMatch = minExperience === "" || (post.minExp !== null && post.minExp === parseInt(minExperience)); // exactly filters out for specific year
          const minSalaryMatch = minBasePay === "" || (post.minJdSalary !== null && post.minJdSalary >= parseInt(minBasePay)); // filter salary from X LPA and above for better rendering of results
          return roleMatch && locationMatch && companyNameMatch && jobTypeMatch && minExpMatch && minSalaryMatch
     })
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