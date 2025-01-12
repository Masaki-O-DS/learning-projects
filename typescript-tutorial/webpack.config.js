module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    // __dirnameは、このプロジェクトのルートディレクトリを指す
    path: `${__dirname}/dist`, //entryポイントのファイルをバンドルしたものを/distに入れてくださいねということ
    filename: "[name].js", //[name]には、entry:のbundleが入ることになる
    //filename: "bundle.js"で直接指定してもいい
  },
  mode: "development", //developmentモードとproductionモードがある。developmentは、開発という意味で
  //これをdevelopmentとすることでソースマップが有効になる。
  //productionモードだとファイルが圧縮されて軽くなるようにバンドルされる
  resolve: {
    extensions: [".ts", ".js"], //.tsや.jsのファイルを認識する。
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`, //ローカルサーバーを作るときにどこを見に行きますか？という指定をする。
    },
    open: true, //ローカルサーバーを起動させたときに自動的にwebを開いてくれる設定をする箇所s
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader", //.tsというファイルをts-loaderを用いてコンパイルしてくださいねというルールを記載したもの
      },
    ],
  },
};

//この設定ファイルをプロジェクトのたびに書くのめんどくさいと思うのでこれだけをgithubにあげといて
//プロジェクトごとにこれをコピペするのが推奨

//他にいい設定があるのかどうかを知るために調べてみよう
