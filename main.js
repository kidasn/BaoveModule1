
        let productList = JSON.parse(localStorage.getItem("productList"))
        let userList = JSON.parse(localStorage.getItem("userList"));
        function renderTable(product) {
            let table_content = ``;
            for (let i = 0; i < product.length; i++) {
                table_content += `
                <tr>
                <th scope="row">${i + 1}</th>
                <td>${product[i].name}</td>
                <td>${product[i].price}</td>
                <td>
                    <img style="width: 100px; height: 100px; border-radius: 10%;" src="${product[i].image}" >
                </td>
                <td>${product[i].category}</td>
                <td><button onclick="addToCart(${productList[i].id})" type="button" class="btn btn-danger">Buy</button></td>
            </tr>
                `

            }
            document.getElementById("table_content").innerHTML = table_content;
        }
        renderTable(JSON.parse(localStorage.getItem("productList")));

        function removeAccentLowerCase(str) {
            return str.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
        }

        function searchProduct() {
            let productSearch = [...JSON.parse(localStorage.getItem("productList"))];
            productSearch = productSearch.filter(product => removeAccentLowerCase(product.name).includes(removeAccentLowerCase(document.getElementById("search").value)))
            renderTable(productSearch);
        }

        function getProductById(productId) {
            return JSON.parse(localStorage.getItem("productList")).find(product => product.id == productId);
        }
        let userLoginId = localStorage.getItem("userLogin")

        function addToCart(productId) {
            if (userLoginId == null) {
                console.log("bạn phải đăng nhập");
                return;
            }
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].id == userLoginId) {
                    for (let j = 0; j < productList.length; j++) {
                        if (productList[j].id == productId) {
                            let result = userList[i].cart.filter((item) => {
                                return item.id == productId;
                            })
                            if (result.length == 0) {
                                userList[i].cart.push(productList[j]);
                                localStorage.setItem("userList", JSON.stringify(userList));
                                countCart();

                            }
                            if (result.length != 0) {

                                result[0].quantity = ++result[0].quantity;
                                localStorage.setItem("userList", JSON.stringify(userList));
                                countCart();
                                
                            }
                        }

                    }
                }

            }
        }


        // if(localStorage.getItem("userLogin")) {
        //     document.getElementById("userlogin").innerText = "User đang login: " + JSON.parse(localStorage.getItem("userLogin")).email
        // }

        function countCart() {
            let userLoginId = localStorage.getItem("userLogin");
            if (userLoginId) {
                for (let i = 0; i < userList.length; i++) {
                    if (userList[i].id == userLoginId) {
                        let result = 0;
                        for (let j = 0; j < userList[i].cart.length; j++) {
                            result += userList[i].cart[j].quantity;
                            document.getElementById("cart_count").innerHTML = result;
                        }
                    }
                }
            }
        }
        countCart();

let flag = false;
function sortByPrice() {
    let products = JSON.parse(localStorage.getItem("productList"));
    if (flag) {
        products.sort((a, b) => a.price - b.price);
    }else {
        products.sort((a, b) => b.price - a.price);
    }
    flag = !flag;
    renderTable(products);
}
function choosePhone() {
    let productList = JSON.parse(localStorage.getItem("productList"))
    let result = [];
    for (let i = 0; i < productList.length; i++) {
        if(productList[i].category=="Phone") {
            result.push(productList[i])
        }
        
    }
    console.log(productList);
    console.log(result);
    renderTable(result);
    
}
function chooseLaptop() {
    console.log("11111111");
    let productList = JSON.parse(localStorage.getItem("productList"))
    let result = [];
    for (let i = 0; i < productList.length; i++) {
        if(productList[i].category=="Laptop") {
            result.push(productList[i])
        }
        
    }
    console.log(productList);
    console.log(result);
    renderTable(result);
    
}
function chooseTV() {
    let productList = JSON.parse(localStorage.getItem("productList"))
    let result = [];
    for (let i = 0; i < productList.length; i++) {
        if(productList[i].category=="TV") {
            result.push(productList[i])
        }
        
    }
    console.log(productList);
    console.log(result);
    renderTable(result);
    
}
function chooseWatch() {
    let productList = JSON.parse(localStorage.getItem("productList"))
    let result = [];
    for (let i = 0; i < productList.length; i++) {
        if(productList[i].category=="Watch") {
            result.push(productList[i])
        }
        
    }
    console.log(productList);
    console.log(result);
    renderTable(result);
    
}
function renderAll() {
    renderTable(productList);
}
for (let i = 0; i < userList.length; i++) {
    if (userList[i].id=userLoginId) {
        document.getElementById("account").innerHTML=userList[i].email;
        document.getElementById("login").innerHTML="";
        document.getElementById("register").innerHTML="";
        document.getElementById("logout").innerHTML="Log out";


    
}
}
function goToCart() {
    window.location.href="./cart.html"
}

function logout() {
    localStorage.removeItem("userLogin");
    window.location.href="./index.html"
    

}
function toLogin() {
    window.location.href="./login.html"
}
function toRegister() {
    window.location.href="./register.html"
}
