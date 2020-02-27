const login_view = () => {
    let html = `
        <html>
        <head>
        <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        </head>
        <body>
            
            <form class="form-inline" action="/login" method="POST">
                <label for="login">Login </label>
                <input type="text" id="login" name="user_name">
                <button type="submit">Log in</button>

            </form>
            <form class="form-inline" action="/register" method="POST">
                <label for="register">Register </label>
                <input type="text" id="register" name="user_name">
                <button type="submit">Register</button>
            </form>
            
        </body>
        </html>
    `;
    return html;
};




module.exports.login_view = login_view;