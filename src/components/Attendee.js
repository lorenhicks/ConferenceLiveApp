import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Attendee() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const paperStyleSpeaker = { padding: '50px 20px', width: 500, margin: '20px auto' }
    const headerStyle = { color: "#005EB8", "text-shadow": "-.5px .5px 1px rgba(20, 20, 20, 0.5)" }
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [attendees, setAttendees] = useState([])
    const handleClick = (e) => {
        e.preventDefault()
        const attendee = { name, company }
        console.log(attendee)
        fetch("http://localhost:8080/attendee/add", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(attendee)
        }).then(() => {
            console.log(JSON.stringify(attendee.name) + ' from ' + JSON.stringify(attendee.company) + ' has arrived.')
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/attendee/getAll")
            .then(res => res.json())
            .then((result) => {
                setAttendees(result);
            }
            )
    }, [])


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={headerStyle}>Check-In</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Speaker Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="outlined-basic" style={{ marginTop: "10px", marginBottom: "10px" }} label="Speaker Company" variant="outlined" value={company} onChange={(e) => setCompany(e.target.value)} fullWidth />
                    <Button onClick={handleClick} color="blue" style={{ color: "white", background: "#005EB8" }}>Check-In</Button>

                </Box>
                <h2>Arrivals</h2>
                <Paper elevation={3} style={paperStyleSpeaker}>
                    {attendees.map(attendee => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={attendee.id}>
                            Conference Hall: {attendee.id} <br />
                            Speaker: {attendee.name} <br />
                            Company: {attendee.company} <br />
                        </Paper>
                    ))}
                </Paper>
            </Paper>
        </Container>
    );
}
