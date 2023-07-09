import { useEffect, useState, useCallback } from 'react';
import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @mui
import { Box, Card, Divider, Container, Typography, Pagination } from '@mui/material';
// routes
import { PATH_PAGE } from '../routes/paths';
// hooks
import useSettings from '../hooks/useSettings';
import useIsMountedRef from '../hooks/useIsMountedRef';
// utils
import axios from '../utils/axios';
// components
import Page from '../components/Page';
import Markdown from '../components/Markdown';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { SkeletonPost } from '../components/skeleton';
// sections
import {
  BlogPostHero,
  BlogPostTags,
  BlogPostRecent,
  BlogPostCommentList,
  BlogPostCommentForm,
} from '../sections/blog';

import blog from '../data/blogs.json';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
}));


export default function BlogSingle() {
  const { themeStretch } = useSettings();

  const isMountedRef = useIsMountedRef();

  const { title } = useParams();
  const [allPosts, setAllPosts] = useState(blog);

  const [recentPosts, setRecentPosts] = useState([]);

  const [post, setPost] = useState(null);

  const [error, setError] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const filteredPost = allPosts.filter(post => post.id.toLowerCase() === title.toLowerCase());

      if (isMountedRef.current) {
        setPost(filteredPost[0]);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, [isMountedRef, title]);

  const getRecentPosts = useCallback(async () => {
    try {
      const filteredPost = allPosts.filter((post) => post.id !== title);

      if (isMountedRef.current) {
        setRecentPosts(filteredPost);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMountedRef, title]);

  useEffect(() => {
    getPost();
    getRecentPosts();
  }, [getRecentPosts, getPost]);


  return (
    <Page title="Blog: Post Details">

      <RootStyle>
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Post Details"
            links={[
              { name: 'Home', href: PATH_PAGE.root },
              { name: 'Blog', href: PATH_PAGE.blog.root },
              { name: sentenceCase(title) },
            ]}
          />

          {post && (
            <Card>
              <BlogPostHero post={post} />

              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h6" sx={{ mb: 5 }}>
                  {post.description}
                </Typography>

                <Markdown children={post.body} />

                <Box sx={{ my: 5 }}>
                  <Divider />
                  <BlogPostTags post={post} />
                  {/* <Divider /> */}
                </Box>

                {/* <Box sx={{ display: 'flex', mb: 2 }}>
                  <Typography variant="h4">Comments</Typography>
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    ({post.comments.length})
                  </Typography>
                </Box>

                <BlogPostCommentList post={post} />

                <Box sx={{ mb: 5, mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <Pagination count={8} color="primary" />
                </Box>

                <BlogPostCommentForm /> */}
              </Box>
            </Card>
          )}

          {!post && !error && <SkeletonPost />}

          {error && <Typography variant="h6">404 {error}!</Typography>}

          <BlogPostRecent posts={recentPosts} />
        </Container>
      </RootStyle>
    </Page>
  );
}
