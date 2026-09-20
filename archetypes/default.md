---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
tags:
  -
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
