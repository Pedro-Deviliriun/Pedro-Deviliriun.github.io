document.addEventListener("DOMContentLoaded", function (){ 

    var slideIndex = 1;

    function showDivs(n){
        var i;
        var x = document.getElementsByClassName("slides"); //Organiza todas as imagens em uma array
        var y = document.getElementsByClassName("player-information");//Organiza todos os textos de jogadores em uma array

        //Define os limites para que não aja um erro de carregamento.
        if (n > x.length){
            slideIndex = 1;
        } 
        if (n   < 1){
            slideIndex = x.length
        };
        //Define todos os elementos que não está correspondetes com slideIndex para não serem carregados.
        for (i = 0; i < x.length; i++) {
            y[i].style.display = "none";
            x[i].style.display = "none";
        }
        //Carrega os primeiros elementos da página.
        y[slideIndex - 1].style.display = "block";
        x[slideIndex - 1].style.display = "block";
    }

    //A função não esta conseguindo ser acessada depois de carregar os conteúdos, isso define ela para ser acessada globalmente.
    window.plusDivs = function(n){
        showDivs(slideIndex += n);
    };

    showDivs(slideIndex);

});

