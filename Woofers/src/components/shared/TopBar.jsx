import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../UI/Searchbar";

const TopBar = () => {

  const navigate = useNavigate();

  return (
    <section className="topbar">
      <div className="flex-between py-4">
       <SearchBar />
      </div>
    </section>
  )
}

export default TopBar