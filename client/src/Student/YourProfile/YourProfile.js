import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./YourProfile.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const YourProfile = () => {
  const [profile, setProfile] = useState({
    studentFullName: "",
    studentUserName: "",
    studentEmail: "",
    studentGender: "",
    studentAge: "",
    studentProfilePicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      studentFullName: profile.studentFullName,
      studentUserName: profile.studentUserName,
      studentEmail: profile.studentEmail,
      studentGender: profile.studentGender,
      studentAge: profile.studentAge,
      studentProfilePicture: profile.studentProfilePicture,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.put(`/api/student/update`, body, config);
      console.log("response =>", response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`/api/student/getProfile`, {
        withCredentials: true,
      });
      const data = response.data;
      setProfile(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          studentProfilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="maincontainer">
      <Navbar />
      <div className="profile-page">
        <main className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar-container">
                <Avatar
                  src={profile.studentProfilePicture}
                  alt="Profile"
                  className="avatar"
                  onClick={() => document.getElementById("avatarInput").click()}
                />
                <input
                  type="file"
                  id="avatarInput"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>
              <h2>My Profile</h2>
            </div>
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="studentFullName"
                    value={profile.studentFullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Username *</label>
                  <input
                    type="text"
                    name="studentUserName"
                    value={profile.studentUserName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="studentEmail"
                    value={profile.studentEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="studentGender"
                    value={profile.studentGender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="studentAge"
                    value={profile.studentAge}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="save-changes">
                Save changes
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourProfile;
