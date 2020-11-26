import React from 'react';
import { IonCardContent,  IonMenuButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonText, IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './allrestaurant.css';
import { star, eye, search, menu, bagHandleOutline, bagOutline, cardOutline, locationOutline, timeOutline, bicycle, logoFacebook, logoGoogle, logoTwitter, chevronBack } from 'ionicons/icons';
import { Redirect, Route, useHistory } from 'react-router-dom';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1.8,
  // spaceBetween:70,
};
const slideOpts2 = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1,
  // spaceBetween:70,
};

const AllRestaurant: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">signup page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonItem color="tertiary" className="topHeading3" >
        <IonGrid className="menuBar">
          <IonRow  >
            <IonCol size="2" >
            <IonMenuButton color="light"/>
            </IonCol>
            <IonCol size="8" >
              {/* <IonItem color="primary" className=""  > */}
              <IonText color="light" className="paddingV3 "><IonIcon color="light" icon={locationOutline} /> 21 Canal Rd.</IonText>
              {/* </IonItem> */}
            </IonCol >
            <IonCol size="2" >
              {/* <IonItem color="primary" className="topHeading2"  > */}
              <IonLabel color="light" className="paddingV3" onClick={e => {
              e.preventDefault();
              history.push('/mycart');
            }}><IonIcon color="light" icon={bagHandleOutline} /></IonLabel>
              {/* </IonItem> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem className="searchBar">
        <IonIcon slot="end" className="icon3" icon={search} />
        <IonInput placeholder="Search Food & Resturants" type="email"> </IonInput>
      </IonItem>
      <IonContent fullscreen>

        <IonItem className="subheadingRow" lines="none">
          <IonText color="dark" className="subHeading">Nearby Resturant (21)</IonText>
          {/* <IonText color="dark" className="subHeading2" slot="end">View All</IonText> */}
        </IonItem>

        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        
        <IonCard className="resCard">
          <img className="cover" src="./assets/img/cover.jpg" />

          <IonCardContent className="textArea" >
            <div className="resDetails">
              <img className="resLogo" src="./assets/img/burgerking.png" />
              <IonLabel className="resName">
                Burger King
                </IonLabel>
              <div className="rating">
                <IonIcon className="ratingS" icon={star} />
                <IonLabel className="resRating">
                  4.9 (20)
          </IonLabel>
              </div>
            </div >
            <div className="resDetails" >
              <IonLabel className="resRating">
                FastFood, Drink, Snacks
          </IonLabel>
            </div>
            <div className="resDetails">
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bagOutline} />
                <IonLabel className="resRating">
                  Min Rs 22
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={cardOutline} />
                <IonLabel className="resRating">
                  Paypal, Cash
          </IonLabel>
              </div>
            </div>
            <div className="resDetails" style={{ fontSize: 12, justifyContent: "space-around" }}>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={bicycle} />
                <IonLabel className="resRating">
                  Free Delivery
          </IonLabel>
              </div>
              <div className="resDetails">
                <IonIcon slot="start" className="resIcon" icon={timeOutline} />
                <IonLabel className="resRating">
                  10 - 15 mins
          </IonLabel>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AllRestaurant;
