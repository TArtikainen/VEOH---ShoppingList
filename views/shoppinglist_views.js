const shoppinglists_view = ((data) => {
    let html = `
        <html>

        <body>
        <h1>Shopping list application</h1>
        <br>
        <h2>Shopping lists:</h2>

        Shoppinglists for user: ${data.user_name}<br>
        
            `;
       
        data.shoppinglists.forEach((shoppinglist) => {                        
            html += `
                <a href="/shoppinglist/${shoppinglist._id}">${shoppinglist.name}</a>               
                <form action="delete-shoppinglist" method="POST">
                    <input type="hidden" name="shoppinglist_id" value="${shoppinglist._id}">
                    <button type="submit">Delete list</button>
                </form>
            `;
        });

        html += `
            <form action="/add-shoppinglist" method="POST">
                <input type="text" name="shoppinglist">
                <button type="submit">Add a shoppinglist</button>
            </form>

            <form action="/logout" method="POST">
                <button type="submit">Log out</button>
            </form>
        </body>
        </html>
        `;
    return html;
});

const shoppinglist_view = ((data) => {
    let html = `
        <html>
        
        <body>
                ShoppingList App
            <h3><a href="/">Back to shoppinglists</a></h3>
            
            </form>
            <h1>Shoppinglist: ${data.shoppinglist_name}</h1>
            <h2>products:</h2>
            <table>
                       
    `;


    data.products.forEach((product) => { 
        html += `                    
        <p>
        <h3>Name: ${product.name}<br></h3>
        <img src="${product.img}" width="100px" heigth="100px" /><br>
        Quantity: ${product.quantity}
        </p>
                               
                                 
        `;                                                
    });        

    html += `
            </table>
            <form action="/add-product/${data.shoppinglist_id}" method="POST">
            Product name:<br><input type="text" name="product_name" ><br><br>
            Quantity:<br><input type="number" name="product_quantity"><br><br>
            Image url:<br><input type="text" name="product_image_url"><br><br>
            <button type="submit">Add product</button>
            </form>
        </body>
        </html>
    `;
    return html;
});

module.exports.shoppinglists_view = shoppinglists_view;
module.exports.shoppinglist_view = shoppinglist_view;