import React from 'react';
import './tabs.css';
import { IonButtons, IonFab, IonFabButton, IonMenuButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonText, IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ellipse, add, square, triangle, bagHandleOutline, homeOutline, qrCodeSharp, qrCodeOutline, qrCode, chatbubbleEllipsesOutline, notificationsOutline } from 'ionicons/icons';
import { Redirect, Route, useHistory, Link } from 'react-router-dom';


const Tabs: React.FC = () => {
  return (
    <div className="container">
      <IonGrid className="tabGrid">
        <IonRow className="tabs">
          <IonCol>
            <Link to="/home">

            <IonIcon size="small" icon={homeOutline} color="light" />
            </Link>

          </IonCol>
          <IonCol className="tabItem">
            <Link to="/home">
            <IonIcon size="small" icon={chatbubbleEllipsesOutline} color="light" />
            </Link>
          </IonCol>
          <IonCol className="tabItem2">
            <Link to="/Notification">
            <IonIcon size="small" icon={notificationsOutline} color="light" />
            </Link>
          </IonCol>
          <IonCol>
            <Link to="/mycart">
            <IonIcon size="small" icon={bagHandleOutline} color="light" />
            </Link>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab style={{ top: "15%", }} vertical="center" horizontal="center" slot="fixed">
        <IonFabButton className="centerBtn">
          <IonIcon size="large" icon={qrCodeOutline} />
        </IonFabButton>
      </IonFab>
    </div>
  );
};

export default Tabs;
