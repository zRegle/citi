$(document).ready(function(){
    $.getJSON("http://39.108.217.238:8080/history/",function(data){
        var cost=data.cost;
        var probability=data.probability;
        var points=data.points;

        probability = parseFloat(probability*100);
        probability = probability.toFixed(2);
        $("#probability").text(probability+"%");

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
            chart: {
                zoomType: 'x'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '�ʲ���ֵ�ֲ�ͼ'
            },
            xAxis: {
                labels: {
                    formatter: function () {
                        return Highcharts.numberFormat(this.value,0,'.',',');
                    }
                },
                plotLines: [{ // mark the weekend
                    color: 'red',
                    width: 2,
                    value: cost,
                    dashStyle: 'Solid',
                    label: {
                        text: '��ծ��: '+cost.toString(),
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
                plotBands: [{ // mark the weekend
                    color: null,
                    zIndex: 5,
                    from: 0,
                    to: cost,
                    label: {
                        text: '��ɫ����ΪΥԼ����',
                        align: 'right',
                        verticalAlign: 'bottom',
                        x: -10,
                        y: -10
                    }
                }],
                title: {
                    text: '�ʲ� / ����Ұ���Ԫ',
                    align: 'high'
                }
            },
            yAxis: {
                title: {
                    text: '�ʲ���ֵ�����ܶ� / E-6'
                }
            },
            tooltip: {

                formatter: function () {
                    return '�ʲ���'+ Highcharts.numberFormat(this.x,3,'.',',') +'<br/>'+
                        '�ʲ���ֵ�����ܶȣ�' + '<b>'+ Highcharts.numberFormat(this.y, 2) + '</b>E-6';

                }/*,
                 valueDecimals: 2*/
            },
            series: [{
                color: colors[3],
                type: 'areaspline',
                data: e,
                name: '�ʲ���ֵ�ֲ�����',
                zoneAxis: 'x',
                zones: [{
                    value: cost,
                    color: colors[2]
                }]
            }]
        });
    });
});