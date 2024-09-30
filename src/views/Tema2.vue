<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Principios básicos de atención al cliente
    .row.justify-content-center.align-items-center.mb-3
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img2.svg', alt='')
      .col-sm-12.col-lg-11
        p.mb-0 En términos individuales, el hombre se comunica con sus actitudes, con los movimientos de su cuerpo, de sus manos o movimientos de los ojos, la expresión de su cara, con grafías (dibujos, letras) y con la palabra (voz). Por lo anterior se puede concluir que las formas de comunicación son: #[b la comunicación verbal y la comunicación no verbal.] 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 La comunicación verbal o lingüística
    p.mb-5 La comunicación verbal o lingüística puede manifestarse de dos formas: 
    TabsB.color-acento-contenido.mb-5
      .p-5(titulo="Oral" :icono="require('@/assets/curso/temas/tema2/img3.svg')")
        .row
          .col-sm-12.col-lg-8
            h4 Oral
            p A través de signos orales, las palabras habladas, que representa el lenguaje articulado, son sonidos estructurados que dan lugar a las sílabas, palabras y oraciones con las que el ser humano se comunica con los demás. 
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img5.svg', alt='')
      .p-5(titulo="Escrita" :icono="require('@/assets/curso/temas/tema2/img4.svg')")
        .row
          .col-sm-12.col-lg-8
            h4 Escrita
            p.mb-4 Por medio de la representación gráfica de signos escritos, que plasman la forma de expresión oral.
            .cajon.color-primario.p-4.mb-4
              p.mb-0 Independientemente del tipo de comunicación que se lleve a cabo es importante tomar en cuenta las palabras, el significado que se les dé, el contexto en que se utilizan, y los estímulos sociales que existen, cuando estas son expresadas, además de la concordancia en la construcción de las oraciones, el uso de sinónimos para ampliar el significado de lo expresado.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img.mt-4(src='@/assets/curso/temas/tema2/img6.svg', alt='')



    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Comunicación escrita
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img7.svg', alt='')
      .col-sm-12.col-lg-11
        p.mb-0 En la comunicación escrita, la relación entre el emisor y el receptor se da de manera asincrónica, es decir, en tiempos y espacios diferentes a los que puede llegar a generarse. 

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-4 El emisor, independiente de si la relación comunicacional se establece, debe expresar su mensaje de forma clara y precisa. Ahora bien, esta forma de expresión le permite al emisor jugar con las palabras, aumentando sus posibilidades expresivas y gramaticales. Los tipos de comunicación escrita que están presentes en la interacción con clientes son: informes, cartas, memorándums, circulares, memorias, actas, contratos, reglamentos, manuales, boletines, entrevistas, volantes, avisos, recibos, facturas, cheques, pagarés, entre otras; todas ellas deben elaborarse sin errores y ajustadas a las normas definidas por la empresa. 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Otras formas de comunicación escrita son: los géneros literarios (drama, comedia, poesía, entre otros), el muralismo (pintura en grandes superficies), la expresión urbana (grafitis), jeroglíficos (mensajes cifrados a partir de la interpretación de signos y símbolos) y muchas otras formas que el hombre ha utilizado a lo largo de la historia.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img8.png', alt='')

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span
        | Diferencias entre comunicación oral y escrita
    .tabla-a.color-acento-contenido 
      table
        thead
          tr
            th &nbsp;
            th Ventajas
            th Desventajas
        tbody
          tr
            td.h4.text-center Oral
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span Es más rápida, directa, ágil y espontánea.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Existe retroalimentación inmediata.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Proporciona mayor cantidad de información en menos tiempo.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Permite un contacto más personal.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Permite aclarar las dudas y preguntas.
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span El riesgo de interpretación personal es mayor.
                li.d-flex
                  i.fas.fa-phone-alt
                  span El mensaje no queda registrado y puede ser tergiversado o alterado más fácil.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Es más fácil de olvidar el mensaje. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Es inadecuada para mensajes muy complejos.


          tr
            td.h4.text-center Escrito
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span Existe un registro de la comunicación permanente, tangible y verificable.
                li.d-flex
                  i.fas.fa-phone-alt
                  span El contenido del mensaje es más riguroso y preciso, lógico y claro.
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span Consume más tiempo.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Carece de retroalimentación inmediata.
                li.d-flex
                  i.fas.fa-phone-alt
                  span No existe seguridad de la recepción ni de la interpretación.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Principios básicos en la comunicación verbal
    SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
      .tarjeta.slyder-f-cus.bgimg1.p-4
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img9.svg', alt='')
        h4.py-1.text-center.bg04.mb-4.m-auto.px-3 Sencillez
        p.text-center Presentar las ideas con un lenguaje accesible, pensando en que el interlocutor lo pueda comprender. 

      .tarjeta.slyder-f-cus.bgimg1.p-4
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='')
        h4.py-1.text-center.bg04.mb-4.m-auto.px-3 Claridad
        p.text-center Si se van a utilizar palabras o expresiones técnicas, definirlas antes de emplearlas en un contexto. 

      .tarjeta.slyder-f-cus.bgimg1.p-4
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img11.svg', alt='')
        h4.py-1.text-center.bg04.mb-4.m-auto.px-3 Brevedad
        p.text-center Desarrollar el tema de manera concreta y concisa. 

      .tarjeta.slyder-f-cus.bgimg1.p-4
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img12.svg', alt='')
        h4.py-1.text-center.bg04.mb-4.m-auto.px-3 Cortesía
        p.text-center El respeto, la actitud positiva y la cordialidad deben estar presentes en cualquier interacción que se desee establecer.  


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 La comunicación no verbal
    p.mb-5 En el acto comunicativo la comunicación no verbal, es decir, expresiones faciales, posturas, miradas, sonrisa, llanto, tono y timbre de voz, según Mehrabian (2009), representa el 80% del intercambio comunicacional, por lo tanto, al compartir mensajes con otros se debe ser coherente entre el decir y el hacer, la palabra, los matices que las acompañan y los gestos. Esto evita que el mensaje se distorsione.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img13.svg', alt='')
          .col-sm-12.col-lg-11
            p El auto conocimiento, el reconocimiento y manejo emocional que se tenga, son pilares de una comunicación asertiva. 
            p.mb-0 El lenguaje no verbal proporciona pistas sobre el pensar y el sentir del otro, ya que proyectan una emoción que no puede poner en palabras.
        p.mb-5 Esta lectura le da herramientas para mantener o modificar la dinámica de la interacción. El contacto visual, es un elemento que consolida las relaciones interpersonales. Refiere que una mirada fija, se interpreta como signo de cariño o simpatía. Por el contrario, si se evade el contacto visual se llega a la conclusión que no es aceptado, que no es del agrado, que es antipático, o simplemente que es una manifestación de timidez. Ahora bien, si el contacto visual es muy fijo y frío, puede ser leído como un indicador de agresividad. 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Por lo anterior, se debe tener mucho cuidado con el lenguaje no verbal que se acostumbra a emplear en la atención a los clientes; estos simples detalles pueden consolidar una transacción o por el contrario romper una relación comercial. 
      .col-sm-12.col-lg-4.bg12.p-4
          figure
            img(src='@/assets/curso/temas/tema2/img14.svg', alt='')
            figcaption Nota. Tomado de Mehrabian (2009)


    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Comunicación asertiva
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img15.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-4 Es la capacidad de establecer una comunicación de ideas, inquietudes, necesidades, deseos y sentimientos de manera sincera, pero con cortesía, sin ser hiriente, someter o menospreciar a otra persona. Es decir, sin remordimientos, ni ofuscaciones. 
        p.mb-4 Para comunicarse de forma asertiva, se debe aplicar la siguiente fórmula:
        .bg13
          .row.justify-content-center.align-items-center.mb-0.py-4.px-2.text-center
            .col-sm-12.col-lg-3
              p.mb-0 Expresar lo que se percibe
            .col-sm-12.col-lg-1
              h4 +
            .col-sm-12.col-lg-3
              p.mb-0 Describir hechos y sentimientos
            .col-sm-12.col-lg-1
              h4 +
            .col-sm-12.col-lg-3
              p.mb-0 Plantear alternativas y consecuencias

    p.mb-5 La asertividad ante las acciones o decisiones permite discutir con propiedad, expresar diferencias sin llegar a agredir a los otros y tener la capacidad de aceptar sugerencias. Si existe una equivocación, sin sentirse disminuida su autoestima, brinda la posibilidad de aprender del error y verlo como una oportunidad de mejoramiento. 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.bg09.p-5(titulo="Principios de la asertividad")
            h4.mb-3 Principios de la asertividad
            p.mb-3 Entre los más importantes se pueden enunciar: 
            ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span Respeto por uno mismo y por los demás. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Ser directo sin agredir.
                li.d-flex
                  i.fas.fa-phone-alt
                  span Ser honesto sin herir. 
                li.d-flex
                  i.fas.fa-phone-alt
                  spanSer prudente sin mentir.  
          .tarjeta.bg09.p-5(titulo="Derechos asertivos")
            h4.mb-3 Derechos asertivos
            ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span Buscar el bienestar propio. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Cambiar de opinión. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Equivocarse. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Ser tratado con respeto y dignidad. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Decir no sin sentirse culpable. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Pedir lo que se desea. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Tomar las propias decisiones y asumir las consecuencias. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Reflexionar antes de actuar. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Recibir lo que se ha pedido. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span A dar y recibir en igual medida. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span La privacidad, reservarse opiniones. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Sentirse bien consigo mismo.  

                
          .tarjeta.bg09.p-5(titulo="Ventajas de la asertividad")
            h4.mb-3 Ventajas de la asertividad
            ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-phone-alt
                  span Aumento de la creatividad. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Fomento de la solidaridad. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Manifestación de agrado, alegría. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Aumento de la productividad. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Actitud abierta al cambio. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Aceptación de la diferencia. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Ambiente laboral armonioso. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Autoestima alta. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Prevalencia de acciones de concertación, de consensos. 
                li.d-flex
                  i.fas.fa-phone-alt
                  span Proactividad, iniciativa.  

      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img16.png', alt='')
    p.mb-5 Para ganar asertividad se requiere de alcanzar los siguientes grados: 
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-4
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 1
            span Aprender del error, de la diferencia. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 2
            span Mirar el mundo con diferentes cristales. Ver las oportunidades en medio de las dificultades. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 3
            span Establecer prioridades. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 4
            span Tomar decisiones y asumir las consecuencias. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 5
            span Celebrar cada logro alcanzado.   
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img17.svg', alt='')

      .col-sm-12.col-lg-4
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 6
            span Realizar autoevaluación de los actos. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 7
            span Mantener una autoestima alta. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 8
            span No posponer los compromisos. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 9
            span No imponer acciones, ni opiniones. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 10
            span Buscar el crecimiento personal. 
          li.d-flex
            .lista-ol--cuadro__vineta.color-sistema-texto
              span 11
            span Tomar como ejes de vida la verdad y el amor.  



    Separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Escucha activa
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        .bg08.p-4.mb-4
          p.mb-0 Es uno de los elementos que hace parte fundamental para que se propicie un diálogo sensato y reflexivo, como son: un lenguaje adecuado, silencios oportunos y por supuesto una escucha atenta o activa.
        p.mb-0  La escucha activa demanda atención hacia el interlocutor, sensibilidad, concentración y conexión de corazón a corazón. Se puede afirmar que es la puerta que permite acceder a la realidad y vivencia del otro. Es todo un reto, en los afanes del mundo de hoy, tener paciencia para llevar a cabo una escucha activa, de esto dependerá que establezca una conexión duradera y empática con los interlocutores. 
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img18.png', alt='')
    
    p.mb-5 El proceso de comunicación no puede ser analizado si se pasa por alto el importantísimo papel que juega el acto de escuchar: 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Escuchar a los compañeros de trabajo, a clientes, amigos, a miembros de la familia, entre otros; debe convertirse en una prioridad de todos, ya que fomenta la convivencia armónica. En el mundo de hoy las organizaciones exitosas serán las que escuchen y respondan con mayor atención a las necesidades de los clientes. 

    .bgimg2.mb-3
      h4 Bloqueos en el proceso de escucha 
    p.mb-5  Existen acciones que entorpecen u obstaculizan el proceso de la escucha activa como: 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img20.png', alt='')
      .col-sm-12.col-lg-9
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--orange")
          .row(titulo="Atención dispersa")
            .col-sm-12.col-lg-12.pl-cus
              p.mb-0 No se alcanza a establecer una conexión real con el “otro” ya que no existe un interés verdadero por escuchar lo que expresa. 
          .row(titulo="Escucha selectiva")
            .col-sm-12.col-lg-12.pl-cus
              p.mb-0 La conexión con el otro es intermitente. Se atiende solo lo que llama la atención, es decir se producen vacíos en la comunicación, por tanto, el mensaje corre el riesgo de llegar distorsionado. 
          .row(titulo="Antipatía")
            .col-sm-12.col-lg-12.pl-cus
              p.mb-0 El emisor no alcanza a establecer contacto emocional con el receptor, por tanto, el mensaje se pierde debido a que el receptor rechaza la interrelación. 
          .row(titulo="Prejuicios")
            .col-sm-12.col-lg-12.pl-cus
              p.mb-0 Opiniones o críticas (consciente o inconsciente) que se hace del interlocutor sin tener suficientes fundamentos.  
          


    Separador
    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7 Protocolo y etiqueta empresarial
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img21.svg', alt='')
      .col-sm-12.col-lg-11.bg08.p-4.mb-0
        p.mb-0 Protocolo, es un término empleado para hacer referencia a las pautas y normativas legales que unido a las costumbres, formalizan las conmemoraciones de carácter oficial. 

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p Entonces para el protocolo empresarial, se entiende las normas y procedimientos que define la entidad para mediar en un ambiente de sana interacción y que asegura su imagen en el ámbito empresarial a través de la buena práctica, conquistando la fidelidad en los clientes. Podría decirse que se convierte en el único y efectivo antídoto contra la mala educación. 
        p.mb-0 Los cambios tecnológicos, permean el protocolo empresarial, hoy las empresas deben responder a las dinámicas de un mundo globalizado, de negocios digitales o virtuales, de nuevas formas de relacionarse (redes sociales, videoconferencias, correo electrónico) que implican incluir dentro de los procedimientos establecidos por la empresa, unos parámetros para garantizar el adecuado uso dentro de la organización de las tecnologías de la información y la comunicación. 
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img22.png', alt='')
    .fullview.p-4
      .row.justify-content-center.align-items-center.px-sm-0.px-lg-5.mb-0 
        .col-sm-12.col-lg-12.mb-0.bg05.p-sm-0.p-lg-5 
          SlyderA(tipo="b")
              .px-5.py-1
                .row.justify-content-center.mb-0
                  .col-sm-12.col-lg-8
                    h4.mb-4 Relaciones públicas
                    p.mb-0 Las relaciones públicas, son todas las estrategias que la empresa pone en marcha para proyectar la imagen de la entidad hacia el exterior y para las que se definen unos protocolos. Entre estas tácticas están: reuniones informativas, revista de prensa, buzón de sugerencias, pautas televisivas, páginas web, videoconferencias, entre otras. Todas estas ayudan a crear una memoria en la sociedad. Cada uno de los funcionarios se convierte en un embajador en el entorno comercial, es un portavoz de la misión, visión y políticas de la empresa. Gracias a ellas se fortalece la credibilidad, se abren mercados, se gestionan alianzas y convenios que permitan consolidar su naturaleza. 
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema2/img23.png', alt='')
              .px-5.py-1
                .row.justify-content-center.mb-0
                  .col-sm-12.col-lg-8
                    h4.mb-4 Protocolo de servicios
                    p.mb-4 Son todas aquellas acciones que establece la organización, para brindar una adecuada atención a los clientes; estas pautas le facilitan a la organización monitorear la interacción cliente-empresa. Para definir un estándar de servicios se debe tener en cuenta que: 
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-phone-alt
                        span La organización existe gracias al cliente. 
                      li.d-flex
                        i.fas.fa-phone-alt
                        span Deben cuidarse los detalles presentes en la atención. 
                      li.d-flex
                        i.fas.fa-phone-alt
                        span Se debe ser sincero en las condiciones del servicio que se ofrece. 
                      li.d-flex
                        i.fas.fa-phone-alt
                        span Hay que pensar más allá de lo que el cliente espera de la empresa. 
                      li.d-flex
                        i.fas.fa-phone-alt
                        span El trabajo en equipo y las acciones de mejora, son elementos de éxito para la organización.  

                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/tema2/img24.png', alt='')
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
