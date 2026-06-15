/**
 * Crea los 3 artículos del blog en Sanity CMS.
 * Uso: SANITY_WRITE_TOKEN=... node scripts/seed-blog.mjs
 */

import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("❌  Falta SANITY_WRITE_TOKEN. Ver instrucciones en README.");
  process.exit(1);
}

const client = createClient({
  projectId: "jdls3x4j",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ── Helpers ────────────────────────────────────────────────────────────────

let keyIndex = 0;
const key = () => `k${++keyIndex}`;

function span(text, marks = []) {
  return { _type: "span", _key: key(), text, marks };
}

function block(style, children) {
  return { _type: "block", _key: key(), style, markDefs: [], children };
}

function h2(text) {
  return block("h2", [span(text)]);
}

function p(text) {
  return block("normal", [span(text)]);
}

async function uploadImage(filename) {
  const filePath = path.join(root, "public", "images", "blog", filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Imagen no encontrada: ${filePath}`);
    return null;
  }
  console.log(`  ↑ Subiendo imagen ${filename}…`);
  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename,
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

// ── Contenido de los posts ─────────────────────────────────────────────────

const posts = [
  {
    slug: "senales-aire-acondicionado-revision",
    imageFile: "blog-1.jpg",
    doc: {
      _type: "post",
      title: "Señales de que tu aire acondicionado necesita revisión",
      publishedAt: "2026-01-15T00:00:00Z",
      excerpt:
        "Si el A/C demora en enfriar, hace ruidos extraños o tiene mal olor, probablemente sea hora de una revisión antes de que el problema sea mayor.",
      category: "Aire acondicionado",
      body: [
        p("En Panamá, el aire acondicionado del auto no es un lujo: es casi una pieza de supervivencia diaria. Entre tranques, humedad, sol fuerte y recorridos constantes por la ciudad, un A/C en buen estado puede marcar la diferencia entre manejar cómodo o convertir cada viaje en una pequeña prueba de paciencia."),
        p("El problema es que muchas personas solo llevan el auto al taller cuando el aire acondicionado ya dejó de enfriar por completo. Pero antes de llegar a ese punto, el sistema suele dar señales. Algunas son sutiles; otras son imposibles de ignorar. Detectarlas a tiempo puede evitar daños mayores, reparaciones más costosas y molestias innecesarias."),
        h2("1. El aire tarda demasiado en enfriar"),
        p("Una de las señales más comunes es que el A/C todavía enfría, pero tarda mucho más que antes. Quizás antes encendías el auto y en pocos minutos la cabina ya estaba fresca. Ahora, en cambio, pasan diez o quince minutos y apenas sientes una leve mejora."),
        p("Esto puede deberse a varias causas: bajo nivel de gas refrigerante, filtros sucios, problemas en el compresor, fallas eléctricas o pérdida de eficiencia en algún componente del sistema. No siempre significa una reparación grave, pero sí indica que el sistema ya no está trabajando como debería."),
        p("Cuando el aire acondicionado empieza a perder rendimiento, lo ideal es revisarlo antes de que el daño avance. Es como escuchar un pequeño ruido en el motor: ignorarlo no lo hace desaparecer, solo le da tiempo para convertirse en algo más serio."),
        h2("2. Sale aire caliente o apenas fresco"),
        p("Si activas el A/C y el aire sale caliente, tibio o apenas fresco, el sistema necesita revisión. Esta es una señal clara de que algo está fallando."),
        p("Puede tratarse de una fuga de refrigerante, un compresor dañado, una válvula defectuosa, un problema eléctrico o una obstrucción interna. En estos casos, no conviene simplemente 'recargar gas' sin revisar el sistema completo. Si existe una fuga, el gas volverá a perderse y el problema regresará."),
        p("Una revisión adecuada debe buscar la causa, no solo tapar el síntoma. El aire acondicionado es un sistema cerrado: si pierde refrigerante, hay que encontrar por dónde y por qué."),
        h2("3. Hay mal olor al encender el A/C"),
        p("Si al encender el aire acondicionado aparece un olor desagradable, húmedo o parecido a moho, probablemente haya acumulación de bacterias, humedad o suciedad en el sistema de ventilación."),
        p("Esto es especialmente común en climas húmedos. El evaporador y los ductos pueden acumular humedad, y con el tiempo aparece ese olor incómodo que invade toda la cabina."),
        p("Además de ser molesto, puede afectar la calidad del aire que respiras dentro del vehículo. Una limpieza adecuada del sistema, cambio de filtro de cabina y revisión de drenajes puede mejorar notablemente la experiencia de manejo."),
        h2("4. Escuchas ruidos extraños al encenderlo"),
        p("El aire acondicionado debe funcionar de manera relativamente silenciosa. Si escuchas golpes, chillidos, vibraciones, zumbidos o sonidos metálicos al activarlo, algo necesita atención."),
        p("Los ruidos pueden venir del compresor, del abanico, de una correa, de rodamientos desgastados o de piezas flojas. A veces el sonido aparece solo cuando enciendes el A/C, lo cual ayuda a identificar que el problema está relacionado con ese sistema."),
        p("Ignorar un ruido puede terminar dañando otros componentes. Una pieza pequeña en mal estado puede forzar el funcionamiento de una más costosa."),
        h2("5. El flujo de aire es débil"),
        p("Otra señal frecuente es que el aire sí está frío, pero sale con poca fuerza. Esto puede deberse a un filtro de cabina sucio, problemas en el blower, ductos obstruidos o fallas en controles internos."),
        p("El filtro de cabina muchas veces se olvida, pero cumple una función importante: retiene polvo, partículas y suciedad antes de que entren al interior del vehículo. Cuando se satura, restringe el paso del aire y hace que el sistema trabaje con más esfuerzo."),
        p("Si sientes que tienes que subir la velocidad del ventilador al máximo para conseguir un resultado aceptable, conviene revisar el sistema."),
        h2("6. El A/C enfría por ratos y luego deja de enfriar"),
        p("Cuando el aire acondicionado funciona de manera intermitente, puede haber una falla eléctrica, sensores defectuosos, problemas de presión, recalentamiento del compresor o conexiones inestables."),
        p("Este tipo de falla puede ser frustrante porque a veces el sistema parece funcionar bien y luego, sin aviso, deja de hacerlo. Precisamente por eso es importante realizar un diagnóstico. No basta con mirar el auto por encima; hay que evaluar el comportamiento del sistema bajo distintas condiciones."),
        h2("7. Ves agua donde no debería haberla"),
        p("Es normal que el aire acondicionado genere condensación y que el auto bote agua por debajo cuando está estacionado. Pero si notas humedad dentro de la cabina, alfombras mojadas o goteo en zonas internas, puede haber un drenaje tapado o una filtración."),
        p("Esto debe revisarse rápido, porque la humedad dentro del vehículo puede generar malos olores, manchas y deterioro interior."),
        h2("Conclusión"),
        p("El aire acondicionado de tu auto habla antes de fallar por completo. Tarda en enfriar, huele mal, suena raro, pierde fuerza o funciona por momentos. Cada señal es una advertencia."),
        p("Revisarlo a tiempo puede evitar gastos mayores y devolverte la comodidad al manejar. En un clima como el de Panamá, un A/C en buen estado no es un detalle menor: es parte esencial del bienestar dentro del vehículo."),
        p("Si notas alguna de estas señales, agenda una revisión y evita esperar a que el sistema deje de funcionar por completo."),
      ],
    },
  },
  {
    slug: "cuando-diagnostico-computarizado",
    imageFile: "blog-2.jpg",
    doc: {
      _type: "post",
      title: "¿Cuándo llevar tu auto a diagnóstico computarizado?",
      publishedAt: "2026-02-03T00:00:00Z",
      excerpt:
        "El check engine encendido no siempre significa un gasto enorme. Un diagnóstico a tiempo puede ahorrarte mucho dinero y evitar daños mayores.",
      category: "Mecánica",
      body: [
        p("Los autos modernos son como pequeños cerebros sobre ruedas. Tienen sensores, módulos, computadoras internas y sistemas electrónicos que monitorean constantemente el funcionamiento del motor, la transmisión, las emisiones, el sistema eléctrico y otros componentes importantes."),
        p("Por eso, cuando algo no anda bien, el vehículo muchas veces lo sabe antes que el conductor. La pregunta es: ¿cuándo conviene llevarlo a un diagnóstico computarizado?"),
        p("La respuesta corta es: cuando el auto empieza a comportarse diferente, cuando aparece una luz en el tablero o cuando quieres prevenir daños mayores antes de que se conviertan en reparaciones costosas."),
        h2("1. Cuando se enciende el 'check engine'"),
        p("La señal más conocida es la luz de 'check engine'. Muchas personas se asustan al verla, pero no siempre significa que el auto tiene una falla grave. Puede ser algo sencillo, como una tapa de combustible mal cerrada, o algo más serio, como un sensor defectuoso, una falla de combustión o un problema en el sistema de emisiones."),
        p("El error más común es ignorarla durante semanas. El auto puede seguir caminando, sí, pero eso no significa que esté bien. Algunas fallas pequeñas, si no se atienden, pueden afectar el rendimiento del motor, aumentar el consumo de combustible o dañar componentes más caros."),
        p("El diagnóstico computarizado permite leer los códigos de error registrados por el vehículo y orientar la revisión técnica. No reemplaza la experiencia del mecánico, pero funciona como una brújula: señala dónde empezar a buscar."),
        h2("2. Cuando el carro pierde fuerza"),
        p("Si notas que el auto ya no responde igual al acelerar, le cuesta subir pendientes o se siente 'pesado', conviene revisarlo. La pérdida de potencia puede venir de muchas fuentes: sensores, bujías, bobinas, inyectores, cuerpo de aceleración, sistema de admisión, transmisión o incluso problemas de combustible."),
        p("Sin diagnóstico, cambiar piezas al azar es como buscar una llave en una habitación oscura. A veces se acierta, pero muchas veces se gasta más de lo necesario. Un diagnóstico adecuado ayuda a identificar la causa con mayor precisión."),
        h2("3. Cuando consume más combustible de lo normal"),
        p("Un aumento repentino en el consumo de gasolina puede indicar que algo no está funcionando bien. Puede haber sensores enviando lecturas incorrectas, mezcla de combustible desajustada, filtros sucios, problemas de oxígeno, fallas en inyectores o mantenimiento atrasado."),
        p("A veces el conductor se acostumbra al gasto extra y no lo nota hasta que el bolsillo empieza a quejarse. Pero el auto también habla a través del consumo. Si antes llenabas el tanque y rendía más, y ahora se acaba más rápido haciendo los mismos recorridos, vale la pena revisarlo."),
        h2("4. Cuando el motor tiembla o trabaja irregular"),
        p("Si el motor vibra más de lo normal, se siente inestable en ralentí, se apaga al detenerte o tiene jalones al acelerar, el diagnóstico computarizado puede ayudar a detectar fallas de encendido, sensores defectuosos o problemas en la combustión."),
        p("Estos síntomas no deben ignorarse. Un motor que trabaja irregular puede generar daño adicional en catalizadores, soportes, transmisión y otros componentes. Lo que empieza como una vibración puede convertirse en una cadena de problemas."),
        h2("5. Antes de un viaje largo"),
        p("No hay peor momento para descubrir una falla que en carretera. Antes de un viaje largo, especialmente si vas a salir de la ciudad, es buena idea hacer una revisión general y, si el vehículo presenta alguna luz o comportamiento extraño, un diagnóstico computarizado."),
        p("Esto permite detectar posibles errores almacenados, revisar parámetros importantes y conducir con mayor tranquilidad. La prevención siempre es más barata que una grúa, una emergencia o una reparación improvisada fuera de la ciudad."),
        h2("6. Cuando compras un auto usado"),
        p("Aunque el auto se vea bien por fuera y maneje aparentemente normal, un diagnóstico computarizado puede revelar errores almacenados o sistemas que requieren atención."),
        p("No es una garantía absoluta de que el vehículo esté perfecto, pero sí ofrece información valiosa antes de tomar una decisión. Comprar un auto usado sin revisar es como comprar una casa sin mirar las bases: puede verse bonita, pero lo importante está debajo."),
        h2("7. Cuando aparecen luces en el tablero"),
        p("Además del check engine, hay otras luces que merecen atención: ABS, batería, aceite, temperatura, airbag, control de tracción o advertencias de transmisión. Cada una apunta a un sistema diferente."),
        p("Algunas luces permiten seguir manejando por un tiempo; otras requieren detenerse de inmediato. Lo importante es no adivinar. Revisar el sistema permite saber si estás ante algo menor o ante una advertencia crítica."),
        h2("8. Cuando ya cambiaste una pieza y el problema sigue"),
        p("A veces el auto llega al taller después de varios intentos fallidos: se cambió una pieza, luego otra, pero el síntoma continúa. En estos casos, un diagnóstico ordenado puede ahorrar dinero y frustración."),
        p("El objetivo no es cambiar por cambiar, sino confirmar. Un buen diagnóstico combina lectura computarizada, inspección visual, pruebas mecánicas y experiencia técnica."),
        h2("Conclusión"),
        p("Llevar el auto a diagnóstico computarizado no significa que necesariamente tendrás una reparación costosa. Al contrario: muchas veces es la forma más inteligente de evitar gastos mayores."),
        p("El diagnóstico es una conversación con la computadora del vehículo. Escucharla a tiempo permite actuar con claridad, cuidar el motor y tomar mejores decisiones."),
        p("Si tu auto encendió una luz, perdió fuerza, consume más gasolina, vibra, falla al acelerar o simplemente quieres revisar antes de un viaje, agenda un diagnóstico. Un problema detectado temprano casi siempre es más fácil y económico de resolver."),
      ],
    },
  },
  {
    slug: "que-revisar-antes-pintar-vehiculo",
    imageFile: "blog-3.jpg",
    doc: {
      _type: "post",
      title: "Qué revisar antes de pintar tu vehículo",
      publishedAt: "2026-03-10T00:00:00Z",
      excerpt:
        "Una buena preparación define el resultado final de la pintura. Te explicamos qué evaluamos antes de empezar cualquier trabajo de pintura o chapistería.",
      category: "Pintura y chapistería",
      body: [
        p("Pintar un vehículo no es simplemente aplicar color sobre metal. Una buena pintura empieza mucho antes de la pistola, la cabina o el brillo final. Empieza en la evaluación, en la preparación y en la corrección de detalles que muchas veces no se ven a primera vista."),
        p("Cuando un auto se pinta sin revisar bien la superficie, el resultado puede verse bien por unos días, pero luego aparecen problemas: diferencias de tono, textura irregular, burbujas, marcas, pintura levantada o acabados que no duran. Por eso, antes de pintar un vehículo, hay que mirar con paciencia y criterio."),
        p("La pintura es la piel del auto. Pero como toda piel, revela lo que ocurre debajo."),
        h2("1. Estado general de la carrocería"),
        p("Lo primero que se revisa es la condición de la carrocería. Hay que observar golpes, abolladuras, rayones profundos, reparaciones anteriores, piezas descuadradas o zonas con ondulaciones."),
        p("A simple vista, un panel puede parecer listo para pintar, pero con buena iluminación se pueden detectar imperfecciones que afectarían el acabado final. La pintura no oculta defectos importantes; muchas veces los resalta. Una superficie mal preparada es como una pared mal repellada: por más bonito que sea el color, la imperfección seguirá allí."),
        h2("2. Presencia de óxido"),
        p("El óxido es uno de los enemigos más serios antes de pintar. Si se pinta encima del óxido sin tratarlo, el problema volverá. Puede aparecer como manchas, burbujas o áreas débiles en la lata."),
        p("Antes de cualquier trabajo de pintura, hay que identificar si existe corrosión, qué tan profunda es y cómo debe tratarse. En algunos casos basta con limpiar, lijar y aplicar productos adecuados. En otros, puede ser necesario reparar o reemplazar la sección afectada."),
        p("Ignorar el óxido es pintar sobre una deuda pendiente. Tarde o temprano, cobra intereses."),
        h2("3. Reparaciones anteriores"),
        p("Muchos vehículos ya han pasado por trabajos de chapistería o pintura. Eso no es necesariamente malo, pero hay que revisarlo. Una reparación anterior puede tener exceso de masilla, mala nivelación, diferencias de tono o pintura mal adherida."),
        p("Antes de repintar, se debe evaluar si esa base sirve o si necesita corrección. Pintar sobre una mala reparación puede comprometer todo el trabajo nuevo."),
        p("Un buen acabado depende de la calidad de lo que hay debajo. La pintura final es la última página de una historia que empezó con la preparación."),
        h2("4. Rayones y profundidad del daño"),
        p("No todos los rayones requieren pintura completa. Algunos pueden mejorar con pulimiento; otros atraviesan la capa transparente y llegan a la base de color o incluso al metal."),
        p("Por eso es importante evaluar la profundidad. Si el rayón es superficial, puede tratarse de una manera. Si es profundo, probablemente necesite preparación, base y pintura. Hacer esta distinción evita trabajos innecesarios y permite cotizar mejor."),
        h2("5. Alineación de piezas y espacios"),
        p("Antes de pintar, también conviene revisar si las piezas están bien alineadas: puertas, capó, bumper, guardafangos, baúl y molduras. Si una pieza está descuadrada, el resultado final puede verse extraño aunque la pintura esté impecable."),
        p("En trabajos de chapistería, la alineación es clave. Un buen color no compensa una puerta mal ajustada o un bumper fuera de lugar. La estética del auto depende tanto del acabado como de las líneas de la carrocería."),
        h2("6. Condición de bumpers y piezas plásticas"),
        p("Los bumpers, molduras y piezas plásticas requieren atención especial. No se comportan igual que el metal. Necesitan preparación adecuada, limpieza, lijado correcto y productos compatibles para que la pintura se adhiera bien."),
        p("Si no se prepara correctamente una pieza plástica, la pintura puede pelarse, cuartearse o perder adherencia. Por eso, antes de pintar, se debe identificar el material y el estado de cada pieza."),
        h2("7. Diferencia de color con piezas existentes"),
        p("Cuando se pinta solo una parte del vehículo, hay que tomar en cuenta el color actual del auto. Con el tiempo, el sol, la lluvia y el uso pueden cambiar ligeramente el tono original. Esto es especialmente importante en Panamá, donde el clima castiga la pintura constantemente."),
        p("Por eso, igualar color no siempre significa usar únicamente el código de fábrica. A veces hay que ajustar el tono para que se mezcle mejor con las piezas existentes. El objetivo es que la reparación no parezca un parche."),
        h2("8. Limpieza y contaminación de la superficie"),
        p("Antes de pintar, la superficie debe estar libre de grasa, polvo, silicona, residuos, cera o contaminantes. Cualquier impureza puede afectar la adherencia o generar defectos en el acabado."),
        p("Una pintura profesional requiere limpieza rigurosa. El brillo final depende, en parte, de lo invisible: una superficie correctamente preparada."),
        h2("9. Tipo de trabajo requerido"),
        p("No todos los casos necesitan el mismo proceso. Puede ser un retoque, pintura de pieza, pintura general, reparación de chapistería, pulimiento o combinación de varios trabajos."),
        p("Por eso es importante evaluar el vehículo antes de cotizar de manera definitiva. Una foto ayuda, pero muchas veces la revisión presencial permite ver detalles que la cámara no muestra: textura, profundidad, nivelación, óxido, diferencias de tono o daños ocultos."),
        h2("Conclusión"),
        p("Antes de pintar un vehículo, hay que revisar más que el color. Hay que evaluar carrocería, óxido, golpes, reparaciones anteriores, rayones, piezas plásticas, alineación y estado general de la superficie."),
        p("Una buena pintura no empieza con el brillo; empieza con la preparación. El acabado final es apenas la parte visible de un proceso que exige paciencia, técnica y criterio."),
        p("Si estás pensando en pintar tu vehículo o reparar una pieza, lo mejor es hacer una evaluación previa. Así sabrás qué necesita realmente el auto y podrás tomar una mejor decisión antes de iniciar el trabajo."),
      ],
    },
  },
];

// ── Ejecución ──────────────────────────────────────────────────────────────

async function main() {
  console.log("🚗  Gálvez Car Services — Seed Blog\n");

  for (const post of posts) {
    console.log(`📝  Creando: ${post.doc.title}`);

    // Subir imagen
    const image = await uploadImage(post.imageFile);

    // Construir documento final
    const document = {
      ...post.doc,
      slug: { _type: "slug", current: post.slug },
      ...(image ? { image } : {}),
    };

    // Verificar si ya existe
    const existing = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: post.slug }
    );

    if (existing) {
      console.log(`  ⚠️  Ya existe (ID: ${existing}). Actualizando…`);
      await client.patch(existing).set(document).commit();
    } else {
      const result = await client.create(document);
      console.log(`  ✅  Creado (ID: ${result._id})`);
    }
  }

  console.log("\n✅  Blog cargado en Sanity correctamente.");
}

main().catch((err) => {
  console.error("❌  Error:", err.message);
  process.exit(1);
});
