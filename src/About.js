import React from 'react';
import './about.css';
import Features from './Features';
import Team from './Team';


const About = () => {

  const teamData = [
    {
        name: "Rita",
       
        description:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business',
      
       
        avatar: '/team1.png'
    },
    {
      name: "Rita",
     
      description:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business',
    
     
      avatar: '/team2.png'
  },
  {
    name: "Rita",
   
    description:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business',
  
   
    avatar: '/team3.png'
},
{
  name: "Rita",
 
  description:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business',

 
  avatar: '/team4.png'
},
{
  name: "Rita",
 
  description:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business',

 
  avatar: '/team5.png'
},
{
  name: "Rita",
 
  description:'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business',

 
  avatar: '/team6.png'
},
];
  return (
    <div>

    
    <div className='con1'>
    <div className="left">
  <h1>About Ecoyaan</h1>
 <p>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.

</p>
<p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
<ul>
  <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
  <li>Videos, posts, and quizzes on climate change and sustainability</li>
  <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
</ul>
    </div>
    <div className="right">
   <img src="/abouteco.png" alt="" />
    </div>
    </div>
    <Features/>
    <h1>Our Team</h1>
    <div className='teams' >
     
            {teamData.map((member, index) => (
              <div className='teams'>

                <Team key={index} {...member} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default About