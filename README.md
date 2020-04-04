# HDesks
> Guía rápida para utilizar los los estilos en la página web *[hdesks-link]*, se debe copiar el archivo [styles-css] en la configuración avanzada CSS del Blog en Blogger.
1. [BOTONES](#botones)
  - [Boton primario](#boton-primario)
  - [Boton secundario](#boton-secundario)
2. [ENLACES](#enlaces)
  - [Enlace primario](#enlace-primario)
  - [Enlace secundario](#enlace-secundario)
___
## BOTONES

### Boton Primario
Para usar los **Botones primarios** se debe incluir clases en las etiquetas `.btn-primary` y así podras usar los estilos.

#### Ejemplo de uso:
```html hl_lines="1"
<a href="" class="btn-primary">Boton</a>
```
### Boton Secundario
Para usar los **Botones secundarios** se debe incluir clases en las etiquetas `.btn-secondary` y así podras usar los estilos.

#### Ejemplo de uso:
```html
<a href="" class="btn-secondary">Boton</a>
```

## ENLACES

### Enlace primario
Para usar los **enlaces primarios** se debe incluir clases en las etiquetas `.link-p` y así podras usar los estilos.

#### Ejemplo de uso:
```html
<a href="" class="link-p">Boton</a>
```

### Enlace secundario
Para usar los **enlaces secundarios** se debe incluir clases en las etiquetas `.link-s` y así podras usar los estilos.

#### Ejemplo de uso:
```html
<a href="" class="link-s">Boton</a>
```

## SECCIONES

### Productos
Para usar el diseño de **productos** se debe seguir la siguiente estructura.

#### Ejemplo de uso:
```Pug hl_lines="1 2 3 5 7 9"
.products
  .product-item
    .product-banner
      img(src="Url de la imagen", alt="")
    .product-title
      h3.subtitle TITULOS
    .product-description
      p  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum placeat magni id corporis eum, quaerat dolores! Recusandae, facere, eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, corporis.
    .product-link
      a(href="#").btn-secondary BOTON
```

[hdesks-link]:https://hdesks.blogspot.com/ "HDesks"
[styles-css]:./source/style.css "styles.css"
