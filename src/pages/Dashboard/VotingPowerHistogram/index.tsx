import { Box, Paper, Typography } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';
import { useDashboardContext } from 'src/contexts/dashboard-context';
import useHighchartsDefaultConfig from 'src/hooks/useHighchartsDefaultConfig';
import { compactNumber, formatNumber } from 'src/utils/format';

export default function VotingPowerHistogram() {
  const { data } = useDashboardContext();
  const votingPowerHistogram = data?.votingPowerHistogram;
  const xData = useMemo(() => (votingPowerHistogram ? Object.keys(votingPowerHistogram) : []), [votingPowerHistogram]);
  const series = useMemo(
    () => (votingPowerHistogram ? Object.values(votingPowerHistogram) : []),
    [votingPowerHistogram]
  );
  const defaultConfig = useHighchartsDefaultConfig();
  const options = useMemo<Highcharts.Options>(() => {
    return Highcharts.merge(defaultConfig, {
      chart: {
        zoomType: 'x',
        height: '300',
      },
      title: {
        text: undefined,
      },
      tooltip: {
        shared: true,
        crosshairs: false,
        valueDecimals: 2,
        formatter: function (this: Highcharts.TooltipFormatterContextObject): string {
          if (!this.points) return '';
          const index: number = this.x as number;
          const curValue = xData && xData.length > index ? xData[index] : '--';
          const nextValue = xData && xData.length > index + 1 ? xData[index + 1] : undefined;
          return `<span style="font-size:11px">Voting power: <b>${curValue}-${nextValue ?? ''}</b></span>
                <br/><span style="color:${this.points[0].color}">\u25CF</span>
                Number of wallets:
                <b>
                  ${formatNumber(this.points[0].y, {
                    fractionDigits: 4,
                    delimiter: '',
                  })}
                </b>`;
        },
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        min: 0.5,
        gridLineWidth: 0,
        title: {
          text: 'Voting Power',
          margin: 20,
          style: {
            fontStyle: 'italic',
          },
        },
        labels: {
          formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
            return xData && xData.length > this.value ? compactNumber(xData[this.value as number]) : this.value;
          },
          y: 25,
        },
      },

      yAxis: {
        ...defaultConfig.yAxis,
        gridLineWidth: 2,
        title: {
          text: 'Number of wallets',
        },
        min: 0,
        endOnTick: false,
        showFirstLabel: false,
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          maxPointWidth: 50,
          pointPlacement: 0.25,
        },
      },
      series: [
        {
          name: 'Voting Power',
          data: series,
          type: 'column',
        },
      ],
    });
  }, [defaultConfig, series, xData]);
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h5" whiteSpace="nowrap" gutterBottom>
        Voting Power Histogram
      </Typography>

      <Paper sx={{ px: { md: 3, xs: 1 }, py: 2, flexGrow: 1 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Paper>
    </Box>
  );
}
