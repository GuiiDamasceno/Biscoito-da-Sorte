const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const img1 = document.querySelector('#img1')
const frase = document.querySelector('#frase')
const btnSorte = document.querySelector('#btnSorte')

const frasesDoBiscoito = [
    "Acredite em si mesmo e conquiste o impossível.",
    "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "Aprenda com o passado, viva o presente e sonhe com o futuro.",
    "A vida é curta, aproveite cada momento.",
    "A sorte favorece os corajosos.",
    "Acredite nos seus sonhos e lute por eles.",
    "O sorriso é a chave para abrir todas as portas.",
    "A persistência é o caminho para o sucesso.",
    "Seja a mudança que você quer ver no mundo.",
    "O otimismo é a luz que ilumina os dias mais sombrios.",
    "A verdadeira riqueza está nos momentos compartilhados com aqueles que amamos.",
    "Você é mais forte do que imagina.",
    "Nunca é tarde demais para se reinventar.",
    "O amor é a resposta para todas as perguntas.",
    "A gratidão transforma pequenos momentos em grandes memórias.",
    "O melhor ainda está por vir.",
    "Acredite no poder dos seus sonhos e faça acontecer.",
    "A felicidade está nas coisas simples da vida.",
    "A vida é um presente precioso, abra-o todos os dias.",
    "A coragem é o primeiro passo em direção à vitória.",
    "O destino não é uma questão de sorte, mas de escolha.",
    "Um pequeno gesto de gentileza pode mudar o mundo.",
    "Não tenha medo de falhar, tenha medo de não tentar.",
    "O sucesso é construído com determinação e trabalho árduo.",
    "Acredite no poder do seu potencial ilimitado.",
    "Seja a luz que brilha nos momentos de escuridão.",
    "Aprenda a amar a jornada, não apenas o destino.",
    "Não importa quantas vezes você caia, levante-se sempre mais forte.",
    "O verdadeiro valor está na jornada, não no destino final.",
    "Não espere por oportunidades, crie-as.",
    "A paciência é a chave para alcançar grandes conquistas.",
    "Acredite em si mesmo e tudo se tornará possível.",
    "A vida é uma aventura, aproveite cada segundo dela.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Siga seus sonhos e não se arrependa de tentar.",
    "O mundo pertence àqueles que ousam sonhar e agir.",
    "Acredite no poder do amor e da bondade.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O verdadeiro poder está na sabedoria de aprender com os erros.",
    "Ame a si mesmo em primeiro lugar e o resto virá naturalmente.",
    "A imaginação é o ponto de partida para todas as grandes realizações.",
    "Seja gentil, pois todos estão enfrentando batalhas invisíveis.",
    "A humildade é a chave para o crescimento pessoal.",
    "Nunca deixe de acreditar na magia da vida.",
    "A vida é um espelho, sorria para ela e ela sorrirá de volta.",
    "A sabedoria está em ouvir o coração.",
    "Aproveite as pequenas coisas, pois um dia você pode olhar para trás e perceber que eram as coisas grandes.",
    "A esperança é o farol que ilumina os dias mais sombrios.",
    "Cada dia é uma nova oportunidade para ser feliz.",
    "A beleza está nos olhos de quem vê com o coração.",
    "Não deixe que o medo limite suas possibilidades.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é como uma bicicleta, você precisa se mover para manter o equilíbrio.",
    "Siga seu coração e ele te levará a lugares incríveis.",
    "Acredite na jornada e confie no processo.",
    "A gratidão transforma o suficiente em mais do que o necessário.",
    "Não importa o quão longe você vá, lembre-se sempre de onde veio.",
    "A alegria está em espalhar felicidade para os outros.",
    "A simplicidade é a chave para a verdadeira felicidade.",
    "O tempo é um presente valioso, use-o com sabedoria.",
    "Seja o tipo de pessoa que você gostaria de conhecer.",
    "Acredite em milagres, eles acontecem todos os dias.",
    "A maior jornada começa com um único passo.",
    "A honestidade é o melhor caminho para a paz interior.",
    "O amor é a linguagem universal que todos entendem.",
    "Aprecie as pequenas vitórias ao longo do caminho.",
    "A verdadeira beleza vem de dentro.",
    "Não importa o quão difícil seja, nunca desista.",
    "As melhores coisas da vida são gratuitas: amor, riso e abraços sinceros.",
    "O respeito é a base de todas as relações saudáveis.",
    "Sonhe grande e ouse falhar.",
    "A vida é cheia de surpresas maravilhosas, esteja aberto a elas.",
    "A coragem não é a ausência de medo, mas a determinação de seguir em frente apesar dele.",
    "A verdadeira felicidade está em ajudar os outros a serem felizes.",
    "Sorria, você é mais forte do que pensa.",
    "O amor é a força mais poderosa do universo.",
    "O passado não define o seu futuro, você define.",
    "Aprenda a apreciar a jornada tanto quanto o destino.",
    "Seja a mudança que você quer ver no mundo.",
    "A vida é uma aventura esperando para ser explorada.",
    "Acredite em si mesmo e o mundo acreditará em você.",
    "Faça o que você ama e ame o que você faz.",
    "O sucesso é a soma de pequenos esforços diários.",
    "A felicidade está em apreciar as coisas simples da vida.",
    "A confiança é a chave para abrir todas as portas.",
    "Não tenha medo de falhar, tenha medo de não tentar.",
    "Seja grato pelo que você tem e você terá sempre o suficiente.",
    "Aprenda com o passado, viva o presente e sonhe com o futuro.",
    "O destino não é uma questão de sorte, mas de escolha.",
    "Acredite no poder dos seus sonhos e trabalhe para realizá-los.",
    "A paciência é a chave para a conquista de grandes objetivos.",
    "A verdadeira riqueza está nas experiências compartilhadas com aqueles que amamos.",
    "Nunca é tarde demais para se tornar a pessoa que você quer ser.",
    "O sucesso não é o destino final, mas a jornada que o leva até lá.",
    "O amor é a resposta para todas as perguntas que a vida nos apresenta.",
    "A gratidão transforma momentos comuns em memórias extraordinárias.",
    "O verdadeiro poder está em acreditar em si mesmo.",
    "Aprenda a encontrar alegria nas coisas simples do dia a dia.",
    "A persistência é a chave para superar os desafios da vida.",
    "Nunca subestime o impacto positivo que você pode ter no mundo."
  ];

// eventos
img1.addEventListener('click', handleClick)
btnSorte.addEventListener('click', handleRevClick)
document.addEventListener('keydown', function(e){
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleRevClick()
    }
})

function randomNumber() {
   return Math.floor(Math.random() * 100)
}

function handleClick() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    frase.innerHTML = frasesDoBiscoito[randomNumber()]
}

function handleRevClick() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}