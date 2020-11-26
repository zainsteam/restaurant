import React from 'react';
import Menu from './components/Menu';

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonSplitPane
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, bagHandleOutline, homeOutline, qrCodeSharp, qrCodeOutline, qrCode, chatbubbleEllipsesOutline, notificationsOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tabs from './pages/Tabs/tabs';
import Login from './pages/Login/login';
import SignUp from './pages/Signup/signup';
import Payment from './pages/Payment/payment';
import Forget from './pages/Forget/forget';
import Mycart from './pages/Mycart/mycart';
import AllRestaurant from './pages/AllRestaurant/allrestaurant';
import Walkthough from './pages/Walkthough/walkthough';
import Home from './pages/Home/home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './style.css';

const App: React.FC = () => (
<IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
          
          <Route path="/tabs" component={Tabs} />
          <Route path="/login" component={Login} exact={true}/>
          <Route path="/signup" component={SignUp} exact={true}/>
          <Route path="/forget" component={Forget} exact={true}/>
          <Route path="/mycart" component={Mycart} exact={true}/>
          <Route path="/payment" component={Payment} exact={true}/>
          <Route path="/allrestaurant" component={AllRestaurant} exact={true}/>
          {/* <Route path="/home" component={Home} exact={true}/> */}
          <Route path="/walkthough" component={Walkthough} exact={true}/>
          {/* <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} /> */}
            {/* <Route path="/login" component={Login} exact /> */}
            <Redirect from="/" to="/walkthough" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
);

export default App;
