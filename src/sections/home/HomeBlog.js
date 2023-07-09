/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React from 'react';
import { Avatar, Typography, Container, Card, CardContent, CardHeader, Grid, Box, Link } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { m } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ImageIcon from '@material-ui/icons/Image';

import { MotionViewport, varFade } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(15, 0),
    backgroundColor: '#2b302d',
}));

const BlogCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 2,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    color: theme.palette.common.white,
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(22, 28, 36, 0.48)',  // Adjust the rgba values as needed
    },
}));

export default function HomeBlog() {
    

    const blogOne = { title: "AI is Revolutionizing Vedic Astrology", date: "06 Jun 2023", 
    imageUrl: "https://res.cloudinary.com/dsty70mlq/image/upload/f_auto,q_auto/astro_lzhidu", 
    avatarUrl: "https://api-prod-minimal-v5.vercel.app/assets/images/avatar/avatar_1.jpg" };
    const blogTwo = { title: "Modern Astrology and The Intricacies of Celestial Influence", date: "05 Jun 2023", imageUrl: "https://res.cloudinary.com/dsty70mlq/image/upload/f_auto,q_auto/astro1_tbkw1e", avatarUrl: "https://api-prod-minimal-v5.vercel.app/assets/images/avatar/avatar_1.jpg" };
    const blogThree = { title: "Accurate Birth Chart Generation", date: "01 June 2023", imageUrl: "https://w7.pngwing.com/pngs/134/793/png-transparent-the-reading-of-hands-palmistry-astrology-divination-palm-reading-hand-human-horoscope-thumbnail.png", avatarUrl: "https://api-prod-minimal-v5.vercel.app/assets/images/avatar/avatar_1.jpg" };


    return (
        <RootStyle>
            <Container component={MotionViewport} sx={{ position: 'relative', textAlign: 'center' }}>
                <m.div >
                    <Typography variant="h2" gutterBottom align="center" sx={{ mb: 3, color:"primary.main"}}>
                        Latest Blogs
                    </Typography>
                </m.div>
                <Grid container spacing={4} sx={{ mt: 6, }} >
                    <Grid item xs={12} sm={6} md={6}>
                        <BlogCard sx={{ backgroundImage: `url(${blogOne.imageUrl})`, height: "360px" }} >
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <Avatar alt={blogOne.title} src={blogOne.avatarUrl} sx={{ bgcolor: red[500], alignSelf: 'left', mb: 1 }} />
                                    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ position: 'absolute', bottom: '80px', left: '16px' }}>
                                        <Typography gutterBottom color="primary.main">
                                            {blogOne.date}
                                        </Typography>
                                        <Typography component="div">
                                            {blogOne.title}
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        sx={{ position: 'absolute', bottom: '16px', right: '16px' }}
                                    >
                                        <Box display="flex" flexDirection="row" alignItems="center" mr={1} color="grey.300">
                                            <FavoriteIcon fontSize="small"  />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}}>1.95k</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" mr={1} color="grey.300">
                                            <CommentIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}} >9.91k</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" color="grey.300">
                                            <ShareIcon fontSize="small"  />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}} >9.12k</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </CardContent>
                        </BlogCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <BlogCard sx={{ backgroundImage: `url(${blogTwo.imageUrl})`, height: "360px" }} >
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <Avatar alt={blogTwo.title} src={blogTwo.avatarUrl} sx={{ bgcolor: red[500], alignSelf: 'left', mb: 1 }} />
                                    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ position: 'absolute', bottom: '80px', left: '16px' }}>
                                        <Typography gutterBottom color="primary.main"fontSize="12px" >
                                            {blogTwo.date}
                                        </Typography>
                                        <Typography component="div" fontSize="12px" display="flex" flexDirection="column" alignItems="flex-start" >
                                            {blogTwo.title}
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        sx={{ position: 'absolute', bottom: '16px', right: '16px' }}
                                    >
                                        <Box display="flex" flexDirection="row" alignItems="center" mr={1} color="grey.300">
                                            <FavoriteIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}} >1.95k</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" mr={1} color="grey.300">
                                            <CommentIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}} >9.91k</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" color="grey.300">
                                            <ShareIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}}>9.12k</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </BlogCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <BlogCard sx={{ backgroundImage: `url(${blogThree.imageUrl})`, height: "360px" }} >
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <Avatar alt={blogThree.title} src={blogThree.avatarUrl} sx={{ bgcolor: red[500], alignSelf: 'left', mb: 1 }} />
                                    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ position: 'absolute', bottom: '80px', left: '16px' }}>
                                        <Typography gutterBottom color="primary.main" fontSize="12px" >
                                            {blogThree.date}
                                        </Typography>
                                        <Typography component="div" fontSize="12px" display="flex" flexDirection="column" alignItems="flex-start" >
                                            {blogThree.title}
                                        </Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        sx={{ position: 'absolute', bottom: '16px', right: '16px' }}
                                    >
                                        <Box display="flex" flexDirection="row" alignItems="center" mr={1} color="grey.300">
                                            <FavoriteIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}} >1.95k</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" mr={1} color="grey.300">
                                            <CommentIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}}  >9.91k</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" color="grey.300">
                                            <ShareIcon fontSize="small" />
                                            <Typography fontSize="small" sx={{marginLeft: "5px"}} >9.12k</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </BlogCard>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );


}
