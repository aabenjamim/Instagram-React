import Sugestao from "./Sugestao"

export default function Sugestoes(){

    const sugestoes = [
        {nome:'bad.vibes.memes', imagem: 'assets/img/bad.vibes.memes.svg', razao: 'Segue você'},
        {nome:'chibirdart', imagem: 'assets/img/chibirdart.svg', razao: 'Segue você'},
        {nome:'razoesparaacreditar', imagem: 'assets/img/razoesparaacreditar.svg', razao: 'Novo no Instagram'},
        {nome:'adorable_animals', imagem: 'assets/img/adorable_animals.svg', razao: 'Segue você'},
        {nome:'smallcutecats', imagem: 'assets/img/smallcutecats.svg', razao: 'Segue você'}
    ]

    return(
        <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
            {sugestoes.map((s) => <Sugestao key={s.nome} imagem={s.imagem} nome={s.nome} razao={s.razao}/>)}
        </div>
    )
}