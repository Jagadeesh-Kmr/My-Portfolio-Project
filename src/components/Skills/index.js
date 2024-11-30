import Header from '../Header'
import './index.css'

const Skills = () => (
  <>
    <div className="skills-header-div">
      <Header />
    </div>
    <div className="skills-bg-div">
      <p className="skills-main-p">
        Skills I have learned from <br />
      </p>
      <a
        href="https://www.linkedin.com/school/nxtwavetech/posts/?feedView=all"
        target="_blank"
        rel="noreferrer"
        className="cert-link-element"
      >
        <p className="nxtwave-p">NXTWave</p>
      </a>

      <div className="skills-img-div">
        <a
          href="https://certificates.ccbp.in/intensive/static-website?id=RAYZJWYXFI"
          target="_blank"
          rel="noreferrer"
          className="cert-link-element"
        >
          <div className="skills-div">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQcAAqY4kROPS4vp1Kc1phNYc5oO8ya0ogS_GgxeBAJypSNy6S"
              alt="html"
              className="skills-img"
            />
            <p>HTML</p>
          </div>
        </a>

        <a
          href="https://certificates.ccbp.in/intensive/flexbox?id=AVHZBTINCQ"
          target="_blank"
          rel="noreferrer"
          className="cert-link-element"
        >
          <div className="skills-div">
            <img
              src="https://www.webcodegeeks.com/wp-content/uploads/2014/10/css3-logo.jpg.webp"
              alt="css"
              className="skills-img"
            />
            <p>CSS</p>
          </div>
        </a>

        <a
          href="https://certificates.ccbp.in/intensive/javascript-essentials?id=MWLXYJLHTM"
          target="_blank"
          rel="noreferrer"
          className="cert-link-element"
        >
          <div className="skills-div">
            <img
              src="https://global.discourse-cdn.com/sitepoint/original/3X/e/b/eba3983204f9f9c01dab4c54e33b2b9d9a2731e0.png"
              alt="javaScript"
              className="skills-img"
            />
            <p>JS</p>
          </div>
        </a>

        <a
          href="https://certificates.ccbp.in/intensive/react-js?id=XSKXTXKPOQ"
          target="_blank"
          rel="noreferrer"
          className="cert-link-element"
        >
          <div className="skills-div">
            <img
              src="https://media.licdn.com/dms/image/v2/C510BAQGXWP9awTLTpA/company-logo_200_200/company-logo_200_200/0/1630609383515?e=2147483647&v=beta&t=OSEuwOZelAhEe36fONZDySj8NMRScqgyhxi1jz48qc8"
              alt="React"
              className="skills-img"
            />
            <p>React</p>
          </div>
        </a>

        <a
          href="https://certificates.ccbp.in/intensive/developer-foundations?id=MWQFCTFCES"
          target="_blank"
          rel="noreferrer"
          className="cert-link-element"
        >
          <div className="skills-div">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYBEs3d-RjiL3BzC9wDtzJe_lr_0nijFWQJZHfLwgU-hzOOXXW"
              alt="Git"
              className="skills-img"
            />
            <p>Git</p>
          </div>
        </a>

        <a
          href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=MJKPQROZMH"
          target="_blank"
          rel="noreferrer"
          className="cert-link-element"
        >
          <div className="skills-div">
            <img
              src="https://media.licdn.com/dms/image/sync/v2/D5627AQH7fn6_Ig1jag/articleshare-shrink_800/articleshare-shrink_800/0/1711833058073?e=2147483647&v=beta&t=2haYsdEjNsGzpEzltT-EiOGbAMgEXrK4-7oOe41V1YQ"
              alt="Sql"
              className="skills-img"
            />
            <p>Sql</p>
          </div>
        </a>
      </div>
    </div>
  </>
)

export default Skills
