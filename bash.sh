#!/bin/sh
echo "teste iniciado"
npx cypress run --config video=false --env allure=true  
    echo "passou - testes executados!"
 
 allure generate allure-results --clean
    echo "jobs finalizados!"



