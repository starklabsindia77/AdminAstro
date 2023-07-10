import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import { Card, Chip, Grid, Stack, TextField, Typography, Autocomplete, InputAdornment } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import {
  FormProvider,
  RHFSwitch,
  RHFSelect,
  RHFEditor,
  RHFTextField,
  RHFRadioGroup,
  RHFUploadSingleProductFile,
  RHFUploadMultiFile,
} from '../../../components/hook-form';
import axios from '../../../utils/axios';

import { isValidToken, setSession } from '../../../utils/jwt';

// ----------------------------------------------------------------------

const GENDER_OPTION = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Kids', value: 'Kids' },
];

const CATEGORY_OPTION = [
  { group: 'Clothing', classify: ['Shirts', 'T-shirts', 'Jeans', 'Leather'] },
  { group: 'Tailored', classify: ['Suits', 'Blazers', 'Trousers', 'Waistcoats'] },
  { group: 'Accessories', classify: ['Shoes', 'Backpacks and bags', 'Bracelets', 'Face masks'] },
];

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

// ----------------------------------------------------------------------

ProductNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentProduct: PropTypes.object,
};

export default function ProductNewEditForm({ isEdit, currentProduct }) {
  const navigate = useNavigate();
  const uploadImage = useRef([]);
  const [uploadCoverImage, setUploadCoverImage] = useState()
  const { enqueueSnackbar } = useSnackbar();

  const NewProductSchema = Yup.object().shape({
    title: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    cover: Yup.mixed().required('Cover is required'),
    price: Yup.number().moreThan(0, 'Price should not be $0.00'),
  });

  function isJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const defaultValues = useMemo(
    () => ({
      title: currentProduct?.title || '',
      description: currentProduct?.description || '',
      productImages: currentProduct?.productImages || [],
      cover: currentProduct?.cover ||  null,
      images: isJSON(currentProduct?.images) ? JSON.parse(currentProduct?.images) : [] || [],
      code: currentProduct?.code || '',
      sku: currentProduct?.sku || '',
      price: currentProduct?.price || 0,
      priceSale: currentProduct?.priceSale || 0,
      tags: currentProduct?.tags || [TAGS_OPTION[0]],
      inStock: true,
      taxes: true,
      gender: currentProduct?.gender || GENDER_OPTION[2].value,
      category: currentProduct?.category || CATEGORY_OPTION[0].classify[1],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentProduct) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentProduct]);

  const handleCreate = async (data) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);        
        const response2 = await axios.post('/products', data);      
      }
      enqueueSnackbar('Create success!');
      navigate(PATH_DASHBOARD.eCommerce.list);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleEdit = async (data) => {
    try {
      data.id = currentProduct?.id;
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);        
        const response = await axios.put(`/products/${currentProduct?.id}`, data);      
      }      
      enqueueSnackbar('Update success!');
      navigate(PATH_DASHBOARD.eCommerce.list);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      
      if (data.images.length === uploadImage.current.length) {
        data.productImages = uploadImage.current;
      } else {
        data.productImages = uploadImage.current.filter((upload) =>
          data.images.some(
            (image) => upload.file.name === image.name && upload.file.size === image.size
          )
        );
        if (data.productImages.length > data.images.length) {
          data.productImages = data.productImages.slice(0, data.images.length);
        }
      }      
      data.coverImage = uploadCoverImage;
      if (isEdit) {
        handleEdit(data);
      } else {
        handleCreate(data);
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const images = values.images || [];        
      acceptedFiles.forEach(async (file) => {
        const fileData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = () => resolve(
            { 
              file, 
              base64String: reader.result.split(',')[1] 
            }
          );
          reader.onerror = reject;
      
          reader.readAsDataURL(file);
        });       
        
        uploadImage.current = [...uploadImage.current, ...[fileData]];
      });
     
      
      setValue('images', [
        ...images,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);     
    },
    [setValue, values.images, uploadImage.current]
  );

  const handleRemoveAll = () => {
    setValue('images', []);    
    uploadImage.current = [];
  };

  const handleRemove = (file) => {
    const filteredItems = values.images?.filter((_file) => _file !== file);
    setValue('images', filteredItems);
    uploadImage.current = uploadImage.current.filter(image => image.file !== file);   
  };

  const handleSingleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        setUploadCoverImage(base64String);
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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="title" label="Product Name" />

              <div>
                <LabelStyle>Description</LabelStyle>
                <RHFEditor simple name="description" />
              </div>

              <div>
                <LabelStyle>Additional Images</LabelStyle>
                <RHFUploadMultiFile
                  showPreview
                  name="images"
                  accept="image/*"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                  onUpload={() => console.log('ON UPLOAD')}
                />
              </div>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3} mb={2}>
                <div>
                  <LabelStyle>Cover</LabelStyle>
                  <RHFUploadSingleProductFile name="cover" accept="image/*" maxSize={3145728} onDrop={handleSingleDrop} />
                </div>
              </Stack>              
            </Card>

            <Card sx={{ p: 3 }}>
              <RHFSwitch name="inStock" label="In stock" />

              <Stack spacing={3} mt={2}>
                <RHFTextField name="code" label="Product Code" />

                <RHFTextField name="sku" label="Product SKU" />              
                               
              </Stack>
            </Card>

            <Card sx={{ p: 3 }}>
              <Stack spacing={3} mb={2}>
                <RHFTextField
                  name="price"
                  label="Regular Price"
                  placeholder="0.00"
                  value={getValues('price') === 0 ? '' : getValues('price')}
                  onChange={(event) => setValue('price', Number(event.target.value))}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    type: 'number',
                  }}
                />

                <RHFTextField
                  name="priceSale"
                  label="Sale Price"
                  placeholder="0.00"
                  value={getValues('priceSale') === 0 ? '' : getValues('priceSale')}
                  onChange={(event) => setValue('priceSale', Number(event.target.value))}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    type: 'number',
                  }}
                />
              </Stack>

              <RHFSwitch name="taxes" label="Price includes taxes" />
            </Card>

            

            <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
              {!isEdit ? 'Create Product' : 'Save Changes'}
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
