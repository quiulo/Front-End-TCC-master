import React from 'react'
import about from "../assets/about.jpg"
import iconHandleshake from "../assets/iconHandleshake.png"
import innovation from "../assets/innovation.png"
import equipe from "../assets/equipe.png"

const About = () => {
    return (
       <div>
            <div className=' w-full min-h-fit h-auto relative flex justify-center'>
                <div className='mt-16 absolute text-azul text-5xl font-medium '>Sobre a Dazzle</div>
                    <p className=' mt-60 absolute flex-wrap  text-center text-base text-azul font-semibold '>O Grupo Dazzle, formado por estudantes da FIEC, criou o For M.E.I, uma plataforma que conecta prestadores de serviços e clientes, promovendo a inovação e o crescimento econômico.<br/><br/> Junte-se a nós para construir um futuro mais acessível e próspero.
                    </p>
                
                <img className=' opacity-40 w-full min-h-fit h-96 'src={about}></img>
            </div>
            <br /><br /><br /><br />
            <div className=' flex justify-center h-60 space-x-24'>

                <div> 
                    <h1 className='text-center text-azul font-medium'>QUEM SOMOS?</h1>
                    <hr/><br/>
                    <p className='text-base text-center '>Somos um grupo de estudantes da FIEC,criadores do For M.E.I, <br /> uma plataforma de conexão entre prestadores de serviços e clientes, <br />visando promover inovação e crescimento econômico</p>
                </div>

                <div>
                    <h1 className='text-center text-azul font-medium'>O QUE FAZEMOS?</h1>
                    <hr /><br />
                    <p className='text-base text-center '> Nós iremos simplificar e facilitar a conexão entre profissionais autônomos e clientes <br />por meio da nossa plataforma For M.E.I, <br />contribuindo para impulsionar a o empreendorismo e ajudar a sociedade</p>
                    </div>
                    
                <div>
                    <h1 className='text-center text-azul font-medium'>COMO SE ASSOCIAR?</h1>
                    <hr /><br />
                    <p className='text-base text-center '>Fale com um de nossos consultores de negócios <br />através do nosso email: <a href='mailto:atendimento@dazzle.com.br'> <p className='underline hover:text-blue-800'>atendimento@dazzle.com.br</p> </a> </p>
                    </div>
            
            </div>

            <br /> <br /> <br /> 
            
          
            
            <div className='flex justify-center  space-x-64 text-center'>

                <div className='w-80'>
                    <div className='flex justify-center'><img src={iconHandleshake} width={120}/></div>
                    <h1 className='text-center text-azul font-medium'>Comprometimento</h1>
                    <br />
                    <p className='text-base'>O Grupo Dazzle é sinônimo de comprometimento. Nossa equipe está totalmente dedicada a criar soluções inovadoras, como o projeto For M.E.I. Nosso compromisso absoluto com a excelência garante que cada iniciativa seja conduzida com paixão, integridade e determinação</p>
                    </div>

                <div className='w-72'>
                    <div className='flex justify-center'><img src={innovation} width={80}/></div>
                    <h1 className='text-center text-azul font-medium'>Inovação </h1>
                    <br />
                    <p className='text-base'>Na Dazzle, a inovação é nossa essência. Buscamos constantemente novas abordagens e soluções criativas para liderar o caminho em nosso campo. Projetos como o For M.E.I refletem nossa dedicação à vanguarda da tecnologia e da criatividade</p>
                </div>

                <div className='w-72'>
                    <div className='flex justify-center'><img src={equipe}  width={130}/></div>
                <h1 className='text-center text-azul font-medium'>Equipe</h1>
                <br />
                <p className='text-base'>No Grupo Dazzle, o trabalho em equipe é essencial. Valorizamos a colaboração, combinando habilidades diversas para alcançar resultados excepcionais. Projetos como o For M.E.I refletem nosso compromisso com a excelência impulsionada pela força coletiva de nossa equipe</p>
                </div>

           
                </div>
        </div>
    )
}

export default About