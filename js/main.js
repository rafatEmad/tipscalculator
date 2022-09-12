$(document).ready(function(){



    por = 10;

    $(".btn").on("click", function(){
        ch = $(this).children();
        por = $(ch[1]).val()

        $(".btn").addClass("anActiveBtn");
        $(this).removeClass("anActiveBtn");
        $(this).addClass("activeBtn")
    })

    $("#peopleNumber").on("change", function(){
        if($(".customInput").val() != ""){
            cv = $(".customInput").val()
            if( $("#peopleNumber").val() == 0){
                $(".df").css({"border": "2px #f00 solid"})
                $(".x").fadeIn(200);
            }else{
                pn = $("#peopleNumber").val()
                $(".x").fadeOut(200);
                $(".df").css({"border": "2px lightgreen solid"})
    
                bill = $(".billInput").val();
                total = bill  * cv / 100;
                amount = total / pn;
    
                $(".tipAmountNum").text("$ "+ Math.floor(amount));
                $(".Total").text("$ "+ Math.floor(total));
            }
        }else{
            if( $("#peopleNumber").val() == 0){
                $(".df").css({"border": "2px #f00 solid"})
                $(".x").fadeIn(200);
            }else{
                pn = $("#peopleNumber").val()
                $(".x").fadeOut(200);
                $(".df").css({"border": "2px lightgreen solid"})
    
                bill = $(".billInput").val();
                total = bill  * por / 100;
                amount = total / pn;

                $(".tipAmountNum").text("$ "+ Math.floor(amount));
                $(".Total").text("$ "+Math.floor(total));
    
            }
        }
        
    })
    
});