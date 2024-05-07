'use client'
import { RootState } from '@/app/redux/store'
import { Grid, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jobPostSlice, { setIsLoading, setPosts, setHasMorePosts } from '@/app/redux/features/jobPostSlice'

const JobListing = () => {
     const dispatch = useDispatch()
     const { posts, isLoading, hasMorePosts } = useSelector((state: RootState) => state.jobPosts)
     useEffect(() => {
          handleFetchJobPosts()
     }, [])
     // fetch job posts
     const handleFetchJobPosts = async () => {
          const body = JSON.stringify({
               "limit": 2,
               "offset": 0
          })
          // const myHeaders = new Headers()
          // myHeaders.append("Content-Type", "application/json")

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
               // console.log(result)
               dispatch(setPosts(result.jdList)) // setting posts
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


     useEffect(() => {
          // console.log(posts)
     }, [posts])
     return (
          <Grid className='listing-wrapper'>
               <Box>
                    {posts.map((post, index) => {
                         console.log(index)
                         return (
                              <div key={`${post.jdUid}_${index}`}></div>
                         )
                    })}
               </Box>
          </Grid >
     )
}

export default JobListing