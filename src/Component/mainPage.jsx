import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from 'uuid';
import "./mainPage.css";
import NotesPage from "./note";

const colors = [{ color: "yellow", name: 'Y' }, { color: "orange", name: 'O' }, { color: "purple", name: "P" }, { color: "blue", name: "B" },
{ color: "green", name: "G" }];

function MainPage() {
  const [showList, setShowList] = useState(false);
  const showMenu = () => setShowList(!showList);
  const [notes, setNotes] = useState([]);

  const selectColor = (color) => {
    setNotes([{ id: uuid(), color, title: 'write something ...' }, ...notes])
  }

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

  const deleteFromNotes = (id) => {
    const deletingNotes = notes.filter(n => {
      return n.id !== id
    })
    setNotes(deletingNotes)
  }

  return (
    <div className="textBody">
      <div className="sideBar">
        <div className="titleWrapper">
          <div className="title">Docket</div>
        </div>
        <div className="dropDownWrapper">
          <div className="dropDown" ref={userRef}>
            <div className="dropDownHeader"
              onClick={showMenu}>
              <div className="dropDownSymbol" >+</div>
              {showList &&
                <div className="dropDownMenu">
                  {colors.map((c, index) => {
                    return (
                      <div className="dropDownItems"
                        key={index}
                        style={{ backgroundColor: c.color }}
                        onClick={() => selectColor(c.color)}>
                        {c.name}
                      </div>
                    )
                  })
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <NotesPage notes={notes} deleteFromNotes={deleteFromNotes} />
    </div>
  )
}

export default MainPage;