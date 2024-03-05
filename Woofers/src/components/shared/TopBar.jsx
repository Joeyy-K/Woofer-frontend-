import { Link } from "react-router-dom";
import Header from "../ui/Header";
import ProfilePic from "../ui/ProfilePic";
import LogOut from "../ui/LogOut";

const TopBar = () => {
  return (
    <section>
      <div className="flex w-full text-center border-2 px-4">
        <Link to="/home">
          <Header/>
        </Link>
        <LogOut />
        <ProfilePic />
      </div>
    </section>
  )
}

export default TopBar
