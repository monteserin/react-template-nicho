import Helmet from 'react-helmet';
import { H1, H2, H3, Bp, B, Section, AMZ, Iframe, Row, Col, AMZButton } from '../application/styled';
import sillita from '../assets/img/sliders/bebe-en-sillita.jpg';
import chiccoLondon from '../assets/img/products/chicco-london-silla-paseo.jpg';
import asalvo from '../assets/img/products/a-salvo-silla-paseo.jpg';
import chiccoEcho from '../assets/img/products/chicco-echo-silla-paseo.jpg';
import buggy from '../assets/img/products/buggy-cybex-silla-paseo.jpg';


export default () => (
  <>
    <Helmet>
      <title>Sillas de bebé</title>
    </Helmet>
    <H1 src={sillita}>Sillas de paseo para bebés</H1>
    <Section>
      <H2>Por qué necesitas una silla de paseo para bebe</H2>

      <p>Las sillitas de paseo suelen ser más ligeras y compactas que los carritos de bebé tradicionales.</p>

      <p>La silla de paseo para el nuevo miembro de la familia es un accesorio imprescindible por varias razones:</p>

      <Row>
        <Col>
          <p><Bp>Imprescindible al salir de casa</Bp>. Es muy práctica cuando estamos fuera de casa, ya que si dispone de varias posiciones de reclinado, los más pequeños pueden echarse una siesta después de la comida, ya sea en el mismo restaurante o paseando. Esto evita la necesidad de ir a casa o al hotel.</p>

          <p><Bp>Fomentan el desarrollo y la autonomía de los niños</Bp> porque cuando comienzan a caminar pueden subir y bajar por sí mismos. </p>
        </Col>
        <Col>

          <p><Bp>Larga vida útil</Bp>. Aunque a menudo pensamos que estos cochecitos sólo son apropiados para niños mayores, muchos de ellos se pueden utilizar desde que nacen. Una silla versatil nos será muy útil desde desde el nacimiento del niño hasta incluso pasados los 3 años. </p>

          <p><Bp>Ocupan poco espacio</Bp>. Las sillas de paseo, una vez plegadas, se pueden gualdar en casi cualquier sitio de la casa.</p>
        </Col>
      </Row>

      <Row>
        <Col><p>Probablemente las sillas de la marca Maclaren son las más famosas, sin embargo, existen otras opciones económicas. A continuación tienes tres buenas alternativas mucho más baratas:</p></Col>
      </Row>
    </Section>

    <Section>
      <H2>Las mejores sillas a bajo precio</H2>
      <p><B>Aunque estas sillas son bastante económicas, en su conjunto cumplen con las necesidades y requerimientos básicos que le podemos pedir a una sillita de paseo:</B></p>

      <Row>
        <Col>
          <AMZButton src={chiccoLondon} alt="Chicco de paseo London" href="https://www.amazon.es/dp/B01LYTFESY/ref=as_sl_pc_as_ss_li_til?tag=pablomonteser-21&linkCode=w00&linkId=a6ee5d936ec0f934e3c7c419cf91b45b&creativeASIN=B01LYTFESY" />
          <H3>Silla Chicco London</H3>
          <ul>
            <li>Tiene un peso máximo recomendado de 15 kilogramos.</li>
            <li>La edad recomendada de la sillita está entre 0 y 3 años.</li>
            <li>Dimensiones: 45 x 104 x 85 cm</li>
            <li>Dimensiones plegada: 45 x 106 x 29 cm</li>
            <li>Su peso es de 7.2 kg.</li>
            <li>Respaldo reclinable de 4 posiciones.</li>
            <li>Incluye funda para la lluvia, aunque no funda para guardar.</li>
          </ul>
        </Col>

        <Col>
          <AMZButton src={chiccoEcho} alt="Silla de paseo Chicco Echo" href="https://www.amazon.es/Chicco-New-Echo-ligera-compacta/dp/B07575QZPQ/ref=pd_lpo_75_t_2/261-9624922-9982353?_encoding=UTF8&pd_rd_i=B07575QZPQ&pd_rd_r=8cc3667d-f05a-4ee7-90f2-078f349623c6&pd_rd_w=1oGUc&pd_rd_wg=imGGj&pf_rd_p=4221015a-01c7-4a3d-a84d-985d938e9995&pf_rd_r=6R2Z2BK8AKXS7EQW1CVD&psc=1&refRID=6R2Z2BK8AKXS7EQW1CVD" />
          <H3>Silla Chicco Echo</H3>
          <ul>
            <ul>Tiene un peso máximo recomendado de 22 kilogramos.</ul>
            <ul>La edad recomendada de la sillita está entre 12 meses y 3 años.</ul>
            <li>Dimensiones: 47 x 108 x 82 cm</li>
            <li>Dimensiones plegada: 26 x 104 x 31 cm</li>
            <li>Su peso es de 7.6 kg.</li>
            <li>Respaldo reclinable de 4 posiciones.</li>
            <li>Es posible reclinarla más de 150º.</li>
            <li>No es reversible.</li>
            <li>Muy fácil de manejar. Colocar al niño en la silla, y ajustar el arnés o reclinar el asiento es muy sencillo.</li>
            <li>La limpieza es algo difícil, mejor usarla con funda.</li>
          </ul>

        </Col>


        <Col>
          <AMZButton src={asalvo} alt="Silla de paseo Asalvo" href="https://www.amazon.es/dp/B01ER97OHG/ref=as_sl_pc_as_ss_li_til?tag=pablomonteser-21&linkCode=w00&linkId=b58163ada283c20909576aeaf2355edb&creativeASIN=B01ER97OHG" />
          <H3>Silla ASALVO Trotter Plus</H3>
          <ul>
            <li>Tiene un peso máximo recomendado de 15 kilogramos.</li>
            <li>La edad recomendada de la sillita está entre 6 y 3 años.</li>
            <li>Dimensiones: 80x47x108 cm</li>
            <li>Dimensiones plegada: 60x60x10 cm</li>
            <li>Su peso es de 7.3 kg.</li>
            <li>Respaldo reclinable de 4 posiciones.</li>
            <li>Sentar al niño en la silla y ajustar el arnés es muy sencillo.</li>
            <li>No tiene asiento reversible.</li>
            <li>El plegado y apertura de la silla es muy sencillo</li>
            <li>Aunque las especificaciones recogen que es apta a partir de los 0 años, es algo incómoda para niños menores de 6 meses.</li>
            <li>Es muy barata</li>
            <li>El cesto es pequeño.</li>
            <li>Algo difícil de maniobrar en superficies irregulares y pavimento</li>
          </ul>
        </Col>



      </Row>

    </Section>

    <Section>
      <H2>En qué fijarse para comprar una silla de paseo</H2>
      <Row><Col>
        <p><Bp>En el manillar</Bp>. Los tienes dos tipos: <br />
                    De doble empuñadura.<br />
                    De barra. Ideales en el caso de que tengas que controlar la sillita con una sola mano.</p>

        <p><Bp>El asiento</Bp>. Es importante que sea reversible. De esta forma, el niño podrá sentarse tanto mirando a su cuidador como mirando en la dirección en la que le están llevando. Para niños menores de seis meses, el asiento debe poder reclinarse hasta los 150º. Del análisis, sólo el modelo Quinny Yezz no es reclinable.</p>

        <p><Bp>Ruedas</Bp>. Existen  modelos todoterreno pensados para campo y playa. De los modelos analizados, solo
son todoterreno los modelos Cybex,
Jané, Be Cool e Inglesina Sketch.</p>
      </Col><Col>


          <p><Bp>Cesta portaobjetos</Bp>. Es importante que
                    tenga buena capacidad y que sea accesible,
también con el respaldo de la silla reclinado</p>

          <p><Bp>Tamaño de la silla</Bp>.Lo normal es que la silla
                    abierta mida menos de 61 cm de ancho
                    para que sea fácil pasar por cualquier
                    puerta. Los modelos más estrechos miden
                    cerca de 45cm de ancho, como Joolz
                    Aer, Babyzen Yoyo 2 o Chicco Ohlalà 2,
                    la más compacta de nuestro análisis. Los
                    modelos que menos ocupan plegados son
Babyzen Yoyo 2 y Joolz Aer.</p>

        </Col>

      </Row>

    </Section>

    <Section>
      <H2>Peso soportado por la silla</H2>

      <p>No hay problema cuando el niño pesa
      menos de 15kg, pero si el niño pesa más,
      tendrá que buscar un modelo concreto.
      En los modelos con asiento reversible,
      compruebe el peso máximo admitido
      al colocar el asiento a contramarcha,
      que suele ser inferior a 15 kg. Asegúrese
      también de que la silla cumple la norma
de seguridad EN1888.</p>

      <p>En el uso diario, evite colgar bolsas
      pesadas en el manillar, ya que la silla
      podría volcar. Compruebe que los frenos
      funcionan bien para el peso del niño.
      Todas las sillas del análisis frenan bien,
      pero con el paso del tiempo conviene
asegurarse de que siguen así.</p>
    </Section>

    <Section>
      <H2>La mejor silla: Buggy Cybex Balios S Lux</H2>
      <Row>

        <Col>
          <ul>
            <li>Tiene un peso máximo recomendado de 2 kilogramos.</li>
            <li>La edad recomendada de la sillita está entre 0 y 3 años.</li>

            <li>Silla todo terreno</li>
            <li>Excelente apertura y plegado.</li>
            <li>Fácil de limpiar.</li>
            <li>Reversible</li>
            <li>Apta para bebés de menos de 6 meses.</li>
            <li>Lo malo: es algo voluminosa.</li>
            <li>Se reclina más de 150º.</li>
          </ul>
        </Col>
        <Col>
          <AMZButton src={buggy} alt="Silla de paseo Buggy Cybex" href="https://www.amazon.es/dp/B082BL1QC1/ref=as_sl_pc_as_ss_li_til?tag=pablomonteser-21&linkCode=w00&linkId=15a9828ad3e345c21c3a46576acd3b67&creativeASIN=B082BL1QC1" />

        </Col>

      </Row>

    </Section>
  </ >

);