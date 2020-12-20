import React from 'react';
import { IonIcon,  IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './login.css';
import { logoFacebook, logoGoogle, logoTwitter } from 'ionicons/icons';
import { Redirect, Route, useHistory, Link } from 'react-router-dom';
import Tabs from '../Tabs/tabs';



const Login: React.FC = () => {
  let history = useHistory();
  return (
    
    <IonPage>

      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login page</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonItem color="tertiary" className="topHeading"  >
          <IonLabel color="light" class="paddingV">Welcome <br />back!</IonLabel>
        </IonItem>
        <IonItem className="bodyC" lines="none">
          <IonList className="listP">
            <IonItem className="headingM" lines="none">
              <IonLabel >Sign In</IonLabel>
            </IonItem>
            <IonItem className="inputF" >
              <IonInput placeholder="Email"> </IonInput>
            </IonItem>
            <IonItem className="inputF">
              <IonInput placeholder="Password"> </IonInput>
            </IonItem>
            <IonLabel style={{ maxWidth: "100%" }} className="forgetP" ><Link to="/forget">Forget Password</Link></IonLabel>
            
            <div className="buttonC" style={{ textAlign: "center" }} >
            <IonButton className="buttonl" size="default" onClick={e => {
              e.preventDefault();
              history.push('/home');
              // <Tabs/>
            }}>Login</IonButton>
            {/* <Link to="/tabs">User 1</Link> */}
              <IonLabel style={{ maxWidth: "100%" }}  >or <b><Link to="/signup">Sign up</Link></b></IonLabel>
            </div>
            <div className="iconC">
              <IonIcon className="google icon" icon={logoGoogle} />
              <IonIcon className="twitter icon" icon={logoTwitter} />
              <IonIcon className="facebook icon" icon={logoFacebook} />
            </div>

          </IonList>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Login;
