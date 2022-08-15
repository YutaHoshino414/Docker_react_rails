# README

## Docker+MySQL+Railsの開発環境
前回の Docker+Railsのエラーを踏まえ、
yarnとwebpackerのインストールをあらかじめ、Dockerfileへ
```
# curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
# export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
```
```
# rails webpacker:install
```

## CORS（Cross-Origin Resource Sharing）を設定
異なるポート間でのリクエスト・レスポンスを可能にするためにcors.rbの設定が必要
```
gem 'rack-cors'

config/initializers/cors.rb
:
記述
```

### エラー等
