//Desaparecer header ao rolar a tela para baixo
const header = document.getElementsByTagName('header')[0]
const nav = document.getElementsByTagName('nav')[0]

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 8){
        header.style.display='none'
        nav.style.top='0'
    }else{
        header.style.display='flex'
        nav.style.top='40px'
    }
})

//Trocar cor do section quando clicar no link
// links
const link_oq_especificidade = document.getElementById('link-oq-especificidade')
const link_Hierarquia_especificidade = document.getElementById('link-Hierarquia-especificidade')
const link_como_calcular_especificidade = document.getElementById('link-como-calcular-especificidade')
const link_seletores_css = document.getElementById('link-seletores-css')
const link_seletor_elementos_sim = document.getElementById('link-seletor-elementos-sim')
const link_seletor_id = document.getElementById('link-seletor-id')
const link_seletor_class = document.getElementById('link-seletor-class')
const link_seletores_combinatorios = document.getElementById('link-seletores-combinatorios')
const link_seletor_descendente = document.getElementById('link-seletor-descendente')
const link_seletor_filho = document.getElementById('link-seletor-filho')
const link_seletor_irmaos_adjacentes = document.getElementById('link-seletor-irmaos-adjacentes')
const link_seletor_geral_irmaos = document.getElementById('link-seletor-geral-irmaos')
const link_pseudoclasses = document.getElementById('link-pseudoclasses')
const link_pseudo_hover = document.getElementById('link-pseudo-hover')
const link_pseudo_link = document.getElementById('link-pseudo-link')
const link_pseudo_visited = document.getElementById('link-pseudo-visited')
const link_pseudoelementos = document.getElementById('link-pseudoelementos')
const link_pseudoelem_first_line = document.getElementById('link-pseudoelem-first-line')
const link_pseudoelem_first_letter = document.getElementById('link-pseudoelem-first-letter')
const link_pseudoelem_marker = document.getElementById('link-pseudoelem-marker')
const link_seletor_de_atributos01 = document.getElementById('link-seletor-de-atributos01') 
const link_seletor_de_atributos02 = document.getElementById('link-seletor-de-atributos02') 
const link_seletor_de_atributos03 = document.getElementById('link-seletor-de-atributos03')

// seções
const secao_oq_especificidade = document.getElementById('secao-oq-especificidade')
const secao_hierarquia_especificidade = document.getElementById('secao-hierarquia-especificidade')
const secao_calculo_especificidade = document.getElementById('secao-calculo-especificidade')
const secao_seletores_css = document.getElementById('secao-seletores-css')
const secao_elementos_simples_css = document.getElementById('secao-elementos-simples-css')
const secao_seletor_id = document.getElementById('secao-seletor-id')
const secao_seletor_classe = document.getElementById('secao-seletor-classe')
const secao_seletor_combinador01 = document.getElementById('secao-seletor-combinador01')
const secao_seletor_combinador02 = document.getElementById('secao-seletor-combinador02')
const secao_seletor_combinador03 = document.getElementById('secao-seletor-combinador03')
const secao_seletor_combinador04 = document.getElementById('secao-seletor-combinador04')
const secao_seletor_combinador05 = document.getElementById('secao-seletor-combinador05')
const secao_pseudoclasses01 = document.getElementById('secao-pseudoclasses01')
const secao_pseudoclasses02 = document.getElementById('secao-pseudoclasses02')
const secao_pseudoclasses03 = document.getElementById('secao-pseudoclasses03')
const secao_pseudoclasses04 = document.getElementById('secao-pseudoclasses04')
const secao_pseudos_elementos01 = document.getElementById('secao-pseudos-elementos01')
const secao_pseudos_elementos02 = document.getElementById('secao-pseudos-elementos02')
const secao_pseudos_elementos03 = document.getElementById('secao-pseudos-elementos03')
const secao_pseudos_elementos04 = document.getElementById('secao-pseudos-elementos04')
const secao_seletor_atributo01 = document.getElementById('secao-seletor-atributo01')
const secao_seletor_atributo02 = document.getElementById('secao-seletor-atributo02')
const secao_seletor_atributo03 = document.getElementById('secao-seletor-atributo03')

// Função
function trocar_cor_section(secao) {
    if (secao.style.animation == '' || secao.style.animation == '1s linear 0s 1 normal none running trocar-cor-background02' ) {
        secao.style.animation = '1s linear trocar-cor-background01'
    } else {
        secao.style.animation = '1s linear trocar-cor-background02'
    }
}

// Evevets
link_oq_especificidade.addEventListener('click', function(){
    trocar_cor_section(secao_oq_especificidade)
});

link_Hierarquia_especificidade.addEventListener('click', function(){
    trocar_cor_section(secao_hierarquia_especificidade)
});

link_como_calcular_especificidade.addEventListener('click', function(){
    trocar_cor_section(secao_calculo_especificidade)
})

link_seletores_css.addEventListener('click', function(){
    trocar_cor_section(secao_seletores_css)
})

link_seletor_elementos_sim.addEventListener('click', function(){
    trocar_cor_section(secao_elementos_simples_css)
})

link_seletor_id.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_id)
})

link_seletor_class.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_classe)
})

link_seletores_combinatorios.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_combinador01)
})

link_seletor_descendente.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_combinador02)
})

link_seletor_filho.addEventListener('click', function() {
    trocar_cor_section(secao_seletor_combinador03)
})

link_seletor_irmaos_adjacentes.addEventListener('click', function() {
    trocar_cor_section(secao_seletor_combinador04)
})

link_seletor_geral_irmaos.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_combinador05)
})

link_pseudoclasses.addEventListener('click', function() {
    trocar_cor_section(secao_pseudoclasses01)
})

link_pseudo_hover.addEventListener('click', function(){
    trocar_cor_section(secao_pseudoclasses02)
})

link_pseudo_link.addEventListener('click', function(){
    trocar_cor_section(secao_pseudoclasses03)
})

link_pseudo_visited.addEventListener('click', function(){
    trocar_cor_section(secao_pseudoclasses04)
})

link_pseudoelementos.addEventListener('click', function() {
    trocar_cor_section(secao_pseudos_elementos01)
})

link_pseudoelem_first_line.addEventListener('click', function(){
    trocar_cor_section(secao_pseudos_elementos02)
})

link_pseudoelem_first_letter.addEventListener('click', function(){
    trocar_cor_section(secao_pseudos_elementos03)
})

link_pseudoelem_marker.addEventListener('click', function(){
    trocar_cor_section(secao_pseudos_elementos04)
})

link_seletor_de_atributos01.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_atributo01)
})

link_seletor_de_atributos02.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_atributo02)
})

link_seletor_de_atributos03.addEventListener('click', function(){
    trocar_cor_section(secao_seletor_atributo03)
})
