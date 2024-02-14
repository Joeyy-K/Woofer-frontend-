import { Link } from "react-router-dom";
import SearchBar from "../ui/Searchbar";
import ProfilePic from "../ui/ProfilePic";

const TopBar = () => {
  return (
    <section>
      <div className="flex justify-center space-x-2 px-4">
        <SearchBar />
        <ProfilePic />
      </div>
    </section>
  )
}

export default TopBar
