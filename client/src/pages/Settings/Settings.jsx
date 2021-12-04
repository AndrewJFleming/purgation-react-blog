import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";

import ProfileImage from "../../images/profile.jpg";

export default function Settings() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={ProfileImage} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => {}}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" onChange={(e) => {}} />
          <label>Email</label>
          <input type="email" placeholder="User Email" onChange={(e) => {}} />
          <label>Password</label>
          <input type="password" onChange={(e) => {}} />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
