import React from 'react'
import "../styles/Card.css"
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
function Card() {
    const Profiles = [
        { Pic: pic1, Name: "Sarah Walker", Job: "Software Engineer", City: "New York, NY" },
        { Pic: pic2, Name: "Daniel Adams", Job: "Product Manager", City: "San Francisco, CA" },
        { Pic: pic3, Name: "Emily Johnson", Job: "Designer", City: "Austin, TX" }
    ]
    return (
        <>
            <div className="profiles-wrapper">
                {Profiles.map((profile, index) => (
                    <div className="profile-card" key={index}>
                        <img src={profile.Pic} alt={profile.Name} className="profile-img" />
                        <div className="profile-info">
                            <h2>{profile.Name}</h2>
                            <p className="job">{profile.Job}</p>
                            <p className="city">{profile.City}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card