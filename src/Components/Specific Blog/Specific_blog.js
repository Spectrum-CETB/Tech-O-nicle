import React from 'react'
import Img from './images/specificblog.png'
//import fb from './images/fb.png'
import './Style.css'


function SpecificBlog() {
    return (
        <>
         <div className="container-fluid sb">
             <div className="row spcfcblog">
                 <div className="col-lg-9 col-md-7 bimg">
<img className="img-fluid spimg " src={Img} alt="" />
<div className="domains">
    <div className="time"><h4>4 min read</h4></div>
    <div className="domain-name">
        <div className="circle1"></div>
        <h4>Coding</h4>
    </div>
    <div className="domain-name">
        <div className="circle2"></div>
        <h4>Creativity</h4>
    </div>
    <div className="domain-name">
        <div className="circle3"></div>
        <h4>Technology</h4>
    </div>
    <div className="date">
        <h4>Wed 22 Sept, 2021</h4>
    </div>
</div>
                 </div>
                 <div className="col-lg-3 col-md-5 pfsection">

                 {/* <div className="pfimg"> */}
                     <img className="img-fluid pimg" 
                     src="https://i.guim.co.uk/img/media/fd9b9ed4d416bd1867fe356e49975b9527c26765/0_59_2588_1553/master/2588.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9524bc6ee58b97a7230c38228afaecec" alt="" />
                 {/* </div> */}
                 <h2 className="wname">Sundar Pichai</h2>
                 <div className="mediaicons">
                 <i className="fab fa fa-facebook-f hh"></i>
                 <i className="fab fa-linkedin-in hh"></i>
                 <i className="fab fa-instagram hh"></i>
                 <i className="fab fa-twitter hh"></i>

                 </div>
                 <button className="follow">Follow</button>
                 <div className="quote">
                     <h1>"I have the power to develop a better you.."</h1>
                 </div>
</div>
             </div>
            <div className="content">
             <h2>I’m a Teacher. I’m About to Quit.</h2>
             <p>Two billionaires walk into a bar…
The first one talks about the fortune he wants to build. He says, “I want to make so much money, my granddaughter doesn’t ever have to get a real job. She can just go be a teacher or something.” The second billionaire says, “Why don’t we just pay teachers fairly now?”
The first billionaire laughs.
That’s an actual conversation, except the other billionaire was Dan Price — and he’s not a billionaire. He’s a CEO who became famous for actually paying his employees what they’re worth.
I’ve been teaching for over ten years. I’ve wanted to be a teacher since I was a kid. It was my dream job. I even got a PhD.
Now, I’m about to quit.<br/><br/>
I’m tired of the vocational awe.
There’s a term in service professions known as “vocational awe.” It refers to the superficial wonder people show to workers like us.
Nurses. Teachers. Nannies. Social workers.
Librarians. Paramedics.
Vocational awe happens .
The first billionaire laughs.
That’s an actual conversation, except the other billionaire was Dan Price — and he’s not a billionaire. He’s a CEO who became famous for actually paying his employees what they’re worth.
I’ve been teaching.
Two billionaires walk into a bar…<br/><br/>
The first one talks about the fortune he wants to build. He says, “I want to make so much money, my granddaughter doesn’t ever have to get a real job. She can just go be a teacher or something.” The second billionaire says, “Why don’t we just pay teachers fairly now?”
The first billionaire laughs.
That’s an actual conversation, except the other billionaire was Dan Price — and he’s not a billionaire. He’s a CEO who became famous for actually paying his employees what they’re worth.
I’ve been teaching for over ten years. I’ve wanted to be a teacher since I was a kid. It was my dream job. I even got a PhD.<br/>
Now, I’m about to quit.<br/><br/>
{/* <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" height="500px" /> */}

<span style={{fontWeight: "bold"}}>Education is in shambles, on purpose.</span> <br/>
There’s another thing you learn when you look at the actual history of schooling and education in America. Americans have always hated school, especially in the south. In the early days of public education, southerners used to terrorize school teachers. They burned down schools. What we’re seeing with school board meetings and angry parents isn’t anything new. If anything, it’s a return to the good old days.
Conservatives know what they’re doing. Around the country, think tanks and right-wing action groups are forcing teachers like me out of their jobs. They want to replace us with their own teachers.
They want to rewrite all the textbooks, and to wash the racism and injustice out of our history. They want to portray slaves as “imported workers,” and recast the KKK as misunderstood heroes.
They want conservative indoctrination centers.
They’re going to get them.
Teachers are quitting. It’s causing shortages. This doesn’t bother politicians in the worst places, because they don’t care about education. They’ve got nothing to lose. The fewer qualified teachers, the better.
All they really need is someone to lecture and show slides, then hand out worksheets.<br/><br/>
 They just need someone who can watch over the kids while their parents work all day, and turn themselves into human shields in case one of their gun-loving nut jobs goes off the deep end. They’ll never say that out loud, but they’re all thinking it.
Conservatives know how to play the long game. They understand the power of state and local governments. Those are the locations of power when it comes to controlling the school system.
If you’ve ever wondered why teachers never seem to make enough money, or why our bosses never listen to us, think about who’s really in charge. That’s when it all starts to make sense.
Our last president said it best:<br/><br/>
I love the poorly educated.
It was one of the few times he was telling the truth. He told it by accident. Conservatives love the poorly educated. They hate the educated. They hate educators even more. They don’t want schools to be safe spaces. They want them to be hellholes and war zones.
I still believe in education. I just don’t believe in how it’s being done, and there’s nothing I can do without risking everything. I’ll still figure out ways to be a teacher, but I think my classroom days are over.
<br/><br/>
Thanking You
</p>
</div>
         </div>
        </>
    )
}

export default SpecificBlog;
