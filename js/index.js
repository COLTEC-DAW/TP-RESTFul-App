const converter = () =>
{
    //code
}

let current_page = $('#pagina_principal')

$('#btn_main').on('click', () =>
{
    current_page.hide()
    current_page = $('#pagina_principal')
    current_page.show()
})

$('#btn_hj').on('click', () =>
{
    current_page.hide()
    current_page = $('#moedas_hj')
    current_page.show()
})

$('#moeda_ref').on('change', converter)

$('#moeda_conv').on('change', converter)
