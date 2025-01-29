import './Content.css';
import introImage from '../assets/images/the-hare-and-the-tortoise.jpg';
import sprout from '../assets/images/sprout.jpg'; 

const articleTitle = "‘The Hare and the Tortoise’: summary"
export default function Content() {
  return (
    <body className="App-body">
    <h2 className="articleIntro">{articleTitle}</h2>
    <img src={introImage} className="App-logo" alt="brown hare leaping over tortoise amid red foliage" />
    <article>
      <hr></hr>
      <h3 className="articleIntro">The fable of the hare and the tortoise usually runs something like this.</h3>
      <p>A hare was making fun of a tortoise for moving so slowly. The tortoise, tiring of the hare’s gibes about how slow he was on his feet, eventually challenged the hare to a race. ‘I’ll race you, hare,’ he said; ‘and I bet I’ll win the race.’</p>
      <p>The hare agreed to this challenge, and a fox was found who set the course of the race and to judge who had won at the end.</p>
      <p>When the race started, the hare bounded off in front, making good progress. He was so far ahead of the tortoise that he decided he could afford to stop and have a rest. The tortoise was so far behind that a little rest wouldn’t hurt!</p>
      <p>However, the hare fell fast asleep, and as he lay sleeping, the tortoise continued to plod along at his slow pace. In time, he reached the finish-line and won the race.</p>
      <p>When the hare woke up, he was annoyed at himself for falling asleep. So he ran off towards the finish-line as fast as his legs would carry him, but it was too late, as the tortoise had already won.</p>
      <hr></hr>    
    </article>
      <img src={sprout} className="App-logo" alt="small green sprout with reddish leaves beside stone" />
    </body>   
  )
}