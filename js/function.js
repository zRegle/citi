var types=[
    "national_debt",
    "enterprise_debt",
    "trust_rate",
    "trust_debt",
    "debt_foundation",
    "trust_debtRights",
    "trust_stock",
    "trust_transfer",
    "receive",
    "self_debtRights",
    "bill",
    "credit",
    "other",
    "cash",
    "currency_market_tool",
    "asset"
];
function get_data(type,name) {
    $.post(
        "http://39.108.217.238/partial_history/",
        {
            which:type
        },
        function(data) {
            var points=data.points;

            var x=points[0];
            var y=points[1];
            var e=[];
            for(var i=0;i<x.length;i++){
                e[i]=[];
                e[i][0]=x[i];
                e[i][1]=y[i];
            }
            var colors = Highcharts.getOptions().colors;
            Highcharts.chart('container2', {
                title: {
                    text: 'ƫЧӦͼ'
                },
                xAxis: {
                    title: {
                        text: '�����ʣ�����',
                        align: 'high'
                    }
                },
                yAxis: {
                    title: {
                        text: 'ΥԼ���ʵı仯��'
                    }
                },
                tooltip: {
                    valueDecimals: 2
                },
                series: [
                    {
                        type: 'spline',
                        data: e,
                        name: name
                    }
                ]
            });
        }
    );
}
$(document).ready(function(){
    $.getJSON("http://39.108.217.238/history/",function(data){
        var cost=data.cost;
        var probability=data.probability;
        var points=data.points;

        $("#probability").text(probability);

        var x=points[0];
        var y=points[1];
        var e=[];
        for(var i=0;i<x.length;i++){
            e[i]=[];
            e[i][0]=x[i];
            e[i][1]=y[i];
        }
        var colors = Highcharts.getOptions().colors;
        Highcharts.chart('container', {
            title: {
                text: '�ʲ���ֵ�ֲ�ͼ'
            },
            xAxis: {
                plotLines: [{ // mark the weekend
                    color: 'red',
                    width: 2,
                    value: cost,
                    dashStyle: 'Solid',
                    label: {
                        text: '�ɱ���: '+cost.toString(),
                        verticalAlign: 'top',
                        textAlign: 'left',
                        rotation: 0,
                        style: {
                            color: 'red',
                            fontWeight: 'bold'
                        }
                    },

                    zIndex: 5
                }],
                title: {
                    text: '��λ������',
                    align: 'high'
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                valueDecimals: 2
            },
            series: [{
                type: 'areaspline',
                data: e,
                name: '�ʲ���ֵ����',
                zoneAxis: 'x',
                zones: [{
                    value: cost,
                    color: colors[2]
                }]
            }]
        });
    });
    get_data("national_debt","��ծ");
    $("#select_bar").change(function () {
        var selected=$("#select_bar").find("option:selected");
        var type=types[selected.index()];
        var name=selected.html();
        get_data(type,name)
    });
});