import React from 'react';
import { IonIcon, IonText, IonCardContent, IonMenuButton, IonCard, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './notification.css';
import {eye, arrowBack, logoFacebook, logoGoogle, logoTwitter, chevronBack} from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';
import Tabs from '../../components/tabs';


const Notification: React.FC = () => {
  let history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signup page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none" className="headingn" style={{}}  >
            {/* <IonIcon color="dark" icon={arrowBack} onClick={e => {
            e.preventDefault();
            history.goBack();
          }}  /> */}
          <IonMenuButton color=""/>
          <IonLabel  className="pageHeading">
            Notification
            </IonLabel>
        </IonItem >
        <div style={{height:"100%",marginRight:20,marginLeft:20,}}>
        <IonCard className="notCard">
        <IonCardContent className="notArea" >

          <IonLabel><b>Beef Pizza</b></IonLabel>
          <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</IonText>
        </IonCardContent>
        </IonCard>

        <IonCard className="notCard">
        <IonCardContent className="notArea" >

          <IonLabel><b>Beef Pizza</b></IonLabel>
          <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</IonText>
        </IonCardContent>
        </IonCard>

        <IonCard className="notCard">
        <IonCardContent className="notArea" >

          <IonLabel><b>Beef Pizza</b></IonLabel>
          <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</IonText>
        </IonCardContent>
        </IonCard>

        <IonCard className="notCard">
        <IonCardContent className="notArea" >

          <IonLabel><b>Beef Pizza</b></IonLabel>
          <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</IonText>
        </IonCardContent>
        </IonCard>

        <IonCard className="notCard">
        <IonCardContent className="notArea" >

          <IonLabel><b>Beef Pizza</b></IonLabel>
          <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</IonText>
        </IonCardContent>
        </IonCard>

        <IonCard className="notCard">
        <IonCardContent className="notArea" >

          <IonLabel><b>Beef Pizza</b></IonLabel>
          <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</IonText>
        </IonCardContent>
        </IonCard>
        </div>
        <Tabs/>

      </IonContent>
    </IonPage>
  );
};

export default Notification;
