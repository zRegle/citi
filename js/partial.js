var chart1,chart2;
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
function get_data(container,type,name) {
    $.post(
        "http://39.108.217.238:8080/partial_history/",
        {
            which:type
        },
        function(data) {
            var points=data.derivative;

            var x=points[0];
            var y=points[1];
            var e=[];
            for(var i=0;i<x.length;i++){
                e[i]=[];
                e[i][0]=x[i];
                e[i][1]=y[i];
            }
            var colors = Highcharts.getOptions().colors;
            chart1=Highcharts.chart(container, {
                lang:{
                    loading:"�����У����Ե�..."
                },
                loading: {
                    labelStyle: {
                        color: 'rgb(255,255,255)'
                    },
                    style: {
                        backgroundColor: 'transparent'
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Ԥ�������ʶ�ΥԼ���ʲ����ʵ�Ӱ��'
                },
                xAxis: {
                    title: {
                        text: '�����ʣ�%',
                        align: 'high'
                    }
                },
                yAxis: {
                    title: {
                        text: 'ΥԼ���ʵĲ�����'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '�����ʣ�'+ Highcharts.numberFormat(this.x,2,'.',',') +'%<br/>'+
                            '�����ʣ�' + '<b>'+ Highcharts.numberFormat(this.y, 2) + '</b>';

                    }
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
function get_data2(container,type,name) {
    $.post(
        "http://39.108.217.238:8080/partial_history/",
        {
            which:type
        },
        function(data) {
            var points=data.assets;
            var x=points[0];
            var y=points[1];
            var e=[];
            for(var i=0;i<x.length;i++){
                e[i]=[];
                e[i][0]=x[i];
                e[i][1]=y[i];
            }
            var colors = Highcharts.getOptions().colors;
            chart2=Highcharts.chart(container, {
                lang:{
                    loading:"�����У����Ե�..."
                },
                loading: {
                    labelStyle: {
                        color: 'rgb(255,255,255)'
                    },
                    style: {
                        backgroundColor: 'transparent'
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '	Ԥ�������ʶ�ΥԼ���ʵ�Ӱ��'
                },
                xAxis: {
                    title: {
                        text: '�����ʣ�%',
                        align: 'high'
                    }
                },
                yAxis: {
                    title: {
                        text: 'ΥԼ����'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '�����ʣ�'+ Highcharts.numberFormat(this.x,2,'.',',') +'%<br/>'+
                            'ΥԼ���ʣ�' + '<b>'+ Highcharts.numberFormat(this.y, 2) + '</b>';

                    }
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
    get_data("container2","national_debt","��ծ");
    get_data2("container3","national_debt","��ծ");

    $("#select_bar").change(function () {
        var containerA="container2";
        var containerB="container3";
        var selected=$("#select_bar").find("option:selected");
        var type=types[selected.index()];
        var name=selected.html();
        chart1.showLoading();
        chart2.showLoading();
        get_data(containerA,type,name);
        get_data2(containerB,type,name);
    });
});