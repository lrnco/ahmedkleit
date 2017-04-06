Ahmed Kleit Portfólio
----

## Como adicionar um projeto


#### Adicione as imagens na pasta _uploads
tente manter um nome de arquivo simples como "imagem-coletive.jpg"

#### Crie um arquivo .md na pasta _projects e utilize a marcação
```markdown
---
layout: portfolio  
type: main   # main ou latest
permalink: bmk-partners    
title: BMK Partners 
image: bmk-partners.jpg 
order: 1  # Ordem em que o projeto é apresentado

# Subtitle e Description são usados no projetos tipo main
subtitle: Unlocking Value
description: BMK é uma consultoria ...
---

Descrição do projeto, bla bla bla em até 3 a 4 linhas sempre [Link do site](www.linkdesite.com)...

<!-- # Exemplo de imagem -->
![alt text]({{ site.baseurl }}/uploads/carro.jpg "Title Img")
``````

Em caso de dúvida use esses cheatsheets de Markdown:

* [GitHub Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Markdown Syntax](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
