# IP Management Frontend


# Getting started

## Installation

Clone the repository

    git clone https://github.com/islamMaruf/ip_management_frontend.git

Switch to the repo folder

    cd ip_management_frontend

Install all the dependencies using composer

    npm install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Edit the .env file
    
    VUE_APP_BASE_URL={backend_url}

***Note*** : Change `{backend_url}` with the backend application base url. like: http://127.0.0.1:8000


Compiles and hot-reloads for development
```
npm run serve
```
Now go to the url.

## Login Credentials

    email: maruf@gmail.com
    password: 123456
--------------------------
### For production
Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```


Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Screenshot

Login Page

![login_page](https://github.com/islamMaruf/ip_management_frontend/blob/master/public/screenshot/login_page_ip.png?raw=true)

IP List Page

![ip_list_page](https://github.com/islamMaruf/ip_management_frontend/blob/master/public/screenshot/ip_list_ip.png?raw=true)

Create IP Page

![create_ip_page](https://github.com/islamMaruf/ip_management_frontend/blob/master/public/screenshot/create_ip.png?raw=true)

Edit IP Page

![edit_ip_page](https://github.com/islamMaruf/ip_management_frontend/blob/master/public/screenshot/edit_ip.png?raw=true)



Activity Logger Page

![activity_logger_image](https://raw.githubusercontent.com/islamMaruf/ip_management_frontend/master/public/screenshot/activity.png)
