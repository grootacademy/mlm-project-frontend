import { Helmet } from 'react-helmet-async';

import { Table } from '@mui/material';


// ----------------------------------------------------------------------

export default function MembershipList() {
    return (
        <>
            <Helmet>
                <title> User | Membership List </title>
            </Helmet>

            <Table />
        </>
    );
}
