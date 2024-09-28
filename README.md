# 読書管理アプリ

# 使用技術

## バックエンド

- Prisma
- Express
- TypeScript

## フロントエンド

- React
- TypeScript
### ページ遷移
- react-router-dom
### データ取得
- axios
### フォーム＆バリデーション
- react-hook-form
- zod
### UIコンポーネント
- MUI

# ローカル環境作成

1. laragon でデータベースを作成。
2. バックエンド側の.env ファイルに作成したデータベースの情報を追記
3. React 側の URL を追記
4. フロントエンド側の.env ファイルに API のエンドポイントを追記
5. コマンドラインから cd server で server ディレクトリに移動しマイグレーションを行う、npx prisma migrate dev --name init
