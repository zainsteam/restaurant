import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;

  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Setting',
    url: '/login'

  },
  {
    title: 'Notification',
    url: '/signup'

  },
  {
    title: 'Profile',
    url: '/forget'
 
  },
  {
    title: 'Cart',
    url: '/mycart'
  
  },
  {
    title: 'About Us',
    url: '/'

  },
  {
    title: 'Contact Us',
    url: '/'
  }
  ,
  {
    title: 'Logout',
    url: '/login'

  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu  contentId="main" type="overlay">
      <IonContent>
        <IonList className="menu1" id="inbox-list" >
        <img className="profile" src="./assets/img/profile.jpg"  />
          <IonListHeader style={{color:"white"}}>John Doe</IonListHeader>
          <IonNote style={{color:"white",marginTop:10}}>San Francisco, CA</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  
                  <IonLabel color="light">{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
