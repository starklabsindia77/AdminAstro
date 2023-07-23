import PropTypes from 'prop-types';
// form
import { useFormContext } from 'react-hook-form';
// @mui
import { Stack, Divider, Typography, Button } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
import useToggle from '../../../../hooks/useToggle';
// _mock
import { _orderAddressFrom, _orderAddressTo } from '../../../../_mock';
// components
import Iconify from '../../../../components/Iconify';
//
import OrderAddressListDialog from './OrderAddressListDialog';

// ----------------------------------------------------------------------

export default function OrderNewEditAddress() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const upMd = useResponsive('up', 'md');

  const values = watch();

  const { toggle: openFrom, onOpen: onOpenFrom, onClose: onCloseFrom } = useToggle();

  const { toggle: openTo, onOpen: onOpenTo, onClose: onCloseTo } = useToggle();

  const { orderFrom, orderTo } = values;

  return (
    <Stack
      spacing={{ xs: 2, md: 5 }}
      direction={{ xs: 'column', md: 'row' }}
      divider={<Divider flexItem orientation={upMd ? 'vertical' : 'horizontal'} sx={{ borderStyle: 'dashed' }} />}
      sx={{ p: 3 }}
    >
      <Stack sx={{ width: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="h6" sx={{ color: 'text.disabled' }}>
            From:
          </Typography>

          <Button size="small" startIcon={<Iconify icon="eva:edit-fill" />} onClick={onOpenFrom}>
            Change
          </Button>

          <OrderAddressListDialog
            open={openFrom}
            onClose={onCloseFrom}
            selected={(selectedId) => orderFrom?.id === selectedId}
            onSelect={(address) => setValue('orderFrom', address)}
            addressOptions={_orderAddressFrom}
          />
        </Stack>

        <AddressInfo name={orderFrom.name} address={orderFrom.address} phone={orderFrom.phone} />
      </Stack>

      <Stack sx={{ width: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="h6" sx={{ color: 'text.disabled' }}>
            To:
          </Typography>

          <Button
            size="small"
            startIcon={<Iconify icon={orderTo ? 'eva:edit-fill' : 'eva:plus-fill'} />}
            onClick={onOpenTo}
          >
            {orderTo ? 'Change' : 'Add'}
          </Button>

          <OrderAddressListDialog
            open={openTo}
            onClose={onCloseTo}
            selected={(selectedId) => orderTo?.id === selectedId}
            onSelect={(address) => setValue('orderTo', address)}
            addressOptions={_orderAddressTo}
          />
        </Stack>

        {orderTo ? (
          <AddressInfo name={orderTo.name} address={orderTo.address} phone={orderTo.phone} />
        ) : (
          <Typography typography="caption" sx={{ color: 'error.main' }}>
            {errors.orderTo ? errors.orderTo.message : null}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

AddressInfo.propTypes = {
  address: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

function AddressInfo({ name, address, phone }) {
  return (
    <>
      <Typography variant="subtitle2">{name}</Typography>
      <Typography variant="body2" sx={{ mt: 1, mb: 0.5 }}>
        {address}
      </Typography>
      <Typography variant="body2">Phone: {phone}</Typography>
    </>
  );
}
