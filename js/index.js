const api_url = 'https://api.frankfurter.app/'

const converter_hj = () =>
{
    const conversor = $('#converter_hj')

    const ref  = conversor.children('.moeda_ref').val()
    const conv = conversor.children('.moeda_conv').val()
    const num  = conversor.children('.num_ref').val()

    if(num != '' && ref != '' && conv != '')
    {
        if(ref == conv)
        {
            conversor.children('.num_conv').text(parseFloat(num).toFixed(2))
        }
        else
        {
            $.get(api_url + 'latest?amount=' + num + '&from=' + ref + '&to=' + conv)
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

const converter_his = () =>
{
    const conversor = $('#converter_his')

    const ref  = conversor.children('.moeda_ref').val()
    const conv = conversor.children('.moeda_conv').val()
    const num  = conversor.children('.num_ref').val()
    const date = conversor.children('.date_search').val()

    if(num != '' && ref != '' && conv != '')
    {
        if(ref == conv)
        {
            conversor.children('.num_conv').text(parseFloat(num).toFixed(2))
        }
        else if(date != '')
        {
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

const converter_periodo = () =>
{
    const conversor = $('#cotacao_periodo')

    const ref    = conversor.children('.moeda_ref').val()
    const conv   = conversor.children('.moeda_conv').val()
    const begin  = conversor.children('.date_begin').val()
    const end    = conversor.children('.date_end').val()
    const data   = []
    const dates  = []
    const rates  = []
    const layout = {}

    if(ref != '' && conv != '' && begin != '' && end != '' && ref != conv && begin < end)
    {
        $.get(api_url + begin + '..' + end + '?from=' + ref + '&to=' + conv)
            .done(res =>
                {
                    layout.title = 'Valor de ' + ref + ' 1.00 em ' + conv
                    Object.keys(res.rates).forEach(date =>
                        {
                            dates.push(date)
                            rates.push(res.rates[date][conv])
                        })
                    
                    data.push
                    ({
                        type: 'scatter',
                        mode: 'lines',
                        x: dates,
                        y: rates
                    })

                    Plotly.newPlot('grafico_cotacao_periodo', data, layout)
                    $(window).on('resize', e => Plotly.newPlot('grafico_cotacao_periodo', data, layout))
                })
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

$('#converter_hj').children('input, select')
.on('change', converter_hj)

$('#converter_his').children('input, select')
.on('change', converter_his)

$('#cotacao_periodo').children('input, select')
.on('change', converter_periodo)

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

setTimeout(() =>
{
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
        })
    })
    .fail(erro =>
    {
        $('#principais').append('<li>Conversões Indisponíveis</li>')
    })

    /* OPTIONS FOR CONVERSION */

    if(currencies == null)
    {
        const option = '<option value="">Opções Indisponíveis</option>'
        
        Array($('.moeda')).forEach(e => e.append(option))
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
}, 1500)
