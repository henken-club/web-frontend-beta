import type { BaseTranslation } from "typesafe-i18n";

const ja: BaseTranslation = {
  Book: "本",
  BookSeries: "本のシリーズ",
  Author: "著者",
  TempContent: "仮コンテンツ({type:string})",

  Login: "ログイン",
  RegisterUser: "ユーザー登録",

  NoImage: "画像はありません",

  Format: {
    Alias: "@{alias:string}",
    CommentQuote: "「{comment:string}」",
  },

  AnswerType: {
    Right: "正解",
    Wrong: "不正解",
  },

  Button: {
    CreateHenken: "偏見を送る",
  },

  SearchBox: {
    NoSuggestion: "検索結果がありません",
  },

  BookCover: {
    NoImage: "書影はありません",
  },

  CreateHenkenForm: {
    Title: "偏見を送る",

    To: {
      SearchBox: {
        Label: "送り先を探す",
      },
    },

    Content: {
      Image: {
        NoImage: "画像はありません",
        NotSelected: "コンテンツを選択して下さい",
      },
      SearchBox: {
        Label: "コンテンツを探す",
        NoResult: "コンテンツが見つかりませんでした",
      },
    },

    Control: {
      Comment: {
        Label: "コメント入力欄",
        Description: "140文字以下で、必須ではありません",
      },
      CreateHenken: "送信！",
    },

    Created: {
      Title: "偏見を送信しました！",
      Jump: "ページ",
      Close: "閉じる",
    },
  },

  RegisterUserForm: {
    aria: {
      Alias: "エイリアス",
      DisplayName: "表示名",
      Avatar: "プロフィール画像",
    },
    Title: "ユーザー登録",
    Description: "本サービスの利用にはユーザー登録をする必要がありますが、後ですることも出来ます。",
    Alias: {
      Label: "エイリアス",
    },
    DisplayName: {
      Label: "表示名",
    },
    Avatar: {
      Label: "プロフィール画像",
    },
    Register: "登録する",
    Registering: "登録中",
    Registered: "ようこそ、{displayName:string}さん！どうぞお楽しみ下さい！",
  },

  Notifications: {
    Unread: "未読",
    ReceivedHenken: {
      Label: "{displayName:string}さんから偏見を持たれました！",
    },
    ReceivedAnswer: {
      Label: "{displayName:string}さんが回答しました",
    },
  },

  UserPage: {
    Section: {
      Tab: {
        Timeline: "タイムライン",
        ReceivedHenkens: "送られてきた偏見",
        SendHenkens: "送った偏見",
      },
      HenkenList: {
        ListItem: {
          NoComment: "（コメントはありません）",
        },
      },
    },
  },

  HenkenPage: {
    UserFrom: "送り元",
    UserTo: "送り先",
    Timeline: {
      NoAnswer: "回答していません",
      NoComment: "コメントはありません",
    },
  },
};

export default ja;
