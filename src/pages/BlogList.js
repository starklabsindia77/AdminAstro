import orderBy from 'lodash/orderBy';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
// @mui
import { Grid, Button, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks
import useSettings from '../hooks/useSettings';
import useIsMountedRef from '../hooks/useIsMountedRef';
// utils
import axios from '../utils/axios';
// routes
// import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { SkeletonPostItem } from '../components/skeleton';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
// sections
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/blogs';
import  blog  from '../data/blogs.json';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

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

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(25),
        paddingBottom : theme.spacing(25),
    },
}));

export default function BlogList() {
    const { themeStretch } = useSettings();

    const isMountedRef = useIsMountedRef();

    const [posts, setPosts] = useState([]);

    const [filters, setFilters] = useState('latest');

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

    const handleChangeSort = (value) => {
        if (value) {
            setFilters(value);
        }
    };

    

    return (
        <Page title="Blog: Posts">
            <RootStyle>
                <Container maxWidth={themeStretch ? false : 'lg'}>
                    <HeaderBreadcrumbs
                        heading="Blog"
                        links={[
                            { name: 'Home', href: '/' },
                            { name: 'Blog', href: '/blog' },
                            { name: 'Posts' },
                        ]}                   
                    />

                    <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                        <BlogPostsSearch />
                        <BlogPostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} />
                    </Stack>

                    <Grid container spacing={3}>
                        {(!posts.length ? [...Array(12)] : sortedPosts).map((post, index) =>
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

        </Page>
    );
}
