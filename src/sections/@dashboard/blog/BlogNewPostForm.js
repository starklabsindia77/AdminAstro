import * as Yup from 'yup';
import { useCallback, useState, useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Grid, Card, Chip, Stack, Button, TextField, Typography, Autocomplete } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../utils/axios';
import { isValidToken, setSession } from '../../../utils/jwt';
// components
import { RHFSwitch, RHFEditor, FormProvider, RHFTextField, RHFUploadSingleFile } from '../../../components/hook-form';
//
import BlogNewPostPreview from './BlogNewPostPreview';

// ----------------------------------------------------------------------

const TAGS_OPTION = [
  "Astrology",
  "Numerology",
  "Zodiac",
  "Horoscope",
  "Tarot",
  "Palmistry",
  "NatalChart",
  "AstrologicalSigns",
  "PlanetaryAspects",
  "Psychic",
  "Divination",
  "Spirituality",
  "Mysticism",
  "Occult",
  "Metaphysical",
  "CosmicEnergy",
  "AstrologyHouses",
  "AstrologyTransits",
  "AstrologyCompatibility",
  "NumerologyChart",
  "LifePathNumber",
  "AstrologyForecast",
  "AstrologySymbols",
  "NumerologyReading",
  "TarotReading",
  "Esotericism",
  "Paranormal",
  "AstrologyPlanets",
  "AstrologyAspects",
  "NumerologyNumbers",
  "CrystalHealing",
"RuneReading",
"TeaLeafReading",
"AuraReading",
"Chakras",
"Reiki",
"Meditation",
"SpiritGuides",
"Channeling",
"PastLifeRegression",
"KarmicAstrology",
"VedicAstrology",
"ChineseAstrology",
"MayanAstrology",
"DreamInterpretation",
"AstrologyBirthChart",
"Synastry",
"NumerologyLifePath",
"NumerologyMasterNumbers",
"MoonSigns",
"AscendantSigns",
"SunSigns",
"AstrologyElements",
"NumerologyCompatibility",
"Clairvoyance",
"EnergyHealing",
"Intuition",
"LawOfAttraction",
"QuantumPhysics",
"SacredGeometry",
];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

BlogNewPostForm.propTypes = {
  isEdit: PropTypes.bool,
  currentBlog: PropTypes.object,
};

// ----------------------------------------------------------------------

export default function BlogNewPostForm({ isEdit, currentBlog }) {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [uploadImage, setUploadImage] = useState()
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenPreview = () => {
    setOpen(true);
  };

  const handleClosePreview = () => {
    setOpen(false);
  };

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    content: Yup.string().min(1000).required('Content is required'),
    cover: Yup.mixed().required('Cover is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentBlog?.title || '',
      description: currentBlog?.description || '',
      content: currentBlog?.content || '',
      cover: currentBlog?.cover ||  null,
      tags: currentBlog?.tags ? JSON.parse(currentBlog.tags) : ['Astrology'] || ['Astrology'],
      publish: currentBlog?.publish === 1 ? true : false || true,
      comments: currentBlog?.comments === 1 ? true : false || true,
      metaTitle: currentBlog?.metaTitle || '',
      metaDescription: currentBlog?.metaDescription || '',
      metaKeywords:  currentBlog?.metaKeywords ? JSON.parse(currentBlog.metaKeywords) : ['Astrology'] || ['Astrology'],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentBlog]
  );

  

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentBlog) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentBlog]);

  const onSubmit = async (data) => {
    try {
      
      data.image = uploadImage;
      data.author = {
        name: user?.displayName,
        avatarUrl: user?.photoURL
      }
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        if(isEdit){
          const response = await axios.put(`/blogs/${currentBlog?.guid}`, data);
          if (response.status === 200) {
            reset();
            handleClosePreview();
            enqueueSnackbar('Updated successfully!');
            navigate(PATH_DASHBOARD.blog.posts);
          }
        }else{
          const response2 = await axios.post('/blogs', data);
          if (response2.status === 201) {
            reset();
            handleClosePreview();
            enqueueSnackbar('Post success!');
            navigate(PATH_DASHBOARD.blog.posts);
          }
        }
      }      
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        setUploadImage(base64String);
      };
      reader.readAsDataURL(file);

      if (file) {
        setValue(
          'cover',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <RHFTextField name="title" label="Post Title" />

                <RHFTextField name="description" label="Description" multiline rows={3} />

                <div>
                  <LabelStyle>Content</LabelStyle>
                  <RHFEditor simple name="content" />
                </div>

                <div>
                  <LabelStyle>Cover</LabelStyle>
                  <RHFUploadSingleFile name="cover" accept="image/*" maxSize={3145728} onDrop={handleDrop} />
                </div>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <div>
                  <RHFSwitch
                    name="publish"
                    label="Publish"
                    labelPlacement="start"
                    sx={{ mb: 1, mx: 0, width: 1, justifyContent: 'space-between' }}
                  />

                  <RHFSwitch
                    name="comments"
                    label="Enable comments"
                    labelPlacement="start"
                    sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                  />
                </div>

                <Controller
                  name="tags"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      multiple
                      freeSolo
                      onChange={(event, newValue) => field.onChange(newValue)}
                      options={TAGS_OPTION.map((option) => option)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip {...getTagProps({ index })} key={option} size="small" label={option} />
                        ))
                      }
                      renderInput={(params) => <TextField label="Tags" {...params} />}
                    />
                  )}
                />

                <RHFTextField name="metaTitle" label="Meta title" />

                <RHFTextField name="metaDescription" label="Meta description" fullWidth multiline rows={3} />

                <Controller
                  name="metaKeywords"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      multiple
                      freeSolo
                      onChange={(event, newValue) => field.onChange(newValue)}
                      options={TAGS_OPTION.map((option) => option)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip {...getTagProps({ index })} key={option} size="small" label={option} />
                        ))
                      }
                      renderInput={(params) => <TextField label="Meta keywords" {...params} />}
                    />
                  )}
                />
              </Stack>
            </Card>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button fullWidth color="inherit" variant="outlined" size="large" onClick={handleOpenPreview}>
                Preview
              </Button>
              <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                Post
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>

      <BlogNewPostPreview
        values={values}
        isOpen={open}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
}
