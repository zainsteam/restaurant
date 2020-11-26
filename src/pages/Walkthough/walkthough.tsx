import React from 'react';
import { IonText, IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './walkthough.css';
import { eye, search, menu, bagHandleOutline, locationOutline, logoFacebook, logoGoogle, logoTwitter, chevronBack } from 'ionicons/icons';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Walkthough: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signup page</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSlides className="walkthough" pager={true} options={slideOpts}>
          <IonSlide className="slide1">
            <IonGrid>
            <img className="" src="./assets/img/wt1.png" />                
              <IonRow className="heading">
                <IonCol w-100>
                  <h1 ><b>Scan Qr for Menu</b></h1>
                </IonCol>
              </IonRow>
              <IonRow className="text">
                <IonCol>
                  <IonText >Scan A Simple Qr Code For Menu On Your Mobile Screen From Your Favourite Restaurants</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="text">
                <IonCol>
                <div className="buttonB" >
              <IonButton className="button1" size="default">Next</IonButton>
              {/* <IonLabel>or <b>Sign up</b> </IonLabel> */}
            </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide className="slide2">
          <IonGrid>
            <img className="" src="./assets/img/wt2.png" />                
              <IonRow className="heading">
                <IonCol w-100>
                  <h1 ><b>Place Your Order</b></h1>
                </IonCol>
              </IonRow>
              <IonRow className="text">
                <IonCol>
                  <IonText >Place Your Order Directly From Your Mobile Without Any Contact With The Staff</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="text">
                <IonCol>
                <div className="buttonB" >
              <IonButton className="button1" size="default">Next</IonButton>
              {/* <IonLabel>or <b>Sign up</b> </IonLabel> */}
            </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide className="slide3">
          <IonGrid>
            <img className="" src="./assets/img/wt3.png" />                
              <IonRow className="heading">
                <IonCol w-100>
                  <h1 ><b>Get Served!</b></h1>
                </IonCol>
              </IonRow>
              <IonRow className="text">
                <IonCol>
                  <IonText >Get Served At Your Table Or Request Takeaway From All Your Favourite Restaurants</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="text">
                <IonCol>
                <div className="buttonB" >
              <IonButton className="button1" size="default">Next</IonButton>
              {/* <IonLabel>or <b>Sign up</b> </IonLabel> */}
            </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default Walkthough;
