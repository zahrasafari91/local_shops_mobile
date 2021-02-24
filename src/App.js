import { 
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, 
  IonTitle, 
  IonToast, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonLabel,
  IonListHeader,
  IonList,
  IonItem,
  IonFooter,
  IonCardSubtitle,

  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import React, {useState} from 'react';

import { 
  play as playIcon, 
  menu as menuIcon, 
  personCircle as personIcon, 
  brush as artsIcon, 
  fastFood as foodIcon, 
  glasses as accesoriesIcon, 
  shirt as apparelIcon, 
  home as homeIcon, 
  rocket as toyIcon,
  search as searchIcon, 
  add as newBusinessIcon,
  happy as LogInIcon 

} from 'ionicons/icons';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NewBusiness from './pages/NewBusiness';
import Search from './pages/Search';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000)
  };
  return (
    <IonApp>
      <IonReactRouter>
      <IonHeader>
        <IonToolbar color="primary">
          <IonIcon icon={menuIcon} slot="start" className ="ion-margin" size="large"/>
          <IonTitle className="ion-text-center"><img className ="ion-margin" src="https://localshops.com/packs/media/images/logo-42cd78b2.png" width="70px" alt="logo"/></IonTitle>
          <IonIcon icon={personIcon} slot="end" className ="ion-margin" size="large"/>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Fruits" width="1500rm"/>
          <IonCardHeader>
            <IonCardTitle>Shop, Discover, and Buy Everything Locally</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonListHeader>Popular Gift Ideas</IonListHeader>
        <p className="ion-padding-start">
          <IonChip color="warning">
            <IonLabel>
              Jewellery
            </IonLabel>
          </IonChip>
          <IonChip color="success">
            <IonLabel>
              Decor
            </IonLabel>
          </IonChip>
          <IonChip color="danger">
            <IonLabel>
              Girl's
            </IonLabel>
          </IonChip>
          <IonChip color="tertiary">
            <IonLabel>
              Art
            </IonLabel>
          </IonChip>
        </p>
        <IonList>
          <IonListHeader>Search by category</IonListHeader>
          <IonItem>
            <IonLabel>
            <IonIcon icon={artsIcon} slot="start" className="ion-padding-horizontal"/>
              Arts and Crafts
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={accesoriesIcon} slot="start" className="ion-padding-horizontal"/>
              Accesories
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={apparelIcon} slot="start" className="ion-padding-horizontal"/>
              Apparel
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={homeIcon} slot="start" className="ion-padding-horizontal"/>
              Home and Garden
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={toyIcon} slot="start" className="ion-padding-horizontal"/>
              Toys and Hobbies
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={foodIcon} slot="start" className="ion-padding-horizontal"/>
              Food and Drink
            </IonLabel>
          </IonItem>
        </IonList>
        <IonCard color="danger">
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Are you a seller?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle className="ion-text-center">
          LocalShops attracts thousands of local shoppers every day!
          </IonCardSubtitle>
          <p className="ion-padding">
            <IonButton onClick={handleClick} expand="block" color="light" >
              List your shop for free
            </IonButton>
          </p>
        </IonCard>
        <IonToast isOpen={showToast} message="Registration Page Opens"/>
        <IonList>
          <IonListHeader>
            Featured In
          </IonListHeader>
          <IonItem>
            <img src="https://localshops.com/packs/media/media_logos/Avenue-Magazine-Calgary-WEB-logo-01-4-a80ced59.png" alt="Avenue-Magazine" height="150px"/>
            <img src="https://localshops.com/packs/media/media_logos/RetailInsiderLogo-6bba4850.png" alt= "RetailInsider" height="80px"/>
            <img src="https://localshops.com/packs/media/media_logos/curiocity-1218fb16.svg" alt="curiocity" height="80px"/>
            <img src="https://localshops.com/packs/media/media_logos/CTV_News-c0c25a85.png" alt="CTV_News" height="150px"/>
            <img src="https://localshops.com/packs/media/media_logos/financialpost-bef09a5e.png" alt="financialpost" height="40px"/>
            <img src="https://localshops.com/packs/media/media_logos/iheartRadioLogo-641f0a19.jpeg" alt="iHeart Radio" height="80px"/>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar color="primary">
          {/* <IonTitle>Quick access Menu items go here</IonTitle> */}
          <IonTabs>
            <IonRouterOutlet>
             <Route path="/home" component={Home} exact={true} />
             <Route path="/login" component={LogIn}/>
             <Route path="/newBusiness" component={NewBusiness}/>
             <Route path="/search" component={Search}/>
              <Route exact path="/" render={()=> <Redirect to = "/home"/>} />
           </IonRouterOutlet>
           <IonTabBar slot="bottom">
           <IonTabButton href="/Home" tab="Home">
             <IonIcon icon={homeIcon}></IonIcon>
               <IonLabel>Home</IonLabel>
             </IonTabButton>
             <IonTabButton href="/login" tab="Login">
             <IonIcon icon={LogInIcon}></IonIcon>
               <IonLabel>LogIn</IonLabel>
             </IonTabButton>
             <IonTabButton href="/newBusiness" tab="newBusiness">
             <IonIcon icon={newBusinessIcon}></IonIcon>
               <IonLabel>New Business</IonLabel>
             </IonTabButton>
             <IonTabButton href="/search" tab="Search"> 
             <IonIcon icon={searchIcon}></IonIcon>
               <IonLabel>Search</IonLabel>
             </IonTabButton>
          </IonTabBar>
         </IonTabs> 
         </IonToolbar>
         </IonFooter>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
