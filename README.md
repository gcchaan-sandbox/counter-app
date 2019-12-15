# counter-app

## 開発セットアップ

`node >= 12`

```
npm install -g serverless
```

## ローカル起動

```sh
$ yarn start
$ curl -XPOST http://localhost:3000/
```

## メモ

```
# テーブル一覧
$ aws dynamodb list-tables --endpoint-url http://localhost:8000
```

```
# テーブルデータ
$ aws dynamodb scan --table-name [テーブル名] --endpoint-url http://localhost:8000
```

```
# 初期設定
$ aws dynamodb put-item \
    --table-name counter \
    --item '{"Id": {"N": "1"}, "Incr": {"N": "0"}}' \
    --endpoint-url http://localhost:8000
```