<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Calidad en el servicio
    
    .row.justify-content-center.items-items-center.mb-5

      .col-sm-12.col-lg-8
        p.mb-3 La dinámica de mercado globalizado exige empresas integrales que prioricen cuatro funciones fundamentales: la administrativa, la operativa, la comercial y del marketing (actividades de mercadeo), orientadas al desarrollo de liderazgo al interior de la empresa, acción que se verá reflejada en el reconocimiento de la organización dentro de ámbito comercial. 
        p.mb-4 Uno de los pilares del éxito de las empresas en el mundo actual es trabajar por lograr total satisfacción de los clientes, por ello dedican esfuerzos para responder a sus inquietudes, dudas, expectativas y necesidades. Se puede afirmar entonces, que son los clientes quienes marcan las pautas que van a asegurar la calidad del servicio o producto. 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La lupa que permite indagar las apreciaciones del cliente en cuanto a veracidad, compromiso, confianza, sintonía y percepción del objeto o servicio como tal, es la calidad en el servicio, determinada por los estándares que toma el cliente como referencia para emitir su evaluación y la respuesta de la organización frente a sus expectativas.

      .col-sm-12.col-md-8.col-lg-4.bg14.d-flex.justify-content-center.items-items-center.px-4.py-cus
        img(src='@/assets/curso/temas/tema1/img1.svg', alt='')
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Principios de la calidad del servicio
    p.mb-5 A continuación, se presentan los principios que destacan para garantizar la calidad del servicio:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img6.png', alt='')
      .col-sm-12.col-lg-9.align-content-center  
       .bg02.px-4.py-3
          SlyderF.mb-0(columnas="col-lg-12 col-xl-12")
            .bg03.p-5.my-0.h-card
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='')

                .col-sm-12.col-lg-9
                  p.mb-0 El que determina la calidad del servicio es el cliente. 
            .bg03.p-5.my-0.h-card
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/img3.svg', alt='')

                .col-sm-12.col-lg-9
                  p.mb-0 La empresa debe generar una identidad propia que la diferencia de sus competidores y que permita ser identificada fácilmente por los clientes. 

            .bg03.p-5.my-0.h-card
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/img4.svg', alt='')

                .col-sm-12.col-lg-9
                  p.mb-0 La organización debe escuchar el clamor de sus clientes para alcanzar su satisfacción. 

            .bg03.p-5.my-0.h-card
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/img7.svg', alt='')

                .col-sm-12.col-lg-9
                  p.mb-0 La organización debe asumir lineamientos establecidos para mejorar la calidad en el producto o servicio. 

            .bg03.p-5.my-0.h-card
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema1/img8.svg', alt='')

                .col-sm-12.col-lg-9
                  p.mb-0 El mejoramiento continuo, en cada una de las áreas que conforma la empresa, debe ser la bandera de toda organización que quiera alcanzar la excelencia en la calidad.  
    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Factores que determinan la calidad de los servicios
    p.mb-3 Los factores hacen referencia a los elementos que propician el alcance de la calidad en el servicio o producto que ofrece una entidad. Trabajar en el fomento de cada uno de ellos con todos los colaboradores de la empresa, va a marcar la diferencia con otras empresas de la misma naturaleza y garantizará la competitividad y la permanencia en el mercado global. 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
              img(src='@/assets/curso/temas/tema1/img9.svg')
              
          .tarjeta.color-primario-cus.p-3(x="28%" y="20%" numero="+")
            p.mb-0 Respeto
          .tarjeta.color-primario-cus.p-3(x="53%" y="25%" numero="+")
            p.mb-0 Credibilidad

          .tarjeta.color-primario-cus.p-3(x="69%" y="20%" numero="+")
            p.mb-0 Confianza

          .tarjeta.color-primario-cus.p-3(x="53%" y="55%" numero="+")
            p.mb-0 Comunicación

          .tarjeta.color-primario-cus.p-3(x="88%" y="55%" numero="+")
            p.mb-0 Cantidad de personal

          .tarjeta.color-primario-cus.p-3(x="64%" y="90%" numero="+")
            p.mb-0 Cortesía

          .tarjeta.color-primario-cus.p-3(x="51%" y="84%" numero="+")
            p.mb-0 Eficiencia

          .tarjeta.color-primario-cus.p-3(x="20%" y="84%" numero="+")
            p.mb-0 Amabilidad

          .tarjeta.color-primario-cus.p-3(x="20%" y="55%" numero="+")
            p.mb-0 Reacción

          .tarjeta.color-primario-cus.p-3(x="5%" y="35%" numero="+")
            p.mb-0 Accesibilidad
    p.mb-5 Entre los factores que se destacan se encuentran:     
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="")
            .col-sm-12.col-lg-9
              h4 Asequibilidad
              p Facilidad para obtener en el momento propicio el producto o servicio. Implica cercanía de puntos de ventas, telemercaderistas, línea gratuita, páginas web, entre otros, que permita brindar una respuesta rápida ante la necesidad o inquietudes del cliente. 
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img10.png')
          .row(titulo="")
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img11.png')
            .col-sm-12.col-lg-9.text-start
              h4 Portafolio de servicios
              p A través del cual se ofrece a los clientes, toda la información detallada del producto o servicio y la forma de acceder a él. 
          .row(titulo="")
            .col-sm-12.col-lg-9
              h4 Personal comprometido con la misión y objetivos    de la empresa
              p Colaboradores con sentido de permanencia, comprometidos con brindar al cliente una atención con calidad que involucra la amabilidad, la cortesía y la empatía. 
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img12.png')
    
          .row(titulo="")
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img14.png')
            .col-sm-12.col-lg-9.text-start
              h4 Política de justo a tiempo
              p Respuesta oportuna a las necesidades del cliente, el cumplimiento de garantías y las condiciones de entrega. Esto genera en los clientes, confianza en la organización, que se verá reflejada en el incremento de la fidelidad.
          .row(titulo="")
            .col-sm-12.col-lg-9
              h4 Capacidad de servicio
              p Requiere estar en función de la satisfacción del cliente, brindar la orientación necesaria, practicar la escucha activa. Todo esto va a facilitar, encaminar los esfuerzos para superar las expectativas de los clientes. 
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img15.png')
          .row(titulo="")
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img16.png')
            .col-sm-12.col-lg-9.text-start
              h4 Buen clima laboral
              p El aunar esfuerzos en crear y mantener un clima laboral impregnado de armonía, motivación, respeto, trabajo en equipo y el reconocimiento de cada uno de los colaboradores por parte de los directivos de la empresa, hacen que se genere sentido de pertenencia, que se reflejará en el grado de todos los funcionarios en desarrollar sus funciones y en el gusto de los clientes por regresar en busca de atención y respuesta a sus necesidades. 
          .row(titulo="")
            .col-sm-12.col-lg-9
              h4 Infraestructura
              p El estado de las instalaciones locativas, la comodidad del mobiliario, las estancias de espera, el soporte tecnológico, proporcionan fácil evocación y sentimientos de seguridad en los clientes, además del agrado y confort tanto en ellos como en los colaboradores.  
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img15.png')
   
   
   
   
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Evaluación del cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img17.svg', alt='')
      .col-sm-12.col-lg-11.bg08.px-5.py-4
        p.mb-0 Las organizaciones deben tomar como ruta del éxito, la evaluación que efectúe el cliente del producto o servicio; esta evaluación se convierte en una herramienta para mantener la competitividad dentro del mercado. 
    p.mb-5 El cliente para calificar la calidad del servicio o producto prioriza los siguientes aspectos: 
    .row
      .col-sm-6.col-lg-4.mb-cus
        .tarjeta--boton.color-primario.p-4.h-card-2
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema1/img18.svg')
          h4.text-center  Imagen
          p.mb-0.text-center Representada en el producto y el reconocimiento que tenga la empresa en el mercado. Este buen nombre genera en el cliente una percepción de confianza y seguridad que permite una fácil remembranza. 
      
      .col-sm-6.col-lg-4.mb-cus
        .tarjeta--boton.color-primario.p-4.h-card-2
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema1/img19.svg')

          h4.text-center   Presentación del producto o servicio   y la atención oportuna
          p.mb-0.text-center  Las organizaciones deben trabajar en el empaque, en el portafolio de servicios en campañas publicitarias que faciliten la relación producto o servicio-cliente. Se puede agregar a esto el compromiso de todos los colaboradores en dar al cliente una atención de calidad, que lo haga sentir importante y reconocido. 

      .col-sm-6.col-lg-4.mb-cus
        .tarjeta--boton.color-primario.p-4.h-card-2
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema1/img20.svg')

          h4.text-center  La garantía y la atención postventa 
          p.mb-0.text-center El cumplimiento de promesas, de acuerdos establecidos en el proceso de negociación, entre empresa-cliente, son garantes de la seriedad en el proceso comercial, además el seguimiento y el acompañamiento por parte de la empresa durante la postventa generan un sentimiento de agradecimiento y tranquilidad que se verá expresado en la fidelidad del cliente.  


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Medición de satisfacción del servicio
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img21.svg', alt='')
          .col-sm-12.col-lg-10.py-4
            p.mb-0 Uno de los elementos que permite monitorear la satisfacción del servicio, son sus manifestaciones de inconformidad, ya que, gracias a ellas, las empresas pueden desarrollar acciones de mejora que les van a garantizar la vigencia y permanencia dentro del mercado. 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estar en actitud de escucha activa, en disposición de resolver cualquier inquietud, de comprensión, de sintonía con el cliente, además de un trato afable, una expresión de gratitud, de contacto durante todo el ciclo del servicio, se convierten en factores adicionales que son considerados por el cliente en el momento de evaluar el servicio y de categorizar su nivel de satisfacción.

      .col-sm-12.col-lg-5.d-none.d-lg-block
        img.mt-4(src='@/assets/curso/temas/tema1/img22.png', alt='')

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Siete pecados capitales o errores en la calidad del servicio
    p.mb-5 La necesidad de plantear soluciones asertivas para el mejoramiento de la calidad del servicio, ha permitido identificar y definir siete errores o malos hábitos que resultan fatales y que rompen la dinámica comercial a la hora de brindar un servicio. Estos son: 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img23.png', alt='')
      .col-sm-12.col-lg-7 
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Pasividad")
            .col-sm-12.col-lg-12
              p.mb-0 Falta de entusiasmo, indiferencia, desinterés frente al cliente. 

          .row(numero="2" titulo="Descortesía")
            .col-sm-12.col-lg-12
              p.mb-0 Desatención al cliente, dando una atención rápida y una información superficial sobre su inquietud. 

          .row(numero="3" titulo="Indiferencia")
            .col-sm-12.col-lg-12
              p.mb-0 Insensibilidad y menosprecio ante las necesidades del cliente. 
          .row(numero="4" titulo="Autómata ")
            .col-sm-12.col-lg-12
              p.mb-0 Actuar en forma mecánica e impersonal (las mismas frases, las mismas palabras). 
          .row(numero="5" titulo="Rígido")
            .col-sm-12.col-lg-12
              p.mb-0 Inflexible, no presentarle alternativas al cliente. 
          .row(numero="6" titulo="Esquivar al cliente")
            .col-sm-12.col-lg-12
              p.mb-0 Enviarlo de una oficina a otra o de un lugar a otro. 
          .row(numero="7" titulo="Arrogancia")
            .col-sm-12.col-lg-12
              p.mb-0 Superioridad, altivez, menospreciar al cliente.  
   
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
