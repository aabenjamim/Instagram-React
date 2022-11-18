export default function Usuario(){

    return(
        <User imagem="assets/img/catanacomics.svg" nomeuser="catanacomics" nome="Catana"/>
    )
}

function User(props){

    function editarNome(){
        let name = prompt('Que nome deseja inserir?')
        let novo = document.querySelector('.nome-editavel')
        novo.innerHTML = name
    }

    function editarImagem(){
        let img = prompt('Insira o link da nova foto de perfil')
        let novo = document.getElementById('image-perfil')
        novo.src = img
    }

    return(
    <div class="usuario" data-test="user">
        <img id="image-perfil" src={props.imagem} data-test="profile-image" onClick={editarImagem}/>
        <div class="texto" data-test="name">
            <strong>{props.nomeuser}</strong>
            <span data-test="edit-name">
                <p class="nome-editavel">{props.nome}</p>
                <div onClick={editarNome}>
                    <ion-icon name="pencil"></ion-icon>
                </div>
            </span>
        </div>
    </div>
    )
}
