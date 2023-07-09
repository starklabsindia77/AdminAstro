// @mui
import { Container } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { sentenceCase } from 'change-case';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
import useIsMountedRef from '../../hooks/useIsMountedRef';
// components
import Page from '../../components/Page';
import axios from '../../utils/axios';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { BlogNewPostForm } from '../../sections/@dashboard/blog';

// ----------------------------------------------------------------------

export default function BlogEditPost() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();
    const isMountedRef = useIsMountedRef();
    const [error, setError] = useState(null);

    const { title } = useParams();
  const [ currentBlog, setCurrentBlog ] = useState({});

  const isEdit = pathname.includes('edit');

  const getPost = useCallback(async () => {
    try {
      const response = await axios.get(`/blog/post/${title}`);

      if (isMountedRef.current) {
        setCurrentBlog(response.data.post);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, [isMountedRef, title]);

  useEffect(() => {
    getPost();    
  }, [ getPost]);


  return (
    <Page title="Blog: Edit Post">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit a post"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Blog', href: PATH_DASHBOARD.blog.root },
            { name: sentenceCase(title) },
          ]}
        />

        <BlogNewPostForm  isEdit={isEdit} currentBlog={currentBlog}/>
      </Container>
    </Page>
  );
}
