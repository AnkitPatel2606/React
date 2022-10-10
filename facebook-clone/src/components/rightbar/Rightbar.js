import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift3.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Angelina</b> and <b>2 other</b> have birthdy today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="reightbarInfoKey">City : </span>
            <span className="reightbarInfoValue">Mumbai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="reightbarInfoKey">From : </span>
            <span className="reightbarInfoValue">Banglore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="reightbarInfoKey">Relationship : </span>
            <span className="reightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/billgates.jpg" alt="" />
            <span className="rightbarFollowingName">Bill Gates</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/adani.jpg" alt="" />
            <span className="rightbarFollowingName">Gautam Adani</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/bella.avif" alt="" />
            <span className="rightbarFollowingName">Bella Emid</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/girl1.jfif" alt="" />
            <span className="rightbarFollowingName">Jessica Alba</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  );
};

export default Rightbar;
