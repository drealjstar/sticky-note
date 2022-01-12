import React from "react";
import "./note.css";

function Notes(props) {

  const { notes, deleteFromNotes } = props;

  return (
    <div className="notesPage">
      <div className="inputWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="searchIcon" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input placeholder="Search" className="search" />
      </div>
      <div className="subTitle"><h1>Notes</h1></div>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div style={{ backgroundColor: note.color }} className="note" key={index}>
              <div className="editAndDeleteWrapper">
                <div className="delete"
                  onClick={() => {
                    console.log(note);
                    deleteFromNotes(note.id);
                  }}
                >×</div>
              </div>
              <textarea rows="15" cols="40">
                {note.title}
              </textarea>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Notes;

