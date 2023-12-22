import * as React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default function Attendee() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: '20px auto'}
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Attendee Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Attendee Company" variant="outlined" />
                </Box>
            </Paper>
        </Container>
    );
}
