export default function Usuario(){

    return(
        <User imagem="assets/img/catanacomics.svg" nomeuser="catanacomics" nome="Catana"/>
    )
}

function User(props){

    function editar(){
        let name = prompt('Que nome deseja inserir?')
        let novo = document.querySelector('.nome-editavel')
        novo.innerHTML = name
    }

    return(
    <div class="usuario" data-test="user">
        <img src={props.imagem} data-test="profile-image"/>
        <div class="texto" data-test="name">
            <strong>{props.nomeuser}</strong>
            <span data-test="edit-name">
                <p class="nome-editavel">{props.nome}</p>
                <div onClick={editar}>
                    <ion-icon name="pencil"></ion-icon>
                </div>
            </span>
        </div>
    </div>
    )
}
