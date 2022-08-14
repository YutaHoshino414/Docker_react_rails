# Docker+MySQL+Railsの開発環境 2

# Docker+MySQL+Railsに、API モード + React を追加

#### 便利なChrome拡張
[JSONVue](https://kossy-web-engineer.hatenablog.com/entry/2018/09/13/061248)

### docker-compose exec front ash ??
下記のコマンドを打ってもなぜかコンテナに入れない状況

```
$ docker-compose exec [サービス名] bash
```
vs codeのremote-containerから接続してみたところ、
ashと表示された為試しに、

```
$ docker-compose exec [サービス名] ash
```
入れた