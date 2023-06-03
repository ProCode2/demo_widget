import { styles } from "./assets.js";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js";
import "https://cdn.jsdelivr.net/gh/procode2/demo_widget@main/index.js";

class MessageWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.initialize();
    this.injectStyles();
    // this.injectScript();
  }

  position = "";
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
      background: "transparent",
    };
  }

  async initialize() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__container");
    this.createWidgetContent();

    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
        <div class="chat">
          <div class="chat-title">
            <h1>We are Online</h1>
            <figure class="avatar">
              <img src="https://wmuza.github.io/SocketIO-Chat-App/public/img/sa.png" />
              <span class="chat-message-counter">3</span>
            </figure>
            <span class="online-bullet"></span>
          </div>
          <div class="messages">
            <div class="messages-content"></div>
          </div>
          <div class="message-box">
            <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
            <button type="submit" class="message-submit">Send</button>
          </div>
        </div>
        <div class="bg"></div>
    `;
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
  }

  static injectScript() {
    const link3 = document.createElement("script");
    link3.setAttribute("src", "./index.js");

    document.body.appendChild(link3);
  }
}

function initializeWidget() {
  return new MessageWidget();
}

function addDependencies() {
  const link4 = document.createElement("link");
  link4.setAttribute("rel", "stylesheet prefetch");
  link4.setAttribute("as", "style");
  link4.setAttribute(
    "href",
    "https://fonts.googleapis.com/css?family=Open+Sans"
  );

  const link5 = document.createElement("link");
  link5.setAttribute("rel", "stylesheet prefetch");
  link5.setAttribute("as", "style");
  link5.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css"
  );

  document.head.appendChild(link4);
  document.head.appendChild(link5);
}

initializeWidget();
addDependencies();
