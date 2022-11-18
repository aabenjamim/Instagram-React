export default function Post(){

    const posts = [
        {nome:'meowed', imagem: 'assets/img/meowed.svg',
        conteudo: "assets/img/gato-telefone.svg", imgcurtida: "assets/img/respondeai.svg", 
        contacurtida: 'respondeai', numcurtidas: '101.523'},
        {nome:'barked', imagem: 'assets/img/barked.svg', 
        conteudo: "assets/img/dog.svg", imgcurtida: "assets/img/adorable_animals.svg", 
        contacurtida: 'adorable_animals', numcurtidas: '99.159'}
    ]

    return(
        <>{posts.map((p) => <Conjunto imagem={p.imagem} nome={p.nome} conteudo={p.conteudo} 
        imgcurtida={p.imgcurtida} contacurtida={p.contacurtida} numcurtidas={p.numcurtidas}/>)}</>
    )
}

function Conjunto(props){
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtida}/> 
                    <div class="texto">
                        Curtido por <strong>{props.contacurtida}</strong> e <strong>outras {props.numcurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}