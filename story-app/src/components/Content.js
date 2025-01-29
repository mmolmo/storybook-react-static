/*import images and styles*/
import './Content.css';
import introImage from '../assets/images/the-hare-and-the-tortoise.jpg';
import sprout from '../assets/images/sprout.jpg'; 

const articleTitle = "‘The Hare and the Tortoise’ Summary"
export default function Content() {
  return (
    <body className="App-body">
    <h2 className="articleIntro">{articleTitle}</h2>
    <figure className="App-contentImage">
      <img src={introImage} alt="brown hare leaping over tortoise amid red foliage" />
    </figure>
    {/*article containing the summary*/}
    <article>
      <hr></hr>
      <h3 className="articleIntro">The fable of the hare and the tortoise usually runs something like this.</h3>
      <p>A hare, always boasting about his speed, often mocked a tortoise for being so slow. Tired of the hare’s constant teasing, the tortoise finally challenged him to a race. "I may be slow, but I believe I can beat you," the tortoise declared. Amused by the idea, the hare eagerly accepted, and a wise owl was chosen to set the course and judge the winner.</p>
      <p>At the start of the race, the hare dashed ahead, leaving the tortoise far behind. Confident in his inevitable victory, he decided to take a break, believing there was no way the tortoise could catch up. The hare lay down beneath a shady tree and soon drifted off into a deep sleep.</p>
      <p>Meanwhile, the tortoise, moving at his usual slow but steady pace, kept going without pause. While the hare slept, the tortoise gradually closed the gap and eventually crossed the finish line.</p>
      <p>By the time the hare awoke, the tortoise was mere steps from the finish line. Panicking, the hare sprinted but it was too late. The tortoise crossed the line first, earning cheers from the watching animals. The hare hung his head while the tortoise simply said, “Pride has swift legs but a blind eye.”</p>
      <hr></hr>    
      <figure className="story-divider" aria-hidden="true">❦</figure>  
    </article>
    <figure className="App-contentImage">
      <img src={sprout} alt="small green sprout with reddish leaves beside stone" />
    </figure>
    </body>   
  )
}