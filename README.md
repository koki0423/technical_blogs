# Hugo Page Bundle Sample

既存の単体Markdown記事と、Page Bundle形式の記事を混在させるサンプルです。

## 構成

```text
content/posts/
├── first-post.md
└── page-bundle-sample/
    ├── index.md
    ├── sample-diagram.svg
    └── memo.txt
```

## 新しいPage Bundle記事を作る

例:

```bash
hugo new content posts/timer-rev2/index.md
```

すると以下のような記事を作れます。

```text
content/posts/timer-rev2/
└── index.md
```

同じディレクトリへ画像を追加します。

```text
content/posts/timer-rev2/
├── index.md
├── schematic.png
└── pcb.jpg
```

Markdownからは相対パスで参照できます。

```markdown
![回路図](schematic.png)
![PCB](pcb.jpg)
```

## ローカル確認

```bash
hugo server -D
```

このリポジトリの `baseURL` は GitHub Pages の公開先を示しているため、ローカルでは
`http://localhost:1313/technical_blogs/` を開いて確認します。
