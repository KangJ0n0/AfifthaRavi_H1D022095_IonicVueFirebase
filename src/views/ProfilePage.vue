<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Profile</ion-title>
        <ion-button slot="end" fill="clear" @click="logout" style="--color: gray">
          <ion-icon slot="end" :icon="exit"></ion-icon>
          <ion-label>Logout</ion-label>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- Avatar -->
      <div id="avatar-container">
        <img v-if="user?.photoURL" :src="user.photoURL" id="avatar-icon" alt="Profile Picture" />
        <ion-icon v-else :icon="person" id="avatar-icon" color="medium"></ion-icon>
      </div>

      <!-- Data Profile -->
      <ion-list>
        <ion-item>
          <ion-input label="Nama" :value="user?.displayName" :readonly="true"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Email" :value="user?.email" :readonly="true"></ion-input>
        </ion-item>
      </ion-list>

      <!-- Tabs Menu -->
      <TabsMenu />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonLabel, IonIcon, IonButton } from "@ionic/vue";
import { exit, person } from "ionicons/icons";
import { computed } from "vue";
import TabsMenu from "@/components/TabsMenu.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const user = computed(() => authStore.user);

const logout = () => {
  authStore.logout();
};
</script>

<style scoped>
#avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

#avatar-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
