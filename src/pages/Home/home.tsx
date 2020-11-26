import React from 'react';
import {IonButtons, IonMenuButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonText, IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon, IonCheckbox, IonButton, IonItem, IonList, IonInput, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './home.css';
import {star, eye, search, menu, bagHandleOutline, locationOutline, logoFacebook, logoGoogle, logoTwitter, chevronBack } from 'ionicons/icons';
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

const Home: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem color="tertiary" className="topHeading3" >
          <IonGrid className="menuBar">
            <IonRow  >
              <IonCol  size="2">
                <IonMenuButton color="light"/>
              </IonCol>
              <IonCol size="8" >
                {/* <IonItem color="primary" className=""  > */}
                <IonText color="light" className="paddingV3 " ><IonIcon color="light" icon={locationOutline} /> 21 Canal Rd.</IonText>
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
          <IonText color="dark" className="subHeading2" slot="end" onClick={e => {
              e.preventDefault();
              history.push('/allrestaurant');
            }}>View All</IonText>
        </IonItem>

        <IonSlides  options={slideOpts} >
          <IonSlide>
            <IonCard className="card" style={{marginLeft:30,}}>
              <img className="bgImage" src="./assets/img/card-amsterdam1.jpg"  />
              <IonCardHeader className="content">
                <IonCardTitle className="title"><b>Burger King</b></IonCardTitle>
                <IonCardSubtitle>
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                  <IonText className="title">
                    <br/>12 Miles away
                    </IonText>  
                </IonCardSubtitle>
              </IonCardHeader>

              {/* <IonCardContent> */}
                {/* 12 Miles away */}
              {/* </IonCardContent> */}
            </IonCard>
          </IonSlide>
          <IonSlide>
          <IonCard className="card">
              <img className="bgImage" src="./assets/img/card-amsterdam.jpg"  />
              <IonCardHeader className="content">
                <IonCardTitle className="title"><b>Burger King</b></IonCardTitle>
                <IonCardSubtitle>
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                <IonIcon  className="ratingS" icon={star} />
                  <IonText className="title">
                    <br/>12 Miles away
                    </IonText>  
                </IonCardSubtitle>
              </IonCardHeader>

              {/* <IonCardContent> */}
                {/* 12 Miles away */}
              {/* </IonCardContent> */}
            </IonCard>
          </IonSlide>
          <IonSlide>
          <IonCard className="card">
              <img className="bgImage" src="./assets/img/card-amsterdam2.jpg"  />
              <IonCardHeader className="content">
                <IonCardTitle className="title"><b>Burger King</b></IonCardTitle>
                <IonCardSubtitle>
                  <IonText className="title">
                    <br/>12 Miles away
                    </IonText>  
                </IonCardSubtitle>
              </IonCardHeader>

              {/* <IonCardContent> */}
                {/* 12 Miles away */}
              {/* </IonCardContent> */}
            </IonCard>
          </IonSlide>
        </IonSlides>

        <IonItem className="subheadingRow2" lines="none">
          <IonText color="dark" className="subHeading">Deals</IonText>
          {/* <IonText color="dark" className="subHeading2" slot="end">View All</IonText> */}
        </IonItem>

        <IonSlides  options={slideOpts2} >
          <IonSlide>
            <IonCard className="card2" style={{marginLeft:30,textAlign:"left"}}>
              <img className="bgImage2" src="./assets/img/mcdonalds.png" />                
              {/* <IonCardContent style={{textAlign:"left"}}>
              </IonCardContent> */}
              <IonCardHeader className="" style={{paddingTop:5,}}>
                <IonCardTitle className="title"><b>Mcdonalds</b></IonCardTitle>
                <IonCardSubtitle style={{marginBottom:0,}}>
                  <div className="content2">
                <IonText >
                    GEY 25% OFF ON YOUR NEXT MEAL
                    </IonText>    
                  </div>
                  <div className="content2">
                <IonText >
                    Valid to 20/02/2020
                    </IonText>    
                  </div>
                </IonCardSubtitle>
              </IonCardHeader>

            </IonCard>
          </IonSlide>
          </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;
