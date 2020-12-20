import React from 'react';
import { IonIcon, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './signup.css';
import {eye, logoFacebook, logoGoogle, logoTwitter, chevronBack} from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';


const SignUp: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signup page</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonItem color="tertiary" className="topHeading2"  >
          <IonLabel color="secondary" class="paddingV2" onClick={e => {
              e.preventDefault();
              history.goBack();
            }}><IonIcon color="light" icon={chevronBack} /></IonLabel>
        </IonItem>
        <IonItem className="bodyC2" lines="none">
          <IonList className="listP2">
            <IonItem className="headingM2" lines="none">
              <IonLabel >Register</IonLabel>
            </IonItem>
            <IonItem className="inputF2" >
              <IonInput placeholder="First Name" type="text"> </IonInput>
            </IonItem>
            <IonItem className="inputF2">
              <IonInput placeholder="Email" type="email"> </IonInput>
            </IonItem>
            <IonItem className="inputF2">
              <IonInput placeholder="Phone Number" type="tel"> </IonInput>
            </IonItem>
            <IonItem className="inputF2">
            <IonIcon slot="end" className=" icon" icon={eye} />
              <IonInput placeholder="Password" type="password"> </IonInput>
            </IonItem>
            <IonItem className="inputF2">
            <IonIcon slot="end" className=" icon" icon={eye} />
              <IonInput placeholder="Confirm Password" type="password"> </IonInput>
            </IonItem>
            <IonItem className="forgerP2" lines="none">
              <IonCheckbox slot="start" value="0"  />
              <IonLabel className="forgetP2">Agree Terms And Conditions</IonLabel>
            </IonItem>
            {/* <IonLabel className="forgetP">Forget Password</IonLabel> */}
            <div className="buttonC2" >
              <IonButton className="buttons" size="default" onClick={e => {
              e.preventDefault();
              history.push('/login');
            }}>Sign Up</IonButton>
              {/* <IonLabel>or <b>Sign up</b> </IonLabel> */}
            </div>
            {/* <div className="iconC">
            <IonIcon className="twitter icon"  icon={logoTwitter} />
            <IonIcon className="facebook icon" icon={logoFacebook} />
            </div> */}
          </IonList>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
