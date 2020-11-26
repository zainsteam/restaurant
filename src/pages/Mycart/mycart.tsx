import React from 'react';
import { IonIcon, IonFabButton, IonFab, IonChip, IonCardContent, IonCard, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './mycart.css';
import { eye, star, arrowBack, logoFacebook, add, remove, bagOutline, cardOutline, timeOutline, bicycle, logoGoogle, logoTwitter, chevronBack } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';


const Mycart: React.FC = () => {
  let history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">signup page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none" className="" style={{ marginTop: 20 }}  >
          <IonIcon color="dark" icon={arrowBack} onClick={e => {
            e.preventDefault();
            history.goBack();
          }} />
          <IonLabel className="pageHeading">
            My Cart
            </IonLabel>
        </IonItem>
        <div>
        <IonCard className="proCard">
          <img className="productImage" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="proDetails">
              <IonLabel className="proName">
                Beef Pizza
                </IonLabel>
            </div >
            <div className="proDetails" >
              <IonLabel className="proRating">
                13" + Bacon
          </IonLabel>
              <div className="price">
                $  <IonLabel className="proPrice">
                   9.25
          </IonLabel>
              </div>
            </div>
            <div className="proDetails">
              <IonChip className="chips">
          <IonLabel style={{fontSize:12,}} color="light">Add Note</IonLabel>
        </IonChip>
            </div>

            
          {/* <IonChip className="quantity">
            <IonIcon style={{margin:0}} color="light" icon={add} onClick={e => {
            e.preventDefault();
            history.goBack();
          }} />
          <IonLabel style={{fontSize:12,}} color="light">2</IonLabel>
          <IonIcon style={{margin:0}} color="light" icon={remove} onClick={e => {
            e.preventDefault();
            history.goBack();
          }} />
        </IonChip> */}
        <IonFab  vertical="center" horizontal="end" slot="fixed">
      <IonFabButton>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
          </IonCardContent>

        </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Mycart;
