import type { BaseTranslation } from "typesafe-i18n";

const ja: BaseTranslation = {
  Book: "本",
  BookSeries: "本のシリーズ",
  Author: "著者",

  Login: "ログイン",
  RegisterUser: "ユーザー登録",

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

  CreateHenkenForm: {
    Created: {
      Title: "偏見を送信しました！",
      Close: "閉じる",
    },

    To: {
      SearchBox: {
        aria: { QueryInput: "" },
      },
    },

    Content: {
      Image: {
        NoImage: "画像はありません",
        NotSelected: "コンテンツを選択して下さい",
      },
      SearchBox: {
        aria: {
          QueryInput: "コンテンツ入力欄",
        },
        Label: "コンテンツ入力欄",
        NoResult: "コンテンツが見つかりませんでした",
      },
    },

    Control: {
      Comment: {
        Label: "コメント入力欄",
        aria: { CommentInput: "コメント入力欄" },
      },
    },
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

  HenkenPage: {
    Timeline: {
      UserFrom: "送り元",
      UserTo: "送り先",
      HenkenComment: "{displayName:string}さんからの偏見",
      AnswerComment: "{displayName:string}さんからの回答",
      NoAnswer: "（回答していません）",
      NoComment: "（コメントはありません）",
      AnswerType: {
        Right: "正解！",
        Wrong: "残念…",
      },
    },
  },
};

export default ja;
