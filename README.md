# Sunne e2e

# execução de testes
    npx cypress run --config video=false --env allure=true
# Gerar resultados allure Reports
    allure generate allure-results --clean
# Executar servidor de reportação
    allure open allure-report

# usando pm2
    pm2 start " allure open allure-report"

