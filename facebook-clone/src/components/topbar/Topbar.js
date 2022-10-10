import "./topbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">DAP Social</span>
        </div> 
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchOutlinedIcon className="searchIcon" />
                <input placeholder="Search for post, video or person" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatBubbleIcon />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon />
                    <span className="topbarIconBadge">3</span>
                </div>
            </div>
            <img src="/assets/person/aish.jpeg" alt="" className="topbarImg" />
        </div>    
    </div>
  )
}

export default Topbar
