if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Register Success:", registration);
    })
    .catch((error) => {
      console.log("Register Failed:", error);
    });
} else {
  console.log("Service Workers are not supported!");
}
