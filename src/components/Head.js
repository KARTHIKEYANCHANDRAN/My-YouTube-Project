import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const handleToggle = () => {
    dispatch(ToggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="flex justify-between  w-full bg-white fixed">
      <div className="flex">
        <img
          onClick={() => handleToggle()}
          className="w-20 p-3 h-16 hover:p-2 cursor-pointer"
          alt="hamburger_logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEXz9fQzMzMqKir3+fixs7J+fn76/Ps2Njbq6uogIiEgICD19/by9PP7/fwlJSXu8O9pamqeoJ+Tk5PLzcxcXFwYFxgMDg1CQ0Ld3d2kpqVLTUw1ODcYGhkODw8+TbZ+AAABM0lEQVR4nO3bWW7DMAwFQNtqUydK4ux773/N5gj9oQkoMwcw8CDJBCSy6wAAAAAAAAAAAAAAAAAAAAAAmF8t0WpywPXxK9ZxnRtxPJ1Xsc6nMTFi3ey2fbTtbpOXsJsu4QH7/jLlLWIdZ0mYuU031yE84HDN3KXlOGyHWNvhWBITduV2+I51uJV1ZsKuLqIlV3wAAACgFTX0lqHGfv4/FtMYa0p+min3x/Mn0PP5uGdGXC/25/Ab4dc+8b60llV4wL5fZiZs/t1irjVMPIhllnO4yAv4Llf3R+Sv9O1xzy2JtbReD+O1ng8AAACYSd003l86S49wasDm+7yb79X/gHeL6XeOhIkzM137c091PL2WsV6ps2vzzB8mP1w0P0MKAAAAAAAAAAAAAAAAAAAAAPCh/gCmZy+HEE0S5QAAAABJRU5ErkJggg=="
        />
        <Link to={"/"}>
          {" "}
          <img
            onClick={() => handleToggle()}
            className="w-32 ml-2"
            alt="youtube_logo"
            src="data:image/png;base64,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"
          />
        </Link>
      </div>
      <div className="">
        <input
          className=" m-2 p-2 w-[650px] border border-gray-400 rounded-full"
          type="text"
          placeholder="Type here to Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        {showSuggestions && (
          <div className="fixed w-[45%] ml-5 bg-white shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-md hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="w-20 p-2 cursor-pointer"
          alt="user_icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaqtAkvphSGdnA_nFeGW9valNUy_bs3dqgQ&s"
        />
      </div>
    </div>
  );
};

export default Head;