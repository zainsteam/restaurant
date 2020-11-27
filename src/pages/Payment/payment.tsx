import React, { useState } from 'react';
import { IonIcon, IonRadioGroup, IonItemDivider, IonRadio, IonListHeader, IonFabButton, IonFab, IonChip, IonCardContent, IonCard, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import './payment.css';
import { eye, star, arrowBack, logoFacebook, add, remove, bagOutline, cardOutline, timeOutline, bicycle, logoGoogle, logoTwitter, chevronBack } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';


const Payment: React.FC = () => {
  let history = useHistory();
  const [selected, setSelected] = useState<string>('biff');
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signup page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none" className="pageHeader" >
          <IonIcon color="dark" icon={arrowBack} onClick={e => {
            e.preventDefault();
            history.goBack();
          }} />
          <IonLabel className="pageHeading">
            Payment
            </IonLabel>
        </IonItem>

        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>

            <IonItem lines="none" className="paymentRow">
              <img width="20" className="image" src="./assets/img/logo (5).png" />
              <IonLabel className="payMethod">PayPal</IonLabel>
              <IonRadio slot="end" value="PAYPAL" />
            </IonItem>

            <IonItem className="paymentRow">
              <img width="20" className="image" src="./assets/img/logo (3).png" />
              <IonLabel className="payMethod">Google Pay</IonLabel>
              <IonRadio slot="end" value="GOOGLE" />
            </IonItem>

            <IonItem className="paymentRow">
              <img width="20" className="image"  src="./assets/img/logo (1).png" />
              <IonLabel className="payMethod">Apple Pay</IonLabel>
              <IonRadio slot="end" value="APPLE" />
            </IonItem>

            <IonItem className="paymentRow">
              <img width="20" className="image" src="./assets/img/logo (4).png" />
              <IonLabel className="payMethod">Credit Card</IonLabel>
              <IonRadio slot="end" value="CREDIT" />
            </IonItem>

            <IonItem className="paymentRow">
              <img width="20" className="image" src="./assets/img/logo (2).png" />
              <IonLabel className="payMethod">Cash</IonLabel>
              <IonRadio slot="end" value="CASH" />
            </IonItem>
          </IonRadioGroup>
          {/* <IonItemDivider>Your Selection</IonItemDivider>
          <IonItem>{selected ?? '(none selected'}</IonItem> */}
        </IonList>


        <IonItem className="pricing1" lines="none">

          <IonItem className="totalRow" >
            <IonLabel>Sub Total</IonLabel>
            <IonLabel className="prices">$ 222</IonLabel>
          </IonItem>
        </IonItem>

        <IonItem className="pricing2" lines="none">
          <IonItem className="totalRow">
            <IonLabel>Delivery</IonLabel>
            <IonLabel className="prices">$ 8</IonLabel>
          </IonItem>
        </IonItem>

        <IonItem className="pricing3" lines="none">
          <IonItem className="totalRowC">
            <IonLabel>Selected</IonLabel>
            <IonLabel className="prices">$ 230</IonLabel>
          </IonItem>
        </IonItem>
        
        <IonGrid className="footer2">
          <IonRow>
        <IonCol className="splitNow" >
              <IonText >Split Bill</IonText>
            </IonCol>
            <IonCol className="payNow">
              <IonLabel>Pay Now</IonLabel>

            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Payment;
