# Docker+MySQL+Railsの開発環境 2

# Docker+MySQL+Railsに、API モード + React を追加

## Front (React)
<img width="400" alt="スクリーンショット 2022-08-14" 
src="https://user-images.githubusercontent.com/72447845/184522506-23781ced-e141-4cc3-ad41-ab4e89b361a7.png">

## Backend (Rails API v1)
<img width="400" alt="スクリーンショット 2022-08-14" 
src="https://user-images.githubusercontent.com/72447845/184522587-19c2b9bf-8361-4842-9527-6f905b64a26b.png">


#### 便利なChrome拡張
ブラウザ上のjsonを整形[JSONVue](https://kossy-web-engineer.hatenablog.com/entry/2018/09/13/061248)  

<img width="500" alt="スクリーンショット 2022-08-14" 
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