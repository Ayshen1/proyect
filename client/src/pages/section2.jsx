import { height } from '@mui/system'
import React from 'react'

export default function section2() {
    return (
        <div style={{ width: "1300px", margin: "10rem auto 0" }}>
            <div style={{ width: "40%", left: "0", top: "30%" }}>
                <p style={{ color: "#FF6551", fontWeight: "700", fontSize: "14px", lineHeight: "24px" }}>Testimonials</p>
                <h2 style={{ fontWeight: "700", fontSize: "40px", lineHeight: " 50px" }}>Our Experts Teacher</h2>
                <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"row" , marginTop:"6rem"}}>
                <div style={{width:"50%",padding:"1rem 9rem" ,display: "flex" ,flexDirection:"column",alignItems:"center"}}>
                    <img style={{width:"8rem", height:"7rem", borderRadius:"50%"}} src="https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?w=1380&t=st=1684484187~exp=1684484787~hmac=6cd06ad2bb0f0214e397e0514e83bc72c9a4864eafbb6221990a053c12c2a1de" alt="" />
                    <p>Slate helps you see how many more days
                        you need to work to reach your financial
                        goal for the month and year.</p>
                        <h5>Regina Miles</h5>
                        <h6>Designer</h6>
                </div>
                <div style={{width:"50%",padding:"1rem 9rem" ,display: "flex" ,flexDirection:"column",alignItems:"center"}}>
                    <img style={{width:"8rem", height:"7rem", borderRadius:"50%"}} src="https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?w=1380&t=st=1684484187~exp=1684484787~hmac=6cd06ad2bb0f0214e397e0514e83bc72c9a4864eafbb6221990a053c12c2a1de" alt="" />
                    <p>Slate helps you see how many more days
                        you need to work to reach your financial
                        goal for the month and year.</p>
                        <h5>Regina Miles</h5>
                        <h6>Designer</h6>
                </div>
            </div>
        </div >
    )
}
