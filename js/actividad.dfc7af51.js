(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"055a":function(e,t,a){e.exports=a.p+"img/2.5ca71436.png"},"1cf4":function(e,t,a){},"212d":function(e,t,a){"use strict";a("1cf4")},"25c1":function(e,t,a){e.exports=a.p+"img/4.6ac337b7.png"},"27ba":function(e,t,a){},3126:function(e,t,a){"use strict";a("ec46")},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled,respuestas:e.respuestas},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],n=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4"},[t("strong",{domProps:{innerHTML:e._s(e.pregunta.texto)}})]),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-5"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col",domProps:{innerHTML:e._s(a.texto)}})])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),c=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("8f8a"),a("2877")),p=Object(l["a"])(u,n,c,!1,null,"3fad6faa",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.rtas.correctas!==e.preguntasCount&&e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Volver a intentarlo")])]):e.rtas.correctas===e.preguntasCount?t("div",{staticClass:"py-4"}):9===e.respuestasLength?t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Verificar")]),t("i",{staticClass:"fas fa-arrow-right"})]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],C={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"},rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e}}},h=C,v=(a("212d"),Object(l["a"])(h,b,g,!1,null,"71aa3d6e",null)),f=v.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},_=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},y=j,A=(a("4d40"),Object(l["a"])(y,x,_,!1,null,"360ec089",null)),S=A.exports,I={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:f,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},R=I,L=(a("3126"),Object(l["a"])(R,o,i,!1,null,"e84807d4",null)),w=L.exports,D={name:"ActividadDidactica",components:{Actividad:w},data:()=>({cuestionario:{tema:"Derechos de autor y métodos de impresión",titulo:"Cuestionario",introduccion:"<b> Objetivo:</b> Identificar los derechos de autor, licencias Creative Commons, métodos de impresión, tipos de encuadernación y normativas relacionadas con la publicación de historietas.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Qué tipo de derechos se relacionan con los beneficios económicos derivados de la utilización de una obra?",imagen:a("46d4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Derechos patrimoniales.",esCorrecta:!0},{id:"b",texto:"Derechos morales.",esCorrecta:!1},{id:"c",texto:"Creative Commons.",esCorrecta:!1},{id:"d",texto:"Derechos de reproducción.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Qué tipo de impresión es más adecuada para grandes tirajes y costos más bajos por unidad?",imagen:a("055a"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Impresión digital.",esCorrecta:!1},{id:"b",texto:"Impresión litográfica.",esCorrecta:!0},{id:"c",texto:"Impresión sublimada.",esCorrecta:!1},{id:"d",texto:"Impresión por tampografía.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Cuál es una ventaja importante de la impresión digital?",imagen:a("875f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Genera residuos químicos.",esCorrecta:!1},{id:"b",texto:"El material está disponible de inmediato.",esCorrecta:!0},{id:"c",texto:"Es más costosa.",esCorrecta:!1},{id:"d",texto:"Requiere preimpresión con planchas.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué tipo de encuadernación es comúnmente usada en novelas gráficas cortas?",imagen:a("25c1"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Encuadernación con tapa dura.",esCorrecta:!1},{id:"b",texto:"Encuadernación rústica.",esCorrecta:!1},{id:"c",texto:"Encuadernación en <i>wire-o.</i>",esCorrecta:!0},{id:"d",texto:"Encuadernación artesanal.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Cuál es el registro internacional para identificar publicaciones seriadas?",imagen:a("46d4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"ISBN.",esCorrecta:!1},{id:"b",texto:"ISSN.",esCorrecta:!0},{id:"c",texto:"Creative Commons.",esCorrecta:!1},{id:"d",texto:"Derechos patrimoniales.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Qué tipo de licencias permiten compartir obras con ciertos derechos reservados?",imagen:a("055a"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Derechos patrimoniales.",esCorrecta:!1},{id:"b",texto:"Derechos morales.",esCorrecta:!1},{id:"c",texto:"Creative Commons.",esCorrecta:!0},{id:"d",texto:"Derechos de reproducción.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué se recomienda utilizar para proyectos con gráficos limpios y de alta calidad?",imagen:a("875f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Impresión en negro y un color adicional.",esCorrecta:!1},{id:"b",texto:"Impresión a policromía.",esCorrecta:!1},{id:"c",texto:"Impresión con <i>hot stamping.</i>",esCorrecta:!0},{id:"d",texto:"Impresión lenticular.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"Las leyes colombianas protegen las ideas y los métodos mediante el derecho de autor.",imagen:a("25c1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Falso",esCorrecta:!0},{id:"b",texto:"Verdadero",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"La encuadernación artesanal es generalmente más económica que otros tipos de encuadernación.",imagen:a("46d4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Falso",esCorrecta:!0},{id:"b",texto:"Verdadero",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"Las historietas no están protegidas por los derechos de autor según las leyes colombianas.",imagen:a("055a"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Falso",esCorrecta:!0},{id:"b",texto:"Verdadero",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},M=D,H=Object(l["a"])(M,s,r,!1,null,null,null);t["default"]=H.exports},"46d4":function(e,t,a){e.exports=a.p+"img/1.72949fbc.png"},"4d40":function(e,t,a){"use strict";a("27ba")},5291:function(e,t,a){},"875f":function(e,t,a){e.exports=a.p+"img/3.30a9fffe.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},"8f8a":function(e,t,a){"use strict";a("5291")},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},ec46:function(e,t,a){}}]);
//# sourceMappingURL=actividad.dfc7af51.js.map