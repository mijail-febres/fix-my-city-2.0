// this was just for testing purposes. worked. keep for now.

// import React from "react";
// import usePushNotifications from "./usePushNotifications";

// const Loading = ({ loading }) => (loading ? <div className="app-loader">Please wait, we are loading something...</div> : null);
// const Error = ({ error }) =>
//   error ? (
//     <section className="app-error">
//       <h2>{error.name}</h2>
//       <p>Error message : {error.message}</p>
//       <p>Error code : {error.code}</p>
//     </section>
//   ) : null;

// export default function PushNotificationDemo() {
//   const {
//     userConsent,
//     pushNotificationSupported,
//     onClickAskUserPermission,
//     error,
//     loading
//   } = usePushNotifications();

//   const isConsentGranted = userConsent === "granted";

//   return (
//     <main>
//       <Loading loading={loading} />

//         <p>Push notification are {!pushNotificationSupported && "NOT"} supported by your device.</p>

//         <p>
//         User consent to receive push notifications is <strong>{userConsent}</strong>.
//         </p>

//         <Error error={error} />

//         <button disabled={!pushNotificationSupported || isConsentGranted} onClick={onClickAskUserPermission}>
//         {isConsentGranted ? "Consent granted" : " Ask user permission"}
//         </button>

//     </main>
// );
// }