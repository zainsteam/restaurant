import React from 'react';
import { IonIcon, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './forget.css';
import {eye, arrowBack, logoFacebook, logoGoogle, logoTwitter, chevronBack} from 'ionicons/icons';


const Forget: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signup page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none" className="" style={{marginTop:20}}  >
            <IonIcon color="dark" icon={arrowBack} />
          <IonLabel  className="pageHeading">
            Edit Password
            </IonLabel>
        </IonItem>
        <IonItem className="" lines="none">
          <IonList className="listP2">
              <IonLabel  class="label">Type Old Password</IonLabel>
            <IonItem className="inputF4" lines="none">
            <IonIcon slot="end" className=" icon" color="tertiary" icon={eye} />
              <IonInput placeholder="Old Password" type="password"> </IonInput>
            </IonItem>
              <IonLabel  class="label">Type New Password</IonLabel>
            <IonItem className="inputF4" lines="none">
            <IonIcon slot="end" className=" icon" icon={eye} color="tertiary"/>
              <IonInput placeholder="New Password" type="password" > </IonInput>
            </IonItem>
              <IonLabel  class="label">Re-Enter Password</IonLabel>
            <IonItem className="inputF4" lines="none">
            <IonIcon slot="end" className=" icon" icon={eye} color="tertiary"/>
              <IonInput placeholder="Confirm Password" type="password"> </IonInput>
            </IonItem>
            {/* <IonLabel className="forgetP">Forget Password</IonLabel> */}
            <div className="buttonC2" >
              <IonButton className="button" size="default">Sign Up</IonButton>
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

export default Forget;
