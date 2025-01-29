import './Footer.css';
import treeFooter from '../assets/images/treefooter.jpg';

const footerTitle = "‘The Hare and the Tortoise’: analysis"
export default function Footer() {
  return (
    <footer className="App-footer" style = {{
      backgroundImage: `
        linear-gradient( rgba(44, 74, 59, 0.85), rgba(44, 74, 59, 0.675)),
        url(${treeFooter})      
      `
    }}>
      <h2>{footerTitle}</h2>
      <p>Aesop’s fables are known for having a clear moral, and the fable of the hare and the tortoise is no exception. Indeed, the moral of this tale has become proverbial: slow and steady wins the race.</p>
    </footer>   
  )
}