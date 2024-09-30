<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Imagen y apariencia personal (imagen profesional)
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema3/img1.svg', alt='')
      .col-sm-12.col-lg-11.bg08.p-4.mb-0
        p.mb-0 La imagen y la apariencia personal es el pasaporte para ingresar al mundo social y laboral. Intervienen factores como: la forma de vestir, el peinado, el lenguaje no verbal, la manera de caminar, el comportamiento y el modo en que se llevan a cabo las interrelaciones con los demás.
    p.mb-5 La imagen interna (valores, principios, creencias, conocimientos) debe estar acorde con la imagen externa (apariencia física, lenguaje corporal, presentación personal), que se transmite. 
    .bgimg3.mb-3
      h4.pt-1 Consejos para mejorar la imagen corporal
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7 
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Cuidar la higiene")
            .col-sm-12.col-lg-12
              p.mb-0 Para conservar una imagen sana y saludable. 
          .row(numero="2" titulo="Seleccionar ropa cómoda")
            .col-sm-12.col-lg-12
              p.mb-0 De corte clásico, al igual que el calzado y los demás accesorios, elegantes según la personalidad, ocasión y preferencias. 
          .row(numero="3" titulo="Buenos modales")
            .col-sm-12.col-lg-12
              p.mb-4 Tener presente siempre que los buenos modales y las normas de cortesía contribuyen al reconocimiento de la empresa y a la generación de sentido de pertenencia entre sus colaboradores: 
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-phone-alt
                  span #[b La uniformidad según la identidad corporativa y su normativa.] Normalmente predomina el gusto clásico, tradicional y universalmente aceptado (traje de chaqueta oscuro, camisa clara, zapato negro o azul según el color del traje, corbata para los hombres y pañuelo para las mujeres).
                li.d-flex
                  i.fas.fa-phone-alt
                  span #[b Arreglo facial: maquillaje para las mujeres, suave y discreto.] En el caso de los hombres el rostro perfectamente afeitado. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span #[b Pulcritud corporal.] 
                li.d-flex
                  i.fas.fa-phone-alt
                  span #[b Cabello limpio y retirado siempre del rostro,] con un corte adecuado a la edad y el trabajo. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span #[b Accesorios: de acuerdo con la normatividad de la empresa.] Usarlo de manera sobria, para conservar la elegancia. 

          .row(numero="4" titulo="La sonrisa")
            .col-sm-12.col-lg-12
              p.mb-0 Una sonrisa puede abrir puertas. La sonrisa contagia a los clientes de alegría, positivismo, proyecta un ambiente laboral de amabilidad y buen trato. Es la antesala para iniciar una comunicación y también el toque agradable para finalizarla. Una sonrisa transmite comprensión, aceptación, complacencia. Para garantizar una hermosa sonrisa, se debe estar pendiente de una buena higiene oral. 
          .row(numero="5" titulo="La imagen en sus manos")
            .col-sm-12.col-lg-12
              p.mb-3 Las manos son otro elemento del cuerpo, es la conexión con la piel del otro que puede comunicar cariño, respeto, familiaridad, aprecio, acogida, confianza. Las manos acompañan las palabras, se emplean para enfatizar, pero puede llegar a hacerse una lectura de autoritarismo, cuando se exagera en su uso y en la intensidad de los movimientos. 
              p.mb-0 Una parte especial de las manos son las uñas, que deben cuidarse, pues ellas están en contacto visual directo con los clientes y pueden reflejar descuido. Lo recomendable es que las uñas se mantengan cortas, limpias y limadas, si las va a llevar pintadas emplee colores claros. 

          .row(numero="6" titulo="Uso de los perfumes y los desodorantes ")
            .col-sm-12.col-lg-12
              p.mb-0 Tanto para hombres como mujeres, se recomienda utilizar durante el día olores discretos, que destaquen su elegancia. Los olores conforman el imperceptible lenguaje de las fragancias. 
          .row(numero="7" titulo="Vestuario")
            .col-sm-12.col-lg-12
              p.mb-3 Para las mujeres las faldas, en su largo, no debe sobrepasar los 6 centímetros por encima de la rodilla, no llevarlas demasiado ceñidas y la tela en que se confeccionen estas, así como pantalones, blusas y vestidos, no debe transparentar la ropa interior. Las blusas, si son transparentes, se deben llevar con “camisilla” debajo, tenga en cuenta además que no deben ser muy escotadas y sin mangas.
              p.mb-3 Para los caballeros debe tener igual cuidado como el de la mujer. Así mismo deben cuidar el largo de los pantalones con el estilo de zapato, cuidar que las medias combinen con el color del pantalón, el color de la correa o cinturón combine con los zapatos y que los puños y cuello de la camisa estén impecables. 
              p.mb-0 Finalmente, si usted usa uniformes asignados por la empresa, consérvelos en buen estado. Recuerde que la primera impresión que captan los clientes perdura en el tiempo y es de fácil evocación.
      .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema3/img3.png', alt='')


 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
