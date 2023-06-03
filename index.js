let Fake,
  i = 0;

class MainChat {
  username = "";

  constructor() {
    $(".messages-content").mCustomScrollbar();
    MainChat.LoadEventHandlers();
    this.username = prompt("What's Your Name?");
  }

  static setDate() {
    let d = new Date();
    let m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }

  static insertMessage() {
    const msg = $(".message-input").val();
    if ($.trim(msg) == "") return false;
    $(".message-input").val(null);
    this.updateChat(msg);
  }

  static LoadEventHandlers() {
    Fake = [
      "Hi there, I'm Wilbert and you?",
      "Nice to meet you",
      "How are you?",
      "Not too bad, thanks",
      "What do you do?",
      "That's awesome",
      "Codepen is a nice place to stay",
      "I think you're a nice person",
      "Why do you think that?",
      "Can you explain?",
      "Anyway I've gotta go now",
      "It was a pleasure chat with you",
      "Time to make a new codepen",
      "Bye",
      ":)",
    ];

    $(".chat-title").on("click", () => {
      if ($(".chat").height() == 500) $(".chat").animate({ height: 45 }, 1000);
      else $(".chat").animate({ height: 500 }, 1000);

      $(".message-box").slideToggle(300, "swing");
      $(".chat-message-counter").fadeToggle(300, "swing");
    });

    $(".message-submit").click(() => {
      MainChat.insertMessage();
    });

    $(window).on("keydown", (e) => {
      if (e.which == 13) {
        MainChat.insertMessage();
        return false;
      }
    });
  }

  static updateScrollbar() {
    $(".messages-content")
      .mCustomScrollbar("update")
      .mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 10,
        timeout: 0,
      });
  }

  static updateChat(data) {
    if (this.username == "Chat Bot") {
      $(
        '<div class="message loading new"><figure class="avatar"><img src="/public/img/sa.png" /></figure><span></span></div>'
      ).appendTo($(".mCSB_container"));
      MainChat.updateScrollbar();
      setTimeout(() => {
        $(".message.loading").remove();
        $(
          '<div class="message new"><figure class="avatar"><img src="/public/img/sa.png" /></figure>' +
            data +
            "</div>"
        )
          .appendTo($(".mCSB_container"))
          .addClass("new");
        MainChat.setDate();
        MainChat.updateScrollbar();
      }, 1000 + Math.random() * 20 * 100);
    } else {
      setTimeout(() => {
        $(".message.loading").remove();
        $('<div class="message message-personal">' + data + "</div>")
          .appendTo($(".mCSB_container"))
          .addClass("new");
        MainChat.setDate();
        MainChat.updateScrollbar();
      }, 100);

      setTimeout(() => MainChat.fakeMessage(), 1000 + Math.random() * 20 * 100);
    }
  }

  static fakeMessage() {
    if ($(".message-input").val() != "") return false;
    $(
      '<div class="message loading new"><figure class="avatar"><img src="/public/img/sa.png" /></figure><span></span></div>'
    ).appendTo($(".mCSB_container"));
    MainChat.updateScrollbar();
    setTimeout(() => {
      $(".message.loading").remove();
      $(
        '<div class="message new"><figure class="avatar"><img src="/public/img/sa.png" /></figure>' +
          Fake[i] +
          "</div>"
      )
        .appendTo($(".mCSB_container"))
        .addClass("new");
      MainChat.setDate();
      MainChat.updateScrollbar();
      i++;
    }, 1000 + Math.random() * 20 * 100);
  }
}

$(document).ready(() => {
  new MainChat();
  MainChat.fakeMessage();
});
