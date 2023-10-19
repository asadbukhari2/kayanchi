import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ArtistHome,
  ArtistStatus,
  ArtistSearch,
  Artist,
  ArtistAddress,
  ArtistHostingSpot,
  ArtistBookingDate,
  ArtistOrderSummary,
  ArtistPaymentDetails,
  ArtistOrderConfirm,
  ArtistProfile,
  ArtistLocateKaynchi,
  ArtistMapSearch,
  ArtistSavedAddresses,
  ArtistNotifications,
  ArtistYourOrders,
  ArtistRankUp,
  ArtistGig,
  ArtistGigInfo,
  ArtistGigDescription,
  ArtistPublishGig,
  ArtistGigMood,
  ArtistVerification,
  ArtistPromoGig1,
  ArtistPromoGig2,
  ArtistPromoMood,
  ArtistPromoMainPage,
  ArtistOrderSetting,
  ArtistLanguage,
  ArtistMyWallet,
  ArtistLoad,
  ArtistWithdrawMoney,
  ArtistPaymentHistory,
  ArtistPaymentMethods,
  ArtistHelp,
  ArtistCancelOrder,
  ArtistDisputeResolution,
  ArtistAbout,
  ArtistInviteFriends,
  ArtistShareIdea,
  ArtistReportBug,
  ArtistPersonalDetails,
  ArtistProfileSaved,
  ArtistYourProfile,
  ArtistBookingSlots,
  ArtistWhyCancel,
  ArtistUpdateProfile,
  ArtistOrders,
  ArtistConfirmOrderRequest,
  ArtistTimeline,
  ArtistGrooming,
  ArtistGroomingDone,
  ArtistFinishedTimeline,
  ArtistCancelledTimeline,
} from '../artist-screens';
import {
  ConsumerHome,
  ConsumerStatus,
  ConsumerSearch,
  ConsumerArtist,
  ConsumerAddress,
  ConsumerHostingSpot,
  ConsumerBookingDate,
  ConsumerOrderSummary,
  ConsumerPaymentDetails,
  ConsumerOrderConfirm,
  ConsumerProfile,
  ConsumerLocateKaynchi,
  ConsumerMapSearch,
  ConsumerSavedAddresses,
  ConsumerNotifications,
  ConsumerYourOrders,
  ConsumerRank,
  ConsumerGig,
  ConsumerGigInfo,
  ConsumerGigDescription,
  ConsumerGigMood,
  ConsumerPublishGig,
  ConsumerGigMainPage,
  ConsumerPromoMainPage,
  ConsumerPromoGig1,
  ConsumerPromoGig2,
  ConsumerPromoMood,
  ConsumerUpdateProfile,
  ConsumerDisocver,
  ConsumerCharts,
  ConsumerTreatmentCharts,
  ConsumerGigDetailHair,
  ConsumerGigDetailPage,
  ConsumerPromoDetailsPage,
  ConsumerGigGlowMakeup,
  ConsumerYourProfile,
  ConsumerAddToCart,
  ConsumerCashPayment,
  ConsumerApplyPromoCode,
  ConsumerOrderProcess,
  ConsumerOrderSetting,
  ConsumerProfileSaved,
  ConsumerPersonalDetails,
  ConsumerInviteFriends,
  ConsumerLanguage,
  ConsumerMyWallet,
  ConsumerPaymentMethods,
  ConsumerAddEasyPaisa,
  ConsumerAddJazzCash,
  ConsumerHelp,
  ConsumerAbout,
  ConsumerShareIdea,
  ConsumerReportBug,
  ConsumerDisputeResolution,
  ConsumerOrderCancellation,
  ConsumerWhyCancel,
  ConsumerOrders,
} from '../consumer-screens';
import ConsumerVerification from '../consumer-screens/ConsumerVerification';

const Stack = createNativeStackNavigator();

// artist-main-stack screens
const ArtistHomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ArtistHome"
      component={ArtistHome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistRankUp"
      component={ArtistRankUp}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistYourOrders"
      component={ArtistYourOrders}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ArtistSearch"
      component={ArtistSearch}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Artist"
      component={Artist}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistLocateKaynchi"
      component={ArtistLocateKaynchi}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistMapSearch"
      component={ArtistMapSearch}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGig"
      component={ArtistGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGigInfo"
      component={ArtistGigInfo}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGigMood"
      component={ArtistGigMood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGigDescription"
      component={ArtistGigDescription}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPublishGig"
      component={ArtistPublishGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistUpdateProfile"
      component={ArtistUpdateProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistVerification"
      component={ArtistVerification}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoGig1"
      component={ArtistPromoGig1}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoGig2"
      component={ArtistPromoGig2}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoMood"
      component={ArtistPromoMood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistOrderSetting"
      component={ArtistOrderSetting}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoMainPage"
      component={ArtistPromoMainPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistNotifications"
      component={ArtistNotifications}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

// artist-main-stack screens
const ArtistOrderStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ArtistOrders"
      component={ArtistOrders}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistYourOrders"
      component={ArtistYourOrders}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistHostingSpot"
      component={ArtistHostingSpot}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistConfirmOrderRequest"
      component={ArtistConfirmOrderRequest}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistTimeline"
      component={ArtistTimeline}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGrooming"
      component={ArtistGrooming}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGroomingDone"
      component={ArtistGroomingDone}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistFinishedTimeline"
      component={ArtistFinishedTimeline}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistCancelledTimeline"
      component={ArtistCancelledTimeline}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistBookingDate"
      component={ArtistBookingDate}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistOrderSummary"
      component={ArtistOrderSummary}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPaymentDetails"
      component={ArtistPaymentDetails}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistOrderConfirm"
      component={ArtistOrderConfirm}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

// artist-main-stack screens
const ArtistProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ArtistStatus"
      component={ArtistStatus}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistAddress"
      component={ArtistAddress}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistProfile"
      component={ArtistProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistSavedAddresses"
      component={ArtistSavedAddresses}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistNotifications"
      component={ArtistNotifications}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistLanguage"
      component={ArtistLanguage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistMyWallet"
      component={ArtistMyWallet}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistLoad"
      component={ArtistLoad}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistWithdrawMoney"
      component={ArtistWithdrawMoney}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPaymentHistory"
      component={ArtistPaymentHistory}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPaymentMethods"
      component={ArtistPaymentMethods}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistHelp"
      component={ArtistHelp}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistCancelOrder"
      component={ArtistCancelOrder}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistDisputeResolution"
      component={ArtistDisputeResolution}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistAbout"
      component={ArtistAbout}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistInviteFriends"
      component={ArtistInviteFriends}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistShareIdea"
      component={ArtistShareIdea}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistReportBug"
      component={ArtistReportBug}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPersonalDetails"
      component={ArtistPersonalDetails}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistProfileSaved"
      component={ArtistProfileSaved}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistYourProfile"
      component={ArtistYourProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistLocateKaynchi"
      component={ArtistLocateKaynchi}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistWhyCancel"
      component={ArtistWhyCancel}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistBookingSlots"
      component={ArtistBookingSlots}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistOrderSetting"
      component={ArtistOrderSetting}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistYourOrders"
      component={ArtistYourOrders}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

// consumer-main-stack screens
const ConsumerHomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ConsumerHome"
      component={ConsumerHome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerSearch"
      component={ConsumerSearch}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerDisocver"
      component={ConsumerDisocver}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerCharts"
      component={ConsumerCharts}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerApplyPromoCode"
      component={ConsumerApplyPromoCode}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ConsumerTreatmentCharts"
      component={ConsumerTreatmentCharts}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrderProcess"
      component={ConsumerOrderProcess}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrderConfirm"
      component={ConsumerOrderConfirm}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerAddToCart"
      component={ConsumerAddToCart}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerCashPayment"
      component={ConsumerCashPayment}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigDetailHair"
      component={ConsumerGigDetailHair}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigDetailPage"
      component={ConsumerGigDetailPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigGlowMakeup"
      component={ConsumerGigGlowMakeup}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPromoDetailsPage"
      component={ConsumerPromoDetailsPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerLocateKaynchi"
      component={ConsumerLocateKaynchi}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerMapSearch"
      component={ConsumerMapSearch}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerRank"
      component={ConsumerRank}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGig"
      component={ConsumerGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigInfo"
      component={ConsumerGigInfo}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigDescription"
      component={ConsumerGigDescription}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigMood"
      component={ConsumerGigMood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerVerification"
      component={ConsumerVerification}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPublishGig"
      component={ConsumerPublishGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGigMainPage"
      component={ConsumerGigMainPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPromoGig1"
      component={ConsumerPromoGig1}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPromoGig2"
      component={ConsumerPromoGig2}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerYourProfile"
      component={ConsumerYourProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPromoMood"
      component={ConsumerPromoMood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPromoMainPage"
      component={ConsumerPromoMainPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerUpdateProfile"
      component={ConsumerUpdateProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerNotifications"
      component={ConsumerNotifications}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

// consumer-main-stack screens
const ConsumerOrderStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ConsumerHostingSpot"
      component={ConsumerHostingSpot}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerBookingDate"
      component={ConsumerBookingDate}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrderSummary"
      component={ConsumerOrderSummary}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPaymentDetails"
      component={ConsumerPaymentDetails}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerRank"
      component={ConsumerRank}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ConsumerGig"
      component={ConsumerGig}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="ConsumerOrderConfirm"
      component={ConsumerOrderConfirm}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

// consumer-main-stack screens
const ConsumerProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ConsumerStatus"
      component={ConsumerStatus}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerAddress"
      component={ConsumerAddress}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerProfile"
      component={ConsumerProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrderSetting"
      component={ConsumerOrderSetting}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerProfileSaved"
      component={ConsumerProfileSaved}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPersonalDetails"
      component={ConsumerPersonalDetails}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerInviteFriends"
      component={ConsumerInviteFriends}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerSavedAddresses"
      component={ConsumerSavedAddresses}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerLocateKaynchi"
      component={ConsumerLocateKaynchi}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerNotifications"
      component={ConsumerNotifications}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerLanguage"
      component={ConsumerLanguage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerMyWallet"
      component={ConsumerMyWallet}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerPaymentMethods"
      component={ConsumerPaymentMethods}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerAddEasyPaisa"
      component={ConsumerAddEasyPaisa}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerAddJazzCash"
      component={ConsumerAddJazzCash}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerHelp"
      component={ConsumerHelp}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerAbout"
      component={ConsumerAbout}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerShareIdea"
      component={ConsumerShareIdea}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerReportBug"
      component={ConsumerReportBug}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerDisputeResolution"
      component={ConsumerDisputeResolution}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrderCancellation"
      component={ConsumerOrderCancellation}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerWhyCancel"
      component={ConsumerWhyCancel}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrders"
      component={ConsumerOrders}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerYourOrders"
      component={ConsumerYourOrders}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export {
  ArtistHomeStack,
  ArtistProfileStack,
  ArtistOrderStack,
  ConsumerHomeStack,
  ConsumerOrderStack,
  ConsumerProfileStack,
};
