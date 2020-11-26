import React from 'react';
import { IonIcon, IonFabButton, IonFab, IonChip, IonCardContent, IonCard, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import './payment.css';
import { eye, star, arrowBack, logoFacebook, add, remove, bagOutline, cardOutline, timeOutline, bicycle, logoGoogle, logoTwitter, chevronBack } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';


const Payment: React.FC = () => {
  let history = useHistory();

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

      <IonItem lines="none" className="paymentRow">
      <img width="50" height="50" src="./assets/img/card-amsterdam.jpg"  />
        <IonLabel className="payMethod">PayPal</IonLabel>
      <IonCheckbox className="checks" slot="end" color="primary" />
      </IonItem>
    

      <IonItem lines="none" className="paymentRow">
      <img width="50" height="50" src="./assets/img/card-amsterdam.jpg"  />
        <IonLabel className="payMethod">Google Pay</IonLabel>
      <IonCheckbox className="checks" slot="end" color="primary" />
      </IonItem>

      <IonItem lines="none" className="paymentRow">
      <img width="50" height="50" src="./assets/img/card-amsterdam.jpg"  />
        <IonLabel className="payMethod">Apple Pay</IonLabel>
      <IonCheckbox className="checks" slot="end" color="primary" />
      </IonItem>

      <IonItem lines="none" className="paymentRow">
      <img width="50" height="50" src="./assets/img/card-amsterdam.jpg"  />
        <IonLabel className="payMethod">Credit Card</IonLabel>
      <IonCheckbox className="checks" slot="end" color="primary" />
      </IonItem>

      <IonItem lines="none" className="paymentRow">
      <img width="50" height="50" src="./assets/img/card-amsterdam.jpg"  />
        <IonLabel className="payMethod">Cash</IonLabel>
      <IonCheckbox className="checks" slot="end" color="primary" />
      </IonItem>
      
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
      
      <div className="buttonP">

      <IonButton className="payNow" onClick={e => {
        e.preventDefault();
        history.push('/payment');
      }}>
            Pay Now!
          </IonButton>
      </div>

      </IonContent>
    </IonPage>
  );
};

export default Payment;
