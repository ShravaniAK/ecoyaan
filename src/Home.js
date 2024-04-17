import React from 'react'
import "./home.css"

const Home = () => {
    return (
        <div>
            <div className="container1">
                <div className="left1">
                    <h1>
                        Join our community in creating a more sustainable future for everyone
                    </h1>
                    <h4>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.

                    </h4>
                    <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
                </div>
                <div className="right1">
                    <img src="/Impact.png" alt="" />
                </div>
            </div>

            <div className="container2">
                <div className="left2">
                    <img src="/OurStory4.png" alt="" />
                </div>
                <div className="right2">
                    <h1>For businesses that care deeply about sustainability</h1>
                    <p>Do you run a business that is committed to sustainability in every aspect of your work?


                    </p>
                    <p>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?

                    </p>
                    <p>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:

                    </p>
                    <button>Contact US</button>
                </div>
            </div>

            <div className="container3">
               
            </div>
            <div className="container4">
                <div className="top">
               <h1>Carefully curated Eco-friendly products</h1>
               <p>We believe that every purchase you make can have a positive impact on the planet and the future.</p>
               <p>Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.

</p>
                </div>

                <div className="bottom">
                <video width="520" height="440" autoplay loop>
         <source src="/ProductCuration.mp4" type="video/mp4"/>
  
  
</video>
                </div>
            </div>
            <div className="container3">
               
               </div>
        </div>
    )
}

export default Home