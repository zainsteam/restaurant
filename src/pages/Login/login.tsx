import React from 'react';
import { IonIcon, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './login.css';
import { logoFacebook, logoGoogle, logoTwitter } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';


const Login: React.FC = () => {
  let history = useHistory();
  return (
    
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login page</IonTitle>
          </IonToolbar>
        </IonHeader>
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
            <IonLabel className="forgetP">Forget Password</IonLabel>
            <div className="buttonC" style={{ textAlign: "center" }} >
              <IonButton className="button" size="default" onClick={e => {
              e.preventDefault();
              history.push('/home');
            }}>Login</IonButton>
              <IonLabel style={{ maxWidth: "100%" }}  onClick={e => {
              e.preventDefault();
              history.push('/signup');
            }}>or <b>Sign up</b></IonLabel>
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
