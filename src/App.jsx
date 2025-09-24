import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <img src=""/>
      <h1>Favorite Websites</h1>
      <div className="card-grid">
        <Card 
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png" 
          title="Google" 
          description="A classic, always there, go to! A place you can find anything in the world!" 
          link="https://www.google.com"/>
        <Card 
          image="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_logo.2e16d0ba.fill-1440x810.jpg" 
          title="YouTube" 
          description="Another classic. A go-to spot for any and all things entertainment and education!" 
          link="https://www.youtube.com/"/>
        <Card 
          image="https://images.ctfassets.net/h67z7i6sbjau/5zteWRcC1qbgLZoClcMmYl/a0391fdc321eddce7de41152108723b5/Brand_Guidelines_hero_2x.jpg?fm=webp&q=85" 
          title="Pinterest" 
          description="A great place to get inspiration and to get creative!" 
          link="https://www.pinterest.com/"/>
        <Card 
          image="https://64.media.tumblr.com/f1bd3cd7e4b20dba634393462326859b/tumblr_inline_pcdui455cU1r8ovh1_540.png" 
          title="Khan Academy" 
          description="A go-to place when your 5 units behind and the test is tomorrow!" 
          link="https://www.khanacademy.org/"/>
        <Card 
          image="https://c.files.bbci.co.uk/C5CC/production/_89663605_instagram_logo_976.jpg" 
          title="Instagram" 
          description="A place to communicate with friends and see the lives of others." 
          link="https://www.instagram.com/"/>
        <Card 
          image="https://cdn-public.softwarereviews.com/production/logos/offerings/6828/large/Google_Drive_text_logo_grey.png?1667315221" 
          title="Google Drive" 
          description="A great place to organize resources and store work locally!" 
          link="https://drive.google.com/drive"/>
        <Card 
          image="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" 
          title="GitHub" 
          description="A great place for programmers to store, sync, and source control their works!" 
          link="https://github.com/"/>
        <Card 
          image="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21939811/newgmaillogo.jpg?quality=90&strip=all&crop=0,0,100,100" 
          title="Gmail" 
          description="A necessary place for communication/sign ups." 
          link="https://mail.google.com/mail"/>
        <Card 
          image="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-calendar-calendar-platform-icon-vector-png-image_12256724.png" 
          title="Google Calendar" 
          description="A place to organize tasks, events, and overall manage life." 
          link="https://calendar.google.com/calendar"/>
        <Card 
          image="https://cdn-public.softwarereviews.com/production/logos/offerings/11673/original/Replit_logo.png?1709075963" 
          title="Replit" 
          description="A great place to practice coding as well as get some tutorials!" 
          link="https://replit.com/"/>
       
      </div>
    </div>
  )
}

export default App
