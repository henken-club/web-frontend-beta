import type { BaseTranslation } from "typesafe-i18n";

const ja: BaseTranslation = {
  Format: {
    Alias: "@{alias:string}",
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
