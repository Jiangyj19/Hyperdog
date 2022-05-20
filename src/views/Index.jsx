import {defineComponent,nextTick, onMounted} from 'vue'
import './Index.css'
import WOW from 'wow.js'
const Index = defineComponent(()=>{
  // onMounted(()=>{
  //     var wow = new WOW({
  //       boxClass: "WOW", // animated element css class (default is wow)
  //       animateClass: "animated", // animation css class (default is animated)
  //       offset: 0, // distance to the element when triggering the animation (default is 0)
  //       mobile: true, // trigger animations on mobile devices (default is true)
  //       live: true, // act on asynchronously loaded content (default is true)
  //       callback: function (box) {
  //         // the callback is fired every time an animation is started
  //         // the argument that is passed in is the DOM node being animated
  //       },
  //       scrollContainer: null, // optional scroll container selector, otherwise use window,
  //       resetAnimation: true, // reset animation on end (default is true)
  //     });
  //     wow.init();
  // })
  onMounted(()=>{

    new WOW().init()
  })
  const render = () => {
    return (
      <>
        <div style={{height:'1000px'}}></div>
          <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.5s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Create a great community, launching Discord and Twitter;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Launch website and whitelist giveaways;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                10K NFTs are ready;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Exclusive pre-sale discount for whitelisted members only;
                                Post-mint
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Launch secondary market listing;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Open the shop, in which we create products with our own NFTs;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Continuous meet-up events across the world with our NFT holders;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                Explore Hyperdog Metaverse with your own decentralized identity;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.5s">
                        <div className="timeline-text">
                            <p>
                                Airdrop a new collection or token to our hyper frens;
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <p>
                                List token and launch charity;
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </>
    )
  }
  return render
})

export default Index