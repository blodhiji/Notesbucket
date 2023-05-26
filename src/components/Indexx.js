import React from 'react'
import { Link } from 'react-router-dom'

const Indexx = () => {
  return (
    <>
      <div className=" text-center bgg">
    <div className="cd">
    <div className="card-body ">
      <h1 className="card-title">Free browser-based <span style={{color: "#5e5ed6"}}>Notes</span><span style={{color: "aquamarine"}}>Bucket</span> </h1>
      <p className="card-text">A simple online tool that makes taking down notes easier and more convenient.</p>
      <Link to="/login" className="btn btn-primary">Gets Start  </Link>
    </div>
  </div>
</div>

<div className="card text-center">
  <div className="my-4">
    <span style={{color: "rgb(70, 157, 102)"}}><i className="fa-solid fa-display aa"></i></span>
  </div>
  <div className="card-body">
    <h5 className="card-title">Simple Interface</h5>
     <div className="para">
         <p className="card-text">Nothing too fancy. 
         Just a plain-text editor with a beautifully crafted minimalistic interface that helps you stay focused on what you need to write.</p>
     </div>
  </div>
</div>

<div className="card text-center">
  <div className="my-4">
    <span style={{color: "rgb(70, 157, 102)"}}><i className="fa-solid fa-bars aa"></i></span> 
  </div>
  <div className="card-body">
    <h5 className="card-title">Word Count</h5>
    <div className="para">
    <p className="card-text">Track how many words there are in your text document with real-time word counter.
       The number of words will update as you type and make changes.</p>
  </div>
 </div>
</div>

<div className="card text-center">
  <div className="my-4">
    <span style={{color: "rgb(70, 157, 102)"}}><i className="fa-solid fa-pen-to-square aa"></i></span>
  </div>
  <div className="card-body">
    <h5 className="card-title">Find & Replace</h5>
    <div className="para">
    <p className="card-text">Find and replace allows you to quickly seach for a word or phrase in the whole page and substitute it with something else.</p>
  </div>
 </div>
</div>

<div className="card text-center">
  <div className="my-4">
    <span style={{color: "rgb(70, 157, 102)"}}><i className="fa-solid fa-spell-check aa"></i></span>
  </div>
  <div className="card-body">
    <h5 className="card-title">Spellcheck</h5>
    <div className="para">
    <p className="card-text">It takes advantage of your browser's native spellchecker to instantly find spelling mistakes.
       Simply right-click the red underlined word and choose the correct spelling.</p>
  </div>
 </div>
</div>
<div className="card text-center">
  <div className="my-4">
    <span style={{color: "rgb(70, 157, 102)"}}><i className="fa-sharp fa-solid fa-lock aa"></i></span>
  </div>
  <div className="card-body">
    <h5 className="card-title">Security</h5>
    <div className="para">
    <p className="card-text">Your notes Secure.</p>
  </div>
 </div>
</div>


<main className="contant">
    <h3 style={{marginTop: "50px"}}>Overview</h3>
    <p >Online Notepad is a free browser-based text editor that allows you to create and edit multiple plain-text files in your browser. 
       It is great for writing quick notes and printing a simple page. 
        What makes it special is the autosave functionality which saves your draft every second. 
        This prevents data loss in case you accidentally close the tab, or the browser window suddenly crashes.
         The document you're working on will be automatically restored when you visit back, even when you close and reopen your browser. 
         There's also support for saving documents directly to your computer. 
         Online Notepad is packed with core features that your common text editor provides, 
         including undo, redo, copy, cut, paste, find and replace, font formatting, character map, insert date and time, emoji list, 
         spell checker, word counter, open and save files, and print page.
        </p>

    <h3 >How does it work?</h3>
    <p>Changes are saved automatically as you work thanks to HTML5 localStorage API.
      It grabs a copy of the content from the text editor and saves it to your computer.
      With this method, your data never leaves your device. The default time interval at which draft is saved is 1000ms or 1 second.
      Your notes will stay in the web browser until you clear the cookies and other site data.
      You can try it out by typing anything in the editor and refreshing the page.
    </p>

    <h3 >Browser Compatibility</h3>
    <p>Online Notepad supports modern web browsers including Google Chrome,
      Mozilla Firefox, Safari, Opera, Edge, Internet Explorer and Steam browser.
      You need to enable JavaScript in order to use the app.
    </p>

    <h3 >About</h3>
    <p style={{marginBottom: "0%"}}>This web app is a free product, which can be used by any individual,
      Company, school, government office etc.
      I originally made this for myself to help me remember ideas that will eventually end up on my personal blog.
      This simple tool that all started as a simple project has helped my productivity immensely and I hope it helps you too.
    </p>
   </main>

    </>
  )
}

export default Indexx
