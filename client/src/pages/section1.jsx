import React from 'react'

import Button from '@mui/material/Button';

export default function section1() {
    return (
        <div style={{ margin: "10rem auto 0", width: "100%", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <box style={{ width: "30%" }}>
                <p >For Better Future</p>
                <h1 style={{
                    fontFamily: "'Montserrat'",
                    fontStyle: " normal",
                    fontWeight: "700",
                    fontSize: "58px",
                    lineHeight: "80px",
                    textAlign: "center",
                }}>25K+ STUDENTS TRUST US</h1>
                <p>Find the right instructor for you from over 10,000 teachers</p>
                <Button style={{ background: "#FF6551", fontFamily: "'Montserrat', sans-serif'", padding: "6px", color: "white" }} color="inherit">Get Quote Now</Button>
                <Button variant="outlined">Outlined</Button>
            </box>
        </div>
    )
}
