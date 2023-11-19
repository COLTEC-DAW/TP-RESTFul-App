const api_url = 'https://api.frankfurter.app/'

const converter = () =>
{
    const num  = $('#num_ref').val()
    const ref  = $('#moeda_ref').val()
    const conv = $('#moeda_conv').val()

    if(num != '' && ref != '' && conv != '')
    {
        if(ref == conv)
        {
            $('#num_conv').text(parseFloat(num).toFixed(2))
        }
        else
        {
            $.get(api_url + 'latest?amount=' + num + '&from=' + ref + '&to=' + conv)
            .done(res =>
                $('#num_conv').text(parseFloat(res.rates[conv]).toFixed(2))
            )
        }
    }
    else
    {
        $('#num_conv').text(0.00.toFixed(2))
    }
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

$('#num_ref').on('change', converter)

$('#moeda_ref').on('change', converter)

$('#moeda_conv').on('change', converter)

$.get(api_url + 'currencies')
.done(res =>
{
    let option

    Object.keys(res).forEach(c =>
    {
        option = '<option value="' + c + '">'
        option += c + ' (' + res[c] + ')'
        option += '</option>'
        $('#moeda_ref').append(option)
        $('#moeda_conv').append(option)
    });
})
.fail(erro =>
{
    const option = '<option value="">Opções Indisponíveis</option>'
    
    $('#moeda_ref').append(option)
    $('#moeda_conv').append(option)
})