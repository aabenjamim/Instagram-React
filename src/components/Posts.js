import Post from "./Post"

export default function Posts(){
    const posts = [
        {nome:'meowed', imagem: 'assets/img/meowed.svg',
        conteudo: "assets/img/gato-telefone.svg", imgcurtida: "assets/img/respondeai.svg", 
        contacurtida: 'respondeai', numcurtidas: '101.523'},
        {nome:'barked', imagem: 'assets/img/barked.svg', 
        conteudo: "assets/img/dog.svg", imgcurtida: "assets/img/adorable_animals.svg", 
        contacurtida: 'adorable_animals', numcurtidas: '99.159'}
    ]

    return(
        <div class="posts">
            {posts.map((p) => <Post imagem={p.imagem} nome={p.nome} conteudo={p.conteudo} 
        imgcurtida={p.imgcurtida} contacurtida={p.contacurtida} numcurtidas={p.numcurtidas}/>)}
        </div>
    )
}