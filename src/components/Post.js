export default function Post(props){

    function salvarPost(){
        const item = document.getElementsByClassName('.salvar')
        console.log(item.name)
        if(item.name === 'bookmark-outline'){
            item.name = 'bookmark'
        } else if(item.name === 'bookmark'){
        item.name = 'bookmark-outline'
        }
    }

    return(
        <div class="post" data-test="post">
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
                <img src={props.conteudo} data-test="post-image"/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={salvarPost}>
                        <ion-icon name="bookmark-outline" data-test="save-post" class="salvar"></ion-icon>
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