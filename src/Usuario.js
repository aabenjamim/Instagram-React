export default function Usuario(){
    return(
        <User imagem="assets/img/catanacomics.svg" nomeuser="catanacomics" nome="Catana"/>
    )
}

function User(props){
    return(
    <div class="usuario" data-test="user">
        <img src={props.imagem} data-test="profile-image"/>
        <div class="texto" data-test="name">
            <strong>{props.nomeuser}</strong>
            <span>
                {props.nome}
                <ion-icon name="pencil" data-test="edit-name"></ion-icon>
            </span>
        </div>
    </div>
    )
}