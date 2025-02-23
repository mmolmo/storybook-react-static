/*import images and styles*/
import './Header.css';
import treeHeader from '../assets/images/treeheader.jpg';
const StoryTitle = "The Tortoise and the Hare"

export default function Header() {
  return (
    <header className="App-header" style={{
      backgroundImage: `
      linear-gradient( rgba(44, 74, 59, 0.85), rgba(44, 74, 59, 0.675)),
      url(${treeHeader})
      `
      }}
      aria-label="header background image: winter tree branches with two perched birds, black and white illustration"
      >
      {/*footer styles for bg image and content*/}
      <h1>{StoryTitle}</h1>
      {/*navbar with dummy links*/}
      <nav>
        <a
          className="App-link"
          href="https://link1"
          target="_blank"
          rel="noopener noreferrer"
        >
          link1
        </a>
        <a
          className="App-link"
          href="https://link1"
          target="_blank"
          rel="noopener noreferrer"
        >
          link2
        </a>
        <a
          className="App-link"
          href="https://link1"
          target="_blank"
          rel="noopener noreferrer"
        >
          link3
        </a>
      </nav>
    </header>   
  )
}