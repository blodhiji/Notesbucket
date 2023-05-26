import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
  const { note, updateNote} = props;
  return (
    <>
    <div className="col-md-4">
      <div className="card my-3" style={{ border: "2px solid rgb(82 255 0)", backgroundColor: "rgb(252 255 251)"}}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash-can mx-2" style={{ color: "#f92705"}} onClick={()=>{deleteNote(note._id);
    props.showAlert("Deleted successfully", "success");}}></i>
            <i className="fa-solid fa-pen-to-square mx-2" style={{ color: "rgb(64 73 89)" }} onClick={()=>{updateNote(note);}}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Noteitem;
