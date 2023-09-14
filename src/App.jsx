import './App.css'

function App() {
  return (
    <>
      <header className='container'>
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
      <section>
    
        <div className='crdSect'>
              <div>
                <h2>Card1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
              </div>
              <div>
                <h2>Card2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
              </div>
              <div>
                <h2>Card3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam, minus cupiditate vel voluptatum tempora alias perspiciatis commodi perferendis omnis, facilis aut libero quisquam molestiae totam qui modi facere maxime?</p>
              </div>
        </div>
      </section>
    </>
  )
}

export default App
