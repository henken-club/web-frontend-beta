import type { BaseTranslation } from "typesafe-i18n";

const ja: BaseTranslation = {
  Login: "ログイン",
  RegisterUser: "ユーザー登録",

  Format: {
    Alias: "@{alias:string}",
    CommentQuote: "「{comment:string}」",
  },

  Button: {
    CreateHenken: "偏見を送る",
  },

  SearchBox: {
    NoSuggestion: "検索結果がありません",
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
      Info: {
        NoImage: "画像はありません",
      },
      CommentBox: {
        Label: "コメント入力欄",
        aria: { CommentInput: "コメント入力欄" },
      },
      SearchBox: {
        aria: {
          QueryInput: "コンテンツ入力欄",
        },
        Label: "コンテンツ入力欄",
        NoResult: "コンテンツが見つかりませんでした",
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
    Header: {
      UserFrom: "{displayName:string}さんから",
      UserTo: "{displayName:string}さんへ",
    },
  },
};

export default ja;
