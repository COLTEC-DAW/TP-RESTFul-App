const api_url = 'https://api.frankfurter.app/'

const converter = (conversor) =>
{
    const num  = conversor.children('.num_ref').val()
    const ref  = conversor.children('.moeda_ref').val()
    const conv = conversor.children('.moeda_conv').val()

    if(num != '' && ref != '' && conv != '')
    {
        if(ref == conv)
        {
            conversor.children('.num_conv').text(parseFloat(num).toFixed(2))
        }
        else if(conversor.attr('id') == 'converter_hj')
        {
            $.get(api_url + 'latest?amount=' + num + '&from=' + ref + '&to=' + conv)
            .done(res =>
                conversor.children('.num_conv').text(parseFloat(res.rates[conv]).toFixed(2))
            )
        }
        else
        {
            const date = conversor.children('.date_search').val()
            $.get(api_url + date + '?amount=' + num + '&from=' + ref + '&to=' + conv)
            .done(res =>
                conversor.children('.num_conv').text(parseFloat(res.rates[conv]).toFixed(2))
            )
        }
    }
    else
    {
        conversor.children('.num_conv').text(0.00.toFixed(2))
    }
}

let current_page = $('#pagina_principal')
let currencies

const muda_pag = (e =>
{
    current_page.hide()
    current_page = e
    current_page.show()
})

$('#btn_main').on('click', () => muda_pag($('#pagina_principal')))
$('#btn_hj').on('click', () => muda_pag($('#moedas_hj')))
$('#btn_his').on('click', () => muda_pag($('#historico')))

$('#converter_hj .num_ref').on('change', () => converter($('#converter_hj')))
$('#converter_hj .moeda_ref').on('change', () => converter($('#converter_hj')))
$('#converter_hj .moeda_conv').on('change', () => converter($('#converter_hj')))

$('#converter_his .num_ref').on('change', () => converter($('#converter_his')))
$('#converter_his .moeda_ref').on('change', () => converter($('#converter_his')))
$('#converter_his .moeda_conv').on('change', () => converter($('#converter_his')))
$('#converter_his .date_search').on('change', () => converter($('#converter_his')))

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
            Array($('.moeda')).forEach(e => e.append(option))
        })
    }        
}, 1000)
