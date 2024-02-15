import dave from './assets/dave.png'
import daveandcia from './assets/daveandcia.png'
import daveline from './assets/davelive.jpg'
import Hamburger_icon from './assets/Hamburger_icon.png'
import logodanielb from './assets/logo-daniel-b.png'
import logodaniel from './assets/logo-daniel.png'
import logodaniel1 from './assets/logo-daniel1.png'
import noodle from './assets/noodle.png'
import danielfoo from './assets/daniel-foo.jpg'
import buttomdown from './assets/button-down.svg'

function down(){
    document.body.scrollTop = 2;
    document.documentElement.scrollTop = 2;
  }

function Content(){
    return(
        <div>
            <main>
                
                <div className="hero-color">
                    <section className="hero">
                        
                        <div className="hero-image-container">
                            <img className="banner" src={daveandcia}/>
                        </div>
                        <header className="hero-content">
                            
                            <h1 className="glow">Bem vindo ao meu universo</h1>
                            <hr/>
                            <h2 className="hero-subtitle">"Because every day is still a blank page, waiting to write itself"</h2>
                        </header>
                    </section>
                </div>
                <section className="button-container">
                <a href="#quemsou">
                    <button type="button" className="button-down" >
                        <img src={buttomdown}/>
                    </button>
                </a>
                
                </section>
                
                <section className="about-me">
                        <div className="most-about">
                            <header className="about-content">
                                <h2 className="sub" id="quemsou">-  Quem sou</h2>
                                <hr/>
                                <p>Apaixonado por tecnologia, sou um programador Front-End(e mecho bastante com o Back-End também) 
                                    em constante evolução. Formado em Técnico de 
                                    Desenvolvimento de Sistemas, domino linguagens como 
                                    JavaScript, C#, PHP, HTML, CSS e bancos de dados como 
                                    MySQL. Buscando aprimorar minhas habilidades, curso o 
                                    penúltimo semestre de Ciências da Computação. Meu 
                                    objetivo é criar projetos incríveis que façam a 
                                    diferença na vida das pessoas.</p>
                            </header>
                            <div className="about-image-container" >
                                <img className="about-img" src="https://avatars.githubusercontent.com/u/69171112?v=4"/>
                            </div>
                        </div>
                </section>
                
                <div className="dream-color" id="sonho">
                        <section className="dream">
                        <div className="dream-text">
                                <h2 className="sub">- Um sonho realizado</h2>
                                <hr/>
                                <p>
                                    Em 2023 eu tive a opurtunidade de realizar o meu sonho de ver o Foo Fighters ao vivo. A banda da minha vida, e este foi um dos melhores dias da minha vida.
                                
                                </p>
                                <p>
                                    E realizar este sonho só foi possível por conta do meu primeiro estágio, eu venho de uma família que não tem muio dinheiro, e eu conseguir a minha independência para ir
                                    ao show foi incrível.
                                </p>
                                <p>
                                    Foo Fighters foi uma banda muito importante para a minha vida, esteve comigo em momentos muito difíceis e em momentos felizes, sempre vou lembrar de quando esteva no meu quarto
                                    terminando meu TCC da etec, e estava preso em um certo código, e tocou Long Road to , eu parei e curti a música quando eu voltei pensei num  outro jeito de faezr o laço de repetição.
                                </p>
                                <p>
                                    Eles estão presentes em diversos momentos da minha vida, e poder ver eles ao vivo foi perfeito.
                                </p>
                            </div>
                            <div className="dream-img">
                                <img src={danielfoo} className="dream-me"/>
                                <img src={daveline} className="dream-dave"/>
                            </div>
                        </section>
                </div>
                <div className="music-color" >
                        <section className="music">
                            <div className="music-img">
                                <img className="noodle" src={noodle} alt=""/>
                            </div>
                            <div className="music-spot">
                                <iframe className="spotify" src="https://open.spotify.com/embed/playlist/0bLaTXDsX3gsstLwxuqD4G?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
                            </div>
                            
                                    
                            <div className="music-text">
                                <h2 className="sub2 right">A música que me move -</h2>
                                <h2 className="sub1">- A música que me move</h2>
                                <hr/>
                                <p>
                                    O fato é que eu sou apaixonado pela música, em diversos momentos elas me salvaram, me inspirando, me dando força para seguir em frente.
                                </p>
                                <p>
                                    Mas não só isso, em muitos momentos a música me deu muita criatividade, principalmente trabalhando como programação, e de verdade, codar com uma trilha
                                    sonora de fundo é maravilhoso.
                                </p>
                                <p>
                                    Por isso criei esta playlist, perfeita para codar, e com uma pequena parte de mim em cada música.
                                </p>
                            </div>   
                        </section>
                </div>
                

                <section className="skills" id="habilidades">
                <div className="skills-content">
                        <div className="skills-git">
                            <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Daniel-McFly&layout=compact&langs_count=7&theme=dark"/>
                            <img  src="https://github-readme-stats.vercel.app/api?username=Daniel-McFly&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>
                        </div>
                        <div className="skills-text">
                            <h2 className="sub1">- Minhas Habilidades</h2>
                            <h2 className="sub2 right">Minhas Habilidades -</h2>
                            <hr/>
                            <p>Como trabalho com Full Stack acabo pesquisando bastante sobre tudo que me interessa, então acabei vendo muito sobre muitas linguagens e suas tecnologias.</p>
                            <p>Eu iniciamente entrei na programação com C#, aprendi os conceitos básicos, e como ter uma lógica através do C#, e desenvolvo projetos até hoje. Em seguida tive contato com html e css, aprendi como construir e estilizar sites, depois javascript implementando funções e deixando os sites mais intuitivos, e então veio uma paixão minha, o PHP, eu amo criaar sites e dar a minha cara, e amo também dar uma vida tornar funcional com o PHP, e lá coloquei em prática tudo que vi com C#.</p>
                            <p>Aprendi banco de dados com MySql, e logo apliquei em projetos em C# ou PHP.</p>
                            <p>Agora no estágio aprendi a usar o wordpress, e apesar de as vezes limitador, eu gostei bastante da praticidade.</p>
                            <p>E mais recentemente, inteligências artiificias vem chamando minha atenção, venho usado APIs da OpenAI, e integrando algumas funções a sistemas, vejo muito potencial nelas.</p>
                        </div>
                        
                        
                    </div>
                    <div className="skills-icons-img">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"/>                        
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"/> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" className="wp-icon"/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Content