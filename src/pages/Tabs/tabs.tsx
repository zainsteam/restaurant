import React from 'react';
import { IonIcon, IonRouterOutlet,  IonTabs, IonTabBar, IonTabButton, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './tabs.css';
import { IonReactRouter } from '@ionic/react-router';

import { ellipse, square, triangle, bagHandleOutline, homeOutline, qrCodeSharp, qrCodeOutline, qrCode, chatbubbleEllipsesOutline, notificationsOutline } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
// import Tabs from '../Tabs/tabs';
import Login from '../Login/login';
import SignUp from '../Signup/signup';
import Payment from '../Payment/payment';
import Forget from '../Forget/forget';
import Mycart from '../Mycart/mycart';
import AllRestaurant from '../AllRestaurant/allrestaurant';
import Walkthough from '../Walkthough/walkthough';
import Home from '../Home/home';
import {useRef} from 'react';




const Tabs: React.FC = () => {

  
  let history = useHistory();
  let mySlides = useRef<HTMLIonSlidesElement>(null);
  let active = mySlides.current?.getActiveIndex();
  console.log(active);
  return (
      <IonContent >
      <IonReactRouter >
      <IonTabs className="bar">
      <IonRouterOutlet id="tabs">
          {/* <Route path="/tabs:tabs(tab1)" component={Tab1} exact={true} /> 
          <Route path="/tabs:tabs(tab2)" component={Tab2} exact={true} />
           <Route path="/:tabs(tab3)" component={Tab3} /> */}
           <Route path="/tabs/home" component={Home} exact={true}/>
           <Route path="/mycart" component={Mycart} exact={true}/>
          <Route path="/:tabs(allrestaurant)" component={AllRestaurant} exact={true}/>

        
          <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
            <Redirect from="/tabs" to="/tabs/home" exact />
          </IonRouterOutlet>
        
          {/* <IonItem > */}
        <IonTabBar selectedTab="true" className="toolBar" color="tertiary" slot="bottom">
          <IonTabButton  tab="Home" href="/tabs/home">
            <IonIcon icon={homeOutline} color="light" />
            {/* <IonLabel>Sign up</IonLabel> */}
          </IonTabButton>
          <IonTabButton className="home" tab="tab1" href="/tab1">
            <IonIcon icon={chatbubbleEllipsesOutline} color="light"/>
            {/* <IonLabel>Home</IonLabel> */}
          </IonTabButton>
           {/* <IonTabButton className="barcodeB"  tab="Home" href="/home"> */}
      {/* <IonItem className="barcodeB"> */}
      {/* <IonIcon  icon={ellipse} color="dark"/> */}
      {/* </IonItem>  */}
            {/* <IonLabel>Home</IonLabel> */}
          {/* </IonTabButton> */}
          <IonTabButton className="tabItem2" tab="Walkthough" href="/tab2">
            <IonIcon icon={notificationsOutline} color="light" />
            {/* <IonLabel>Tab 3</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="login" href="/mycart" target="_blank">
            <IonIcon icon={bagHandleOutline} color="light" />
            {/* <IonLabel>Login</IonLabel> */}
          </IonTabButton>
          {/* </IonItem> */}
        </IonTabBar>
      </IonTabs>
      <div className="barcodeB">
        <IonIcon  icon={qrCodeOutline} color="light"/>
      </div>
      </IonReactRouter >
      </IonContent>
  );
};

export default Tabs;
