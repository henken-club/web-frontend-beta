import type { BaseTranslation } from "typesafe-i18n";

const ja: BaseTranslation = {
  Login: "ログイン",
  RegisterUser: "ユーザー登録",

  Button: {
    CreateHenken: "偏見を送る",
  },

  Format: {
    Alias: "@{alias:string}",
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
    To: {
      SearchBox: {
        aria: {
          QueryInput: "",
        },
        NoSuggestion: "ユーザーが見つかりませんでした",
      },
    },
    Content: {
      Info: {
        NoImage: "画像はありません",
      },
      CommentBox: {
        Label: "コメント入力欄",
        aria: {
          CommentInput: "コメント入力欄",
        },
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
};

export default ja;
