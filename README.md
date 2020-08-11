# README

## 環境構築手順
- api/file.env.sample ファイルを api/file.env にリネームする
- database情報を設定
- docker-compose build --no-cache
- docker-compose up
- DB接続情報を変更
```
1. api/config/database.ymlを開く
2. database名を変更したい場合は、修正する
3. mysql -u root -ppassword -h 127.0.0.1 で接続
4. use mysql
5. 作業ユーザーを作成
userとpasswordを以下のようなSQL文で作成
create user 'templateUser' identified by 'userpass';
6. 権限を付与
GRANT ALL ON template_development.* TO 'templateUser';
GRANT ALL ON template_test.* TO 'templateUser';
```
- file.envファイルを更新する
```
user名とpasswordを上記で生成した作業ユーザーの情報に変更する
```
- docker-compose run api rails db:create
- docker-compose run api rails db:seed
- docker-compose run client npm install
- docker-compose run yarn upgrade
- docker-compose down で一度shutdown
- docker-compose up 
- localhost:3000 とアクセスし、railsのトップページが見えること
- localhost:8000 とアクセスし、reactのトップページが見えること


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
