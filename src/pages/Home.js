import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React from "react";

function Home(){
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LogIn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LogIn</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Home;
