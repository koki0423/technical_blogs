# Hugo GitHub Pages Starter

Markdownで記事を書き、Hugoで静的HTMLを生成し、
GitHub Actions経由でGitHub Pagesへ公開する最小構成です。

## 1. ローカルで確認

Hugoをインストール後:

```bash
hugo server -D
```

ブラウザで以下を開きます。

```text
http://localhost:1313
```

## 2. GitHubへpush

```bash
git init
git add .
git commit -m "Initial Hugo site"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## 3. GitHub Pagesを有効化

GitHubリポジトリで:

Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions

を選択してください。

## 4. 記事を書く

`content/posts/` にMarkdownファイルを追加します。

例:

```text
content/posts/my-second-post.md
```

```markdown
---
title: "My Second Post"
date: 2026-09-20
draft: false
---

本文を書く。
```

その後:

```bash
git add .
git commit -m "Add second post"
git push
```

これだけで自動ビルド・公開されます。

## 5. 注意

`hugo.toml` の `baseURL` は仮の値です。

GitHub Actionsでのデプロイ時はPagesのURLを自動取得してビルドするため、
テスト段階ではそのままでも動作します。

独自ドメインを設定する場合は、後ほど `baseURL` も合わせて変更すると分かりやすいです。
