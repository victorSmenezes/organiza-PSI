import React from 'react'
import { Container, ContainerContent, ContainerContentButton, ContainerForWhoIs, ContainerTexts, ContainerWhatIs, ContainerWhatYouFound, ContainerWhyYouNeedof, MainSection, Text, TextWhatIs, TextWhatYouFound, Title } from './styles'
import psiAmanda from '../../assets/psi-amanda.jpg'
import notebook from '../../assets/notebook.jpg'
import amandaWbooks from '../../assets/amanda-w-books.jpg'
import { Button } from '../../components/Button'

const Home = () => {
  return (
    <>
      <MainSection>
        <Container>
          <Title size='36px' $textOrientation='center'>Psi, você sente que a falta de organização está afetando sua clínica?</Title>
          <ContainerTexts>
            <div>
              <Text size='26px' $sizeMobile='26px'>Se você:</Text>
              <Text size='20px' $widthText='80%'>✅ Não sabe exatamente quanto ganha e gasta com a clínica.</Text>
              <Text size='20px' $widthText='80%'>✅ Cobra valores baseados apenas no que outras pessoas fazem, sem considerar seus custos.</Text>
              <Text size='20px' $widthText='80%'>✅ Não consegue se organizar para crescer, investir em formações ou até tirar férias sem medo.</Text>
              <Text size='20px' $widthText='80%'>✅ Sente que sua falta de planejamento prejudica sua percepção de profissionalismo... </Text>
            </div>
            <div>
              <h2>A boa notícia é que você não precisa investir rios de dinheiro em sistemas complexos de gestão. O básico funciona e é mais do que suficiente para transformar sua prática</h2>
            </div>
          </ContainerTexts>

          <Title size='34px' $textOrientation='center' $sizeMobile='18px'>Então o <span>ORGANIZA PSI - Sua Clínica em Ordem</span> é exatamente o que você precisa para transformar sua clínica!</Title>
          <Text size='22px' $textOrientation='center' $sizeMobile='16px'>O Combo de Materiais que será uma verdadeira mão na roda na sua prática clínica!</Text>
        </Container>
      </MainSection>

      <MainSection $isZebraActive>
        <Container>
          <Title size='34px' $isZebraActive $textOrientation='center'>O que é o ORGANIZA PSI?</Title>
          <ContainerWhatIs>
            <div>
              <img src={notebook} alt='foto-notebook' />
            </div>

            <div>
              <TextWhatIs size='26px' $isZebraActive $sizeMobile='20px'>Um combo completo de <span>materiais práticos e ensinamentos </span>
                para ajudar psicólogas como você a colocar seu consultório em ordem, organizar finanças e processos,
                e finalmente demonstrar profissionalismo para os pacientes.
              </TextWhatIs>
            </div>
          </ContainerWhatIs>
          <Text size='28px' $isZebraActive $textOrientation='center' $sizeMobile='20px'>Psicólogos eficientes mantêm uma <span>clínica organizada!</span></Text>
        </Container>
      </MainSection>

      <MainSection>
        <Container>
          <Title size='34px' $textOrientation='center'>O que você vai encontrar no ORGANIZA PSI?</Title>
          <ContainerWhatYouFound>
            <div>
              <TextWhatYouFound size='22px' $TextUp>✔️ Planilha de precificação de sessão:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Calcule o valor da sua sessão com base nas suas necessidades.
                Aprenda de uma vez quanto custa um paciente para a sua clínica e quanto precisa cobrar!
                Essa planilha é fundamental para garantir que você esteja cobrando o que realmente vale,
                levando em conta todos os custos envolvidos no funcionamento da sua clínica.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Planilha de previsão de faturamento:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Saiba exatamente quanto sua clínica vai faturar no mês,
                com base na quantidade de pacientes e valores de cada sessão.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Planilha de entradas e saídas mensais:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Registre seus ganhos e custos (supervisão, impostos, cursos, etc.) e veja o saldo do mês.
                No final do ano, acompanhe o desempenho completo com um balancete anual e gráficos que mostram sua evolução.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Modelos de contrato terapêutico:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Estabeleça regras claras com seus pacientes e ganhe mais segurança para organizar sua agenda e manter limites profissionais.</TextWhatYouFound>
            </div>

            <div>
              <TextWhatYouFound size='22px' $TextUp>✔️ Passo a passo para organizar sua clínica:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Aprenda os princípios básicos para estruturar seu consultório, precificar suas sessões corretamente e criar um planejamento que funcione.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Modelo de formulário de anamnese pré-cadastro:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Inclui questionário pré-sessão e cadastro de pacientes, tornando o processo mais eficiente.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Modelo de anamnese completa:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Facilite a coleta de informações importantes sobre seus pacientes para um acompanhamento mais efetivo.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Modelo no Canva de Guia Boas-Vindas à Terapia:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Um manual que apresenta aos pacientes o que esperar da terapia, ajudando a criar um ambiente acolhedor.</TextWhatYouFound>

              <TextWhatYouFound size='22px' $TextUp>✔️ Modelo de evolução de sessão:</TextWhatYouFound>
              <TextWhatYouFound size='20px' $textOrientation='justify'>Registre o progresso dos seus pacientes de maneira organizada e visual, facilitando a análise do tratamento.</TextWhatYouFound>
            </div>
          </ContainerWhatYouFound>
        </Container>
      </MainSection>

      <MainSection $isZebraActive>
        <Container>
          <Title size='34px' $isZebraActive $textOrientation='center'>Por que você precisa do ORGANIZA PSI?</Title>

          <ContainerWhyYouNeedof>
            <div>
              <Text $isZebraActive size='22px' $textOrientation='justify'>💡 <span>Profissionalismo atrai mais pacientes:</span> Um consultório organizado e bem precificado transmite seriedade e aumenta a percepção de valor do seu trabalho.</Text>
              <Text $isZebraActive size='22px' $textOrientation='justify'>💡 <span>Organização reduz o estresse:</span> Saber exatamente quanto você ganha, gasta e planeja elimina a sensação de estar "perdida".</Text>
              <Text $isZebraActive size='22px' $textOrientation='justify'>💡 <span>Sustentabilidade a longo prazo:</span> Com suas finanças e processos em ordem, você pode crescer,
                investir em você mesma e até tirar férias sem preocupações financeiras.</Text>
              <Text $isZebraActive size='22px' $textOrientation='justify'>💡 <span>Segurança e autonomia:</span> Estabeleça regras e controle sobre sua clínica, definindo os limites que você e seus pacientes merecem.</Text>
            </div>

            <div>
              <img src={psiAmanda} alt='psi-amanda' />
            </div>
          </ContainerWhyYouNeedof>
        </Container>
      </MainSection>

      <MainSection>
        <Container>
          <Title size='34px' $textOrientation='center'>Para quem é o ORGANIZA PSI?</Title>
          <ContainerForWhoIs>
            <div>
              <img src={amandaWbooks} alt='psi-amanda' />
            </div>

            <div>
              <Text size='22px' $textOrientation='justify' $sizeMobile='20px'>🔸 Psicólogas recém-formadas que precisam dar os primeiros passos na gestão do consultório.</Text>
              <Text size='22px' $textOrientation='justify' $sizeMobile='20px'>🔸 Profissionais que já atuam, mas sentem que o amadorismo e a desorganização prejudicam o crescimento.</Text>
              <Text size='22px' $textOrientation='justify' $sizeMobile='20px'>🔸 Quem quer aumentar o valor das sessões, organizar a agenda e criar uma clínica sustentável e profissional.</Text>
            </div>

          </ContainerForWhoIs>
        </Container>
      </MainSection>

      <MainSection $isZebraActive>
        <Container>
          <Title size='34px' $isZebraActive $textOrientation='center'>Transforme sua clínica agora!</Title>

          <Text size='22px' $isZebraActive $textOrientation='center'><span>Invista na sua carreira sem precisar gastar muito!</span></Text>
          <Text size='22px' $textOrientation='center'>Por um preço especial, você terá acesso:</Text>
          <ContainerContent>
            <Text size='22px' $isZebraActive $textOrientation='center'>✅ Todo o conteúdo prático do ORGANIZA PSI</Text>
            <Text size='22px' $isZebraActive $textOrientation='center'>✅ Acesso imediato às planilhas, modelos e ensinamentos</Text>
            <Text size='22px' $isZebraActive $textOrientation='center'>✅ Suporte direto para tirar dúvidas no uso dos materiais</Text>
          </ContainerContent>

          <ContainerContentButton>
            <Text size='22px' $isZebraActive $textOrientation='center' $sizeMobile='20px'>Clique no botão abaixo e comece a organizar sua clínica hoje mesmo!</Text>
            <Button text={"QUERO MINHA CLÍNICA EM ORDEM!"} link="" />
          </ContainerContentButton>
        </Container>
      </MainSection>

    </>
  )
}

export default Home