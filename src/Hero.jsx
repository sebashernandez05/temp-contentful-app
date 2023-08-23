import heroImg from './assets/hero.svg'

const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus ex perferendis quisquam, nemo quasi ad recusandae iusto error consectetur
                    est facere magni dolorem ducimus aut saepe corrupti, eius expedita</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img'/>
            </div>
        </div>
    </section>
}

export default Hero