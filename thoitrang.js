var man = [
    {
        id:1,
        name: "Quần Shorts Nam chạy bộ Ultra",
        code: "TC102",
        price: "250.000",
        image: "https://th.bing.com/th/id/R.279463da6dc4d8334d061e18ef4adb77?rik=WdIMhYdckfS%2f1Q&pid=ImgRaw&r=0"
    },
    {
        id:2,
        name: "QUẦN SHORTS BLACK",
        code: "TC103",
        price: "300.000",
        image: "https://th.bing.com/th/id/OIP.k038nATWZLyozEE6UcNYkQAAAA?w=380&h=380&rs=1&pid=ImgDetMain"
    },
    {
        id:3,
        name: "QUẦN SHORTS BEIGE",
        code: "TC104",
        price: "100.000",
        image: "https://th.bing.com/th/id/OIP.gmFZtPTGOT4sioXs-9BPWwHaE8?rs=1&pid=ImgDetMain"
    },
];
var woment = [
    {
        id:1,
        name: "Váy Ngắn Nữ",
        code: "EC201",
        price: "450.000",
        image: "https://ae01.alicdn.com/kf/HTB1IuQ4KVXXXXbuXVXXq6xXFXXXI/New-short-skirts-womens-2016-new-style-casual-vintage-girls-skirts-for-school-red-pleated-mini.jpg"
    },
    {
        id:2,
        name: "Chân váy nữ xếp ly",
        code: "EC202",
        price: "190.000",
        image: "https://th.bing.com/th/id/R.6919569c07cd17642569cec28820e6f6?rik=vbuY6BNizss2WA&pid=ImgRaw&r=0https://canifa.com/img/1000/1500/resize/6/k/6ks23w008-sk010-1-thumb.webp"
    },
    {
        id:3,
        name: "Váy Tay Bồng Cúp Ngực",
        code: "EC203",
        price: "400.000",
        image: "https://th.bing.com/th/id/OIP.dIBzdY9Zx65c54oJQJ0dBgHaHa?rs=1&pid=ImgDetMain://bizweb.dktcdn.net/100/438/408/products/vay-dam-nu-van6146-tra-1-yodyvn.jpg"
    },
    
];
function listProducts(){
    for(let i = 0; i <= man.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+man[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    
    for(let i = 0; i <= woment.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+woment[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}