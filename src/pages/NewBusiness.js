import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React from "react";

function Business(){
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Business</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New Business</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Business;
