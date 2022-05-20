import { defineComponent, onMounted, ref } from "vue";
import { 
  TwitterOutlined,
  InstagramOutlined,
  AntCloudOutlined,
  SoundFilled,
  } from "@ant-design/icons-vue";

import WOW from 'wow.js'

import "./Home.css";
import "./Index.css"

import Img from '../assets/images/0.png'
import Unnamed from '../assets/images/unnamed.jpeg'
import wallet from '../assets/images/wallet.svg'
import wallets from '../assets/images/wallets.svg'
import wechat from '../assets/images/wechat.jpeg'
import sm from '../assets/images/sm.avif'
import discord from '../assets/images/discord.svg'
import jeffk from '../assets/images/jeffk.png'
import Boredfish from '../assets/images/Boredfish.png'
import KafkaCoo from '../assets/images/KafkaCoo.png'
import NorrisC from '../assets/images/NorrisC.png'


const Home = defineComponent(()=>{

  onMounted(()=>{
    new WOW().init()
  })

  const introduce = ref([
    { 
      name:'JEFFK',
      img:jeffk,
      introduction:'VC, continuous entrepreneurs, early blockchain participants, extreme sports enthusiasts. Invested and participated in more than 20 start-ups. Cornell MBA'
    },
    { 
      name:'NorrisC',
      img:NorrisC,
      introduction:'Norris C, a Hong Kong based designer, artist, economist. Norris past designing for powerful businessman, now he devoted himself to create a new era of meta-universe space.'
    },
    { 
      name:'Boredfish',
      img:Boredfish,
      introduction:'A serial entrepreneurs and block-chain builder since 2015. Specialized in community operation, branding and research.'
    },
    { 
      name:'KafkaCoo',
      img:KafkaCoo,
      introduction:'Core Team of FoundationDAO,by the people to bulid the ark of human civilization through web3. Also is a holder of blue chip NFT(BAYC,CryptoPunks,Moonbirds,Doodles,CloneX,etc..)'
    }
    
  ])
  
  const visible = ref(false);
  
  const showModal = () => {
    visible.value = true;
  };

  const onCloseMask = () => {
    console.log('mask');
    visible.value = false;
  }


  const walletShow = ref(false)
  const CoinbaseShow = ref(false)
  
  const callback = (key) => {
    console.log(key);
  }

  const inputChange = (e) => {
    console.log(e.data);
  }

  const buyShow = ref(false)


  

  const render = () => {
    return(
      <>
        <header className="header">
          <div className="headerCon jcsb">
            <div className="headerTitle">
              <div className="headerImg">hyperdog</div>
              <div className="headerImg">gallery</div>
              <div className="headerImg" onClick={()=>buyShow.value = !buyShow.value}>
                <text >Buy</text>
                {
                  buyShow.value ? (
                    <div className="contentText" onMouseleave={()=>buyShow.value = false}>
                      <div onClick={()=>window.open('https://www.baidu.com','_blank')}>OpenSea</div>
                      <div>LooksRare</div>
                    </div>
                  ):''
                }
              </div>
              
            </div>
         
            <div className="aic">
              <div className="headerIcon">
                {/* <div className="icon" > */}
                  <img style={{height:'30px',width:'30px'}} src={discord}/>
                {/* </div> */}
                <div className='icon'>
                  <TwitterOutlined  style={{color:'#fff',fontSize:'24px'}}/>
                </div>
              </div>
              <div className="headerConnect" onClick={showModal}>
                Connect a Wallet
              </div>
            
              
              {/* <div className='icon' style={{marginLeft:'18px'}}>
                <SoundFilled style={{color:'#fff',fontSize:'24px'}}/>
              </div> */}
            </div>
          </div>
        </header>
        {/* model 显示 */}
        {
          visible.value ? (
            <div>
              <div className="mask" onClick={onCloseMask}> </div>
              <div className="conenctShow">
                  <div className="connectText" onClick={()=>{
                    walletShow.value = true
                    visible.value = false
                  }}><img className="connectImg" src={Unnamed}/><text >WalletConnect</text></div>
                  <div className="connectText" onClick={()=>{
                    CoinbaseShow.value = true
                    visible.value = false
                    }}><img className="connectImg" src={wallet}/><text >Coinbase</text></div>
                </div>
            </div>
          ):''
        }
        {
          walletShow.value ? (
            <div className="mask">
              <div className="menuShow">
                <div className="jcsb out">
                  <div className="aic">
                    <img className="menuShowIcon" src={wallets} />
                    <div className="menuShowTitle">WalletConnect</div>
                  </div>
                  <div className="close" onClick={()=>{
                    walletShow.value = false
                    CoinbaseShow.value = false
                  }}>
                    <div className="closeIcon">
                      <div className="closeLine1"></div>
                      <div className="closeLine2"></div>
                    </div>
                  </div>
                </div>
                <a-tabs defaultActiveKey="1" onChange={callback} centered tabBarGutter="600" size="large">
                  <a-tab-pane key="1" tab="二维码">
                    <div className="walletQrcode">使用兼容 WalletConnect 的钱包扫描二维码</div>
                    <img src={wechat}/>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="桌面">
                    <div className="walletQrcode">选择你的钱包</div>
                    <input 
                      className="input"
                      placeholder="Search" 
                      onInput={inputChange}
                    />
                    <div className="walletTable">
                      <div className="walletTableList">
                        <img className="walletTableImg" src={sm}/>
                        <div>Ledger</div>
                      </div>
                      <div className="walletTableList">
                        <img className="walletTableImg" src={sm}/>
                        <div>Infinity Wallet</div>
                      </div>
                      <div className="walletTableList">
                        <img className="walletTableImg" src={sm}/>
                        <div>Ledger</div>
                      </div>
                      <div className="walletTableList">
                        <img className="walletTableImg" src={sm}/>
                        <div>Infinity Wallet</div>
                      </div>
                      <div className="walletTableList">
                        <img className="walletTableImg" src={sm}/>
                        <div>Ledger</div>
                      </div>
                      <div className="walletTableList">
                        <img className="walletTableImg" src={sm}/>
                        <div>Ledger</div>
                      </div>
                    </div>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </div>
          ):''
        }
        {
          CoinbaseShow.value ? (
            <div className="mask">
              <div className="conenctShow">CoinbaseShow</div>
            </div>
          ):''
        }
        {/* 中间 */}
        <div  className="center">
          <div className="introduction">
            <div className="info">HyperDog</div>
            <div className="info">Born in the Web3 world, HyperDog is a collection of 10,000 unusually super-excited avatars with richly diverse rarity-backed features.</div>
            <div className="info">Holding a vision of driving the universe HYPER, HyperDog is created for builders, artists, and pioneers of a decentralized future. Like dopamine, HYPER is spiritual energy generated by each of HyperDog to deliver optimism, passion, and creativity. </div>
            <div className="info">Let’s go HYPER together! Let’s build together!</div>
          </div>
          <img className="ufo" src={Img}/> 
        </div>
        
        {/* 动画 */}
        <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.5s">
                    <p>Roadmap 1.0 of Hyperdog</p>
                    <h2>Pre-mint</h2>
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
        {/* 脚步介绍 */}
        <div className="footer">
            <div className="footerFir">YOUR FRENS THROUGH THE METAVERSE</div>
            <div className="footerSec">The Doodles Founders</div>
            <div className="footerThi">
              {/* <div className="footerBox">
                <img src="https://doodles.app/images/doodle_poopie.png"/>
                <div className="footerUrl">@evankeast</div>
                <div className="footerName">JEFFK</div>
                <div className="footerContent">VC, continuous entrepreneurs, early blockchain participants, extreme sports enthusiasts. Invested and participated in more than 20 start-ups. Cornell MBA</div>
              </div> */}
              {
                introduce.value.map(item=>{
                  return (
                    <div className="footerBox">
                      <img src={item.img}/>
                      <div className="footerName">{item.name}</div>
                      <div className="footerContent">{item.introduction}</div>
                    </div>
                  )
                })
              }
              
            </div>
            <div className="footerLast">
            Created by the Doodles Founders with special ♥ to our developer partners, West Coast NFT, our moderators, alfie, disclosure, and the support from the community, our friends, families, and loved ones.
            For all press inquiries, please contact press@doodles.app
            </div>
        </div>
       
      </>
    )
     
  }
  return render
})

export default Home;
