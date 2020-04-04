# HDesks
> Guía rápida para utilizar los los estilos en la página web *[hdesks-link]*, se debe copiar el archivo [styles-css] en la configuración avanzada CSS del Blog en Blogger.
1. [BOTONES](#botones)
  - [Boton primario](#boton-primario)
  - [Boton secundario](#boton-secundario)
2. [ENLACES](#enlaces)
  - [Enlace primario](#enlace-primario)
  - [Enlace secundario](#enlace-secundario)
3. [SECCIONES](#secciones)
  - [Productos](#productos)
  - [Servicios](#servicios)
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
  <div class="service-item">
    <div class="service-title">
      <h3>Redes</h3>
      <div class="hr-s"></div>
    </div>
    <div class="service-img"><img src="media/ejemplo.png" alt=""/></div>
    <div class="service-description">
      <p>Lorem ipsum dolor sit amet, consectetur</p>
    </div>
    <div class="service-link"><a class="btn-secondary" href="#">Ver Servicio</a></div>
  </div>
</div>
```


[hdesks-link]:https://hdesks.blogspot.com/ "HDesks"
[styles-css]:./source/style.css "styles.css"
