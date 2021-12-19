import React, { useState, useEffect, useRef } from "react";
import "./note.css";
import MainPage from "./mainPage";

const colors = [{ color: "yellow", name: 'Y' }, { color: "orange", name: 'O' }, { color: "purple", name: "P" }, { color: "blue", name: "B" },
{ color: "green", name: "G" }];

function Note() {
  const [showList, setShowList] = useState(false);
  const showMenu = () => setShowList(!showList);

  const userRef = useRef()
  function handleClickOutside(event) {
    if (!userRef?.current?.contains(event.target)) {
      setShowList(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userRef]);

  return (
    <div className="textBody">
      <div className="sideBar">
        <div className="titleWrapper">
          <div className="title">Docket</div>
        </div>
        <div className="dropDownWrapper">
          <div className="dropDown" ref={userRef}>
            <div className="dropDownHeader"
              onClick={showMenu}
            >
              <div className="dropDownSymbol" >+</div>
              {showList &&
                <div className="dropDownMenu">
                  {colors.map(c => {
                    return (
                      <div className="dropDownItems" style={{ backgroundColor: c.color }}>
                        {c.name}</div>
                    )
                  })
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <MainPage />
    </div>
  )
}

export default Note;