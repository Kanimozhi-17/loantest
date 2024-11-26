import design from "../styles/mid_content.module.css";
import { Button } from "@mui/material";


function Mid_content(){


return(
    <div className={design.Middle_content}>
        <h3>Choose Your Plan</h3>
        <p>Whether yo want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        <div className={design.scroll_bar}>
            <div>
                <h4>Free</h4>
                <h3>$0</h3>
                <p>Capture ideas and find them quickly</p>
                <ul>
                    <li>Sync unlimited devices</li>
                    <li>10 GB monthly uploads</li>
                    <li>200 MB max. note size</li>
                    <li>Customize Home dashboard and access extra widgets</li>
                    <li>Connect primary Google Calender account</li>
                    <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <Button variant="contained" sx={{border: "0.01rem solid #FFC107", backgroundColor: 'white', color: 'black'}}>Get Started</Button>
                    
            </div>
            <div className={design.personal_slider}>
                <h4>Personal</h4>
                <h3>$11.99</h3>
                <p>Keep home and family on track</p>
                <ul>
                    <li>Sync unlimited devices</li>
                    <li>10 GB monthly uploads</li>
                    <li>200 MB max. note size</li>
                    <li>Customize Home dashboard and access extra widgets</li>
                    <li>Connect primary Google Calender account</li>
                    <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <Button variant="contained" sx={{border: "0.01rem solid #FFC107", backgroundColor: 'white', color: 'black'}}>Get Started</Button>
                    
            </div>
            <div>
                <h4>Business</h4>
                <h3>$49.99</h3>
                <p>Capture ideas and find them quickly</p>
                <ul>
                    <li>Sync unlimited devices</li>
                    <li>10 GB monthly uploads</li>
                    <li>200 MB max. note size</li>
                    <li>Customize Home dashboard and access extra widgets</li>
                    <li>Connect primary Google Calender account</li>
                    <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <Button variant="contained" sx={{border: "0.01rem solid #FFC107", backgroundColor: 'white', color: 'black'}}>Get Started</Button>
                    
            </div>

        </div>

    </div>
)
}

export default Mid_content