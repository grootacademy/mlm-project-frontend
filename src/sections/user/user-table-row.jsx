import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from "src/Base_url";

import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  avatarUrl,
  company,
  role,
  isVerified,
  status,
  id,
  handleClick,
  createdOn,
  getMemberships,
  productAmount,
  approvalStatus,
  transactionId
}) {

  const handleApproval = () => {
    Swal.fire({
      title: "Do you want to approve this request?",
      showDenyButton: true,
      confirmButtonText: "Approve",
      denyButtonText: `Don't approve`
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        try {

          const res = await axios.put(`${BaseUrl}membership/approval`, { membershipId: id }, { withCredentials: true })
          // window.location.reload();
          toast.success(res?.data?.message);
          await getMemberships()
          // Swal.fire("Saved!", "", "success");
        } catch (error) {
          toast.error(error.message);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  // const handleReject = () => {
  //   Swal.fire({
  //     title: "Do you want to reject this request?",
  //     showDenyButton: true,
  //     confirmButtonText: "Reject",
  //     denyButtonText: `Don't Reject`
  //   }).then(async (result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {

  //       try {

  //         const { data } = await axios.put(`${BaseUrl}membership/approval`, { membershipId: id }, { withCredentials: true })
  //         await getMemberships()
  //         toast.success(data.message);
  //       } catch (error) {
  //         toast.error(error.message);
  //       }
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  // }

  return (
    <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox disableRipple checked={selected} onChange={handleClick} />
      </TableCell>

      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatarUrl} />
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>

      <TableCell>{formatDate(createdOn)}</TableCell>

      <TableCell>₹{productAmount}</TableCell>

      <TableCell>
        <Label color={(approvalStatus === 'Pending' || approvalStatus === 'Rejected' && 'error') || 'success'}>{approvalStatus}</Label>
      </TableCell>

      <TableCell align="center">{transactionId}</TableCell>

      {approvalStatus === "Pending" && <TableCell align="center">
        <Grid container spacing={1}>
          <Grid><Label color='success' style={{ cursor: "pointer" }} onClick={handleApproval}>Approve</Label></Grid>
          {/* <Grid><Label color='error' style={{ cursor: "pointer" }} onClick={handleReject}>Reject</Label></Grid> */}
        </Grid>
      </TableCell>}
    </TableRow >

  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  createdOn: PropTypes.string,
  productAmount: PropTypes.number,
  approvalStatus: PropTypes.string,
  transactionId: PropTypes.string,
  id: PropTypes.string,
  getMemberships: PropTypes.func,
};
