# HDesks
> Guía rápida para utilizar los los estilos en la página web *[hdesks-link]*, se debe copiar el archivo [styles-css] en la configuración avanzada CSS del Blog en Blogger.
1. [BOTONES](#botones)
  - [Boton primario](#boton-primario)
  - [Boton secundario](#boton-secundario)
2. [ENLACES](#enlaces)
  - [Enlace primario](#enlace-primario)
  - [Enlace secundario](#enlace-secundario)
1. [TEXTOS](#textos)
  - [Alineación](#alineación)
3. [SECCIONES](#secciones)
  - [Productos](#productos)
  - [Servicios](#servicios)
___
## BOTONES

Para usar los **Botones** se debe incluir clase principal `.btn` y luego se define el tipo de boton que se desea usar ya sea del tipo primario u otros definidos con las siguientes clases:
1. `.btn-primary`
1. `.btn-secondary`
1. `.btn-danger`
1. `.btn-default`
#### Ejemplo de uso:
```html
<a href="" class="btn btn-primary">Primary</a>
<a href="" class="btn btn-secondary">Secondary</a>
<a href="" class="btn btn-danger">Danger</a>
<a href="" class="btn btn-default">Default</a>
```

## ENLACES
### Enlace primario
Para usar los **enlaces primarios** se debe incluir clases en las etiquetas `.link-p` y así podras usar los estilos.

#### Ejemplo de uso:
```html
<a href="" class="link-p">Boton</a>
```

## TEXTOS

### Alineación
Para usar los **enlaces primarios** se debe incluir clases en las etiquetas `.link-p` y así podras usar los estilos.

Clases a otilizar:
1. Alinear textos al *centro* clase: `.text-a-c`.
1. Alinear textos a la *izquierda* clase: `.text-a-l`.
1. Alinear textos al *derecha* clase: `.text-a-r`.
1. Alinear textos *justificado* clase: `.text-a-j`.

#### Ejemplos de uso:

##### Texto alineado al centro
```html
<p class="text-a-l">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum placeat magni id corporis eum, quaerat dolores! Recusandae, facere, eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, rem!.
</p>
```
##### Texto alineado a la izquierda
```html
<p class="text-a-l">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum placeat magni id corporis eum, quaerat dolores! Recusandae, facere, eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, rem!.
</p>
```
##### Texto alineado a la derecha
```html
<p class="text-a-r">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum placeat magni id corporis eum, quaerat dolores! Recusandae, facere, eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, rem!.
</p>
```
##### Texto alineado justificado
```html
<p class="text-a-j">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum placeat magni id corporis eum, quaerat dolores! Recusandae, facere, eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, rem!.
</p>
```
### Enlace secundario
Para usar los **enlaces secundarios** se debe incluir clases en las etiquetas `.link-s` y así podras usar los estilos.

#### Ejemplo de uso:
```html
<a href="" class="link-s">Boton</a>
```

## SECCIONES

### Productos
Para implementar **Productos** se debe seguir la siguiente estructura, toda la estructura deve estar dentro de un `div` con la clase `products` y las etiquetas usan la clase generica `product`.

#### Implementación en formáto HTML:
```html
<div class="products">
  <div class="product-item">
    <div class="product-banner"><img src="URL-IMAGEN" alt=""/></div>
    <div class="product-title">
      <h3 class="subtitle">Titulo Producto</h3>
    </div>
    <div class="product-description">
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum placeat magni id corporis eum, quaerat dolores! Recusandae, facere, eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, corporis.</p>
    </div>
    <div class="product-link"><a class="btn-secondary" href="#">Consultar por el producto  </a></div>
  </div>
</div>
```
### Servicios
Para implementar **Servicios** se debe seguir la siguiente estructura, toda la estructura deve estar dentro de un `div` con la clase `services` y las etiquetas usan la clase generica `service`.

#### Implementación en formáto HTML:
```html
<div class="services">
  <div class="service-item">
    <div class="service-title">
      <h3>Redes</h3>
      <div class="hr-s"></div>
    </div>
    <div class="service-img"><img src="media/ejemplo.png" alt=""/></div>
    <div class="service-description">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, facilis!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, qui.</p>
    </div>
    <div class="service-link"><a class="btn-secondary" href="#">Ver Servicio</a></div>
  </div>
</div>
```


[hdesks-link]:https://hdesks.blogspot.com/ "HDesks"
[styles-css]:./source/style.css "styles.css"
