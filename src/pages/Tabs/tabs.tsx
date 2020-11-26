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


const Tabs: React.FC = () => {
  let history = useHistory();

  return (
      <IonContent >
      <IonReactRouter >
      <IonTabs className="bar">
      <IonRouterOutlet id="main">
          <Route path="/:tabs(tab1)" component={Tab1} exact={true} /> 
          <Route path="/tab2" component={Tab2} exact={true} />
           <Route path="/tab3" component={Tab3} />
           <Route path="/:tabs(home)" component={Home} exact={true}/>
          {/* <Route path="/tabs" component={Tabs} />
          <Route path="/login" component={Login} exact={true}/>
          <Route path="/signup" component={SignUp} exact={true}/>
          <Route path="/forget" component={Forget} exact={true}/>
          <Route path="/mycart" component={Mycart} exact={true}/>
          <Route path="/payment" component={Payment} exact={true}/>
          <Route path="/allrestaurant" component={AllRestaurant} exact={true}/>
          <Route path="/walkthough" component={Walkthough} exact={true}/> */}
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            {/* <Route path="/login" component={Login} exact /> */}
            <Redirect from="/tabs" to="/home" exact />
          </IonRouterOutlet>
        
          {/* <IonItem > */}
        <IonTabBar  className="toolBar" color="tertiary" slot="bottom">
          <IonTabButton  tab="Home" href="/home">
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
          <IonTabButton className="tabItem2" tab="Walkthough" href="/allrestaurant">
            <IonIcon icon={notificationsOutline} color="light" />
            {/* <IonLabel>Tab 3</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="login" href="/mycart">
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
