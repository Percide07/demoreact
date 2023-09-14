import './App.css'
import logo from './assets/images/logo.png';
import photo1 from './assets/images/photo1.jpg';
import photo2 from './assets/images/photo2.jpg';
import photo3 from './assets/images/photo3.jpg';
import photo4 from './assets/images/photo4.jpg';
import photo5 from './assets/images/photo5.jpg';
import photo6 from './assets/images/photo6.jpg';
import icon1 from './assets/images/like.png';
import icon2 from './assets/images/dislike.png';
import icon3 from './assets/images/send.png';
function App() {
  return (
    <>
      <section className='body'>
        <header className='container'>
          <div className='nav'>
            <img src={logo} alt="logo" className='logo'/>
          </div>
          <div className='content'>
              <div>Home</div>
              <div>About React</div>
              <div>Project</div>
          </div>
          <div className="navBar"> 
              <div></div>
              <button className='btn'>Search</button>
          </div>
        </header>
        <section className='layout'>
      
          <div className='crdSect'>
                  <div className='card'>
                    <div className="profil">
                      <img src={photo1} alt="Cat's photo" className='pro'/>
                      <h2>Announcement 1</h2>
                    </div>
                    <div className='cont'>
                      <h2>Card1</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
                      <div className='action'>
                        <img src={icon1} alt="like button" className='icon'/>
                        <img src={icon2} alt="dislike button" className='icon'/>
                        <img src={icon3} alt="send button" className='icon'/>
                      </div>
                    </div>
                  </div>  
                  <div className='card'>
                    <div className="profil">
                      <img src={photo2} alt="elephant's photo" className='pro'/>
                      <h2>Announcement 2</h2>
                    </div>
                    <div className='cont'>
                      <h2>Card2</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
                      <div className='action'>
                        <img src={icon1} alt="like button" className='icon'/>
                        <img src={icon2} alt="dislike button" className='icon'/>
                        <img src={icon3} alt="send button" className='icon'/>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className="profil">
                      <img src={photo3} alt="panda's photo" className='pro'/>
                      <h2>Announcement 3</h2>
                    </div>
                    <div className='cont'>
                      <h2>Card3</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
                      <div className='action'>
                        <img src={icon1} alt="like button" className='icon'/>
                        <img src={icon2} alt="dislike button" className='icon'/>
                        <img src={icon3} alt="send button" className='icon'/>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className="profil">
                      <img src={photo4} alt="girl's portrait" className='pro'/>
                      <h2>Announcement 3</h2>
                    </div>
                    <div>
                    <div className='cont'>
                      <h2>Card4</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
                      <div className='action'>
                        <img src={icon1} alt="like button" className='icon'/>
                        <img src={icon2} alt="dislike button" className='icon'/>
                        <img src={icon3} alt="send button" className='icon'/>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className="profil">
                      <img src={photo5} alt="elephant with human" className='pro'/>
                      <h2>Announcement 3</h2>
                    </div>
                    <div>
                    <div className='cont'>
                      <h2>Card5</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
                      <div className='action'>
                        <img src={icon1} alt="like button" className='icon'/>
                        <img src={icon2} alt="dislike button" className='icon'/>
                        <img src={icon3} alt="send button" className='icon'/>
                      </div>
                    </div>
                    </div>
                  </div>  
                  <div className='card'>
                    <div className="profil">
                      <img src={photo6} alt="human's face" className='pro'/>
                      <h2>Announcement 3</h2>
                    </div>
                    <div className='cont'>
                      <h2>Card6</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
                      <div className='action'>
                        <img src={icon1} alt="like button" className='icon'/>
                        <img src={icon2} alt="dislike button" className='icon'/>
                        <img src={icon3} alt="send button" className='icon'/>
                      </div>
                    </div>
                  </div>
            </div> 
        </section>
      </section>
    </>
  )
}

export default App
