# Docker+MySQL+Railsの開発環境 2

### Docker+MySQL+Railsに、API モード + React を追加
### フロント側でデータの受け取り確認できたので、まずはバックエンド側から整えて行く。

## Front (React)
<img width="500" alt="スクリーンショット 2022-08-14" 
src="https://user-images.githubusercontent.com/72447845/184522506-23781ced-e141-4cc3-ad41-ab4e89b361a7.png">

## Backend (Rails CRUD + API v1)
<img width="500" alt="スクリーンショット 2022-08-14" 
src="https://user-images.githubusercontent.com/72447845/184540089-fcef5acb-9c70-4123-9768-8911a7d48787.png">


#### 便利なChrome拡張
ブラウザ上のjsonを整形[JSONVue](https://kossy-web-engineer.hatenablog.com/entry/2018/09/13/061248)  

<img width="400" alt="スクリーンショット 2022-08-14" 
src="https://user-images.githubusercontent.com/72447845/184522798-9938e133-cb87-4332-adf3-851e92131212.png">

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