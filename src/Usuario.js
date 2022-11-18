export default function Usuario(){
    return(
        <User imagem="assets/img/catanacomics.svg" nomeuser="catanacomics" nome="Catana"/>
    )
}

function User(props){
    return(
    <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
            <strong>{props.nomeuser}</strong>
            <span>
                {props.nome}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}