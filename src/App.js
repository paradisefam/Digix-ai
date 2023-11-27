// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="with-hero">
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="logo"></div>
            <nav>
              <div className="links">
                <a href="/get-started">Get Started</a>
                <a href="/studio">Studio</a>
                <a href="/ddsp-vst">DDSP-VST</a>
                <a href="/demos">Demos</a>
                <a href="/blog">Blog</a>
                <a href="/research">Research</a>
                <a href="/talks">Talks</a>
                <a href="/community">Community</a>
              </div>
            </nav>
          </div>
        </div>
        <div className="hero">
          <div className="hero-pianoroll">
            <img
              src="./assets/hero-pianoroll.png"
              alt="background animation of a pianoroll"
            />
          </div>
          <div className="hero-content">
            <a href="/">
              <img
                src="./assets/magenta-logo-bottom-text.png"
                height={"100px"}
                alt="magenta-logo"
              />
            </a>
            <div>
              <h1>
                Make Music and Art
                <br />
                Using Machine Learning
              </h1>
              <div className="action-container">
                <a className="action hero white" href="/blog">
                  Read the Blog
                </a>
                <a className="action hero dark" href="/demos">
                  Try the Demos
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <section className="about">
          <div className="content single">
            <h2 className="section-title">What is Magenta?</h2>
            <div className="section-callout">
              An open source research project exploring the role of machine
              learning as a tool in the creative process.
            </div>
          </div>
        </section>
        <section className="white">
          <div className="content single">
            <h2 className="section-title">What's new?</h2>

            <div className="card">
              <div className="title large">Magenta Studio 2.0</div>
              <div className="tagline">
                Magenta Studio has been upgraded to more seamlessly integrate
                with Ableton Live. It is a collection of music creativity tools
                built on Magenta's open source models, using cutting-edge
                machine learning techniques for music generation.{" "}
                <a href="/studio-announce-2">Read the blog post.</a>
              </div>
            </div>

            <div className="card">
              <div className="title large">
                The 2023 I/O Preshow - Composed by Dan Deacon (with some help
                from MusicLM)
              </div>
              <div className="tagline">
                A look into Dan Deacon's creative process for the 2023 Google
                I/O preshow.{" "}
                <a href="/dandeacon-io-preshow">Read the blog post.</a>
              </div>
            </div>

            <div className="card">
              <div className="title large">
                The Wordcraft Writers Workshop: Creative Co-Writing with AI
              </div>
              <div className="tagline">
                We invited 13 professional writers to explore the limits of
                co-writing with LaMDA and foster an honest and earnest
                conversation about the rapidly changing relationship between
                technology and creativity.{" "}
                <a href="/wordcraft-writers-workshop">Read the blog post.</a>
              </div>
            </div>

            <div className="card">
              <div className="title large">
                The Chamber Ensemble Generator and CocoChorales Dataset
              </div>
              <div className="tagline">
                We combine Coconet and MIDI-DDSP into a system called the
                Chamber Ensemble Generator, which we use to make a giant dataset
                of four-part Bach chorales called CocoChorales.{" "}
                <a href="/ceg-and-cocochorales">Read the blog post.</a>
              </div>
            </div>

            <div>
              <a href="/blog">See more posts.</a>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer-content">
          <div className="logo">
            <a href="https://ai.google/" title="Google AI">
              <img src="./assets/google-logo.png" alt="Google AI" />
            </a>
          </div>
          <ul>
            <li>
              <a href="https://twitter.com/search?q=%23madewithmagenta">
                Twitter
              </a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="https://github.com/tensorflow/magenta">GitHub</a>
            </li>
            <li>
              <a href="https://www.google.com/policies/privacy/">Privacy</a>
            </li>
            <li>
              <a href="https://www.google.com/policies/terms/">Terms</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
