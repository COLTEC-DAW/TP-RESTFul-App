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
let currencies

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

/* AVAILABLE CURRENCIES */

$.get(api_url + 'currencies')
.done(res =>
{
    currencies = res
})
.fail(erro =>
{
    currencies = null
})

/* MAIN CONVERSIONS */

$.get(api_url + 'latest?amount=1&from=BRL&to=AUD,CAD,CHF,EUR,GBP,JPY,USD')
.done(res =>
{
    let item

    Object.keys(res.rates).forEach(c =>
    {
        item = '<li>BRL (' + currencies['BRL'] + ') 1.00 &#8644; '
        item += c + ' (' + currencies[c] + ') '
        item += parseFloat(res.rates[c]).toFixed(2) + '</li>'
        $('#principais').append(item)
    });
})
.fail(erro =>
{
    $('#principais').append('<li>Conversões Indisponíveis</li>')
})

/* OPTIONS FOR CONVERSION */

setTimeout(() =>
{
    if(currencies == null)
    {
        const option = '<option value="">Opções Indisponíveis</option>'
        
        $('#moeda_ref').append(option)
        $('#moeda_conv').append(option)
    }
    else
    {
        let option
    
        Object.keys(currencies).forEach(c =>
        {
            option = '<option value="' + c + '">'
            option += c + ' (' + currencies[c] + ')'
            option += '</option>'
            $('#moeda_ref').append(option)
            $('#moeda_conv').append(option)
        })
    }        
}, 1000)
