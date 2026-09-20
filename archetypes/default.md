---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
tags:
  # 使用可能タグ（小文字で入力）: research / homelab / network / electronics / other（その他）
  # 分類しきれない記事は other を使用する。
  - other
---

# {{ replace .File.ContentBaseName "-" " " | title }}

## 概要

ここに概要を書く。

## 本文

ここに本文を書く。

## 画像

同じディレクトリに画像を置いた場合:

```markdown
![画像の説明](image.png)
```
