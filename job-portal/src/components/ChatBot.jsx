import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with bot",
        botId: "cbe71628-7e0b-4318-b70a-3f746acf238a",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "cbe71628-7e0b-4318-b70a-3f746acf238a",
        webhookId: "16f5f529-a0a1-4de2-a60f-148bbb06c458",
        lazySocket: true,
        themeName: "prism",
        frontendVersion: "v1",
        showPoweredBy: true,
        theme: "prism",
        themeColor: "#2563eb",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;

{
  /* <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script>
  window.botpressWebChat.init({
      "composerPlaceholder": "Chat with bot",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "cbe71628-7e0b-4318-b70a-3f746acf238a",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "cbe71628-7e0b-4318-b70a-3f746acf238a",
      "webhookId": "16f5f529-a0a1-4de2-a60f-148bbb06c458",
      "lazySocket": true,
      "themeName": "prism",
      "frontendVersion": "v1",
      "showPoweredBy": true,
      "theme": "prism",
      "themeColor": "#2563eb"
  });
</script> */
}
