/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React, {useState, useEffect, useCallback}  from 'react';
import orderBy from 'lodash/orderBy';
import { Avatar, Typography, Container, Card, CardContent, CardHeader, Grid, Box, Link } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { m } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ImageIcon from '@material-ui/icons/Image';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { SkeletonPostItem } from '../../components/skeleton';
import axios from '../../utils/axios';

import { MotionViewport, varFade } from '../../components/animate';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../blogs';
import  blog  from '../../data/blogs.json';

const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(15, 0),
    backgroundColor: '#2b302d',
}));

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
];

const applySort = (posts, sortBy) => {
    if (sortBy === 'latest') {
        return orderBy(posts, ['createdAt'], ['desc']);
    }
    if (sortBy === 'oldest') {
        return orderBy(posts, ['createdAt'], ['asc']);
    }
    if (sortBy === 'popular') {
        return orderBy(posts, ['view'], ['desc']);
    }
    return posts;
};


export default function HomeBlog() {
    const [posts, setPosts] = useState([]);
    const [filters, setFilters] = useState('latest');
    const isMountedRef = useIsMountedRef();

    const sortedPosts = applySort(posts, filters);

    const getAllPosts = useCallback(async () => {
        try {
          const response = await axios.get('/blog/posts/all');      
          if (isMountedRef.current) {
            setPosts(response.data.posts);
          }
        } catch (error) {
          console.error(error);
        }
      }, [isMountedRef]);
    
      useEffect(() => {
        getAllPosts();
      }, [getAllPosts]);

    // const blogOne = { title: "AI is Revolutionizing Vedic Astrology", date: "06 Jun 2023", 
    // imageUrl: "https://res.cloudinary.com/dsty70mlq/image/upload/f_auto,q_auto/astro_lzhidu", 
    // avatarUrl: "https://api-prod-minimal-v5.vercel.app/assets/images/avatar/avatar_1.jpg" };
    // const blogTwo = { title: "Modern Astrology and The Intricacies of Celestial Influence", date: "05 Jun 2023", imageUrl: "https://res.cloudinary.com/dsty70mlq/image/upload/f_auto,q_auto/astro1_tbkw1e", avatarUrl: "https://api-prod-minimal-v5.vercel.app/assets/images/avatar/avatar_1.jpg" };
    // const blogThree = { title: "Accurate Birth Chart Generation", date: "01 June 2023", imageUrl: "https://w7.pngwing.com/pngs/134/793/png-transparent-the-reading-of-hands-palmistry-astrology-divination-palm-reading-hand-human-horoscope-thumbnail.png", avatarUrl: "https://api-prod-minimal-v5.vercel.app/assets/images/avatar/avatar_1.jpg" };


    return (
        <RootStyle>
            <Container component={MotionViewport} sx={{ position: 'relative', textAlign: 'center' }}>
                <m.div >
                    <Typography variant="h2" gutterBottom align="center" sx={{ mb: 3, color:"primary.main"}}>
                        Latest Blogs
                    </Typography>
                </m.div>
                
                <Grid container spacing={3}>
                        {(!posts.length ? [...Array(12)] : sortedPosts).slice(0, 3).map((post, index) =>
                            post ? (
                                <Grid key={post.id} item xs={12} sm={6} md={(index === 0 && 6) || 3}>
                                    <BlogPostCard post={post} index={index} />
                                </Grid>
                            ) : (
                                <SkeletonPostItem key={index} />
                            )
                        )}
                </Grid>
            </Container>
        </RootStyle>
    );


}
