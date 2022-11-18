export default function Sugestao(){

    const sugestoes = [
        {nome:'bad.vibes.memes', imagem: 'assets/img/bad.vibes.memes.svg', razao: 'Segue você'},
        {nome:'chibirdart', imagem: 'assets/img/chibirdart.svg', razao: 'Segue você'},
        {nome:'razoesparaacreditar', imagem: 'assets/img/razoesparaacreditar.svg', razao: 'Novo no Instagram'},
        {nome:'adorable_animals', imagem: 'assets/img/adorable_animals.svg', razao: 'Segue você'},
        {nome:'smallcutecats', imagem: 'assets/img/smallcutecats.svg', razao: 'Segue você'}
    ]

    return(
        <>{sugestoes.map((s) => <Conjunto imagem={s.imagem} nome={s.nome} razao={s.razao}/>)}</>
    )
}

function Conjunto(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}