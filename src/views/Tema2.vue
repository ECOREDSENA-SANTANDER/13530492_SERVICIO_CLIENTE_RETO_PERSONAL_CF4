<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Atención perfecta
    p.mb-5 Alcanzar la total satisfacción del cliente está sujeto a ofrecer una atención perfecta, dos palabras que precisan pautas para desarrollar empatía y una comunicación asertiva con el cliente. 
    .tarjeta--container.row.mb-5
      .col-sm-12.col-lg-6.tarjeta.color-primario-cus-3.p-5.mb-cus.h-card-3
        .row.justify-content-center.mb-4.d-none.d-lg-block
          .col-sm-12.col-lg-3.m-auto
              img(src='@/assets/curso/temas/tema2/img2.svg')
          
        h3.text-center Atención: 
        p.mb-0 Es una palabra que proyecta disposición, voluntad, esmero, servicio, entrega, estar en función de otros y esto requiere efectuar procesos de pensamiento para evaluar situaciones, tomar decisiones y efectuar acciones. 
      .col-sm-12.col-lg-6.tarjeta.color-primario-cus-2.p-5.h-card-3
        .row.justify-content-center.mb-4.d-none.d-lg-block
          .col-sm-12.col-lg-3.m-auto
              img(src='@/assets/curso/temas/tema2/img3.svg')
          
        h3.text-center Perfecta: 
        p.mb-0 Es una expresión que indica excelencia, magnificencia, insuperable, inmejorable, íntegro, es decir, lo que supera las expectativas del cliente, con un alto grado de calidad. 
    p.mb-5 Por ello, hablar de atención perfecta es hacer alusión al compromiso que deben tener todos los colaboradores de la empresa en el compromiso, agrado, actitud proactiva, vocación de servicio, que permita ofrecer un excelente e inmejorable servicio o producto. 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .cajon.color-primario.p-4.mb-0
          p.mb-0 La experticia y destreza en la labor que se desarrolle, el agrado en realizarla, la respuesta rápida y oportuna ante la inquietud del cliente, contar con procesos y procedimientos claros, la empatía, la escucha activa, la discreción, la prudencia, el trato amable, respetuoso y cordial, son los ingredientes para obtener como resultado una atención perfecta.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img4.svg', alt='')
      .col-sm-12.col-lg-11.py-4
        p.mb-0 Estos sencillos ingredientes conforman la fórmula de la fidelidad, la confianza y la credibilidad de los clientes hacia una empresa. Es la esencia de una excelente imagen corporativa e interrelación organizacional. 
    p.mb-5 Las habilidades que se deben desarrollar para ofrecer una atención perfecta y que van a dejar una huella imborrable en la memoria de los clientes son: 
    .row.justify-content-start.mb-5
      .col-lg-10.position-relative
        .avatar
            img(src="@/assets/curso/temas/tema2/img5.svg", alt="alt").img250
        .crd.crd--avatarHorizontal-2.crd--first-2.py-4
          .row.align-items-center.justify-content-center
            .col-sm-12.col-lg-8
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Ser proactivos. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Desarrollar una comunicación asertiva. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Interesarse por la información que se maneja en la empresa, esto permite brindar una buena asesoría. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Actuar, hacer lo que corresponde. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Presentar alternativas de solución. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Reconocer al cliente y brindar un trato amable. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Manejar horarios adicionales. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Ofrecer una atención oportuna al cliente. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Resaltar la importancia del aporte a través del sistema de quejas y reclamos. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Dar respuesta rápida a las solicitudes, quejas y/o reclamos. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span  Brindar calidez en la atención efectuada a través de otros medios.  







</template>

<script>
export default {
  name: 'Tema2',
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
