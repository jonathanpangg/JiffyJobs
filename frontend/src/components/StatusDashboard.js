import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import { Box, Card, Grid, CardActionArea, Typography, CardMedia } from '@mui/material'
import dayjs from 'dayjs';
import check from '../images/Check.png'
import clock from '../images/Clock.png'
import x from '../images/X.png'

export function StatusDashboard() {
    const [statusData, setStatusData] = useState([]) 
    const [prevSize, setPrevSize] = useState([])

    // random image for category
    const randomImage = (seed) => {
        return `https://source.unsplash.com/random?${seed}`;
    };

    useEffect(() => {
        async function getJobs() {
            const email = localStorage.getItem("email")
            const route = "https://jiffyjobs-api-production.up.railway.app/api/users/jobsApplied/" + email

            fetch(route)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    const newJobData = data.map(function(obj) {
                        return [[0, obj.title], [randomImage(obj.categories.toString().split(",")[0]), obj.job_poster], ["", obj.location], ["", obj.pay], ["", obj.description], ["", dayjs(new Date(obj.time[0])).format('MM/DD/YY h:mm A')  + " " + " - " + dayjs(new Date(obj.time[1])).format('h:mm A')], ["", obj.categories.toString()], ["", obj.status]]
                    });
                    setStatusData(newJobData)
                    setPrevSize(newJobData.length)

                    
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        if (prevSize != statusData.length || prevSize == 0) {
            getJobs()
        }
    }, [statusData]);

    return (
        <div>
            <div className='header-one'>
                Progress
            </div>
            <div className='header-two'>
                Check your the progress on your job applications!
            </div>
            <Box className='progress-box'>
                <Grid container className='progress-grid' rowSpacing={3} columnSpacing={3} width='70vw' style={{paddingBottom: '1%'}}>
                    {statusData.map((key) => {
                        return ( 
                            <Grid key={key} item> 
                                <Card sx={{width: '264px', height: '264px'}} elevation={8} square={false} style={{overflow:'hidden', borderRadius: '15px'}}>
                                    <div className='overall-card'>
                                         <div className='overlay' style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '99px',
                                            backgroundColor: key[7][1] === "accepted" ? 'rgba(166, 255, 152, 0.7)' : (key[7][1] === "submitted" ? 'rgba(255, 226, 152, 0.7)': 'rgba(255, 152, 152, 0.7)'),
                                            zIndex: 1, 
                                        }}></div>
                                        <CardMedia
                                            component="img"
                                            alt="placeholder"
                                            height="99px"
                                            image={key[1][0]}
                                        />
                                        <div style={{position: 'absolute', maxWidth: '100%', top: '50%', left: '50%', textAlign: 'center', transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap', zIndex: 2}}>
                                            <img
                                                style={{ width: '24px', height: '24px'}}
                                                src={ key[7][1] === "accepted" ? check: (key[7][1] === "submitted" ? clock: x)}
                                                alt="placeholder"
                                            />
                                            <Typography style={{fontFamily: 'Outfit', fontSize:"20px", paddingLeft:'10px', paddingRight:'10px'}}>
                                                {key[7][1] === "accepted" ? "Application Accepted": (key[7][1] === "submitted" ? "Application Submitted": "Application Rejected")} 
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className='overall-card'>
                                        <div className='status-card'>
                                            <Typography style={{fontFamily: 'Outfit', fontSize:"14px", paddingLeft:'10px', paddingRight:'10px', paddingTop:'10px'}}>
                                                <u>{key[0][1]}</u>
                                            </Typography>
                                            <Typography style={{fontFamily: 'Outfit', fontSize:"12px", paddingLeft:'10px', paddingRight:'10px', paddingTop:'15px'}}>
                                                Pay: ${key[3][1]}
                                            </Typography>
                                            <Typography style={{fontFamily: 'Outfit', fontSize:"12px", paddingLeft:'10px', paddingRight:'10px'}}>
                                                Location: <u>{key[2][1]}</u>
                                            </Typography>
                                            <Typography style={{fontFamily: 'Outfit', fontSize:"12px", paddingLeft:'10px', paddingRight:'10px'}}>
                                                Time: {key[5][1]}
                                            </Typography>
                                            <Typography style={{fontFamily: 'Outfit', fontSize:"12px", paddingLeft: '10px', paddingRight:'10px', position:'relative', overflow:'hidden', textOverflow:'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.1', height: '26px'}}>
                                                Description: {key[4][1]}
                                            </Typography>
                                        </div>
                                        <div className='withdraw-card'>
                                            <Card sx={{width: '12.5vw', height: '2.5vw'}} elevation={8} square={false} style={{overflow:'hidden', borderRadius: '7px', fontFamily: 'Outfit', fontSize: '12px', cursor:'pointer', fontWeight: '400', fontStyle: 'normal', backgroundColor: '#4A4FE4', color: 'white', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                                Withdraw Application
                                            </Card>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}