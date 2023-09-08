function searchproduct(){
    var search = document.getElementById("search").value;

if( search == ""){
    alert("You must enter a product name.");
    return;
}

    else if ( search == "3 Seater Sofa"){
        window.location.replace("our_product2.html");
        return;
    }
    else if ( search == "2 Seater Sofa"){
        window.location.replace("sofa.html");
        return;
    }
    else if ( search == "Office Table"){
        window.location.replace("our_product3.html");
        return;
    }
    else if ( search == "Coffee Table"){
        window.location.replace("product3.html");
        return;
    }
    else if ( search == "Side Table"){
        window.location.replace("product5.html");
        return;
    }
    else if ( search == "Wardrobe"){
        window.location.replace("our_product1.html");
        return;
    }
    else{
        alert("PRODUCT NOT EXIST");
        return;
    }
}