
export default function Usuario(){

    return(
        <User imagem="assets/img/catanacomics.svg" nomeuser="catanacomics" nome="Catana"/>
    )
}

function User(props){

    function editarNome(){
        let name = prompt('Que nome deseja inserir?')
        let novo = document.querySelector('.nome-editavel')
        if(!name){
            return
        } else{
            novo.innerHTML=name
        }
    }

    function editarImagem(){
        let img = prompt('Insira o link da nova foto de perfil')
        let novo = document.getElementById('image-perfil')
        if(!img){
            return
        } else{
            novo.src = img
        }
    }

    return(
    <div className="usuario" data-test="user">
        <img id="image-perfil" src={props.imagem} data-test="profile-image" onClick={editarImagem}/>
        <div className="texto" data-test="name">
            <strong>{props.nomeuser}</strong>
            <span>
                <p className="nome-editavel">{props.nome}</p>
                <div onClick={editarNome} data-test="edit-name">
                    <ion-icon name="pencil"></ion-icon>
                </div>
            </span>
        </div>
    </div>
    )
}
