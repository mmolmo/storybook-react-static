/*import images and styles*/
import './Footer.css';
import treeFooter from '../assets/images/treefooter.jpg';

const footerTitle = "‘The Hare and the Tortoise’ Analysis"
export default function Footer() {
  return (
    <footer className="App-footer" style = {{
      backgroundImage: `
        linear-gradient( rgba(44, 74, 59, 0.85), rgba(44, 74, 59, 0.675)),
        url(${treeFooter})      
      `
    }}
    aria-label="footer background image: textured tree trunks line drawing against light background"
    >
    {/*footer styles for bg image and content*/}
      <h2>{footerTitle}</h2>
      <article>
        <h3 className="articleSynopsis">Like many of Aesop’s fables, this story delivers a straightforward yet powerful lesson.</h3>
        <p>The well-known moral—slow and steady wins the race—highlights the value of persistence and determination over arrogance and complacency. The hare, despite his natural advantage, loses because he underestimates his opponent and overestimates his own ability.</p>
      </article>
    </footer>   
  )
}