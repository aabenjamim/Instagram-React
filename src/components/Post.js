import { useState } from "react"

export default function Post(props){

    const [salvar, setSalvar] = useState('bookmark-outline')
    const [like, setLike] = useState('heart-outline')
    const [cor, setCor] = useState('black')
    const [num, setNum] = useState(props.numcurtidas)
    const [anim, setAnim] = useState('oculto')

    function salvarPost(){
        if(salvar ==='bookmark-outline'){
            setSalvar('bookmark')
        } else{
            setSalvar('bookmark-outline')
        }
    }

    function curtirPost(){
        if(like==='heart'){
            setLike('heart-outline')
            setCor('black')
            setNum(num - 1)
        } else{
            curtiu()
        }
    }
    
    function curtiu(){
        if(like==='heart-outline'){
            setLike('heart')
            setCor('red')
            setNum(num + 1)
        }
    }
    
    function curtirNaFoto(){
        curtiu()
        setAnim('aparecer')
    }

    return(
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagem}/>
                    {props.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <div className={anim}>
                    <ion-icon name='heart' data-test="like-post"></ion-icon>
                </div>
                <img src={props.conteudo} data-test="post-image" onDoubleClick={curtirNaFoto}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={like} data-test="like-post"
                         style={{color: cor}} onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={salvarPost}>
                        <ion-icon name={salvar} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgcurtida}/> 
                    <div className="texto">
                        Curtido por <strong>{props.contacurtida}</strong> e <strong>outras {num} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}