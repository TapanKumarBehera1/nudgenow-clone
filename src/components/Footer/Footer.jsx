import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div id="footer_container">
        <div id="footerlinks_container">
          <div id="footer_first_div">
            <div className="footer_img_logo">
              <img src="https://assets-global.website-files.com/64392fc35d736d7f205f3f62/6439327b5d736d104c5f6259_logomark.webp" alt="logo" style={{width:"2rem",cursor:"pointer"}}/>
              <h2 id="footer_nudge_text">Nudge</h2>
            </div>
            <div>
              <p id="email-subscribe-text">Subscribe to our newsletter</p>
              <div id="email_subscribe_container">
                <input id="footer_input_email" type="text" placeholder="Your email" />
                <button id="footer_subscribe">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-text-box">
            <div id="first_top_text1">Company</div>
            <div>Home</div>
            <div>How it works</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>Glossary</div>
          </div>

          <div className="footer-text-box">
            <div id="first_top_text2">Modules</div>
            <div>Stories & Videos</div>
            <div>Gamification & Rewards</div>
            <div>Nudges</div>
            <div>Game zone</div>
            <div>Surveys</div>
          </div>

          <div className="footer-text-box">
            <div id="first_top_text3">Use Cases</div>
            <div>User onboarding & activation</div>
            <div>Feature adoption</div>
            <div>Engagement</div>
            <div>Conversion & Monetization</div>
            <div>User research & Insights</div>
          </div>
        
        </div>

        <div id="copyright_privacy-container"> 
          <div id="copyright_privacy-box">
            <div>© 2024 Nudge Technologies Inc</div>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Refund</div>
            <div>Data Retention Policy</div>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.5rem"}}>
            <FaXTwitter style={{fontSize:'24px' ,color:"#475467"}}/>
            <FaLinkedin style={{fontSize:'24px' ,color:"#475467"}}/>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer