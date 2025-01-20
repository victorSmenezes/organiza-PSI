import React from 'react'
import { Container, ContainerTexts, ContainerWhatIs, ContainerWhatYouFound, MainSection, Text, TextWhatIs, Title } from './styles'

const Home = () => {
  return (
    <>
      <MainSection>
        <Container>
          <Title size='36px'>Psi, você sente que a falta de organização está afetando sua clínica?</Title>
          <ContainerTexts>
            <div>
              <Text size='26px'>Se você:</Text>
              <Text size='20px' widthText='80%' >✅ Não sabe exatamente quanto ganha e gasta com a clínica.</Text>
              <Text size='20px' widthText='80%'>✅ Cobra valores baseados apenas no que outras pessoas fazem, sem considerar seus custos.</Text>
              <Text size='20px' widthText='80%'>✅ Não consegue se organizar para crescer, investir em formações ou até tirar férias sem medo.</Text>
              <Text size='20px' widthText='80%'>✅ Sente que sua falta de planejamento prejudica sua percepção de profissionalismo... </Text>
            </div>
            <div>
              <h2>A boa notícia é que você não precisa investir rios de dinheiro em sistemas complexos de gestão. O básico funciona e é mais do que suficiente para transformar sua prática</h2>
            </div>
          </ContainerTexts>

          <Title size='34px'>Então o <span>ORGANIZA PSI</span> Sua Clínica em Ordem é exatamente o que você precisa para transformar sua clínica!</Title>
          <Text size='22px' textOrientation='center'>O Combo de Materiais que será uma verdadeira mão na roda na sua prática clínica!</Text>

        </Container>
      </MainSection>

      <MainSection isZebraActive>
        <Container>
          <ContainerWhatIs>
            <Title size='34px' isZebraActive textOrientation='center'>O que é o ORGANIZA PSI?</Title>

            <TextWhatIs size='26px' isZebraActive>Um combo completo de <span>materiais práticos e ensinamentos </span>
              para ajudar psicólogas como você a colocar seu consultório em ordem, organizar finanças e processos,
              e finalmente demonstrar profissionalismo para os pacientes.
            </TextWhatIs>
            <Text size='28px' isZebraActive textOrientation='center'>Psicólogos eficientes mantêm uma <span>clínica organizada!</span></Text>
          </ContainerWhatIs>
        </Container>
      </MainSection>

      <MainSection>
        <Container>
          <Title size='34px' textOrientation='center'>O que você vai encontrar no ORGANIZA PSI?</Title>
          <ContainerWhatYouFound>
            <Text size='20px' textOrientation='justify'>✔️ Planilha de previsão de faturamento<br></br>
              Saiba exatamente quanto sua clínica vai faturar no mês, com base na quantidade de pacientes e valores de cada sessão.</Text>

            <Text size='20px' textOrientation='justify'>✔️ Planilha de entradas e saídas mensais -
              Registre seus ganhos e custos (supervisão, impostos, cursos, etc.) e veja o saldo do mês. No final do ano, acompanhe o desempenho completo com um balancete anual e gráficos que mostram sua evolução.</Text>

            <Text size='20px' textOrientation='start'>✔️ Modelos de contrato terapêutico</Text>
            <Text size='20px' textOrientation='justify'>Estabeleça regras claras com seus pacientes e ganhe mais segurança para organizar sua agenda e manter limites profissionais.</Text>

            <Text size='20px' textOrientation='start'>✔️ Passo a passo para organizar sua clínica</Text>
            <Text size='20px' textOrientation='justify'>Aprenda os princípios básicos para estruturar seu consultório, precificar suas sessões corretamente e criar um planejamento que funcione.</Text>

            ✔️ **Modelo de formulário de anamnese pré-cadastro**
            Inclui questionário pré-sessão e cadastro de pacientes, tornando o processo mais eficiente.
            ✔️ **Modelo de anamnese completa**
            Facilite a coleta de informações importantes sobre seus pacientes para um acompanhamento mais efetivo.
            ✔️ **Modelo no Canva de Guia Boas-Vindas à Terapia**
            Um manual que apresenta aos pacientes o que esperar da terapia, ajudando a criar um ambiente acolhedor.
            ✔️ **Modelo de evolução de sessão**
            Registre o progresso dos seus pacientes de maneira organizada e visual, facilitando a análise do tratamento.

          </ContainerWhatYouFound>
        </Container>
      </MainSection>

      <MainSection isZebraActive>
        <Container>
          Por que você precisa do ORGANIZA PSI?

          💡 Profissionalismo atrai mais pacientes: Um consultório organizado transmite seriedade e aumenta a percepção de valor do seu trabalho.
          💡 Organização reduz o estresse: Saber exatamente quanto você ganha, gasta e planeja elimina a sensação de estar "&perdida".
          💡 Sustentabilidade a longo prazo: Com suas finanças e processos em ordem, você pode crescer, investir em você mesma e até tirar férias sem preocupações financeiras.
          💡 Segurança e autonomia: Estabeleça regras e controle sobre sua clínica, definindo os limites que você e seus pacientes merecem.

        </Container>
      </MainSection>

      <MainSection>
        <Container>
          Para quem é o ORGANIZA PSI?

          🔸 Psicólogas recém-formadas que precisam dar os primeiros passos na gestão do consultório.
          🔸 Profissionais que já atuam, mas sentem que o amadorismo e a desorganização prejudicam o crescimento.
          🔸 Quem quer aumentar o valor das sessões, organizar a agenda e criar uma clínica sustentável e profissional.
        </Container>
      </MainSection>

      <MainSection isZebraActive>
        <Container>
          Transforme sua clínica agora!

          invista na sua carreira sem precisar gastar muito!** Por um preço especial, você terá acesso:

          ✅ Todo o conteúdo prático do ORGANIZA PSI
          ✅ Acesso imediato às planilhas, modelos e ensinamentos
          Suporte direto para tirar dúvidas no uso dos materiais
          Clique no botão abaixo e comece a organizar sua clínica hoje mesmo!
          [QUERO MINHA CLÍNICA EM ORDEM!]
        </Container>
      </MainSection>

    </>
  )
}

export default Home